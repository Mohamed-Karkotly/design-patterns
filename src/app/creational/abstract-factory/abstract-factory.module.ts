import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractFactoryRoutingModule } from './abstract-factory-routing.module';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, AbstractFactoryRoutingModule],
})
export class AbstractFactoryModule {}
