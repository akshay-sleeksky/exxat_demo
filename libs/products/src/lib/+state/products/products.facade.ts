import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as ProductActions from "./products.actions"
import { ProductsEntity } from "./products.models";
import * as ProductReducer from "./products.reducer"
import * as ProductSelectors from "./products.selectors"


@Injectable()
export class ProductFacade{

    constructor(private readonly store: Store) {}


    productLoaded$ : Observable<boolean> =  this.store.select(ProductSelectors.getProductsLoaded);
    allProducts$ : Observable<ProductsEntity[]> =  this.store.select(ProductSelectors.getAllProducts);

    initProducts() {
        this.store.dispatch(ProductActions.initProducts());
    }

    loadProductsSuccess({products } : { products : ProductsEntity[] }) {
        this.store.dispatch(ProductActions.loadProductsSuccess({ products }))
    }

    addProducts({products } : { products : ProductsEntity[] }) {
        this.store.dispatch(ProductActions.addProducts({ products }))
    }
} 