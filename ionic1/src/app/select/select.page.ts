import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular';

@Component({
  selector: 'app-select',
  templateUrl: 'select.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['select.page.scss'],
  imports: [IonItem, IonList, IonSelect, IonSelectOption],
})
export class SelectPage {}