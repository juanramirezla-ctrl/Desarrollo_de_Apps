import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonActionSheet, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: 'action-sheet.page.html',
  styleUrls: ['action-sheet.page.scss'],
  imports: [IonActionSheet, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActionSheetPage {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
}