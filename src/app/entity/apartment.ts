// Сущность "Квартира"
export class Apartment {
    id: number;
    photo: string; // Фото квартиры
    street: string; // Улица
    houseNumber: string; // Номер дома. Делаем string, т.к. номер дома может быть 10к1
    floor: number; // Этаж
    roomsCount: number; // Кол-во комнат
    area: number; // Площадь квартиры
}
