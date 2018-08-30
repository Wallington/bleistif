//importing system components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.router';
import { HttpModule } from '@angular/http'
//google material component module
import 
{ 
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatChipsModule,
  MatDividerModule,
  MatSliderModule,
} from "@angular/material";

// import any pages components
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { GraphiteComponent } from './graphite/graphite.component';
import { CharcoalComponent } from './charcoal/charcoal.component';
//import component
import { FilterComponent } from './filter/filter.component'


@NgModule({
  declarations: 
  [
    MainComponent,
    FilterComponent,
    ProductComponent,
    GraphiteComponent,
    CharcoalComponent
  ],
  imports: 
  [
    BrowserModule,
    BrowserAnimationsModule, //note any google materail must go after this module follow step 3 note
    FormsModule,
    HttpModule,
    appRouting,
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
