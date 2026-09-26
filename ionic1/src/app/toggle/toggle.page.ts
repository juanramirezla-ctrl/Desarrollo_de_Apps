import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonToggle } from '@ionic/angular';

@Component({
  selector: 'app-toggle',
  templateUrl: 'toggle.page.html',
  styleUrls: ['toggle.page.scss'],
  imports: [IonToggle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TogglePage {}