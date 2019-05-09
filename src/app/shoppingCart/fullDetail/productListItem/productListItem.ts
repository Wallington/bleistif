import 
{
    Component,
    Input,
    OnDestroy
} from '@angular/core';

@Component
({
    selector: 'app-product-list-item',
    template:
    `
    <div class="productRemover">
    <button mat-icon-button><i class="fas fa-minus-circle"></i></button>
    </div>
    <div class="productImg">
        <img [src]="this.image">
    </div>
    <div class="column fx-auto">
        <div class="row fx-left ">
            <div class="companyName">
                <b>{{this.company}}</b>
            </div>
            <div class="productPrice">
                {{this.price * this.quantity | currency}}
            </div>
        </div>
        <div class="row fx-left">
            <div class="productName" matTooltip="{{item.name}}">
                {{this.shorten}}
            </div>
            
        </div>
        <div class="row quantity fx-left">
                <button mat-icon-button (click)="Min(i)"><i class="fas fa-minus"></i></button>
                <div><app-counter [count]="this.quantity"></app-counter></div>
                <button mat-icon-button (click)="Plus(i)"><i class="fas fa-plus"></i></button>
        </div>
    </div>
    `
})

export class ProductListItem
{

}