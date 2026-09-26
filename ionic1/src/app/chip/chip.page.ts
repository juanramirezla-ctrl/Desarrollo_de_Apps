import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonChip } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'chip.page.html',
  styleUrls: ['chip.page.scss'],
  imports: [IonChip],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChipPage {}