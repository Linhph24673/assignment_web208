import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ManagerProductComponent } from './component/admin/manager-product/manager-product.component';
import { HomePageComponent } from './component/pages/home-page/home-page.component';
import { AdminLayoutComponent } from './component/layout/admin-layout/admin-layout.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { UpdateProductComponent } from './component/admin/update-product/update-product.component';
import { ProductItemComponent } from './component/admin/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ManagerProductComponent,
         HomePageComponent,
         AdminLayoutComponent,
         AddProductComponent,
         UpdateProductComponent,
         ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
