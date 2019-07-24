import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AddProductComponent} from "./components/add-product/add-product.component";
import {CatlogComponent} from "./components/catlog/catlog.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'catlog',
    pathMatch: 'full'
  },
  {
    path: 'catlog',
    component: CatlogComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  }
];

@NgModule({
  declarations: [CatlogComponent, AddProductComponent],
  imports: [
    CommonModule, HttpClientModule,
    RouterModule.forChild(routes), AmexioWidgetModule
  ],
  exports: [CatlogComponent, AddProductComponent]
})
export class ProductlibModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProductlibModule,
      providers: []
    };
  }
}
