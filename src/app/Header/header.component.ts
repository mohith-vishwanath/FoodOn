import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  templateUrl: `./header.component.html`,
  selector: `app-header`,
})
export class HeaderComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  onSelect(section: string) {
    this.sectionSelected.emit(section);
  }
}
