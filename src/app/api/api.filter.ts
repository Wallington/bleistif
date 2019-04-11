/*
* Author: Sean O'Brien
* Create Date: 04/08/2019
* Modify Date: 04/08/2019
* Discription: this our behavior payload to which once user click on filter button want open it
*/


import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable
({
    providedIn: 'root'
})

export class FilterService
{
    public isOpen = new BehaviorSubject<boolean>(false);
    public filterData = new BehaviorSubject<object>({});

    categorys: Object =
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
    maxPriceLimit: Number = 200;
    maxSetRange: Number = 72;
    productSetRange: Object = 
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
    
    productBrands: Object =
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

    Toggle()
    {
        this.isOpen.next(true);
    }
}