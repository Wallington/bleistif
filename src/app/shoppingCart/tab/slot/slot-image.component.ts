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
    selector: 'app-slot-image',
    template:
    `
    <div [ngClass]="class">
        <img [src]="slotImage">
    </div>
    
    `
})

export class SlotImageComponent 
{

    private isSlotHidden: boolean = false;
    private slotImage: string = 'null';
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

    @Input() viewMode: boolean;


        

    

    
    
}