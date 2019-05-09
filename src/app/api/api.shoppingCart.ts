/*
* Author: Sean O'Brien
* Create Date: 03/25/2019
* Modify Date: 03/25/2019
* Discription: this our behavior payload to which once user click add to cart of product then transfer to each part of component
*/


import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable
({
    providedIn: 'root'
})

export class ShoppingCartService
{
    private cart = [];
    public newItemWasAdd = new BehaviorSubject<Object>({});
    public toggleFullCartPanel = new BehaviorSubject<boolean>(false);
    public CartBeenEditBehavior = new BehaviorSubject<boolean>(false); 

    AddToCart(product: Object)
    {
        this.newItemWasAdd.next(product);
    }

    UpdateCart(data)
    {
        this.cart = data;
    }

    ToggleFullCartPanel()
    {
        this.toggleFullCartPanel.next(true);
    }

    GetCart()
    {
        return this.cart;
    }

    CartHasBeenEdit()
    {
        this.CartBeenEditBehavior.next(true);
    }
}