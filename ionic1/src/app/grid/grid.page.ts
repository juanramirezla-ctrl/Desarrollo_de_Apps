import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonCol, IonGrid, IonRow } from '@ionic/angular';

@Component({
  selector: 'app-grid',
  templateUrl: 'grid.page.html',
  styleUrls: ['grid.page.scss'],
  imports: [IonCol, IonGrid, IonRow],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridPage {}