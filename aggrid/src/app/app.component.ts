import { Component } from '@angular/core';
import { CubeComponent } from './cube/cube.component';
import { ButtonComponent } from './button/button.component';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aggrid';
  public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
            rowData: this.rowData,
            columnDefs: this.columnDefs,
             //DynamicComponent.createColumnDefs(),
            context: {
                componentParent: this
            },
            enableColResize: true
        };
    }

    // noinspection JSMethodCanBeStatic
    public methodFromParent(cell) {
        alert(`"Parent Component Method from ${cell}!`);
    }
  //https://www.ag-grid.com/angular-getting-started/
  columnDefs = [
    { headerName: 'Make', field: 'make', filter: true, sortable: true },
    { headerName: 'Model', field: 'model', filter: true, sortable: true },
    { headerName: 'Price', field: 'price', filter: true, sortable: true, cellRendererFramework: CubeComponent },
    { headerName: 'Action', field: 'value', cellRendererFramework: ButtonComponent }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 2 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

}
