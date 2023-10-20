import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})

export class ProductGetComponent implements OnInit{
       products:Product[]=[];
       constructor(private bs: ProductService) { }

       ngOnInit() {
        this.bs
        .getBooks()
        .subscribe((data: Product[]) => {
          this.products = data;
        });

       }

       deleteBook(id :any) { this.bs.deleteBook(id).subscribe(res => {
        console.log('Deleted'); this.ngOnInit(); }); }
}
