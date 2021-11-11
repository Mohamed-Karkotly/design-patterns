import { AbstractFactory } from '../interfaces/abstract-factory';
import { AbstractProductA } from '../interfaces/abstract-product-a';
import { AbstractProductB } from '../interfaces/abstract-product-b';
import { ProductA2 } from './product-a2';
import { ProductB2 } from './product-b2';

export class ConcreteFactory2 implements AbstractFactory {
  createProductA(param?: any): AbstractProductA {
    return new ProductA2();
  }

  createProductB(param?: any): AbstractProductB {
    return new ProductB2();
  }
}
