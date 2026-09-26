import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-fab',
  templateUrl: 'fab.page.html',
  styleUrls: ['fab.page.scss'],
  imports: [IonFab, IonFabButton, IonIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FabPage {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ add });
  }
}