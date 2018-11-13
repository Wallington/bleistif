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

import { Http } from '@angular/http';
import { Router } from "@angular/router";

@Component
({
    selector: 'app-accessory',
    templateUrl: 'accessory.component.html'
})

export class AccessoryComponent implements OnInit
{
    productList;
    colSize = this.SetColSize();
    constructor
    (
        public HTTP: Http,
        private Router: Router
    ){}
    
    SetColSize()
    {
        let localSize = window.innerWidth;
        if(localSize < 449.25)
            return 1;
        else if(localSize < 767.25)
            return 2;
        else if(localSize < 1079.25)
            return 3;
        else
            return 4;
            
    }

    ngOnInit()
    {
        this.HTTP.get('http://localhost:4201/db/get/accessory').subscribe((data) =>
        {
            data = JSON.parse(data['_body']);
            this.productList = data;

            for(let i = 0; i < this.productList.length; i++)
            {
                if(this.productList[i].name.length > 33)
                {
                    this.productList[i].shorten = this.productList[i].name.substr(0, 33);
                    this.productList[i].shorten = this.productList[i].shorten += "...";
                }
                else
                {
                    this.productList[i].shorten = this.productList[i].name;
                }
            }
        })
    }

    SendToFullProduct(productIndex)
    {
        this.Router.navigate(['/product', productIndex]);
    }
}