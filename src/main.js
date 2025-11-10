import 'babel-polyfill'
import App from './App'
import appcanui from 'appcanui-we'
import '@/common/main.less'
import '@/common/app.less'
import ACIndex from '@/pages/ACIndex'
import ACView from '@/pages/ACView'

import ACButton from '@/pages/ACButton'
import ACCheckbox from '@/pages/ACCheckbox'
import ACForm from '@/pages/ACForm'
import ACInput from '@/pages/ACInput'
import ACScrollView from '@/pages/ACScrollView'
import ACSwiper from '@/pages/ACSwiper'
import ACText from '@/pages/ACText'
import ACRadio from '@/pages/ACRadio'
import ACSlider from '@/pages/ACSlider'
import ACSwitch from '@/pages/ACSwitch'
import ACTextarea from '@/pages/ACTextarea'
import ACCanvas from '@/pages/ACCanvas'
import ACPicker from '@/pages/ACPicker'
import ACLabel from '@/pages/ACLabel'
import transferApplicaltion from '@/pages/transferApplicaltion'

import ACIcon from '@/pages/ACIcon'
import ACPropress from '@/pages/ACPropress'
import ACImage from '@/pages/ACImage'
import ACVideo from '@/pages/ACVideo'
import ACAudio from '@/pages/ACAudio'
import ACNavigator from '@/pages/ACNavigator'

import ACAPIindex from '@/pages/ACAPIindex'
import ACAPIsystemInfo from '@/pages/ACAPIsystemInfo'
import ACAPIcall from '@/pages/ACAPIcall'
import ACAPIstorage from '@/pages/ACAPIstorage'
import ACAPIrequset from '@/pages/ACAPIrequset'
import ACAPIimg from '@/pages/ACAPIimg'
import ACAPInetworkStatus from '@/pages/ACAPInetworkStatus'
import ACAPIscanCode from '@/pages/ACAPIscanCode'
import ACAPIclipboard from '@/pages/ACAPIclipboard'
import ACAPIscreenBrightness from '@/pages/ACAPIscreenBrightness'
import ACAPIuserCaptureScreen from '@/pages/ACAPIuserCaptureScreen'
import ACAPIvibrate from '@/pages/ACAPIvibrate'
import ACAPIaccelerometer from '@/pages/ACAPIaccelerometer'
import ACAPIcompass from '@/pages/ACAPIcompass'
import ACAPIgetLocation from '@/pages/ACAPIgetLocation'
import ACAPIchooseLocation from '@/pages/ACAPIchooseLocation'
import ACAPIopenLocation from '@/pages/ACAPIopenLocation'
import ACAPIfile from '@/pages/ACAPIfile'
import ACAPIsqlite from '@/pages/ACAPIsqlite'
import ACAPIrecord from '@/pages/ACAPIrecord'
import ACAPIvoice from '@/pages/ACAPIvoice'
import ACAPItoast from '@/pages/ACAPItoast'
import ACAPIloading from '@/pages/ACAPIloading'
import ACAPImodal from '@/pages/ACAPImodal'
import ACAPIactionSheet from '@/pages/ACAPIactionSheet'
import ACAPIvideo from '@/pages/ACAPIvideo'
import ACAPIwebSocket from '@/pages/ACAPIwebSocket'
import ACAPInavigationBar from '@/pages/ACAPInavigationBar'
import ACAPIaliRequestPayment from '@/pages/ACAPIaliRequestPayment'
import ACAPIuploadFile from '@/pages/ACAPIuploadFile'
import ACAPItabBar from '@/pages/ACAPItabBar'
import ACAPIdownloadFile from '@/pages/ACAPIdownloadFile'
import ACAPIpageScrollTo from '@/pages/ACAPIpageScrollTo'
import applicaltionAuthorization from '@/pages/applicaltionAuthorization'
import ACAPIpullDownRefresh from '@/pages/ACAPIpullDownRefresh'
import ACAPIbackground from '@/pages/ACAPIbackground'
import ACAPIwxPayment from '@/pages/ACAPIwxPayment'
import ACAPIevent from '@/pages/ACAPIevent'


import Es6Promise from 'es6-promise'
Es6Promise.polyfill()


let op = {
  el: '#app',
  render: v => v(App),
  created() {},
  routes: [

    {
      path: '/',
      name: 'ACapi-index',
      component: ACAPIindex
    },
    // {
    //   path: '/',
    //   name: 'ACIndex',
    //   component: ACIndex
    // },
    {
      path: '/pages/ACAPIpageScrollTo',
      name: 'pageScrollTo',
      component: ACAPIpageScrollTo
    },
    {
      path: '/pages/ACAPIbackground',
      name: 'ACAPIbackground',
      component: ACAPIbackground
    },
    {
      path: '/pages/ACAPIpullDownRefresh',
      name: 'pullDownRefresh',
      component: ACAPIpullDownRefresh
    },
    {
      path: '/pages/applicaltionAuthorization',
      name: 'applicaltionAuthorization',
      component: applicaltionAuthorization
    },
    {
      path: '/pages/transferApplicaltion',
      name: 'transferApplicaltion',
      component: transferApplicaltion
    },
    {
      path: '/pages/ACAPIdownloadFile',
      name: 'downloadFile',
      component: ACAPIdownloadFile
    },
    {
      path: '/pages/ACAPItabBar',
      name: 'tabBar',
      component: ACAPItabBar
    },
    {
      path: '/pages/ACAPIuploadFile',
      name: 'uploadFile',
      component: ACAPIuploadFile
    },
    {
      path: '/pages/ACAPIaliRequestPayment',
      name: 'aliRequestPayment',
      component: ACAPIaliRequestPayment
    },
    {
      path: '/pages/ACAPIwxPayment',
      name: 'wxPayment',
      component: ACAPIwxPayment
    },
    {
      path: '/pages/ACAPIwebSocket',
      name: 'webSocket',
      component: ACAPIwebSocket
    },
    {
      path: '/pages/ACAPInavigationBar',
      name: 'navigationBar',
      component: ACAPInavigationBar
    },
    {
      path: '/pages/ACAPIvideo',
      name: 'apiVideo',
      component: ACAPIvideo
    },
    {
      path: '/pages/ACAPIactionSheet',
      name: 'actionSheet',
      component: ACAPIactionSheet
    },
    {
      path: '/pages/ACAPImodal',
      name: 'modal',
      component: ACAPImodal
    },
    {
      path: '/pages/ACAPIloading',
      name: 'loading',
      component: ACAPIloading
    },
    {
      path: '/pages/ACAPItoast',
      name: 'toast',
      component: ACAPItoast
    },
    {
      path: '/pages/ACAPIvoice',
      name: 'voice',
      component: ACAPIvoice
    },
    {
      path: '/pages/ACAPIrecord',
      name: 'record',
      component: ACAPIrecord
    },
    {
      path: '/pages/ACAPIsqlite',
      name: 'sqlite',
      component: ACAPIsqlite
    },
    {
      path: '/pages/ACAPIfile',
      name: 'file',
      component: ACAPIfile
    },
    {
      path: '/pages/ACAPIopenLocation',
      name: 'openLocation',
      component: ACAPIopenLocation

    },
    {
      path: '/pages/ACAPIchooseLocation',
      name: 'chooseLocation',
      component: ACAPIchooseLocation
    },
    {
      path: '/pages/ACAPIgetLocation',
      name: 'getLocation',
      component: ACAPIgetLocation
    },
    {
      path: '/pages/ACAPIcompass',
      name: 'compass',
      component: ACAPIcompass
    },
    {
      path: '/pages/ACAPIaccelerometer',
      name: 'accelerometer',
      component: ACAPIaccelerometer
    },
    {
      path: '/pages/ACAPIvibrate',
      name: 'vibrate',
      component: ACAPIvibrate
    },
    {
      path: '/pages/ACAPIuserCaptureScreen',
      name: 'userCaptureScreen',
      component: ACAPIuserCaptureScreen
    },
    {
      path: '/pages/ACAPIscreenBrightness',
      name: 'screenBrightness',
      component: ACAPIscreenBrightness
    },
    {
      path: '/pages/ACAPIclipboard',
      name: 'clipboard',
      component: ACAPIclipboard
    },
    {
      path: '/pages/ACAPIscanCode',
      name: 'scanCode',
      component: ACAPIscanCode
    },
    {
      path: '/pages/ACAPIimg',
      name: 'ACAPIimg',
      component: ACAPIimg
    },
    {
      path: '/pages/ACImage',
      name: 'image',
      component: ACImage
    },
    {
      path: '/pages/ACAPInetworkStatus',
      name: 'networkStatus',
      component: ACAPInetworkStatus
    },
    {
      path: '/pages/ACAPIrequset',
      name: 'ACAPIrequset',
      component: ACAPIrequset
    },
    {
      path: '/pages/ACAPIstorage',
      name: 'ACAPIstorage',
      component: ACAPIstorage
    },
    {
      path: '/pages/ACAPIcall',
      name: 'ACAPIcall',
      component: ACAPIcall
    },
    {
      path: '/pages/ACVideo',
      name: 'video',
      component: ACVideo
    },
    {
      path: '/pages/ACAudio',
      name: 'audio',
      component: ACAudio
    },
    {
      path: '/pages/ACPropress',
      name: 'propress',
      component: ACPropress
    },
    {
      path: '/pages/ACIcon',
      name: 'icon',
      component: ACIcon
    },
    // {
    //   path: '/pages/ACAPIindex',
    //   name: 'ACapi-index',
    //   component: ACAPIindex
    // },
    {
      path: '/pages/ACAPIsystemInfo',
      name: 'ACAPIsystemInfo',
      component: ACAPIsystemInfo
    },
    {
      path: '/pages/ACView',
      name: 'view',
      component: ACView
    },
    {
      path: '/pages/ACSwiper',
      name: 'swiper',
      component: ACSwiper
    },
    {
      path: '/pages/ACButton',
      name: 'button',
      component: ACButton
    },
    {
      path: '/pages/ACCheckbox',
      name: 'checkbox',
      component: ACCheckbox
    },
    {
      path: '/pages/ACForm',
      name: 'form',
      component: ACForm
    },
    {
      path: '/pages/ACInput',
      name: 'input',
      component: ACInput
    },
    {
      path: '/pages/ACScrollView',
      name: 'scrollview',
      component: ACScrollView
    },
    {
      path: '/pages/ACText',
      name: 'text',
      component: ACText
    },
    {
      path: '/pages/ACSwitch',
      name: 'switch',
      component: ACSwitch
    },
    {
      path: '/pages/ACRadio',
      name: 'radio',
      component: ACRadio
    },
    {
      path: '/pages/ACSlider',
      name: 'slider',
      component: ACSlider
    },
    {
      path: '/pages/ACTextarea',
      name: 'textarea',
      component: ACTextarea
    },
    {
      path: '/pages/ACCanvas',
      name: 'canvas',
      component: ACCanvas
    },
    {
      path: '/pages/ACPicker',
      name: 'picker',
      component: ACPicker
    },
    {
      path: '/pages/ACLabel',
      name: 'label',
      component: ACLabel
    },
    {
      path: '/pages/ACNavigator',
      name: 'navigator',
      component: ACNavigator
    },
    {
      path: '/pages/ACAPIevent',
      name: 'ACAPIevent',
      component: ACAPIevent
    }
  ],
  config: {
    window: {
      navigationBarTitleText: '官方组件展示',
      navigationBarBackgroundColor: '#FAFAFA',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#7A7E83',
      selectedColor: '#0074E8',
      borderStyle: 'black',
      backgroundColor: '#ffffff',
      list: [{
          pagePath: '/',
          iconPath: 'home',
          selectedIconPath: 'home',
          text: '组件'
        },
        {
          pagePath: '/pages/ACAPIindex',
          iconPath: 'ucenter-outline',
          selectedIconPath: 'ucenter-outline',
          text: '接口'
        }
      ]
    }
  }

}

appcanui.start(op)
