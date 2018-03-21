import {Component, OnInit} from '@angular/core';
import {Apartment} from "../../entity/apartment";
import {ApartmentsService} from "../../service/apartments.service";
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-apartment',
    templateUrl: './apartment.component.html'
})
export class ApartmentComponent implements OnInit {

    private apartment$: Observable<Apartment>;

    constructor(
        private apartmentsService: ApartmentsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.apartment$ = this.route.paramMap.switchMap((params: ParamMap) => {
            return this.apartmentsService.getOne(+params.get('id'))
        });
    }

}
