import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Store {
    public themState = new BehaviorSubject<boolean>(true);
}
