import {Injectable} from '@angular/core';
import {Apartment} from '../entity/apartment';
import {Observable} from 'rxjs';
import {ApartmentFilter} from "../interface/apartment-filter";

@Injectable()
export class ApartmentsService {

    private apartments: Array<Apartment>;

    constructor() {
        this.apartments = this.getMock();
    }

    /**
     * Возвращает данные на основе фильтра
     * @param {ApartmentFilter} filter
     * @returns {Observable<Apartment[]>}
     */
    public get(filter?: ApartmentFilter): Observable<Apartment[]> {
        this.apartments = this.getMock();
        if (filter) {
            this.searchData(filter);
        }
        return Observable.of(this.apartments);
    }

    /**
     * Возвращает данные одной сущности
     * @param {number} id
     * @returns {Observable<Apartment[]>}
     */
    public getOne(id: number): Observable<Apartment> {
        const apartment = this.getMock().find(apartment => +apartment.id === +id);

        return Observable.of(apartment);
    }

    /**
     * Возвращает общее количество элементов
     * @returns {Observable<number>}
     */
    public getAllCount(): Observable<number> {
        return Observable.of(this.apartments.length);
    }

    /**
     * Поиск данных по фильтру
     * @param {ApartmentFilter} filter
     */
    private searchData(filter: ApartmentFilter) {
        let fieldValue = null;
        this.apartments = this.apartments.filter(apartmentEntity => {
            // Проходим по полям фильтра, если хотя бы по одному полю объект не соответствует фильтру,
            // то пропускаем этот объект
            return Object.keys(filter).every(filterField => {
                if (!!filter[filterField]) {
                    // Получаем значение поля, по которому нужно отфильтровать
                    fieldValue = this.getFieldValue(filterField, apartmentEntity);
                    // Проверяем значение по операндам
                    return this.checkFilter(filterField, filter[filterField], fieldValue);
                }
                // Если значение фильтра не задано, то объект соответствует
                return true;
            });
        });
    }

    /**
     * Получение значения из объекта на основе поля фильтра
     * @param needFieldName
     * @param obj
     * @returns {any}
     */
    private getFieldValue(needFieldName, obj) {
        const fields = Object.keys(obj);

        for (let name of fields) {
            if (~needFieldName.indexOf(name)) {
                return obj[name];
            }
        }
    }

    /**
     * Проверка, соответствует ли фильтра значение
     * @param condition - условие
     * @param sample - значение фильтра
     * @param value - значение данных
     * @returns {boolean}
     */
    private checkFilter(condition, sample, value): boolean {
        if (~condition.indexOf('Up')) {
            return +value >= +sample;
        } else if (~condition.indexOf('To')) {
            return +value <= +sample;
        }
        return false;
    }

    /**
     * Получение данных
     * @returns {[]}
     */
    private getMock(): Apartment[] {
        return [
            {
                'id': 1,
                'photo': 'http://dummyimage.com/350x350.jpg/ff4444/ffffff',
                'street': 'Vahlen',
                'houseNumber': '70',
                'floor': 24,
                'roomsCount': 5,
                'area': 243
            }, {
                'id': 2,
                'photo': 'http://dummyimage.com/350x350.jpg/dddddd/000000',
                'street': 'Pennsylvania',
                'houseNumber': '7759',
                'floor': 3,
                'roomsCount': 6,
                'area': 235
            }, {
                'id': 3,
                'photo': 'http://dummyimage.com/350x350.jpg/5fa2dd/ffffff',
                'street': 'Drewry',
                'houseNumber': '17',
                'floor': 18,
                'roomsCount': 1,
                'area': 85
            }, {
                'id': 4,
                'photo': 'http://dummyimage.com/350x350.jpg/5fa2dd/ffffff',
                'street': 'Arapahoe',
                'houseNumber': '5424',
                'floor': 16,
                'roomsCount': 3,
                'area': 180
            }, {
                'id': 5,
                'photo': 'http://dummyimage.com/350x350.jpg/cc0000/ffffff',
                'street': 'Jenna',
                'houseNumber': '8518',
                'floor': 14,
                'roomsCount': 6,
                'area': 153
            }, {
                'id': 6,
                'photo': 'http://dummyimage.com/350x350.jpg/5fa2dd/ffffff',
                'street': 'Thackeray',
                'houseNumber': '3',
                'floor': 19,
                'roomsCount': 1,
                'area': 176
            }, {
                'id': 7,
                'photo': 'http://dummyimage.com/350x350.jpg/ff4444/ffffff',
                'street': 'Esker',
                'houseNumber': '15',
                'floor': 21,
                'roomsCount': 1,
                'area': 162
            }, {
                'id': 8,
                'photo': 'http://dummyimage.com/350x350.jpg/dddddd/000000',
                'street': 'Granby',
                'houseNumber': '98',
                'floor': 4,
                'roomsCount': 2,
                'area': 96
            }, {
                'id': 9,
                'photo': 'http://dummyimage.com/350x350.jpg/cc0000/ffffff',
                'street': 'Gina',
                'houseNumber': '70874',
                'floor': 23,
                'roomsCount': 1,
                'area': 74
            }, {
                'id': 10,
                'photo': 'http://dummyimage.com/350x350.jpg/ff4444/ffffff',
                'street': 'Pawling',
                'houseNumber': '2',
                'floor': 20,
                'roomsCount': 4,
                'area': 228
            }, {
                'id': 11,
                'photo': 'http://dummyimage.com/350x350.jpg/cc0000/ffffff',
                'street': 'Montana',
                'houseNumber': '85',
                'floor': 5,
                'roomsCount': 3,
                'area': 205
            }, {
                'id': 12,
                'photo': 'http://dummyimage.com/350x350.jpg/5fa2dd/ffffff',
                'street': 'Stang',
                'houseNumber': '45508',
                'floor': 1,
                'roomsCount': 3,
                'area': 190
            }, {
                'id': 13,
                'photo': 'http://dummyimage.com/350x350.jpg/ff4444/ffffff',
                'street': 'Browning',
                'houseNumber': '57484',
                'floor': 23,
                'roomsCount': 2,
                'area': 81
            }, {
                'id': 14,
                'photo': 'http://dummyimage.com/350x350.jpg/dddddd/000000',
                'street': 'Mallard',
                'houseNumber': '08864',
                'floor': 16,
                'roomsCount': 6,
                'area': 81
            }, {
                'id': 15,
                'photo': 'http://dummyimage.com/350x350.jpg/5fa2dd/ffffff',
                'street': 'Michigan',
                'houseNumber': '8374',
                'floor': 3,
                'roomsCount': 7,
                'area': 120
            }
        ];
    }
}
