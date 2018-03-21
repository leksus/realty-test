import {Component, OnInit} from '@angular/core';
import {ApartmentsService} from "../../service/apartments.service";
import {Apartment} from "../../entity/apartment";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

    private apartmentsCount$: Observable<number>;

    constructor(private apartmentsService: ApartmentsService) { }

    ngOnInit() {
        this.apartmentsCount$ = this.apartmentsService.getAllCount();
    }

}
