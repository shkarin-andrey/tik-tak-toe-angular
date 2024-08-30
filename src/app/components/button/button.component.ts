import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  onClickButton(event: MouseEvent) {
      this.onClick.emit(event);
  }
}
