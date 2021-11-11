import { AbstractFactory } from '../interfaces/abstract-factory';
import { AbstractProductA } from '../interfaces/abstract-product-a';
import { AbstractProductB } from '../interfaces/abstract-product-b';

export class Tester {
  private abstractProductA: AbstractProductA;
  private abstractProductB: AbstractProductB;

  constructor(factory: AbstractFactory) {
    this.abstractProductA = factory.createProductA();
    this.abstractProductB = factory.createProductB();
  }

  public test(): void {
    console.log(this.abstractProductA.methodA());
    console.log(this.abstractProductB.methodB());
  }
}
