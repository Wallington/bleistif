/*
* Author: Sean O'Brien
* Create Date: 08/270/2018
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
    selector: 'app-graphite',
    templateUrl: 'graphite.component.html'
})

export class GraphiteComponent implements OnInit
{
    productList;
    
    constructor
    (
        private Router: Router,
        public HTTP: Http
    ){}


    ngOnInit()
    {
        this.HTTP.get('http://localhost:4201/db/get/graphite').subscribe((data) =>
        {
            data = JSON.parse(data['_body']);
            this.productList = data;
        })
    }

    SendToFullProduct(productIndex)
    {
        this.Router.navigate(['/product', productIndex]);
    }
}