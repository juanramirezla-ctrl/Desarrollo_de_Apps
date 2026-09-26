import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.page.html',
  styleUrls: ['accordion.page.scss'],
  standalone: true,
  imports: [IonAccordion, IonAccordionGroup, IonItem, IonLabel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionPage {}