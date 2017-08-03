import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: ElementsComponent
  },
  {
    path: 'elements',
    component: ElementsComponent
  },
  {
    path: 'validation',
    component: ValidationComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class FormsRoutingModule {
}
