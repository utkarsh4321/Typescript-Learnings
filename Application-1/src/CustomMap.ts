import * as L from 'leaflet';

export interface Mappable{
    lat:number
    lng:number
    markerContent():string
}


export class CustomMap{
    private leafletMap:L.Map;
    constructor(divId:string){
            this.leafletMap = L.map(divId).setView([0,0],1);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.leafletMap)
    }
    addMarker(mappable: Mappable): void {
            const marker = L.marker([mappable.lat,mappable.lng]).addTo(this.leafletMap);
            marker.bindPopup(mappable.markerContent()).openPopup()
            this.leafletMap.flyTo([mappable.lat,mappable.lng],1)
    }
    
}