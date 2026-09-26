import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/angular';

@Component({
  selector: 'app-badge',
  templateUrl: 'badge.page.html',
  styleUrls: ['badge.page.scss'],
  standalone: true,
  imports: [IonBadge, IonItem, IonLabel, IonList],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BadgePage {}