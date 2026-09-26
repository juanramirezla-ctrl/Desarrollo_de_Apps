import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonProgressBar } from '@ionic/angular';

@Component({
  selector: 'app-progress-bar',
  templateUrl: 'progress-bar.page.html',
  styleUrls: ['progress-bar.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonProgressBar],
})
export class ProgressBarPage {
  readonly progress = signal(0);

  constructor() {
    setInterval(() => {
      this.progress.update((value) => value + 0.01);

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress() > 1) {
        setTimeout(() => {
          this.progress.set(0);
        }, 1000);
      }
    }, 50);
  }
}