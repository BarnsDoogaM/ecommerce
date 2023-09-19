import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { EMPTY, Subject, catchError } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private productService: ProductService) { }

  product$ = this.productService.product$
  .pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
  }))

  ngOnInit(): void {
  }

}
