import {Routes} from '@angular/router';
import {VariantPage} from '../variant-page/variant-page';
import {HomePage} from '../home-page/home-page';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
    },
    {
        path: 'variant',
        component: VariantPage
    },
    {
        redirectTo: '/home',
        path: '**'
    }
];
