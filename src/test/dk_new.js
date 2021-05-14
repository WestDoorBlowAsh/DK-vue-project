"use strict";

var rankingTypeEnum = {
    GET: 1, // 收到
    SEND: 2 // 送出
};

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
            template: "<h2>test</h2>"
        }
    },
    mounted: async function mounted() {
        await this.pageInit();
        await this.getDataList();
    },

    methods: {
        getRuleText: function getRuleText() {
            var txt = "\u6536\u5230\u699C\n\t\t1\u3001\u6536\u5230\u699C\u6839\u636E\u5176\u4ED6\u5609\u5BBE\uFF08\u542B\u7EA2\u5A18/\u6708\u8001\uFF09\u7ED9\u81EA\u5DF1\u9001\u7684\u793C\u7269\u7EA2\u5FC3\u6392\u540D\uFF0C\u53D6\u524D20\u540D\n\t\t2\u300115\u65E5\u5185\u4ED6\u4EBA\u8D60\u9001\u81EA\u5DF1\u7684\u793C\u7269\u8FBE\u523099\u9897\u7EA2\u5FC3\u4EE5\u4E0A\uFF0C\u4E14\u6392\u540D\u7B2C\u4E00\uFF0C\u5373\u53EF\u6210\u4E3A\u81EA\u5DF1\u7684\u699C\u4E00\u3002\n\n\t\t\u652F\u51FA\u699C\n\t\t1\u3001\u652F\u51FA\u699C\u6839\u636E\u81EA\u5DF1\u8D60\u9001\u7ED9\u5176\u4ED6\u5609\u5BBE\uFF08\u542B\u7EA2\u5A18\u6708\u8001\uFF09\u793C\u7269\u7EA2\u5FC3\u6392\u540D\uFF0C\u53D6\u524D20\u540D\n\t\t2\u300115\u65E5\u5185\u8D60\u9001\u4ED6\u4EBA\u793C\u7269\u8FBE\u523099\u9897\u7EA2\u5FC3\u4EE5\u4E0A\uFF0C\u4E14\u5728\u6240\u6709\u5B88\u62A4ta\u7684\u4EBA\u603B\u6392\u540D\u7B2C\u4E00\uFF0C\u5373\u53EF\u6210\u4E3A\u522B\u4EBA\u7684\u699C\u4E00\u3002";
            return txt;
        },
        onRule: function onRule() {
            this.showRule = true;
        },
        pageInit: async function pageInit() {
            this.ranking_type = rankingTypeEnum.GET;
        },
        updateRankingType: async function updateRankingType(index) {
            this.ranking_type = index;
            if (index === rankingTypeEnum.GET) {
                this.showNoDataText = "还没有人给你送礼物，赶紧上麦吧！";
            } else if (index === rankingTypeEnum.SEND) {
                this.showNoDataText = "还没有遇到喜欢的人，快去寻找吧！";
            }
            await this.getDataList();
        },


        // 获取列表数据
        getDataList: async function getDataList() {
            this.showDataLoad = true;
            this.showNoData = false;
            var url = pageApp.getReqUrl('/ranking/my');
            var req = {
                headers: pageApp.getHeaders(),
                params: {
                    type: this.ranking_type
                }
            };

            var res = await axios.get(url, req);
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
Vue.use(vant.Lazyload);
