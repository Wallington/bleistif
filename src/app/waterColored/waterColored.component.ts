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
    selector: 'app-watercolored',
    templateUrl: 'waterColored.component.html'
})

export class WaterColoredComponent implements OnInit
{
    productList;
    
    constructor
    (
        public HTTP: Http
    ){}


    ngOnInit()
    {
        this.HTTP.get('http://localhost:4201/db/get/water').subscribe((data) =>
        {
            data = JSON.parse(data['_body']);
            this.productList = data;
        })
    }
}