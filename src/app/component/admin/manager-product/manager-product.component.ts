import { Component } from '@angular/core';
import { IProduct } from '../../interface/product';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})
export class ManagerProductComponent {
  status: boolean = false;
  productName ="";
  products : IProduct[] = []
  product! : IProduct;
  constructor (private productservice : ProductService){
    this.productservice.getproduct().subscribe(data =>{
      this.products = data
    })
  } 
  getValue(e: any) {
    this.productName = e.target.value;
  }
  changeStatus() {
    this.status = !this.status;
  }
  removeItem(id:any){
    const product = this.products.find(item => item.id ==id)
    const result = confirm(`bạn có muốn xóa sản phẩm ${product?.name} không?` )
    if (result) {
      this.productservice.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(item => item.id !== id)
      })
    }
  }
}
