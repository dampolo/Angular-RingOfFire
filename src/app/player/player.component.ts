import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, MatDialogContent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() name: string = ""
  @Input() playerActive: boolean = false;

}
