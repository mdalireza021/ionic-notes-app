import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private platform: Platform) {
    // Set the mode to iOS
    //this.platform.setMode('ios');
  }

}
