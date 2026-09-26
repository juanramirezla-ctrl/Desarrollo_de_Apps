import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonCheckbox } from '@ionic/angular';

@Component({
  selector: 'app-checkbox',
  templateUrl: 'checkbox.page.html',
  styleUrls: ['checkbox.page.scss'],
  imports: [IonCheckbox],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxPage {}