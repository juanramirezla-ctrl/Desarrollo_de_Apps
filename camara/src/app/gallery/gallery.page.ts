import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol, IonImg, IonFab,
  IonFabButton, IonIcon, IonCard, IonButton
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { camera, trashOutline } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonImg, IonFab,
    IonFabButton, IonIcon, IonCard, IonButton
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Galería de Evidencias</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          @for (photo of photoService.photos(); track photo.filepath; let i = $index) {
            <ion-col size="12" size-md="6" size-lg="4">
              <ion-card>
                <ion-img [src]="photo.webPath" [alt]="photo.filepath"></ion-img>
                <div class="ion-padding">
                  <ion-button color="danger" fill="clear" expand="block" (click)="photoService.deletePhoto(i)">
                    <ion-icon slot="start" name="trash-outline"></ion-icon>
                    Eliminar
                  </ion-button>
                </div>
              </ion-card>
            </ion-col>
          } @empty {
            <ion-col size="12" class="ion-text-center">
              <p style="color: #64748b; margin-top: 40px;">
                No hay evidencias capturadas.<br>Presione el botón de la cámara para iniciar.
              </p>
            </ion-col>
          }
        </ion-row>
      </ion-grid>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button (click)="takePhoto()">
          <ion-icon name="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  `
})
export class GalleryPage {
  public photoService = inject(PhotoService);

  constructor() {
    addIcons({ camera, trashOutline });
  }

  async takePhoto() {
    await this.photoService.takeNewPhoto();
  }
}