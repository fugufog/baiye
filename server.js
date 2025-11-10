require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
const port = 3001;

// 中间件配置
app.use(cors()); // 解决跨域
app.use(express.json({ limit: '5mb' })); // 支持 Base64 图片（扩大请求限制）

// MySQL 连接池配置（替换为你的 MySQL 信息）
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || '39.107.247.51',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '12300722Xy.', // 你的 MySQL 密码
  database: process.env.MYSQL_DB || 'chan', // 你的数据库名
  connectionLimit: 10
});

// 测试 MySQL 连接
async function testMysqlConnection() {
  try {
    const conn = await pool.getConnection();
    console.log('✅ MySQL 连接成功');
    conn.release();
  } catch (err) {
    console.error('❌ MySQL 连接失败：', err.message);
    process.exit(1);
  }
}
testMysqlConnection();

// -------------------------- 侠士名录接口（对应 Roster 组件）--------------------------
// 1. 查询侠士列表（支持门派筛选、关键词搜索）
app.get('/api/heroes', async (req, res) => {
  try {
    const { faction, search } = req.query;
    let sql = `SELECT id AS _id, real_name AS realName, game_name AS gameName, faction, game_id AS id, avatar_url AS avatar FROM hero_info WHERE 1=1`;
    const params = [];

    // 门派筛选
    if (faction && faction !== 'all') {
      sql += ` AND faction = ?`;
      params.push(faction);
    }

    // 关键词搜索（群名片/游戏名/江湖ID）
    if (search) {
      sql += ` AND (real_name LIKE ? OR game_name LIKE ? OR game_id LIKE ?)`;
      const searchKey = `%${search}%`;
      params.push(searchKey, searchKey, searchKey);
    }

    sql += ` ORDER BY create_time DESC`;
    const [rows] = await pool.execute(sql, params);
    res.json(rows);
  } catch (err) {
    console.error('查询侠士失败：', err);
    res.status(500).json({ error: '查询侠士失败' });
  }
});

// 2. 新增侠士
app.post('/api/heroes', async (req, res) => {
  try {
    const { realName, gameName, faction, id: gameId, avatar } = req.body;
    const sql = `
      INSERT INTO hero_info (real_name, game_name, faction, game_id, avatar_url)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [realName, gameName, faction, gameId, avatar || '']);
    // 返回新增记录（与前端期望的字段一致）
    res.json({
      _id: result.insertId,
      realName,
      gameName,
      faction,
      id: gameId,
      avatar: avatar || ''
    });
  } catch (err) {
    console.error('新增侠士失败：', err);
    res.status(500).json({ error: '新增侠士失败' });
  }
});

// -------------------------- 相册接口（对应 Album 组件）--------------------------
// 1. 查询相册图片（支持分类筛选）
app.get('/api/photos', async (req, res) => {
  try {
    const { category } = req.query;
    let sql = `SELECT id AS _id, title, category, img_url AS url FROM album_photo WHERE 1=1`;
    const params = [];

    // 分类筛选
    if (category && category !== 'all') {
      sql += ` AND category = ?`;
      params.push(category);
    }

    sql += ` ORDER BY create_time DESC`;
    const [rows] = await pool.execute(sql, params);
    res.json(rows);
  } catch (err) {
    console.error('查询相册失败：', err);
    res.status(500).json({ error: '查询相册失败' });
  }
});

// 2. 上传相册图片
app.post('/api/photos', async (req, res) => {
  try {
    const { title, category, url } = req.body;
    const sql = `
      INSERT INTO album_photo (title, category, img_url)
      VALUES (?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [title, category, url]);
    // 返回新增记录（与前端期望的字段一致）
    res.json({
      _id: result.insertId,
      title,
      category,
      url
    });
  } catch (err) {
    console.error('上传图片失败：', err);
    res.status(500).json({ error: '上传图片失败' });
  }
});

// 3. 删除相册图片
app.delete('/api/photos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `DELETE FROM album_photo WHERE id = ?`;
    await pool.execute(sql, [id]);
    res.json({ success: true });
  } catch (err) {
    console.error('删除图片失败：', err);
    res.status(500).json({ error: '删除图片失败' });
  }
});

// 启动服务
app.listen(port, () => {
  console.log(`🚀 后端服务启动：http://39.107.247.51:${port}`);
});
