/*
* Author: Sean O'Brien
* Create Date: 08/20/2018
* Modify Date: 08/23/2018
* Discription: This where site will load our indivaul pages and hold our main template
*/

import { Component } from '@angular/core';

@Component
({
  selector: 'app-root',
  templateUrl: './main.component.html',
})

export class MainComponent 
{
    links: string[] = ['Feature', 'Graphite','Charcoal','Colored', 'Water Colored', "Accessory", "My Account"];
    isMenuOpen: boolean = false;

    TogglePhoneMenu()
    {
      let mainElem = document.getElementById('main');
      let navElem = document.getElementById('nav');
      let iconElem = document.getElementById('navIcon');
      let navButtonElem = document.getElementById('navButton');
      this.isMenuOpen = !this.isMenuOpen; //short cut to toggle

      mainElem.className = (this.isMenuOpen) ? "open": "close";
      mainElem.style.top = (this.isMenuOpen) ? "400px" : "60px";

      navButtonElem.className = "iconRotate mat-icon-button";
      
      //set time out for 50 ms so hide the clip of text be see in the opacity main body
      setTimeout( () =>
      {
        navElem.style.opacity = (this.isMenuOpen) ? "1" : "0";
      },50);
      setTimeout(() =>
      {
          iconElem.className = (this.isMenuOpen) ? "fas fa-times": "fas fa-bars";
          //reset the button for next rotate
          navButtonElem.className = "mat-icon-button";
      }, 200);
    }

    
    
}
