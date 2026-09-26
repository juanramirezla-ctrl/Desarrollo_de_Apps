import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-range',
  templateUrl: 'range.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['range.page.scss'],
  imports: [IonRange],
})
export class RangePage {}