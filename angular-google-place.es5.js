import { Directive, ElementRef, EventEmitter, HostListener, Injectable, Input, NgModule, NgZone, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
var AngularGooglePlaceConstantService = (function () {
    function AngularGooglePlaceConstantService() {
    }
    /**
     * @return {?}
     */
    AngularGooglePlaceConstantService.prototype.types_options = function () {
        return [
            '(cities)',
            '(regions)',
            'country',
            'postal_code',
            'locality',
            'sublocality',
            'address',
            'geocode',
            'administrative_area_level_1',
            'administrative_area_level_2',
        ];
    };
    /**
     * @return {?}
     */
    AngularGooglePlaceConstantService.prototype.countryIsoCode = function () {
        return [
            {
                Name: 'Afghanistan',
                Code: 'AF'
            },
            {
                Name: 'Åland Islands',
                Code: 'AX'
            },
            {
                Name: 'Albania',
                Code: 'AL'
            },
            {
                Name: 'Algeria',
                Code: 'DZ'
            },
            {
                Name: 'American Samoa',
                Code: 'AS'
            },
            {
                Name: 'Andorra',
                Code: 'AD'
            },
            {
                Name: 'Angola',
                Code: 'AO'
            },
            {
                Name: 'Anguilla',
                Code: 'AI'
            },
            {
                Name: 'Antarctica',
                Code: 'AQ'
            },
            {
                Name: 'Antigua and Barbuda',
                Code: 'AG'
            },
            {
                Name: 'Argentina',
                Code: 'AR'
            },
            {
                Name: 'Armenia',
                Code: 'AM'
            },
            {
                Name: 'Aruba',
                Code: 'AW'
            },
            {
                Name: 'Australia',
                Code: 'AU'
            },
            {
                Name: 'Austria',
                Code: 'AT'
            },
            {
                Name: 'Azerbaijan',
                Code: 'AZ'
            },
            {
                Name: 'Bahamas',
                Code: 'BS'
            },
            {
                Name: 'Bahrain',
                Code: 'BH'
            },
            {
                Name: 'Bangladesh',
                Code: 'BD'
            },
            {
                Name: 'Barbados',
                Code: 'BB'
            },
            {
                Name: 'Belarus',
                Code: 'BY'
            },
            {
                Name: 'Belgium',
                Code: 'BE'
            },
            {
                Name: 'Belize',
                Code: 'BZ'
            },
            {
                Name: 'Benin',
                Code: 'BJ'
            },
            {
                Name: 'Bermuda',
                Code: 'BM'
            },
            {
                Name: 'Bhutan',
                Code: 'BT'
            },
            {
                Name: 'Bolivia, Plurinational State of',
                Code: 'BO'
            },
            {
                Name: 'Bonaire, Sint Eustatius and Saba',
                Code: 'BQ'
            },
            {
                Name: 'Bosnia and Herzegovina',
                Code: 'BA'
            },
            {
                Name: 'Botswana',
                Code: 'BW'
            },
            {
                Name: 'Bouvet Island',
                Code: 'BV'
            },
            {
                Name: 'Brazil',
                Code: 'BR'
            },
            {
                Name: 'British Indian Ocean Territory',
                Code: 'IO'
            },
            {
                Name: 'Brunei Darussalam',
                Code: 'BN'
            },
            {
                Name: 'Bulgaria',
                Code: 'BG'
            },
            {
                Name: 'Burkina Faso',
                Code: 'BF'
            },
            {
                Name: 'Burundi',
                Code: 'BI'
            },
            {
                Name: 'Cambodia',
                Code: 'KH'
            },
            {
                Name: 'Cameroon',
                Code: 'CM'
            },
            {
                Name: 'Canada',
                Code: 'CA'
            },
            {
                Name: 'Cape Verde',
                Code: 'CV'
            },
            {
                Name: 'Cayman Islands',
                Code: 'KY'
            },
            {
                Name: 'Central African Republic',
                Code: 'CF'
            },
            {
                Name: 'Chad',
                Code: 'TD'
            },
            {
                Name: 'Chile',
                Code: 'CL'
            },
            {
                Name: 'China',
                Code: 'CN'
            },
            {
                Name: 'Christmas Island',
                Code: 'CX'
            },
            {
                Name: 'Cocos (Keeling) Islands',
                Code: 'CC'
            },
            {
                Name: 'Colombia',
                Code: 'CO'
            },
            {
                Name: 'Comoros',
                Code: 'KM'
            },
            {
                Name: 'Congo',
                Code: 'CG'
            },
            {
                Name: 'Congo, the Democratic Republic of the',
                Code: 'CD'
            },
            {
                Name: 'Cook Islands',
                Code: 'CK'
            },
            {
                Name: 'Costa Rica',
                Code: 'CR'
            },
            {
                Name: 'Côte d\'Ivoire',
                Code: 'CI'
            },
            {
                Name: 'Croatia',
                Code: 'HR'
            },
            {
                Name: 'Cuba',
                Code: 'CU'
            },
            {
                Name: 'Curaçao',
                Code: 'CW'
            },
            {
                Name: 'Cyprus',
                Code: 'CY'
            },
            {
                Name: 'Czech Republic',
                Code: 'CZ'
            },
            {
                Name: 'Denmark',
                Code: 'DK'
            },
            {
                Name: 'Djibouti',
                Code: 'DJ'
            },
            {
                Name: 'Dominica',
                Code: 'DM'
            },
            {
                Name: 'Dominican Republic',
                Code: 'DO'
            },
            {
                Name: 'Ecuador',
                Code: 'EC'
            },
            {
                Name: 'Egypt',
                Code: 'EG'
            },
            {
                Name: 'El Salvador',
                Code: 'SV'
            },
            {
                Name: 'Equatorial Guinea',
                Code: 'GQ'
            },
            {
                Name: 'Eritrea',
                Code: 'ER'
            },
            {
                Name: 'Estonia',
                Code: 'EE'
            },
            {
                Name: 'Ethiopia',
                Code: 'ET'
            },
            {
                Name: 'Falkland Islands (Malvinas)',
                Code: 'FK'
            },
            {
                Name: 'Faroe Islands',
                Code: 'FO'
            },
            {
                Name: 'Fiji',
                Code: 'FJ'
            },
            {
                Name: 'Finland',
                Code: 'FI'
            },
            {
                Name: 'France',
                Code: 'FR'
            },
            {
                Name: 'French Guiana',
                Code: 'GF'
            },
            {
                Name: 'French Polynesia',
                Code: 'PF'
            },
            {
                Name: 'French Southern Territories',
                Code: 'TF'
            },
            {
                Name: 'Gabon',
                Code: 'GA'
            },
            {
                Name: 'Gambia',
                Code: 'GM'
            },
            {
                Name: 'Georgia',
                Code: 'GE'
            },
            {
                Name: 'Germany',
                Code: 'DE'
            },
            {
                Name: 'Ghana',
                Code: 'GH'
            },
            {
                Name: 'Gibraltar',
                Code: 'GI'
            },
            {
                Name: 'Greece',
                Code: 'GR'
            },
            {
                Name: 'Greenland',
                Code: 'GL'
            },
            {
                Name: 'Grenada',
                Code: 'GD'
            },
            {
                Name: 'Guadeloupe',
                Code: 'GP'
            },
            {
                Name: 'Guam',
                Code: 'GU'
            },
            {
                Name: 'Guatemala',
                Code: 'GT'
            },
            {
                Name: 'Guernsey',
                Code: 'GG'
            },
            {
                Name: 'Guinea',
                Code: 'GN'
            },
            {
                Name: 'Guinea-Bissau',
                Code: 'GW'
            },
            {
                Name: 'Guyana',
                Code: 'GY'
            },
            {
                Name: 'Haiti',
                Code: 'HT'
            },
            {
                Name: 'Heard Island and McDonald Islands',
                Code: 'HM'
            },
            {
                Name: 'Holy See (Vatican City State)',
                Code: 'VA'
            },
            {
                Name: 'Honduras',
                Code: 'HN'
            },
            {
                Name: 'Hong Kong',
                Code: 'HK'
            },
            {
                Name: 'Hungary',
                Code: 'HU'
            },
            {
                Name: 'Iceland',
                Code: 'IS'
            },
            {
                Name: 'India',
                Code: 'IN'
            },
            {
                Name: 'Indonesia',
                Code: 'ID'
            },
            {
                Name: 'Iran, Islamic Republic of',
                Code: 'IR'
            },
            {
                Name: 'Iraq',
                Code: 'IQ'
            },
            {
                Name: 'Ireland',
                Code: 'IE'
            },
            {
                Name: 'Isle of Man',
                Code: 'IM'
            },
            {
                Name: 'Israel',
                Code: 'IL'
            },
            {
                Name: 'Italy',
                Code: 'IT'
            },
            {
                Name: 'Jamaica',
                Code: 'JM'
            },
            {
                Name: 'Japan',
                Code: 'JP'
            },
            {
                Name: 'Jersey',
                Code: 'JE'
            },
            {
                Name: 'Jordan',
                Code: 'JO'
            },
            {
                Name: 'Kazakhstan',
                Code: 'KZ'
            },
            {
                Name: 'Kenya',
                Code: 'KE'
            },
            {
                Name: 'Kiribati',
                Code: 'KI'
            },
            {
                Name: 'Korea, Democratic People\'s Republic of',
                Code: 'KP'
            },
            {
                Name: 'Korea, Republic of',
                Code: 'KR'
            },
            {
                Name: 'Kuwait',
                Code: 'KW'
            },
            {
                Name: 'Kyrgyzstan',
                Code: 'KG'
            },
            {
                Name: 'Lao People\'s Democratic Republic',
                Code: 'LA'
            },
            {
                Name: 'Latvia',
                Code: 'LV'
            },
            {
                Name: 'Lebanon',
                Code: 'LB'
            },
            {
                Name: 'Lesotho',
                Code: 'LS'
            },
            {
                Name: 'Liberia',
                Code: 'LR'
            },
            {
                Name: 'Libya',
                Code: 'LY'
            },
            {
                Name: 'Liechtenstein',
                Code: 'LI'
            },
            {
                Name: 'Lithuania',
                Code: 'LT'
            },
            {
                Name: 'Luxembourg',
                Code: 'LU'
            },
            {
                Name: 'Macao',
                Code: 'MO'
            },
            {
                Name: 'Macedonia, the Former Yugoslav Republic of',
                Code: 'MK'
            },
            {
                Name: 'Madagascar',
                Code: 'MG'
            },
            {
                Name: 'Malawi',
                Code: 'MW'
            },
            {
                Name: 'Malaysia',
                Code: 'MY'
            },
            {
                Name: 'Maldives',
                Code: 'MV'
            },
            {
                Name: 'Mali',
                Code: 'ML'
            },
            {
                Name: 'Malta',
                Code: 'MT'
            },
            {
                Name: 'Marshall Islands',
                Code: 'MH'
            },
            {
                Name: 'Martinique',
                Code: 'MQ'
            },
            {
                Name: 'Mauritania',
                Code: 'MR'
            },
            {
                Name: 'Mauritius',
                Code: 'MU'
            },
            {
                Name: 'Mayotte',
                Code: 'YT'
            },
            {
                Name: 'Mexico',
                Code: 'MX'
            },
            {
                Name: 'Micronesia, Federated States of',
                Code: 'FM'
            },
            {
                Name: 'Moldova, Republic of',
                Code: 'MD'
            },
            {
                Name: 'Monaco',
                Code: 'MC'
            },
            {
                Name: 'Mongolia',
                Code: 'MN'
            },
            {
                Name: 'Montenegro',
                Code: 'ME'
            },
            {
                Name: 'Montserrat',
                Code: 'MS'
            },
            {
                Name: 'Morocco',
                Code: 'MA'
            },
            {
                Name: 'Mozambique',
                Code: 'MZ'
            },
            {
                Name: 'Myanmar',
                Code: 'MM'
            },
            {
                Name: 'Namibia',
                Code: 'NA'
            },
            {
                Name: 'Nauru',
                Code: 'NR'
            },
            {
                Name: 'Nepal',
                Code: 'NP'
            },
            {
                Name: 'Netherlands',
                Code: 'NL'
            },
            {
                Name: 'New Caledonia',
                Code: 'NC'
            },
            {
                Name: 'New Zealand',
                Code: 'NZ'
            },
            {
                Name: 'Nicaragua',
                Code: 'NI'
            },
            {
                Name: 'Niger',
                Code: 'NE'
            },
            {
                Name: 'Nigeria',
                Code: 'NG'
            },
            {
                Name: 'Niue',
                Code: 'NU'
            },
            {
                Name: 'Norfolk Island',
                Code: 'NF'
            },
            {
                Name: 'Northern Mariana Islands',
                Code: 'MP'
            },
            {
                Name: 'Norway',
                Code: 'NO'
            },
            {
                Name: 'Oman',
                Code: 'OM'
            },
            {
                Name: 'Pakistan',
                Code: 'PK'
            },
            {
                Name: 'Palau',
                Code: 'PW'
            },
            {
                Name: 'Palestine, State of',
                Code: 'PS'
            },
            {
                Name: 'Panama',
                Code: 'PA'
            },
            {
                Name: 'Papua New Guinea',
                Code: 'PG'
            },
            {
                Name: 'Paraguay',
                Code: 'PY'
            },
            {
                Name: 'Peru',
                Code: 'PE'
            },
            {
                Name: 'Philippines',
                Code: 'PH'
            },
            {
                Name: 'Pitcairn',
                Code: 'PN'
            },
            {
                Name: 'Poland',
                Code: 'PL'
            },
            {
                Name: 'Portugal',
                Code: 'PT'
            },
            {
                Name: 'Puerto Rico',
                Code: 'PR'
            },
            {
                Name: 'Qatar',
                Code: 'QA'
            },
            {
                Name: 'Réunion',
                Code: 'RE'
            },
            {
                Name: 'Romania',
                Code: 'RO'
            },
            {
                Name: 'Russian Federation',
                Code: 'RU'
            },
            {
                Name: 'Rwanda',
                Code: 'RW'
            },
            {
                Name: 'Saint Barthélemy',
                Code: 'BL'
            },
            {
                Name: 'Saint Helena, Ascension and Tristan da Cunha',
                Code: 'SH'
            },
            {
                Name: 'Saint Kitts and Nevis',
                Code: 'KN'
            },
            {
                Name: 'Saint Lucia',
                Code: 'LC'
            },
            {
                Name: 'Saint Martin (French part)',
                Code: 'MF'
            },
            {
                Name: 'Saint Pierre and Miquelon',
                Code: 'PM'
            },
            {
                Name: 'Saint Vincent and the Grenadines',
                Code: 'VC'
            },
            {
                Name: 'Samoa',
                Code: 'WS'
            },
            {
                Name: 'San Marino',
                Code: 'SM'
            },
            {
                Name: 'Sao Tome and Principe',
                Code: 'ST'
            },
            {
                Name: 'Saudi Arabia',
                Code: 'SA'
            },
            {
                Name: 'Senegal',
                Code: 'SN'
            },
            {
                Name: 'Serbia',
                Code: 'RS'
            },
            {
                Name: 'Seychelles',
                Code: 'SC'
            },
            {
                Name: 'Sierra Leone',
                Code: 'SL'
            },
            {
                Name: 'Singapore',
                Code: 'SG'
            },
            {
                Name: 'Sint Maarten (Dutch part)',
                Code: 'SX'
            },
            {
                Name: 'Slovakia',
                Code: 'SK'
            },
            {
                Name: 'Slovenia',
                Code: 'SI'
            },
            {
                Name: 'Solomon Islands',
                Code: 'SB'
            },
            {
                Name: 'Somalia',
                Code: 'SO'
            },
            {
                Name: 'South Africa',
                Code: 'ZA'
            },
            {
                Name: 'South Georgia and the South Sandwich Islands',
                Code: 'GS'
            },
            {
                Name: 'South Sudan',
                Code: 'SS'
            },
            {
                Name: 'Spain',
                Code: 'ES'
            },
            {
                Name: 'Sri Lanka',
                Code: 'LK'
            },
            {
                Name: 'Sudan',
                Code: 'SD'
            },
            {
                Name: 'Suriname',
                Code: 'SR'
            },
            {
                Name: 'Svalbard and Jan Mayen',
                Code: 'SJ'
            },
            {
                Name: 'Swaziland',
                Code: 'SZ'
            },
            {
                Name: 'Sweden',
                Code: 'SE'
            },
            {
                Name: 'Switzerland',
                Code: 'CH'
            },
            {
                Name: 'Syrian Arab Republic',
                Code: 'SY'
            },
            {
                Name: 'Taiwan, Province of China',
                Code: 'TW'
            },
            {
                Name: 'Tajikistan',
                Code: 'TJ'
            },
            {
                Name: 'Tanzania, United Republic of',
                Code: 'TZ'
            },
            {
                Name: 'Thailand',
                Code: 'TH'
            },
            {
                Name: 'Timor-Leste',
                Code: 'TL'
            },
            {
                Name: 'Togo',
                Code: 'TG'
            },
            {
                Name: 'Tokelau',
                Code: 'TK'
            },
            {
                Name: 'Tonga',
                Code: 'TO'
            },
            {
                Name: 'Trinidad and Tobago',
                Code: 'TT'
            },
            {
                Name: 'Tunisia',
                Code: 'TN'
            },
            {
                Name: 'Turkey',
                Code: 'TR'
            },
            {
                Name: 'Turkmenistan',
                Code: 'TM'
            },
            {
                Name: 'Turks and Caicos Islands',
                Code: 'TC'
            },
            {
                Name: 'Tuvalu',
                Code: 'TV'
            },
            {
                Name: 'Uganda',
                Code: 'UG'
            },
            {
                Name: 'Ukraine',
                Code: 'UA'
            },
            {
                Name: 'United Arab Emirates',
                Code: 'AE'
            },
            {
                Name: 'United Kingdom',
                Code: 'GB'
            },
            {
                Name: 'United States',
                Code: 'US'
            },
            {
                Name: 'United States Minor Outlying Islands',
                Code: 'UM'
            },
            {
                Name: 'Uruguay',
                Code: 'UY'
            },
            {
                Name: 'Uzbekistan',
                Code: 'UZ'
            },
            {
                Name: 'Vanuatu',
                Code: 'VU'
            },
            {
                Name: 'Venezuela, Bolivarian Republic of',
                Code: 'VE'
            },
            {
                Name: 'Viet Nam',
                Code: 'VN'
            },
            {
                Name: 'Virgin Islands, British',
                Code: 'VG'
            },
            {
                Name: 'Virgin Islands, U.S.',
                Code: 'VI'
            },
            {
                Name: 'Wallis and Futuna',
                Code: 'WF'
            },
            {
                Name: 'Western Sahara',
                Code: 'EH'
            },
            {
                Name: 'Yemen',
                Code: 'YE'
            },
            {
                Name: 'Zambia',
                Code: 'ZM'
            },
            {
                Name: 'Zimbabwe',
                Code: 'ZW'
            }
        ];
    };
    /**
     * @return {?}
     */
    AngularGooglePlaceConstantService.prototype.returnTypes = function () {
        return [
            'accounting',
            'airport',
            'amusement_park',
            'aquarium',
            'art_gallery',
            'atm',
            'bakery',
            'bank',
            'bar',
            'beauty_salon',
            'bicycle_store',
            'book_store',
            'bowling_alley',
            'bus_station',
            'cafe',
            'campground',
            'car_dealer',
            'car_rental',
            'car_repair',
            'car_wash',
            'casino',
            'cemetery',
            'church',
            'city_hall',
            'clothing_store',
            'convenience_store',
            'courthouse',
            'dentist',
            'department_store',
            'doctor',
            'electrician',
            'electronics_store',
            'embassy',
            'fire_station',
            'florist',
            'funeral_home',
            'furniture_store',
            'gas_station',
            'gym',
            'hair_care',
            'hardware_store',
            'hindu_temple',
            'home_goods_store',
            'hospital',
            'insurance_agency',
            'jewelry_store',
            'laundry',
            'lawyer',
            'library',
            'liquor_store',
            'local_government_office',
            'locksmith',
            'lodging',
            'meal_delivery',
            'meal_takeaway',
            'mosque',
            'movie_rental',
            'movie_theater',
            'moving_company',
            'museum',
            'night_club',
            'painter',
            'park',
            'parking',
            'pet_store',
            'pharmacy',
            'physiotherapist',
            'plumber',
            'police',
            'post_office',
            'real_estate_agency',
            'restaurant',
            'roofing_contractor',
            'rv_park',
            'school',
            'shoe_store',
            'shopping_mall',
            'spa',
            'stadium',
            'storage',
            'store',
            'subway_station',
            'synagogue',
            'taxi_stand',
            'train_station',
            'transit_station',
            'travel_agency',
            'university',
            'veterinary_care',
            'zoo',
        ];
    };
    return AngularGooglePlaceConstantService;
}());
AngularGooglePlaceConstantService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
AngularGooglePlaceConstantService.ctorParameters = function () { return []; };
var AngularGooglePlaceService = (function () {
    /**
     * @param {?} constant
     */
    function AngularGooglePlaceService(constant) {
        this.constant = constant;
    }
    /**
     * @param {?} address_components
     * @param {?} query
     * @param {?=} val
     * @return {?}
     */
    AngularGooglePlaceService.prototype.find = function (address_components, query, val) {
        if (val === void 0) { val = null; }
        for (var _i = 0, address_components_1 = address_components; _i < address_components_1.length; _i++) {
            var attr = address_components_1[_i];
            for (var _a = 0, _b = attr.types; _a < _b.length; _a++) {
                var type = _b[_a];
                if (type === query) {
                    return val ? ((attr))[val] : attr;
                }
            }
        }
        return null;
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.street_number = function (address_components) {
        return this.find(address_components, 'street_number', 'long_name');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.street = function (address_components) {
        return this.find(address_components, 'route', 'long_name');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.city = function (address_components) {
        return this.find(address_components, 'locality', 'long_name');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.state = function (address_components) {
        return this.find(address_components, 'administrative_area_level_1', 'long_name');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.postal_code = function (address_components) {
        return this.find(address_components, 'postal_code', 'long_name');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.country = function (address_components) {
        return this.find(address_components, 'country', 'long_name');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.administrative_area_level_2 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_2', 'long_name');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.intersection = function (address_components) {
        return this.find(address_components, 'intersection');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.political = function (address_components) {
        return this.find(address_components, 'political');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.administrative_area_level_3 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_3');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.administrative_area_level_4 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_4');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.administrative_area_level_5 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_5');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.colloquial_area = function (address_components) {
        return this.find(address_components, 'colloquial_area');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.ward = function (address_components) {
        return this.find(address_components, 'ward');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.sublocality = function (address_components) {
        return this.find(address_components, 'sublocality');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.sublocality_level_1 = function (address_components) {
        return this.find(address_components, 'sublocality_level_1');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.sublocality_level_2 = function (address_components) {
        return this.find(address_components, 'sublocality_level_2');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.sublocality_level_3 = function (address_components) {
        return this.find(address_components, 'sublocality_level_3');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.sublocality_level_4 = function (address_components) {
        return this.find(address_components, 'sublocality_level_4');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.sublocality_level_5 = function (address_components) {
        return this.find(address_components, 'sublocality_level_5');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.neighborhood = function (address_components) {
        return this.find(address_components, 'neighborhood');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.premise = function (address_components) {
        return this.find(address_components, 'premise');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.subpremise = function (address_components) {
        return this.find(address_components, 'subpremise');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.natural_feature = function (address_components) {
        return this.find(address_components, 'natural_feature');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.airport = function (address_components) {
        return this.find(address_components, 'airport');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.park = function (address_components) {
        return this.find(address_components, 'park');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.point_of_interest = function (address_components) {
        return this.find(address_components, 'point_of_interest');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.floor = function (address_components) {
        return this.find(address_components, 'floor');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.establishment = function (address_components) {
        return this.find(address_components, 'establishment');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.parking = function (address_components) {
        return this.find(address_components, 'parking');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.post_box = function (address_components) {
        return this.find(address_components, 'post_box');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.postal_town = function (address_components) {
        return this.find(address_components, 'postal_town');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.room = function (address_components) {
        return this.find(address_components, 'room');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.bus_station = function (address_components) {
        return this.find(address_components, 'bus_station');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.train_station = function (address_components) {
        return this.find(address_components, 'train_station');
    };
    /**
     * @param {?} address_components
     * @return {?}
     */
    AngularGooglePlaceService.prototype.transit_station = function (address_components) {
        return this.find(address_components, 'transit_station');
    };
    /**
     * @return {?}
     */
    AngularGooglePlaceService.prototype.countryIsoCode = function () {
        return this.constant.countryIsoCode();
    };
    /**
     * @return {?}
     */
    AngularGooglePlaceService.prototype.typesOptions = function () {
        return this.constant.types_options();
    };
    return AngularGooglePlaceService;
}());
AngularGooglePlaceService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
AngularGooglePlaceService.ctorParameters = function () { return [
    { type: AngularGooglePlaceConstantService, },
]; };
var AngularGooglePlaceDirective = (function () {
    /**
     * @param {?} el
     * @param {?} service
     * @param {?} ngZone
     */
    function AngularGooglePlaceDirective(el, service, ngZone) {
        this.el = el;
        this.service = service;
        this.ngZone = ngZone;
        this.changelogs = [];
        this.CountryCodes = new EventEmitter();
        this.TypesOptions = new EventEmitter();
        // unformatted address
        this.setAddress = new EventEmitter();
        // formatted address
        this.FormatAddress = new EventEmitter();
        this.street_number = new EventEmitter();
        this.postal_code = new EventEmitter();
        this.country = new EventEmitter();
        this.lat = new EventEmitter();
        this.lng = new EventEmitter();
        this.adr_address = new EventEmitter();
        this.formatted_address = new EventEmitter();
        this.name = new EventEmitter();
        this.place_id = new EventEmitter();
        this.types = new EventEmitter();
        this.url = new EventEmitter();
        this.utc_offset = new EventEmitter();
        this.vicinity = new EventEmitter();
        this.photos = new EventEmitter();
        this.street = new EventEmitter();
        this.city = new EventEmitter();
        this.state = new EventEmitter();
        this.district = new EventEmitter();
    }
    /**
     * @param {?} target
     * @return {?}
     */
    AngularGooglePlaceDirective.prototype.onFocus = function (target) {
        this.setAutocompleteAndInvokeEvent(this.options);
    };
    /**
     * @return {?}
     */
    AngularGooglePlaceDirective.prototype.ngOnInit = function () {
        this.CountryCodes.emit(this.service.countryIsoCode());
        this.TypesOptions.emit(this.service.typesOptions());
        if (typeof google === 'undefined') {
            console.error("google place api is not loaded at this time, angular-google-place won't work");
            return;
        }
        this.setAutocompleteAndInvokeEvent(this.options);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    AngularGooglePlaceDirective.prototype.setAutocompleteAndInvokeEvent = function (options) {
        var _this = this;
        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, options);
        this.trigger = this.autocomplete.addListener('place_changed', function () {
            _this.ngZone.run(function () {
                _this.place = _this.autocomplete.getPlace();
                if (_this.place && _this.place.place_id) {
                    _this.invokeEvent();
                }
            });
        });
    };
    /**
     * @return {?}
     */
    AngularGooglePlaceDirective.prototype.invokeEvent = function () {
        this.setAddress.emit(this.place);
        var /** @type {?} */ street_number = this.service.street_number(this.place.address_components);
        this.street_number.emit(street_number);
        var /** @type {?} */ street = this.service.street(this.place.address_components);
        this.street.emit(street);
        var /** @type {?} */ city = this.service.city(this.place.address_components);
        this.city.emit(city);
        var /** @type {?} */ state = this.service.state(this.place.address_components);
        this.state.emit(state);
        var /** @type {?} */ country = this.service.country(this.place.address_components);
        this.country.emit(country);
        var /** @type {?} */ postal_code = this.service.postal_code(this.place.address_components);
        this.postal_code.emit(postal_code);
        var /** @type {?} */ district = this.service.administrative_area_level_2(this.place.address_components);
        this.district.emit(district);
        var /** @type {?} */ lat = this.place.geometry.location.lat();
        this.lat.emit(lat);
        var /** @type {?} */ lng = this.place.geometry.location.lng();
        this.lng.emit(lng);
        var /** @type {?} */ adr_address = this.place.adr_address;
        this.adr_address.emit(adr_address);
        var /** @type {?} */ formatted_address = this.place.formatted_address;
        this.formatted_address.emit(formatted_address);
        var /** @type {?} */ name = this.place.name;
        this.name.emit(name);
        var /** @type {?} */ place_id = this.place.place_id;
        this.place_id.emit(place_id);
        var /** @type {?} */ types = this.place.types;
        this.types.emit(types);
        var /** @type {?} */ url = this.place.url;
        this.url.emit(url);
        var /** @type {?} */ utc_offset = this.place.utc_offset;
        this.utc_offset.emit(utc_offset);
        var /** @type {?} */ vicinity = this.place.vicinity;
        this.vicinity.emit(vicinity);
        var /** @type {?} */ photos = this.place.photos;
        this.photos.emit(photos);
        this.FormatAddress.emit({
            'street_number': street_number,
            'street': street,
            'city': city,
            'state': state,
            'country': country,
            'postal_code': postal_code,
            'district': district,
            'lat': lat,
            'lng': lng,
        });
        /*
         DEPRECATED SINCE 2014
         this.place.id
         reference
         */
        /*
         NOT USED YET
    
         this.intersection.emit(this.service.intersection(this.place.address_components) ? this.service.intersection(this.place.address_components) : null)
         this.political.emit(this.service.political(this.place.address_components) ? this.service.political(this.place.address_components) : null)
         this.colloquial_area.emit(this.service.colloquial_area(this.place.address_components) ? this.service.colloquial_area(this.place.address_components) : null)
    
         this.ward.emit(this.service.ward(this.place.address_components) ? this.service.ward(this.place.address_components) : null)
    
         this.administrative_area_level_3.emit(this.service.administrative_area_level_3(this.place.address_components) ? this.service.administrative_area_level_3(this.place.address_components) : null)
         this.administrative_area_level_4.emit(this.service.administrative_area_level_4(this.place.address_components) ? this.service.administrative_area_level_4(this.place.address_components) : null)
         this.administrative_area_level_5.emit(this.service.administrative_area_level_5(this.place.address_components) ? this.service.administrative_area_level_5(this.place.address_components) : null)
    
         this.sublocality.emit(this.service.sublocality(this.place.address_components) ? this.service.sublocality(this.place.address_components) : null)
         this.sublocality_level_1.emit(this.service.sublocality_level_1(this.place.address_components) ?
         this.service.sublocality_level_1(this.place.address_components) : null);
         this.sublocality_level_2.emit(this.service.sublocality_level_2(this.place.address_components) ?
         this.service.sublocality_level_2(this.place.address_components) : null);
         this.sublocality_level_3.emit(this.service.sublocality_level_3(this.place.address_components) ?
         this.service.sublocality_level_3(this.place.address_components) : null);
         this.sublocality_level_4.emit(this.service.sublocality_level_4(this.place.address_components) ?
         this.service.sublocality_level_4(this.place.address_components) : null);
         this.sublocality_level_5.emit(this.service.sublocality_level_5(this.place.address_components) ?
         this.service.sublocality_level_5(this.place.address_components) : null);
    
         this.neighborhood.emit(this.service.neighborhood(this.place.address_components) ? this.service.neighborhood(this.place.address_components) : null)
         this.premise.emit(this.service.premise(this.place.address_components) ? this.service.premise(this.place.address_components) : null)
         this.subpremise.emit(this.service.subpremise(this.place.address_components) ? this.service.subpremise(this.place.address_components) : null)
         this.natural_feature.emit(this.service.natural_feature(this.place.address_components) ? this.service.natural_feature(this.place.address_components) : null)
         this.airport.emit(this.service.airport(this.place.address_components) ? this.service.airport(this.place.address_components) : null)
         this.park.emit(this.service.park(this.place.address_components) ? this.service.park(this.place.address_components) : null)
         this.point_of_interest.emit(this.service.point_of_interest(this.place.address_components) ? this.service.point_of_interest(this.place.address_components) : null)
         this.floor.emit(this.service.floor(this.place.address_components) ? this.service.floor(this.place.address_components) : null)
         this.establishment.emit(this.service.establishment(this.place.address_components) ? this.service.establishment(this.place.address_components) : null)
         this.parking.emit(this.service.parking(this.place.address_components) ? this.service.parking(this.place.address_components) : null)
         this.post_box.emit(this.service.post_box(this.place.address_components) ? this.service.post_box(this.place.address_components) : null)
         this.postal_town.emit(this.service.postal_town(this.place.address_components) ? this.service.postal_town(this.place.address_components) : null)
         this.room.emit(this.service.room(this.place.address_components) ? this.service.room(this.place.address_components) : null)
         this.bus_station.emit(this.service.bus_station(this.place.address_components) ? this.service.bus_station(this.place.address_components) : null)
         this.train_station.emit(this.service.train_station(this.place.address_components) ? this.service.train_station(this.place.address_components) : null)
         this.transit_station.emit(this.service.transit_station(this.place.address_components) ? this.service.transit_station(this.place.address_components) : null)
         */
    };
    return AngularGooglePlaceDirective;
}());
AngularGooglePlaceDirective.decorators = [
    { type: Directive, args: [{
                selector: '[angularGooglePlace]'
            },] },
];
/**
 * @nocollapse
 */
AngularGooglePlaceDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: AngularGooglePlaceService, },
    { type: NgZone, },
]; };
AngularGooglePlaceDirective.propDecorators = {
    'options': [{ type: Input, args: ['options',] },],
    'CountryCodes': [{ type: Output },],
    'TypesOptions': [{ type: Output },],
    'setAddress': [{ type: Output },],
    'FormatAddress': [{ type: Output },],
    'street_number': [{ type: Output },],
    'postal_code': [{ type: Output },],
    'country': [{ type: Output },],
    'lat': [{ type: Output },],
    'lng': [{ type: Output },],
    'adr_address': [{ type: Output },],
    'formatted_address': [{ type: Output },],
    'name': [{ type: Output },],
    'place_id': [{ type: Output },],
    'types': [{ type: Output },],
    'url': [{ type: Output },],
    'utc_offset': [{ type: Output },],
    'vicinity': [{ type: Output },],
    'photos': [{ type: Output },],
    'street': [{ type: Output },],
    'city': [{ type: Output },],
    'state': [{ type: Output },],
    'district': [{ type: Output },],
    'onFocus': [{ type: HostListener, args: ['focus', ['$event.target'],] },],
};
var AngularGooglePlaceModule = (function () {
    function AngularGooglePlaceModule() {
    }
    return AngularGooglePlaceModule;
}());
AngularGooglePlaceModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [AngularGooglePlaceDirective],
                providers: [AngularGooglePlaceService, AngularGooglePlaceConstantService],
                exports: [AngularGooglePlaceDirective]
            },] },
];
/**
 * @nocollapse
 */
AngularGooglePlaceModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { AngularGooglePlaceModule, AngularGooglePlaceConstantService, AngularGooglePlaceService, AngularGooglePlaceDirective };
//# sourceMappingURL=angular-google-place.es5.js.map
