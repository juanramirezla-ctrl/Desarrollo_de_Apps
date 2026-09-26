import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSkeletonText,
  IonThumbnail,
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { musicalNotes } from 'ionicons/icons';

@Component({
  selector: 'app-skeleton',
  templateUrl: 'skeleton.page.html',
  styleUrls: ['skeleton.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonButton, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail],
})
export class SkeletonPage {
  public loaded = false;

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ musicalNotes });
  }
}