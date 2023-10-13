import {CSSProperties, useEffect, useRef} from 'react'
import { Gauge, GaugeConfig } from '@ant-design/plots';


const GaugeBox = () => {
    const ticks = [0, 1 / 3, 2 / 3, 1];
    const color = ['#F4664A', '#FAAD14', '#30BF78'];
    const graphRef = useRef<any>(null);
    useEffect(() => {
      if (graphRef.current) {
        let data = 0.7;
        const interval = setInterval(() => {
          if (data >= 1.5) {
            clearInterval(interval);
          }
  
          data += 0.005;
          graphRef.current && graphRef.current.changeData(data > 1 ? data - 1 : data);
        }, 100);
      }
    }, [graphRef]);
    const config = {
      percent: 0,
      range: {
        ticks: [0, 1],
        color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
      },
      indicator: {
        pointer: {
          style: {
            stroke: '#D0D0D0',
          },
        },
        pin: {
          style: {
            stroke: '#D0D0D0',
          },
        },
      },
      statistic: {
        title: {
          formatter: ({ percent }: any) => {
            if (percent < ticks[1]) {
              return 'Low';
            }
  
            if (percent < ticks[2]) {
              return 'medium';
            }
  
            return 'high';
          },
          style: ({ percent } : any) => {
            return {
              fontSize: '18px',
              lineHeight: 1,
              color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
            };
          },
        },
        content: {
          offsetY: 36,
          style: {
            fontSize: '24px',
            color: '#4B535E',
          },
          formatter: () => 'Performance',
        },
      },
      onReady: (plot: any) => {
        graphRef.current = plot;
      },
    };
  
    return <Gauge style={{height: 150}} {...config} />;
}

export default GaugeBox