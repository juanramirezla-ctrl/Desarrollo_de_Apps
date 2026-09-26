import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonButton, IonContent, IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: 'popover.page.html',
  styleUrls: ['popover.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonButton, IonContent, IonPopover],
})
export class PopoverPage {}