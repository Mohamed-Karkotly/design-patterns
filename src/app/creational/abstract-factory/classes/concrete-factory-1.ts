import { AbstractFactory } from '../interfaces/abstract-factory';
import { AbstractProductA } from '../interfaces/abstract-product-a';
import { AbstractProductB } from '../interfaces/abstract-product-b';
import { ProductA1 } from './product-a1';
import { ProductB1 } from './product-b1';

export class ConcreteFactory1 implements AbstractFactory {
  createProductA(param?: any): AbstractProductA {
    return new ProductA1();
  }

  createProductB(param?: any): AbstractProductB {
    return new ProductB1();
  }
}
