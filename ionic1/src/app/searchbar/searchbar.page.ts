import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-searchbar',
  templateUrl: 'searchbar.page.html',
  styleUrls: ['searchbar.page.scss'],
  imports: [IonSearchbar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchbarPage {}