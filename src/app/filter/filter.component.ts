/*
*   Author: Sean O'Brien
*   Create Date: 08/25/2018
*   Modifiy Date: 04/08/2019
*   discription: this control the filter sheet and either filter data what user selected and then they can view them
*/

import { Component, OnInit, DoCheck } from '@angular/core';
import { Http } from '@angular/http';
import { Router} from '@angular/router';
import { FilterService } from '../api/api.filter';
@Component
({
    selector: 'app-filter',
    templateUrl: './filter.component.html'
})

export class FilterComponent implements OnInit, DoCheck
{
    constructor
    (
        private HTTP: Http,
        private Router: Router,
        private Service: FilterService
    ){}

    showResult = 0;
    jsonData;
    categoryList: Object = this.Service.categorys;
    maxPriceLimit: Number = this.Service.maxPriceLimit;
    maxSetRange: Number = this.Service.maxSetRange;
    productSetRangeList: object = this.Service.productSetRange;
    productBrandList: Object = this.Service.productBrands;
    filterClass: String = 'fx-hidden';
    skirtClass: String = 'fx-hidden';
    isOpen = false;
    
    ngOnInit()
    {
        this.UpdateResult();
    }
    ngDoCheck()
    {
        if(this.Service.isOpen.value)
        {
            this.Service.isOpen.next(false);
            this.UpdateResult();
            this.ToggleFilter()
        }
        
    }

    ToggleFilter()
    {
        this.filterClass = (this.isOpen) ? 'fx-notvisable' : 'fx-visable';
        this.skirtClass = 'fx-visable';
        //if isOpen current false we want open it if not we want close it 
        this.filterClass = (this.isOpen) ? 'closeLeftPanel' : 'openLeftPanel';
        this.isOpen = !this.isOpen;
        setTimeout(() =>
        {
            this.filterClass = (this.isOpen) ? 'fx-show' : 'fx-hidden';
            this.skirtClass = (this.isOpen) ? 'fx-show' : 'fx-hidden';
        }, (this.isOpen) ? 513 : 348);
    }

    //this update our chip query 
    UpdateMaxSetRange(index)
    {
        for(let i = 0; i < Object.entries(this.productSetRangeList).length; i++)
        {
            this.productSetRangeList[i].selected = (i !== index) ? false : true;
        }
        this.maxSetRange = this.productSetRangeList[index].value;
        this.UpdateResult();
    }
    UpdateCategoryQuery(index)
    {
        this.categoryList[index].selected = !this.categoryList[index].selected;
        this.UpdateResult();
    }
    UpdateBrandQuery(index)
    {
        this.productBrandList[index].selected = !this.productBrandList[index].selected;
        this.UpdateResult();
    }
    UpdateResult()
    {
        //add all category are selected into array
        let category = [];
        for(let i = 0; i < Object.entries(this.categoryList).length; i++)
        {
            if(this.categoryList[i].selected)
                category.push(this.categoryList[i].value);
        }
        
        //add all brands are selected into array
        let brand = [];
        for(let i = 0; i < Object.entries(this.productBrandList).length; i++)
        {
            if(this.productBrandList[i].selected)
                brand.push(this.productBrandList[i].value);
        }
        //place into Object
        let query = 
        [{
            'category': category,
            'maxPriceLimit': this.maxPriceLimit,
            'maxSetRange': this.maxSetRange,
            'brands': brand
        }];

        //then we JSON.stringify the Object to transfer the filter setting to Express Server
        //console.log(JSON.stringify(query));
        this.HTTP.get('http://localhost:4201/db/filter/' + JSON.stringify(query)).subscribe((data) =>
        {
            this.jsonData = JSON.parse(data['_body']);
            this.showResult = this.jsonData.length;
        });
        

    }
    ShowResultPage()
    {
        this.Service.filterData.next(this.jsonData);
        setTimeout(() =>
        {
            this.Router.navigate(['/filter']);
            this.ToggleFilter();
        }, 500);
    }
}