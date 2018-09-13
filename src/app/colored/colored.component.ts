/*
* Author: Sean O'Brien
* Create Date: 08/27/2018
* Modify Date: 09/11/2018
* Discription: this where load list of only graphite product from db
*/

import 
{ 
    Component,
    OnInit 
} from '@angular/core';

import { Http } from '@angular/http'
import { Router } from '@angular/router';

@Component
({
    selector: 'app-colored',
    templateUrl: 'colored.component.html'
})

export class ColoredComponent implements OnInit
{
    productList;
    
    constructor
    (
        private Router: Router,
        public HTTP: Http
    ){}


    ngOnInit()
    {
        this.HTTP.get('http://localhost:4201/db/get/colored').subscribe((data) =>
        {
            data = JSON.parse(data['_body']);
            this.productList = data;
        });
    }
    SendToFullProduct(productIndex)
    {
        this.Router.navigate(['/product', productIndex]);
    }
}