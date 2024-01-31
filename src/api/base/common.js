import {http} from "@/api/conf/index.js";

// 获取业务字典
export const getViewsDict = (url, params = {}) => {
    return http.post(`/topCategory/modify/${url}`, params).then(res => res.data)
}
