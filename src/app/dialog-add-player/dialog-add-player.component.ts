import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    CommonModule,
    GameComponent,
    MatDialogContent,
    MatFormField,
    MatLabel,
    FormsModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatInputModule,
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss',
})
export class DialogAddPlayerComponent {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
