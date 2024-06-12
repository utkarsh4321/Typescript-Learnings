import { faker } from '@faker-js/faker'
import { Mappable } from "./CustomMap";


export class User implements Mappable {
    userId: string;
    userName: string;
    age: number;
    lat: number;
    lng: number;
    constructor() {
        this.userId = faker.string.uuid()
        this.age = faker.number.int({
            max: 100,
            min: 1
        })
        this.lat = faker.location.latitude()
        this.lng = faker.location.longitude()
        this.userName = faker.internet.userName();
    }
    markerContent(): string {
        return `<ul id="${this.userId}">
        <li>Name: <b>${this.userName}</b></li>
        <li>Age: ${this.age}</li>
        </ul>`
    }
}
