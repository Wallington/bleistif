/*
*   Author: Sean O'Brien
*   Create Date: 08/25/2018
*   Modifiy Date: 09/04/2018
*   discription: this control the filter sheet and either filter data what user selected and then they can view them
*/

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router} from '@angular/router';

@Component
({
    selector: 'app-filter',
    templateUrl: './filter.component.html'
})

export class FilterComponent implements OnInit
{
    constructor
    (
        public HTTP: Http,
        public Router: Router
    ){}

    showResult = 0;
    jsonData;
    categoryList =
    [
        {
            name: "Graphite",
            selected: true,
            value: "graphite",
        },
        {
            name: "Charcoal",
            selected: true,
            value: "charcoal"
            
        },
        {
            name: "Colored",
            selected: true,
            value: "colored"
            
        },
        {
            name: "Water Colored",
            selected: true,
            value: "water"
              
        },
        {
            name: "Accessory",
            selected: true,
            value: "accessory"
        }
    ]
    maxPriceLimit = 200;
    maxSetRange = 72;
    setRangeList = 
    [
        {
            name: '01',
            selected: false,
            value: 1
                       
        },
        {
            name: '02',
            selected: false,
            value: 2
        },
        {
            name: '03',
            selected: false,
            value: 3
        },
        {
            name: '04',
            selected: false,
            value: 4
        },
        {
            name: '06',
            selected: false,
            value: 6
        },
        {
            name: '12',
            selected: false,
            value: 12
        },
        {
            name: '24',
            selected: false,
            value: 24            
        },
        {
            name: '36',
            selected: false,
            value: 36
        },
        {
            name: '48',
            selected: false,
            value: 48
        },
        {
            name: '72',
            selected: true,
            value: 72
        }
    ]
    
    brandList =
    [
        {
            name: "Bellofy",
            selected: true,
            value: "Bellofy"
        },
        {
            name: "Derwent",
            selected: true,
            value: "Derwent"
        },
        {
            name: "Prismacolor",
            selected: true,
            value: "Prismacolor"
        },
        {
            name: "Staedtler",
            selected: true,
            value: "Staedtler"
        },
        {
            name: "Sketching Pencils",
            selected: true,
            value: "Sketching Pencils"
        },
        {
            name: "USLON",
            selected: true,
            value: "USLON"
        },
        {
            name: "Sargent Art",
            selected: true,
            value: "Sargent Art"
        },
        {
            name: "Arteza",
            selected: true,
            value: "Arteza"
        },
        {
            name: "General Pencil",
            selected: true,
            value: "General Pencil"
        },
        {
            name: "Mont Marte",
            selected: true,
            value: "Mont Marte"
        }

    ]
    
    ngOnInit()
    {
        this.UpdateResult();
    }

    public Open()
    {
        let model = document.getElementById('filter');
        model.className = 'OpenFilterModel';
        model.style.display = 'block';
    }
    Close()
    {
        let model = document.getElementById('filter');
        model.className = 'CloseFilterModel';
        setTimeout(()=>
        {
            model.style.display = 'none';
        },350)
        
    }

    //this update our chip query 
    UpdateMaxSetRange(index)
    {
        for(let i = 0; i < this.setRangeList.length; i++)
        {
            this.setRangeList[i].selected = (i !== index) ? false : true;
        }
        this.maxSetRange = this.setRangeList[index].value;
        this.UpdateResult();
    }
    UpdateCategoryQuery(index)
    {
        this.categoryList[index].selected = !this.categoryList[index].selected;
        this.UpdateResult();
    }
    UpdateBrandQuery(index)
    {
        this.brandList[index].selected = !this.brandList[index].selected;
        this.UpdateResult();
    }
    UpdateResult()
    {
        //add all category are selected into array
        let category = [];
        for(let i = 0; i < this.categoryList.length; i++)
        {
            if(this.categoryList[i].selected)
                category.push(this.categoryList[i].value);
        }
        
        //add all brands are selected into array
        let brand = [];
        for(let i = 0; i < this.brandList.length; i++)
        {
            if(this.brandList[i].selected)
                brand.push(this.brandList[i].value);
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
        this.Router.navigate(['/filter', JSON.stringify(this.jsonData)]);
        setTimeout(() =>
        {
            
            this.Close();
        }, 500);
    }
}