<template>
    <ac-layout>
        <ac-button type="primary" @tap="openDatabase">openDatabase</ac-button>
        <ac-button type="primary" @tap="executeSql">executeSql</ac-button>
        <ac-button type="primary" @tap="executetTansaction">executetTansaction</ac-button>
        <ac-button type="primary" @tap="selectSql">selectSql</ac-button>
        <ac-button type="primary" @tap="closeDatabase">closeDatabase</ac-button>
    </ac-layout>

</template>
<script>

    export default {
        config: {
            navigationBarTitleText: '数据库'
        },
        data() {
            return {}
        },
        methods: {
            openDatabase() {
                appcan.openDatabase({
                    name: 'test',
                    path: 'test.db',
                    success(res) {
                      alert(JSON.stringify(res))
                    },
                    fail(error) {
                      alert(error)
                    }
                })
            },
            executeSql() {
                appcan.executeSql({
                    name: 'test',
                    sql: 'CREATE TABLE person (_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, age SMALLINT)',
                    success(res) {
                      alert(JSON.stringify(res))
                    },
                    error(error) {
                      alert(error)
                    }
                })
                // 插入数据
                appcan.executeSql({
                    name: 'test',
                    sql: 'INSERT INTO person VALUES (NULL, "john", 30)',
                    success(res) {
                      alert(JSON.stringify(res))
                    },
                    error(error) {
                      alert(error)
                    }
                })
                appcan.executeSql({
                    name: 'test',
                    sql: 'INSERT INTO person VALUES (NULL, "Tim", 35)',
                    success(res) {
                      alert(JSON.stringify(res))
                    },
                    error(error) {
                      alert(error)
                    }
                })
            },
            executetTansaction() {
                // 开始事务
                appcan.executetTansaction({
                    name: 'test',
                    success(res) {
                      alert(JSON.stringify(res))
                    },
                    operation: 'begin',
                    error(error) {
                      alert(error)
                    }
                })
                // 提交事务
                appcan.executetTansaction({
                    name: 'test',
                    operation: 'commit',
                    success(res) {
                      alert(JSON.stringify(res))
                    },
                    error(error) {
                      alert(error)
                    }
                })
            },
            selectSql() {
                appcan.selectSql({
                    name: 'test',
                    sql: 'SELECT * FROM person WHERE age >= 33',
                    success(res) {
                      alert(JSON.stringify(res))
                    },
                    error(error) {
                      alert(error)
                    }
                })
            },
            closeDatabase() {
                appcan.closeDatabase({
                    name: 'test',
                    success(res) {
                      alert(JSON.stringify(res))
                    },
                    error(error) {
                      alert(error)
                    }
                })
            },
        },
        mounted() {
        }
    }
</script>
