/*
* Author: Sean O'Brien
* Create Date: 08/270/2018
* Modify Date: 08/27/2018
* Discription: this where load list of only graphite product from db
*/

import 
{ 
    Component,
    OnInit 
} from '@angular/core';

import { Http } from '@angular/http'

@Component
({
    selector: 'app-accessory',
    templateUrl: 'accessory.component.html'
})

export class AccessoryComponent implements OnInit
{
    productList;
    col = 1;
    constructor
    (
        public HTTP: Http
    ){}


    ngOnInit()
    {
        this.HTTP.get('http://localhost:4201/db/get/accessory').subscribe((data) =>
        {
            data = JSON.parse(data['_body']);
            this.productList = data;
        })
    }

    Test()
    {
        console.log('click');
    }
}