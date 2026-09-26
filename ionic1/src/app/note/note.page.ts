import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonNote } from '@ionic/angular';

@Component({
  selector: 'app-note',
  templateUrl: 'note.page.html',
  styleUrls: ['note.page.scss'],
  imports: [IonNote],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotePage {}