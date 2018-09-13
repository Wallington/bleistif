/*
* Author: Sean O'Brien
* Create Date: 09/04/2018
* Modify Date: 09/11/2018
* Discription: this where load list from user selection
*/

import 
{ 
    Component,
    OnInit,
    DoCheck
} from '@angular/core';

import 
{
    Router,
    ActivatedRoute
} from '@angular/router';


@Component
({
    selector: 'app-filterProductDisplay',
    templateUrl: './filterProductDisplay.component.html'
})

export class FilterProductDisplayComponent implements OnInit, DoCheck
{
    productList;
    
    constructor
    (
        private Router: Router,
        private route: ActivatedRoute
    ){}

    ngOnInit()
    {
      //this run the first time filter feed.
      this.productList = JSON.parse( this.route.snapshot.paramMap.get('data'));
    }
    
    ngDoCheck()
    {
        //this do check if data was change after ngInit was first ran
        this.productList = JSON.parse( this.route.snapshot.paramMap.get('data'));
    }

    SendToFullProduct(productIndex)
    {
        this.Router.navigate(['/product', productIndex]);
    }
}