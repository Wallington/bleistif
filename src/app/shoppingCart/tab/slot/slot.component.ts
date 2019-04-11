/*
* Author: Sean O'Brien
* Create Date: 03/06/2019
* Modify Date: 03/21/2019
* Discription: this where insert dymaic the each of the slots of the product
*/

import 
{ Component, Input } from '@angular/core';

@Component
({
    selector: 'app-slot',
    template:
    `
    <div [ngClass]="class">
        <img *ngIf="!isCounter" [src]="slotImage">
        <div *ngIf="isCounter">{{slotCount}}+</div>
    </div>
    
    `
})

export class SlotComponent 
{

    private isSlotHidden: boolean = false;
    private isCounter: boolean = false;
    private slotImage: string = 'null';
    private slotCount: number = 0;
    private class = '';

    @Input() 
    set isHidden(isHidden: boolean)
    {
        this.isSlotHidden = isHidden;
        this.class = 'slot';
        this.class += (this.isSlotHidden) ? ' fx-hidden': ' fx-show';
        this.class += (this.viewMode) ? ' column' : ' row';
        
    };

    @Input() 
    set productImg(productImg: string)
    {
        this.slotImage = productImg;
    };

    @Input()
    set counter(count: number)
    {
        this.slotCount = count;
    };

    @Input() 
    set isGroupCounter(countMode: boolean)
    {
        this.isCounter = countMode;
    };

    @Input()
    set setCount(count: number)
    {
        this.slotCount = count;
    };

    @Input() viewMode: boolean;


        

    

    
    
}