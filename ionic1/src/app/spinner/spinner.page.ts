import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonItem, IonLabel, IonSpinner } from '@ionic/angular';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.page.html',
  styleUrls: ['spinner.page.scss'],
  imports: [IonItem, IonLabel, IonSpinner],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpinnerPage {}