import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters('dict', ['GET_VIEWS_DICLIST'])
    },
    async created() {
        this.$options?.dicts?.forEach(v => {
            if (!(this.GET_VIEWS_DICLIST[v]?.length)) {
                // 没有值就获取字典数据
                this.SET_VIEWS_DICLIST_ACTIONS(v);
            }
        });
    },
    methods: {
        ...mapActions('dict', ['SET_VIEWS_DICLIST_ACTIONS']),
        // 该方法根据字典值获取字典名称
        // val 字典值，例如： 1
        // list  该字典类型的所有字典项
        getLabelName(val, list) {
            const len = list?.length;
            for (let i = 0; i < len; i++) {
                if (list[i].code === String(val)) {
                    return list[i].name;
                }
            }
            return '';
        },
    }
};
