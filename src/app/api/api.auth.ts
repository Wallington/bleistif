
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable
({
    providedIn: 'root'
})

export class AuthService
{
    public signInIsOpen = new BehaviorSubject<Boolean>(false);

    public OpenSignPannel()
    {
        this.signInIsOpen.next(true);
    }
}