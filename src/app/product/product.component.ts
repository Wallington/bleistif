/*
* Author: Sean O'Brien
* Create Date: 08/270/2018
* Modify Date: 08/27/2018
* Discription: this where load our full detail of our product 
*/
import 
{ 
    Component,
    OnInit
    DoCheck
} from '@angular/core';

import 
{
    ActivatedRoute
} from '@angular/router';

import 
{ 
    Http
} from '@angular/http';

@Component
({
    selector: 'app-product',
    templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit
{
    constructor
    (
        private route: ActivatedRoute,
        private HTTP: Http
    ){};

    productList;

    ngOnInit()
    {
        let id = this.route.snapshot.paramMap.get('id');
        this.HTTP.get('http://localhost:4201/db/get/product/' + id).subscribe((data) =>
        {
           this.productList = JSON.parse(data['_body']);
        });
    }
    
    
}