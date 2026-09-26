import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonRadio, IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-radio',
  templateUrl: 'radio.page.html',
  styleUrls: ['radio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonRadio, IonRadioGroup],
})
export class RadioPage {}