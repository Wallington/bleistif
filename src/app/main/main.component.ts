/*
* Author: Sean O'Brien
* Create Date: 08/20/2018
* Modify Date: 08/27/2018
* Discription: This where site will load our indivaul pages and hold our main template
*/

import { Component } from '@angular/core';

//import the filter component

import { Http } from '@angular/http'
import { RouterOutlet } from '@angular/router';
import { PageTranstion } from '../animation/pageTransition'; //our custome angular 6 animation

//import API
import { AuthService } from '../api/api.auth';

@Component
({
  selector: 'app-root',
  templateUrl: './main.component.html',
  animations: [PageTranstion]
})

export class MainComponent 
{
    //creating varbales from exist other components
    constructor
    (
      public HTTP: Http,
      private AuthService: AuthService
    ){}

    navList = 
    [
       {
          name: "Feature",
          link: "feature"
       },
       {
          name: "Graphite",
          link: "graphite"
       },
       {
          name: "Charcoal",
          link: "charcoal"
       },
       {
          name: "Colored",
          link: "colored"
       },
       {
          name: "Water Colored",
          link: "watercolored"
       },
       {
          name: "Accessory",
          link: "accessory"
       }
    ]
    isMenuOpen: boolean = false;
    isPCMode: boolean = (window.innerWidth >= 1080) ? true: false;

    TogglePhoneMenu()
    {
      let mainElem = document.getElementById('main');
      let navElem = document.getElementById('nav');
      let iconElem = document.getElementById('navIcon');
      let navButtonElem = document.getElementById('navButton');
      this.isMenuOpen = !this.isMenuOpen; //short cut to toggle

      mainElem.className = (this.isMenuOpen) ? "openDropDownNav": "closeDropDownNav";
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
    
    PrepareRoute(outlet: RouterOutlet)
    {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    OpenSignInPanel()
    {
       this.AuthService.OpenSignPannel();
    }
}

