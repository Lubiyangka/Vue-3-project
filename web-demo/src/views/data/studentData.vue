<script setup>
import * as echarts from 'echarts/core';
import {TooltipComponent, LegendComponent, GridComponent} from 'echarts/components';
import {PieChart, BarChart} from 'echarts/charts';
import {LabelLayout} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';
import {onMounted} from "vue";

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  PieChart,
  BarChart,
  CanvasRenderer,
  LabelLayout
]);

onMounted(() => {
  const chartDom = [
    document.getElementById('gender'),
    document.getElementById('postion'),
  ];
  let chart = [];
  for (let i = 0; i < chartDom.length; i++) {
    chart[i] = echarts.init(chartDom[i])
  }
  let option;

  const postion = [
    {
      name: '班主任',
      value: '20',
    },
    {
      name: '讲师',
      value: '10',
    },
    {
      name: '教研主管',
      value: '4',
    },
    {
      name: '学工主管',
      value: '32',
    },
  ]

  option = [
    {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '性别',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 50
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {value: 1048, name: '男性'},
            {value: 735, name: '女性'},
          ]
        }
      ]
    },
    {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: postion.map(i => i.name),
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '人数',
          type: 'bar',
          barWidth: '60%',
          data: postion.map(i => i.value)
        }
      ]
    },
  ];
  for (let i = 0; i < chartDom.length; i++) {
    option[i] && chart[i].setOption(option[i])
  }
})

</script>


<template>
  <div class="heading">
    员工信息统计
  </div>
  <div>
    <div class="dataShow">
      <div>
        员工性别统计
      </div>
      <div>
        员工性别统计
      </div>
      <div id="gender" style="width: 600px;height: 700px;"></div>
      <div id="postion" style="width: 600px;height: 700px;"></div>
    </div>

  </div>
</template>

<style scoped>
.heading {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
}

.dataShow {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 10% 90%;
}

</style>