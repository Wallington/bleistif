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
    selector: 'app-slot-count',
    template:
    `
    <div [ngClass]="class">
        <div>{{slotCount}}+</div>
    </div>
    
    `
})

export class SlotCountComponent 
{

    private isSlotHidden: boolean = false;
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
    set count(count: number)
    {
        this.slotCount = count;
    };


    @Input() viewMode: boolean;


        

    

    
    
}