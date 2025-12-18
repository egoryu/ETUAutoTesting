import {Component} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {ActivatedRoute, Router} from '@angular/router';
import {variants} from '../consts';

@Component({
    selector: 'st-variant-page',
    imports: [
        CardComponent
    ],
    templateUrl: './variant-page.html',
    standalone: true,
    styleUrl: './variant-page.scss'
})
export class VariantPage {
    public id: string = '';
    public variant = variants[0];


    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.id = this.route.snapshot.queryParams['id'];
        this.variant = variants[+this.id - 1 || 0];
    }

    public cardNavigate(id: number): void {
        this.router.navigate([], {queryParams: {id: this.id}, fragment: `card-${id}`});
        const element = document.getElementById(`card-${id}`);
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}
