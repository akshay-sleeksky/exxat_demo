import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProducts from './+state/products/products.reducer';
import { ProductEffects } from './+state/products/products.effects';
import { HttpClientModule } from '@angular/common/http';
import { ProductFacade } from './+state/products/products.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.prodReducer
    ),
    EffectsModule.forFeature([ProductEffects]),
  ],
  providers: [ProductFacade]
})
export class ProductsModule {}
