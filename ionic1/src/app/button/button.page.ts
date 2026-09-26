import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: 'button.page.html',
  styleUrls: ['button.page.scss'],
  imports: [IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonPage {}