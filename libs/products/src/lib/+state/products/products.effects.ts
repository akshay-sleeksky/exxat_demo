import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  catchError,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from './products.service';
import {
  initProducts,
  loadProductsFailure,
  loadProductsSuccess,
} from './products.actions';
import { Store } from '@ngrx/store';
import { getHasLoad } from './products.selectors';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store
  ) {}

  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initProducts),
      withLatestFrom(this.store.select(getHasLoad)),
      filter(([action, loaded]) => !loaded),
      switchMap(() =>
        this.productService.getAll().pipe(
          map((products) => {
            // console.log(products);
            return loadProductsSuccess({ products: products.data });
          }),
          catchError((error) => of(loadProductsFailure(error)))
        )
      )
    )
  );
}
