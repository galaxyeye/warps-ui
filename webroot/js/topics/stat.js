// 基于准备好的dom，初始化echarts实例
var mainChart = echarts.init(document.getElementById('chart-trends'));

var statTrends = {
    title: {
        text: '曝光量趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value',
        splitArea : {show : true}
    },
    series: [{
        name: '统计',
        type: 'line',
        smooth: true,
        data: [],
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            }
        } // itemStyle
    }]
};

var statAlert = {
    title: {
        text: '预警',
        subtext: '舆情预警'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['按时间', '按等级']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '成交',
        type: 'line',
        smooth: true,
        data: [10, 12, 21, 54, 260, 830, 710]
    },
        {
            name: '预购',
            type: 'line',
            smooth: true,
            data: [30, 182, 434, 791, 390, 30, 10]
        },
        {
            name: '意向',
            type: 'line',
            smooth: true,
            data: [1320, 1132, 601, 234, 120, 90, 20]
        }]
};

var statMediaDistribution = {
    title: {
        text: '资源类型分布'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right: 'right',
        data: ['微博','博客','资讯','论坛','贴吧']
    },
    series: [{
        name: '资源类型分布',
        type:'pie',
        radius : '55%',
        center: ['50%', '50%'],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        data:[
            {value:0, name:'微博'},
            {value:0, name:'博客'},
            {value:0, name:'资讯'},
            {value:0, name:'论坛'},
            {value:0, name:'贴吧'}
        ]
    }
    ]
};

var statTrendsGroupByMedia = {
    title: {
        text: '资源类型分类统计'
    },
    legend: {
        orient: 'vertical',
        right: 'right',
        data: ['微博','博客','资讯','论坛','贴吧']
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value',
        splitArea : {show : true}
    },
    series: [{
        name: '资源类型分类统计',
        type: 'line',
        smooth: true,
        areaStyle: {normal: {}},
        data: []
    }]
};

var statSentiment = {
    title: {
        text: '正负面统计'
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [{
        name: '正负面统计',
        type:'pie',
        radius : '55%',
        center: ['50%', '50%'],
        data:[
            {value:0, name:'正面'},
            {value:0, name:'负面'},
            {value:0, name:'中性'}
        ]
    }]
};

var statHotWords = {
    title: {
        text: '正负面统计'
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [{
        name: '新浪微博',
        type:'pie',
        radius : '55%',
        center: ['50%', '50%'],
        data:[
            {value:335, name:'微博'},
            {value:310, name:'博客'},
            {value:274, name:'资讯'},
            {value:235, name:'论坛'},
            {value:400, name:'贴吧'}
        ].sort(function (a, b) { return a.value - b.value})
    }
    ]
};

var statHotEvents = {
    title: {
        text: '正负面统计'
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [{
        name: '新浪微博',
        type:'pie',
        radius : '55%',
        center: ['50%', '50%'],
        data:[
            {value:335, name:'微博'},
            {value:310, name:'博客'},
            {value:274, name:'资讯'},
            {value:235, name:'论坛'},
            {value:400, name:'贴吧'}
        ].sort(function (a, b) { return a.value - b.value})
    }
    ]
};

var statTagComparation = {
    title: {
        text: '标签统计'
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['领导动向', '突发事件', '侨情', '负面报道', '山西省突发事件', '天涯论坛突发事件', '国务院领导动向'],
            axisTick: {
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};

$(document).ready(function () {

    // "曝光量趋势"
    $("#FilterStatType").trigger("change");

});
