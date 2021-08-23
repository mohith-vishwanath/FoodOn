import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Main-Project';

  loadedFeature = 'recipe';

  onNavigateRequest(moveToSection: string) {
    this.loadedFeature = moveToSection;
  }
}
