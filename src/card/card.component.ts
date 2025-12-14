import {Component, Input} from '@angular/core';
import {Card} from '../variant-page/consts';

@Component({
    selector: 'etu-card',
    standalone: true,
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() card!: Card;
    @Input() showDescription: boolean = true;
}
