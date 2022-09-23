import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { ProductsEntity } from './products.models';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState extends EntityState<ProductsEntity> {
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: string | null; // last known error (if any)
  products: ProductsEntity[];
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter: EntityAdapter<ProductsEntity> =
  createEntityAdapter<ProductsEntity>();

export const initialProductsState: ProductsState =
  productsAdapter.getInitialState({
    // set initial required properties
    products: [],
    loaded: true,
  });

export const prodReducer = createReducer(
  initialProductsState,
  on(ProductsActions.initProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => {
    return { ...state, products: [...products], loaded: true };
  }),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
