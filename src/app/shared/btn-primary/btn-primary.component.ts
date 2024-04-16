import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input() text: string = '';
}
