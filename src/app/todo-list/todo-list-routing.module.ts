import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoneComponent } from './done/done.component';
import { UndoneComponent } from './undone/undone.component';

const routes: Routes = [
    { path: '', component: UndoneComponent, data: { noReuse: true } },
    { path: 'done', component: DoneComponent, },
];

export const components = [
    DoneComponent,
    UndoneComponent
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoListRoutingModule { }
