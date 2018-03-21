import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';

import {Apartment} from '../../entity/apartment';
import {ApartmentsService} from '../../service/apartments.service';
import {ApartmentFilter} from '../../interface/apartment-filter';

@Component({
    selector: 'app-apartment-list',
    templateUrl: './apartment-list.component.html'
})
export class ApartmentListComponent implements OnInit {

    private apartments$: Observable<Apartment[]>;
    private dataFilter: ApartmentFilter;

    constructor(
        private apartmentsService: ApartmentsService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.initFilter();
    }

    ngOnInit() {
        // В момент инициализации компонента получаем данные из сервиса
        this.apartments$ = this.route.paramMap.switchMap((params: any) => {
            Object.assign(this.dataFilter, params.params);
            return this.apartmentsService.get(params.params);
        });
    }

    /**
     * Применение фильтра
     */
    private applyFilter(): void {
        const filter = this.getCleanFilter(this.dataFilter);
        // Делаем привязку фильтра к параметрам урла
        this.router.navigate(['/apartments', filter])
    }

    /**
     * Сброс фильтра
     */
    private resetFilter(): void {
        this.initFilter();
        this.router.navigate(['/apartments']);
    }

    /**
     * Инициализация фильтра
     */
    private initFilter(): void {
        this.dataFilter = {
            floorUp: null,
            floorTo: null,
            roomsCountUp: null,
            roomsCountTo: null,
            areaUp: null,
            areaTo: null
        };
    }

    /**
     * Возвращает объект фильтра с непустыми значениями полей
     * @param {ApartmentFilter} params
     * @returns {{}}
     */
    private getCleanFilter(params: ApartmentFilter): {} {
        let result = {};
        Object.keys(params).forEach(item => {
            if (params[item] !== null) {
                Object.assign(result, {[item]: params[item]});
            }
        });

        return result;
    }

}
