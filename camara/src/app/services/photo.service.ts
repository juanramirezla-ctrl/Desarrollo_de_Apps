import { Injectable, signal } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { UserPhoto } from '../models/photo.model';

// Registramos los PWA Elements en la ventana inmediatamente cuando se carga el servicio
defineCustomElements(window);

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  // 1. Estado reactivo privado mediante Angular Signals
  private photosSignal = signal<UserPhoto[]>([]);

  // 2. Exposición de solo lectura del estado para los componentes
  public readonly photos = this.photosSignal.asReadonly();

  // 3. Método principal para capturar fotografía
  async takeNewPhoto(): Promise<void> {
    try {
      // Camera.getPhoto gestiona los permisos automáticamente (sin necesitar checkPermissions)
      const capturedPhoto: Photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 85,
        allowEditing: false,
        width: 1280
      });

      // Mapeo a nuestro modelo de dominio
      const newPhoto: UserPhoto = {
        filepath: `${Date.now()}.${capturedPhoto.format}`,
        webPath: capturedPhoto.webPath,
        format: capturedPhoto.format
      };

      // Actualización inmutable del estado
      this.photosSignal.update(photos => [newPhoto, ...photos]);
    } catch (error: any) {
      // Control de cancelación del usuario
      if (error?.message?.includes('cancelled') || error?.message?.includes('User cancelled')) {
        console.log('El usuario canceló la captura de imagen.');
        return;
      }
      console.error('Error no controlado al usar la cámara:', error);
      throw error;
    }
  }

  // Método para eliminar una imagen del estado
  deletePhoto(index: number): void {
    this.photosSignal.update(photos => photos.filter((_, i) => i !== index));
  }
}