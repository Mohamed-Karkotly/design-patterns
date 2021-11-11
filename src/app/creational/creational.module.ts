import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationalRoutingModule } from './creational-routing.module';
import { AbstractFactoryModule } from './abstract-factory/abstract-factory.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CreationalRoutingModule, AbstractFactoryModule],
})
export class CreationalModule {}
