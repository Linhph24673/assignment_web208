import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/pages/home-page/home-page.component';
import { ManagerProductComponent } from './component/admin/manager-product/manager-product.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { UpdateProductComponent } from './component/admin/update-product/update-product.component';

const routes: Routes = [
  
    {path :'' , component : HomePageComponent , pathMatch : 'full'}
   ,
  {
    path:'products' , component : ManagerProductComponent 
  },
  { path: 'add', component: AddProductComponent },
  {path: 'products/:id/update', component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
