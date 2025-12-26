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

    onSearch(id: any): void {
        id = Math.min(Math.max(1, id), 31);
        this.router.navigate(['/variant'], {
            queryParams: { id }
        });
    }
}
