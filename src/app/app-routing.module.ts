import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApartmentListComponent} from './components/apartment-list/apartment-list.component';
import {ApartmentComponent} from './components/apartment/apartment.component';
import {MainComponent} from './components/main/main.component';


export const routes: Routes = [
    {path: '', component: MainComponent, pathMatch: 'full'},
    {path: 'apartments', component: ApartmentListComponent},
    {path: 'apartment/:id', component: ApartmentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
