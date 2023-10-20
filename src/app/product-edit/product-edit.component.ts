import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
    product:any={};
    angForm: FormGroup;

    constructor(private route: ActivatedRoute,
      private router: Router,
      private bs: ProductService,
      private fb: FormBuilder){
        this.angForm = this.fb.group({
          name: ['', Validators.required ],
          price: ['', Validators.required ],
          desc: ['', Validators.required ]
        });
      }

      ngOnInit(): void {
        this.route.params.subscribe(params => {
          this.bs.editBook(params['id']).subscribe(res => {
            this.product = res;
        });
      });
      }

      updateBook() {
        this.bs.updateBook(this.product._id,this.angForm.value.name,parseInt( this.angForm.value.price), this.angForm.value.desc);
        this.router.navigate(['product']);
      }
    
}
