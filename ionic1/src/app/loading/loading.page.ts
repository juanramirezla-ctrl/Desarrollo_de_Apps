import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonButton, IonLoading } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['loading.page.scss'],
  imports: [IonButton, IonLoading],
})
export class LoadingPage {}