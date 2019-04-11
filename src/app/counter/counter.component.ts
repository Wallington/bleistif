import {Component, Input} from '@angular/core';

@Component
({
    selector: "app-counter",
    template:
    `
        <div>
            {{count}}
        </div>
    `
})

export class CounterComponent
{
    @Input() count: number;
}