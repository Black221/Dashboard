import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({color, currentColor, data, id, type, height, width}) => {
  return (
    <SparklineComponent id={id}
                        height={height} 
						width={width} 
						lineWidth={2} 
						valueType="Numeric" 
						fill={color}
						border={{color: currentColor, width: 2}}
						dataSource={data}
						xName="x"
						yName='yval'
						type={type}
						tooltipSettings={{
							visible: true,
							format: '${x} : data ${yval}',
							trackLineSettings: {
								visible: true
							}
						}}>
		<Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine;
