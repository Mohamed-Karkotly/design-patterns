import { AbstractProductA } from "./abstract-product-a";
import { AbstractProductB } from "./abstract-product-b";

export interface AbstractFactory {
  createProductA(param?: any): AbstractProductA;
  createProductB(): AbstractProductB;
}
