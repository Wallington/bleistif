//importing system components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//google material component module
import 
{ 
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule
} from "@angular/material";

// import any pages components
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: 
  [
    MainComponent
  ],
  imports: 
  [
    BrowserModule,
    BrowserAnimationsModule, //note any google materail must go after this module follow step 3 note
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
  ],
  exports:
  [ //also any google materail must also be export as well as import
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
