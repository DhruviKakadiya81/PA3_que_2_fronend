import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private route: ActivatedRoute,
    private router: Router,private bs: ProductService) 
  {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      desc: ['', Validators.required ]
    });
  }
  
  insertBook() {
    this.bs.addBook(this.angForm.value.name,parseInt(this.angForm.value.price),this.angForm.value.desc);
    this.router.navigate(['product']);
  }

}
