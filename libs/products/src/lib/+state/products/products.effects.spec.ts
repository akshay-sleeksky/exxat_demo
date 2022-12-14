import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import * as ProductsActions from './products.actions';
import { ProductEffects } from './products.effects';

describe('ProductsEffects', () => {
  let actions: Observable<Action>;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ProductEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ProductEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ProductsActions.initProducts() });

      const expected = hot('-a-|', {
        a: ProductsActions.loadProductsSuccess({ products: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
