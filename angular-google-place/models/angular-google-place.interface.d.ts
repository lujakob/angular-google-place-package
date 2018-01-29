export interface Address {
    address_components: Array<AddressComponent>;
    adr_address: string;
    formatted_address: string;
    geometry: Coordonate;
    html_attributions: Array<any>;
    icon: string;
    id: string;
    name: string;
    place_id: string;
    reference: string;
    publicscope: string;
    publictypes: Array<any>;
    publicurl: string;
    publicutc_offset: number;
    publicvicinity: string;
    publicphotos: Array<Photos>;
    url: string;
    types: Array<string>;
    utc_offset: any;
    vicinity: any;
    photos: any;
}
export interface Coordonate {
    location: Location;
    viewport: any;
}
export interface Location {
    lat: any;
    lng: any;
}
export interface Photos {
    height: string;
    width: string;
    html_attributions: Array<string>;
    getUrl: any;
}
export interface AutoCompleteOptions {
    bounds: any;
    componentRestrictions: ComponentRestrictions;
    types: Array<string>;
}
export interface ComponentRestrictions {
    country: string;
}
export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: Array<string>;
    [name: string]: any;
}
export interface CountryCode {
    Name: string;
    Code: string;
}
