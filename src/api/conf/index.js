/**
 * 权限配置接口
 * 默认走表单形式 -> qs.stringify (对象转字符串)
 */

import axios from 'axios'
import store from '@/store'
import { showNotify, showLoadingToast } from 'vant';

// baseUrl
// export const baseURL = Object.is(process.env.NODE_ENV, 'production') ? `${window.location.origin}/api` : '/api'

// 创建自定义接口服务实例
export const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 20000, // 不可超过 manifest.json 中配置 networkTimeout的超时时间
    withCredentials: true
    /* headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }, */
})

http.interceptors.request.use(config => {
        config.headers.token = store.state.vuex_user.token;
        return config;
    }, err => {
        return Promise.reject(err)
    }
)
http.interceptors.response.use(data => { // 响应成功关闭loading
    let res = data.data
    if (data.status == 200) {
        if (res.code != 1) {
            Spin.hide()
            if (res.code == 0 || res.code == 500) {
                Message.error(res.msg ? res.msg : res.message)
            } else if (res.code == 7) {
                showNotify ({
                    content: `${res.msg ? res.msg : res.message},请到 ${res.data} 下载错误日志`,
                    showTimer: false,
                    type: 'error',
                    duration: 0
                })
            } else if (res.code == 403) {
                Message.error('登录过期')

                // 清楚本地存储,重置路由
                setTimeout(() => {
                    localStorage.clear()
                    window.location.href = `${location.origin}/login`
                }, 500)
            }
        }
    }
    return data
}, error => {
    Spin.hide()
    Message.destroy();
    if (String(error).indexOf('timeout') !== -1) {
        return Message.error('连接超时')
    }

    if (error && error.response) {
        switch ((error.response.status)) { // 跨域存在获取不到状态码的情况
            case 400:
                Message.error('错误请求(400)')
                break
            case 401:
                Message.error('未授权,请重新登录(401)')
                break
            case 403:
                Message.error('拒绝访问(403)')
                break
            case 404:
                Message.error('请求错误,未找到该资源(404)')
                break
            case 405:
                Message.error('错误请求(405)')
                break
            case 408:
                Message.error('请求超时(408)')
                break
            case 500:
                Message.error('服务器错误(500)')
                break
            case 501:
                Message.error('服务未实现(501)')
                break
            case 502:
                Message.error('网络错误(502)')
                break
            case 503:
                Message.error('服务不可用(503)')
                break
            case 504:
                Message.error('网络超时(504)')
                break
            case 505:
                Message.error('HTTP版本不受支持(505)')
                break
            default:
                Message.error('网络出现问题,请稍后再试')
                break
        }
    }

    return Promise.reject(error)
})
