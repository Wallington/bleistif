/*
* Author: Sean O'Brien
* Create Date: 03/27/2019
* Modify Date: 03/27/2019
* Discription: this where load our full detail shopping cart where they choosen/access/proccess/send 
*/

import { Component, OnInit, DoCheck } from '@angular/core';

//import our shopping cart API
import { ShoppingCartService } from '../../api/api.shoppingCart';

@Component
({
    selector: 'app-fullDetailShoppingCart',
    templateUrl: './fullDetailShoppingCart.component.html'
})

export class FullDetailShoppingCartComponent implements OnInit, DoCheck
{
    constructor
    (
        private Service: ShoppingCartService,
    )
    {}

    public screenSize =
    {
        isTinyPhone: false,
        isPhone: false,
        isTablet: false,
        isPc: false
    }

    public cartItems = [];
    public saveProducts = [];
    public total: number = 0;
    public subTotal: number = 0;
    public shippingTotal: number = 0;
    public taxTotal: number = 0;
    private isOpen: boolean = false;
    private cartClass: string = "fx-hidden";
    private skirtClass: string = "fx-hidden";
    
    ngOnInit()
    {
        
        this.screenSize.isTinyPhone = (window.innerWidth <= 320 ) ? true : false;
        this.screenSize.isPhone = (window.innerWidth <  768) ? true : false;
        this.screenSize.isTablet = (window.innerWidth < 1079 && window.innerWidth > 767) ? true : false;
        this.screenSize.isPc = (window.innerWidth >= 1080) ? true : false;

        //get our cart from Shopping cart API 
        this.cartItems = this.Service.GetCart();

        for(let i = 0; i < this.cartItems.length; i++)
        {
            if (this.screenSize.isTinyPhone) // this make product name smaller for small screen Iphone 5/SE
            {
                this.cartItems[i].shorten = this.cartItems[i].name.substr(0, 15);
                this.cartItems[i].shorten = this.cartItems[i].shorten += "...";
            }
            else if(this.cartItems[i].name.length > 22)
            {
                this.cartItems[i].shorten = this.cartItems[i].name.substr(0, 22);
                this.cartItems[i].shorten = this.cartItems[i].shorten += "...";
            }
            else
            {
                this.cartItems[i].shorten = this.cartItems[i].name;
            }
        }

        this.GetSubTotal();
        this.GetTaxTotal();
        this.GetShippingCost();
        this.GetTotal();
    }

    ngDoCheck()
    {
        if(this.Service.toggleFullCartPanel.value)
        {
            this.cartItems = this.Service.GetCart();
            this.Service.toggleFullCartPanel.next(false);
            this.Update();
            this.ToggleFullCart();
        }
    }

    Update()
    {
        this.GetSubTotal();
        this.GetTaxTotal();
        this.GetShippingCost();
        this.GetTotal();
    }

    GetTotal()
    {
        this.total = this.subTotal + this.taxTotal + this.shippingTotal;
    }
    
    GetSubTotal()
    {
        let tempTotal: number = 0;
        for(let i = 0; i < this.cartItems.length; i++)
        {
            tempTotal += (this.cartItems[i].price * this.cartItems[i].quantity);
        }
        this.subTotal = tempTotal;
        
    }
    GetShippingCost()
    {
        let tempShippingCost = 10.00;
        this.shippingTotal = tempShippingCost;
    }

    GetTaxTotal()
    {
        let tempTaxPercent = 0.056;
        this.taxTotal =  tempTaxPercent * this.subTotal;

    }

    private ToggleFullCart()
    {
        this.cartClass = (this.isOpen) ? 'fx-notvisable' : 'fx-visable';
        this.skirtClass = 'fx-visable';
        //if isOpen current false we want open it if not we want close it 
        this.cartClass = (this.isOpen) ? 'closeLeftPanel' : 'openLeftPanel';
        this.isOpen = !this.isOpen;
        setTimeout(() =>
        {
            this.cartClass = (this.isOpen) ? 'fx-show' : 'fx-hidden';
            this.skirtClass = (this.isOpen) ? 'fx-show' : 'fx-hidden';
        }, (this.isOpen) ? 513 : 348);
    }

    Plus(index)
    {
        this.cartItems[index].quantity++ ;
        this.Update();
    }

    Min(index)
    {
        if(this.cartItems[index].quantity > 1)
            this.cartItems[index].quantity--;
        this.Update();
    }

    RemoveFromCart(index)
    {
       this.cartItems.splice(index, 1);
       this.Update();
       this.Service.UpdateCart(this.cartItems);
       this.Service.CartHasBeenEdit();
    }

    
}