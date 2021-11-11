import { ConcreteFactory1 } from '../classes/concrete-factory-1';
import { ConcreteFactory2 } from '../classes/concrete-factory-2';
import { Tester } from '../classes/tester';
import { AbstractFactory } from '../interfaces/abstract-factory';

export function demonstrate() {
  // Abstract factory1
  var factory1: AbstractFactory = new ConcreteFactory1();
  var tester1: Tester = new Tester(factory1);
  tester1.test();

  // Abstract factory2
  var factory2: AbstractFactory = new ConcreteFactory2();
  var tester2: Tester = new Tester(factory2);
  tester2.test();
}
