import { ProductsEntity } from './+state/products/products.models';

export interface AppState {
  product: ProductsEntity;
  hasLoaded: boolean;
}
