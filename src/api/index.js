import axios from 'axios'
// import Qs from 'qs'
import router from '@/router/index'
import store from '@/store/index'
import { Message } from 'element-ui'

const toLogin = () => {
    router.push({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 50000
})

api.interceptors.request.use(
    config => {
        console.log('请求地址:', config.baseURL + config.url);
        config.headers['Country'] = 'INDONESIA'
        config.headers['Accept-Language'] = 'EN'
        if(localStorage.getItem('userInfo')){
          config.headers['Token'] = JSON.parse(localStorage.getItem('userInfo')).token
        }
        if(localStorage.getItem('webSeitInfo')){
          config.headers['Web-Site-ID']  = JSON.parse(localStorage.getItem('webSeitInfo')).webSiteId || ''
          console.log(JSON.parse(localStorage.getItem('webSeitInfo')).webSiteId,'webSiteId=======>>>>>>>')
        }
        return config
      },
      error => {
        console.log(error) // for debug
        return Promise.reject(error)
      }
)

api.interceptors.response.use(
    response => {
        const res = response.data
        if (String(res.code) === 'undefined') {
          return res
        }
        if (res.code !== '2000100' && res.code !== '2000105') {
            Message(res.message)
          return res
        }else if(res.code == '2000105'){
          // 表示token过期
          Message(res.message)
        //   router.push({ path: '/login' }); // todo 打开登录弹窗
          return res
        } else {
          return res
        }
      },
      
      error => {
        console.log('err' + error)
        Message('NetWork Error')
        return Promise.reject(error)
      }
)

export default api
