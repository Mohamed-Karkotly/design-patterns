import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'abstract-factory',
    loadChildren: () =>
      import('./abstract-factory/abstract-factory.module').then(
        (m) => m.AbstractFactoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationalRoutingModule {}
