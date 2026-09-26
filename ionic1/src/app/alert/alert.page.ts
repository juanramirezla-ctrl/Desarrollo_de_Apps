import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.page.html',
  styleUrls: ['alert.page.scss'],
  imports: [IonAlert, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertPage {
  alertButtons = ['Action'];
}