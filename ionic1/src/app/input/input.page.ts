import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonInput, IonItem, IonList } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: 'input.page.html',
  styleUrls: ['input.page.scss'],
  imports: [IonInput, IonItem, IonList],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class InputPage {}