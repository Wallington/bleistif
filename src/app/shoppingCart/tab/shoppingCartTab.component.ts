/*
* Author: Sean O'Brien
* Create Date: 03/06/2019
* Modify Date: 03/19/2019
* Discription: this where preload our current shopping cart as user shop arround
*/


import 
{ 
    Component,
    DoCheck
} from '@angular/core';

import { ShoppingCartService } from '../../api/api.shoppingCart';
import { FilterService } from '../../api/api.filter';

interface Slot
{
    isHidden: Boolean,
    src: String
}


@Component
({
    selector: 'app-shoppingCartTab',
    templateUrl: './shoppingCartTab.component.html',
})

export class ShoppingCartTabComponent implements DoCheck
{

    constructor
    (
        private Service: ShoppingCartService,
        public FilService: FilterService

    ){}
    
    cart = [];
    isPCView: Boolean = (window.innerWidth >= 1080) ? true: false;
    slot1: Slot =
    {
        isHidden: true,
        src: 'null'
    }
    slot2: Slot =
    {
        isHidden: true,
        src: 'null'
    }
    slot3: Slot =
    {
        isHidden: true,
        src: 'null'
    }
    slot4 = 
    {
        isHidden: true,
        counter : 0
    }
    
    ngDoCheck()
    {
        //if object from our shopping cart service then want update the UI/Cart
        if(Object.entries(this.Service.newItemWasAdd.value).length != 0)
        {
            this.cart.push(this.Service.newItemWasAdd.value);
            this.Update();
        }
        //then after either no data or had data want delete to prevent doubs with out user knowelge 
        this.Service.newItemWasAdd.next({});
        
        //check if was edit from the main shopping cart like remove of a item
        if(this.Service.CartBeenEditBehavior.value)
        {
            //we get the lasted cart from our API
            this.cart = this.Service.GetCart();
             //if this trigger we want update with optional boolean to restart the slots
            this.Update(true);
        }
        this.Service.CartBeenEditBehavior.next(false);
    }

    Update(ItemsHasBeenEdit?:boolean)
    {
        if(ItemsHasBeenEdit)
        {
            
            this.slot1.isHidden = true;
            this.slot1.src = '';

            this.slot2.isHidden = true;
            this.slot2.src = '';

            this.slot3.isHidden = true;
            this.slot3.src = '';

            this.slot4.isHidden = true;
            this.slot4.counter = 0;
        }
        if(this.cart.length != 0)
        {
            if(this.cart.length < 4 )
            {
                //getting the lasted data from the cart
                let imgData = this.cart[this.cart.length - 1].image;
                //see what slot been open or has not from 1 to 3
                if(this.slot1.isHidden)
                {
                    this.slot1.isHidden = false;
                    this.slot1.src = imgData;
                }
                else if(this.slot2.isHidden)
                {
                    this.slot2.isHidden = false;
                    this.slot2.src = imgData;
                }
                else //by default open the 3rd slot
                {
                    this.slot3.isHidden = false;
                    this.slot3.src = imgData;
                }
            }
            else
            {
                //just in case when return full cart detail to back all product section
                this.slot1.isHidden = false;
                this.slot2.isHidden = false;
                this.slot3.isHidden = false;

                //we un hide the 4th slot 
                this.slot4.isHidden = false;
                // we get updated count so if 4 items then should display -> 1 and so on
                this.slot4.counter = this.cart.length - 3;
                
                //here  we update all other 3 slot of lasted product from slot 3 now newest product they just add
                // slot 2 have previes slot 3 image and slot 1 will get slot 2 image 
                this.slot1.src = this.cart[ this.cart.length - 3].image;
                this.slot2.src = this.cart[this.cart.length - 2].image;
                this.slot3.src = this.cart[this.cart.length - 1].image;
            }
        }
    }
    OpenFullDetailCart()
    {
        this.Service.UpdateCart(this.cart);
        this.Service.ToggleFullCartPanel();
    }
}