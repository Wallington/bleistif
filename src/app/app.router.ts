/*****************************
 *  Author: Sean O'Brien
 *  Craete Date: 08/27/2018
 *  Modifcation Date: 08/27/2018
 *  Discription: This define our SPA in our site components like prodocts, our other pages as well
 ******************************/

import 
{
    Routes,
    RouterModule
} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//import all our pages want load in our spa
import { ProductComponent} from './product/product.component';
import { GraphiteComponent } from './graphite/graphite.component';
import { CharcoalComponent } from './charcoal/charcoal.component';
import { FeatureComponent } from './feature/feature.component';
import { ColoredComponent } from './colored/colored.component';
import { WaterColoredComponent } from './waterColored/waterColored.component';
import { AccessoryComponent } from './accessory/accessory.component';

const appRoutes: Routes =
[
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'graphite',
        component: GraphiteComponent
    },
    {
        path: 'charcoal',
        component: CharcoalComponent
    },
    {
        path: 'feature',
        component: FeatureComponent
    },
    {
        path: 'colored',
        component: ColoredComponent
    },
    {
        path: 'watercolored',
        component: WaterColoredComponent
    },
    {
        path: 'accessory',
        component: AccessoryComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot
(
    appRoutes
);