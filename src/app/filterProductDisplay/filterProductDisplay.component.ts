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
    colSize = this.SetColSize();

    constructor
    (
        private Router: Router,
        private route: ActivatedRoute
    ){}

    ngOnInit()
    {
        //this run the first time filter feed.
        this.productList = JSON.parse( this.route.snapshot.paramMap.get('data'));

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
    }
    
    ngDoCheck()
    {
        //this do check if data was change after ngInit was first ran
        this.productList = JSON.parse( this.route.snapshot.paramMap.get('data'));
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
        
    }

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

    SendToFullProduct(productIndex)
    {
        this.Router.navigate(['/product', productIndex]);
    }
}