import React from 'react';
import { 
	GridComponent,
	ColumnsDirective, 
	Page, 
	Inject, 
	ColumnDirective,
	Search,
	Sort,
	Toolbar,
	Filter,
	Selection
} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import {Header} from '../components'


const Customers = () => {
	return (
		<div className='m-2 md:m-10 md:mt-0 p-5 md:p-10 bg-white rounded-3xl'>
		<Header category="Page"   title="Customers" />
		<GridComponent
			dataSource={customersData}
			allowPaging
			allowSorting
			toolbar={['Search', 'Delete']}
			width="auto"
			editSettings={{
				allowDeleting: true,
				alowEditing: true
			}}
		>
			<ColumnsDirective>
			{customersGrid.map((item, index) => (
				<ColumnDirective key={index} {...item} />
			))}
			</ColumnsDirective>
			<Inject services={[Page, Search, Sort, Toolbar, Filter, Selection]} />
		</GridComponent>
  </div>
	)
}

export default Customers
