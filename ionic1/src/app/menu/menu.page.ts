import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['menu.page.scss'],
  imports: [IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar],
})
export class MenuPage {}