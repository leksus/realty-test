import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {ApartmentListComponent} from './components/apartment-list/apartment-list.component';
import {ApartmentComponent} from './components/apartment/apartment.component';

import {ApartmentsService} from './service/apartments.service';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ApartmentListComponent,
        ApartmentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [ApartmentsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
