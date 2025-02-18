import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { CropAverage } from '../types/agriculture';
import { useMantineColorScheme } from '@mantine/core';

interface BarChartProps {
  data: CropAverage[];
}

export function BarChart({ data }: BarChartProps) {

    // Created a reference (chartRef) for the div where the chart will be drawn.
    const chartRef = useRef<HTMLDivElement>(null); 

  const { colorScheme } = useMantineColorScheme();
  
//   Using useEffect to Draw the Chart
  useEffect(() => {

    // Checking if the div Exists
    if (!chartRef.current) return;

    // Now, ECharts takes control of the div and prepares it for drawing.
    const chart = echarts.init(chartRef.current);
    
    //CHart Configurations(Basically, How it looks )
    const option = {
      backgroundColor: 'transparent',
     
    //   Hover Effect   
        tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },

    //   adjusts spacing inside the chart
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },

      xAxis: {
        type: 'category',
        data: data.map(item => item.crop),
        axisLabel: {
          rotate: 45,
          color: colorScheme === 'dark' ? '#fff' : '#000'
        }
      },
      yAxis: {
        type: 'value',
        name: 'Average Production',
        nameLocation: 'middle',
        nameGap: 50,
        axisLabel: {
          color: colorScheme === 'dark' ? '#fff' : '#000',
          formatter: function (value: number) {
            if (value >= 1e9) {
              return (value / 1e9).toFixed(1) + 'B'; // Billion
            } else if (value >= 1e6) {
              return (value / 1e6).toFixed(1) + 'M'; // Million
            } else if (value >= 1e3) {
              return (value / 1e3).toFixed(1) + 'K'; // Thousand
            }
            return value.toString();
          }
        }
      },

    // Bars (The Actual Chart Data)
      series: [
        {
          data: data.map(item => ({
            value: item.averageProduction,
            itemStyle: {
              color: colorScheme === 'dark' ? '#51a8ff' : '#1c7ed6'
            }
          })),
          type: 'bar',
          barWidth: '60%',
          emphasis: {
            itemStyle: {
              color: colorScheme === 'dark' ? '#85c2ff' : '#3d94e3'
            }
          }
        }
      ]
    };

    chart.setOption(option);

    // If the window resizes, the chart will adjust itself.
    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener('resize', handleResize);

    // If the component disappears, we remove the chart and the resize event listener (to avoid memory leaks).
    return () => {
      chart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [data, colorScheme]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
}