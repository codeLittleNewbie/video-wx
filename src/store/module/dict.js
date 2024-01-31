// 接口引入
import { getViewsDict } from '@/api/base/common';
const getDefaultState = () => {
    return {
        dicList: {} // 业务字典
    };
};
const dict= {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        GET_VIEWS_DICLIST: (state) => state.dicList
    },
    actions: {
        SET_VIEWS_DICLIST_ACTIONS({ commit }, codes) {
            return new Promise((resolve, reject) => {
                getViewsDict(codes).then((res) => {
                    commit('SET_VIEWS_DICLIST', {[codes]: [{name: '哈哈', code: 1}, {name: 'kad', code: 2}]});
                    resolve({[codes]: [{name: '哈哈', code: 1}, {name: 'kad', code: 2}]});
                }).catch(() => {
                    reject();
                });
            });
        }
    },
    mutations: {
        SET_VIEWS_DICLIST: (state, data) => {
            state.dicList = Object.assign({}, state.dicList, data);
        }
    }
};
export default dict;
