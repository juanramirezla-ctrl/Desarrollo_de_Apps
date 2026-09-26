import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: 'segment.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['segment.page.scss'],
  imports: [IonLabel, IonSegment, IonSegmentButton],
})
export class SegmentPage {}