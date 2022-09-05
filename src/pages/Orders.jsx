import React from 'react';
import { 
  	GridComponent,
   	ColumnsDirective, 
	CoumnDirective, 
	Resize, 
	Sort, 
	ContextMenu, 
	Filter, 
	Page, 
	ExcelExport, 
	PdfExport, 
	Edit, 
	Inject, 
	ColumnDirective
} from '@syncfusion/ej2-react-grids';
import {Header} from '../components'
import { ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 md:mt-0 p-5 md:p-10 bg-white rounded-3xl'>
      	<Header category="Page"   title="Orders" />
		<GridComponent
			id='gridcomp'
			dataSource={ordersData}
			allowPaging
			allowExcelExport
			allowFiltering
			allowSorting
			allowResizing
			allowPdfExport
			
		>
			<ColumnsDirective>
			{ordersGrid.map((item, index) => (
				<ColumnDirective key={index} {...item} />
			))}
			</ColumnsDirective>
			<Inject services={[Resize, Sort, Filter, Page, ExcelExport, PdfExport, Edit, ContextMenu]} />
		</GridComponent>
    </div>
  )
}

export default Orders
