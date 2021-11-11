import { AbstractProductA } from '../interfaces/abstract-product-a';

export class ProductA1 implements AbstractProductA {
  methodA = () => {
    return 'This is methodA of ProductA1';
  };
}
