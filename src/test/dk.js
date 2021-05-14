
const rankingTypeEnum = {
    GET: 1, // 收到
    SEND: 2, // 送出
}

new Vue({
    el: '#app',
    // template: `<van-button>按钮</van-button>`,
    data: {
        showDataLoad: true,
        ranking_type: rankingTypeEnum.GET,
        dataList: [],
        showRule: false,
        showNoData: false,
        showNoDataText: "还没有人给你送礼物，赶紧上麦吧！"
    },
    components: {
        day_ranking: {
            template: `<h2>test</h2>`
        }
    },
    async mounted() {
        await this.pageInit();
        await this.getDataList();
    },
    methods: {
        getRuleText() {
            let txt =
                `收到榜
		1、收到榜根据其他嘉宾（含红娘/月老）给自己送的礼物红心排名，取前20名
		2、15日内他人赠送自己的礼物达到99颗红心以上，且排名第一，即可成为自己的榜一。

		支出榜
		1、支出榜根据自己赠送给其他嘉宾（含红娘月老）礼物红心排名，取前20名
		2、15日内赠送他人礼物达到99颗红心以上，且在所有守护ta的人总排名第一，即可成为别人的榜一。`
            return txt;
        },
        onRule() {
            this.showRule = true;
        },
        async pageInit() {
            this.ranking_type = rankingTypeEnum.GET;
        },
        async updateRankingType(index) {
            this.ranking_type = index;
            if (index === rankingTypeEnum.GET) {
                this.showNoDataText = "还没有人给你送礼物，赶紧上麦吧！";
            } else if (index === rankingTypeEnum.SEND) {
                this.showNoDataText = "还没有遇到喜欢的人，快去寻找吧！";
            }
            await this.getDataList();
        },

        // 获取列表数据
        async getDataList() {
            this.showDataLoad = true;
            this.showNoData = false;
            const url = pageApp.getReqUrl('/ranking/my');
            const req = {
                headers: pageApp.getHeaders(),
                params: {
                    type: this.ranking_type
                }
            };

            const res = await axios.get(url, req)
            if (res.data.code === 0) {
                this.dataTitle = res.data.data.title;
                this.dataList = res.data.data.listData;
                if (this.dataList.length <= 0) {
                    this.showNoData = true;
                }
            } else {
                this.showNoData = true;
            }
            this.showDataLoad = false;
        }
    }
});
Vue.use(vant.Lazyload)