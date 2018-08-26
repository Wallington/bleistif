//importing system components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms';
//google material component module
import 
{ 
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatChipsModule,
  MatDividerModule,
  MatSliderModule
} from "@angular/material";

// import any pages components
import { MainComponent } from './main/main.component';

//import component
import { FilterComponent } from './filter/filter.component'


@NgModule({
  declarations: 
  [
    MainComponent,
    FilterComponent
  ],
  imports: 
  [
    BrowserModule,
    BrowserAnimationsModule, //note any google materail must go after this module follow step 3 note
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatChipsModule,
    MatDividerModule,
    MatSliderModule
  ],
  exports:
  [ //also any google materail must also be export as well as import
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatChipsModule,
    MatDividerModule,
    MatSliderModule
  ],
  providers: 
  [
    FilterComponent
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
