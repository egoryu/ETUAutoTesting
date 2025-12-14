import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Variant {
    name: string;
    url: string;
}

@Component({
    selector: 'etu-home',
    imports: [
        RouterLink
    ],
    standalone: true,
    templateUrl: './home-page.html',
    styleUrl: './home-page.scss'
})
export class HomePage {
    variants: Variant[] = [
        { name: 'Планеты', url: '1 - planets/earth.png' },
    ];

    constructor(private router: Router) {
    }
    
    onSearch(event: any): void {
        this.router.navigate(['/variant'], {
            queryParams: { id: event }
        });
    }

    protected readonly Array = Array;
}
