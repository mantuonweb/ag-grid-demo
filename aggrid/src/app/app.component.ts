import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aggrid';
  //https://www.ag-grid.com/angular-getting-started/
  columnDefs = [
      {headerName: 'Make', field: 'make',filter: true,sortable: true },
      {headerName: 'Model', field: 'model',filter: true,sortable: true },
      {headerName: 'Price', field: 'price',filter: true,sortable: true}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
}
