import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { CellModule } from './cell/cell.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CellModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
