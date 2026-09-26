import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-datetime',
  templateUrl: 'datetime.page.html',
  styleUrls: ['datetime.page.scss'],
  imports: [IonDatetime],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatetimePage {}