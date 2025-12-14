import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Store} from '../services/store';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './app.html',
    standalone: true,
    styleUrl: './app.scss'
})
export class App {
    constructor(private store: Store) {
    }
    public toggleThemState(): void {
        this.store.themState.next(!this.store.themState.getValue());
        document.documentElement.setAttribute('data-theme', this.store.themState.getValue() ? 'light' : 'dark')
    }
}
