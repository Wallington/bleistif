/*****************************
 *  Author: Sean O'Brien
 *  Craete Date: 08/27/2018
 *  Modifcation Date: 08/27/2018
 *  Discription: This define our SPA in our site components like prodocts, our other pages as well
 ******************************/

import 
{
    Routes,
    RouterModule,
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
import { FilterProductDisplayComponent } from './filterProductDisplay/filterProductDisplay.component'

const appRoutes: Routes =
[
    {
        path: '',
        redirectTo: '/feature',
        pathMatch: 'full'
    },
    {
        path: 'product/:id',
        component: ProductComponent
    },
    {
        path: 'graphite',
        component: GraphiteComponent,
        data:
        {
            animation: 'graphite'
        }
    },
    {
        path: 'charcoal',
        component: CharcoalComponent,
        data:
        {
            animation: 'charcoal'
        }
    },
    {
        path: 'feature',
        component: FeatureComponent,
        data:
        {
            animation: 'feature'
        }
    },
    {
        path: 'colored',
        component: ColoredComponent,
        data:
        {
            animation: 'colored'
        }
    },
    {
        path: 'watercolored',
        component: WaterColoredComponent,
        data:
        {
            animation: 'waterColored'
        }
    },
    {
        path: 'accessory',
        component: AccessoryComponent,
        data:
        {
            animation: 'accessory'
        }
    },
    {
        path: 'filter/:data',
        component: FilterProductDisplayComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot
(
    appRoutes
);
