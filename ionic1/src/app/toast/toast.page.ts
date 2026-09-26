import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToast, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.page.html',
  styleUrls: ['toast.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToast, IonToolbar],
})
export class ToastPage {}