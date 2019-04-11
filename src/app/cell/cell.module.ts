import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeComponent } from './cube/cube.component';
import { ButtonComponent } from './button/button.component';
@NgModule({
  declarations: [CubeComponent,
    ButtonComponent],
    entryComponents:[ButtonComponent,CubeComponent],
  imports: [
    CommonModule
  ]
})
export class CellModule { }
