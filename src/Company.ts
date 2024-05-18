import { faker } from '@faker-js/faker'
import { Mappable } from './CustomMap'


export class Company implements Mappable {
    companyId: string;
    companyName: string;
    address: string;
    lat: number;
    lng: number;
    constructor() {
        this.companyId = faker.string.uuid();
        this.address = faker.location.streetAddress();
        this.lat = faker.location.latitude();
        this.lng = faker.location.longitude();
        this.companyName = faker.company.name()
    }
    markerContent(): string {
        return `
        <ul id="${this.companyId}">
        <li>Name: <b>${this.companyName}</b></li>
        <li>Address: ${this.address}</li>
        </ul>
        `
    }

}
