import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Variant {
    name: string;
    url: string;
}

@Component({
    selector: 'etu-home',
    standalone: true,
    templateUrl: './home-page.html',
    styleUrl: './home-page.scss'
})
export class HomePage {
    protected readonly Array = Array;

    constructor(private router: Router) {
    }

    onSearch(event: any): void {
        this.router.navigate(['/variant'], {
            queryParams: { id: event }
        });
    }
}
