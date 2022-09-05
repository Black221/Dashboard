import React from 'react';
import { 
  	GridComponent,
   	ColumnsDirective, 
	Page, 
	Inject, 
	ColumnDirective,
	Search,
	Sort,
	Toolbar
} from '@syncfusion/ej2-react-grids';
import {Header} from '../components'
import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 md:mt-0 p-5 md:p-10 bg-white rounded-3xl'>
      	<Header category="Page"   title="Employees" />
		<GridComponent
			dataSource={employeesData}
			allowPaging
			allowSorting
			toolbar={['Search']}
			width="auto"
		>
			<ColumnsDirective>
			{employeesGrid.map((item, index) => (
				<ColumnDirective key={index} {...item} />
			))}
			</ColumnsDirective>
			<Inject services={[Page, Search, Sort, Toolbar]} />
		</GridComponent>
    </div>
  )
}

export default Employees;
