import { AbstractProductA } from '../interfaces/abstract-product-a';

export class ProductA2 implements AbstractProductA {
  methodA = () => {
    return 'This is methodA of ProductA2';
  };
}
