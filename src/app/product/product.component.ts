/*
* Author: Sean O'Brien
* Create Date: 03/10/2019
* Modify Date: 03/11/2019
* Discription: this where load our full detail of our product 
*/
import 
{ 
    Component,
    OnInit
} from '@angular/core';

import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../api/api.shoppingCart';
//importing Shopping Cart API 


@Component
({
    selector: 'app-product',
    templateUrl: 'product.component.html',
})

export class ProductComponent implements OnInit
{

    //varables
    productItem: Object = {}; // this store our product data
    
    constructor
    (
       
        private HTTP: Http,
        private ActRouter: ActivatedRoute,
        private ShopService: ShoppingCartService
    )
    {}

    quantityCount: number = 1;

    // on start of our product
    ngOnInit()
    {
        //we need get the product uniquie id from URL
        let id = this.ActRouter.snapshot.paramMap.get('id');
        this.HTTP.get('http://localhost:4201/db/get/product/' + id).subscribe((data) =>
        {
            this.productItem = JSON.parse(data['_body']);
            // set the object arrray to 0 as stander
            this.productItem = this.productItem[0];
        });
    }

    Add()
    {
        this.quantityCount++;
    }

    Dec()
    {
        if(this.quantityCount != 1)
        {
            this.quantityCount--;
        }
    }

    AddToCartTab()
    {
        this.productItem['quantity'] = this.quantityCount;
        this.ShopService.AddToCart(this.productItem);
    }
    
    
}
