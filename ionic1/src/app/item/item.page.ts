import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: 'item.page.html',
  styleUrls: ['item.page.scss'],
  imports: [IonItem, IonLabel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemPage {}