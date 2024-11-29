import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-jobs-search',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './jobs-search.component.html',
  styleUrls: ['./jobs-search.component.scss'],
})
export class JobsSearchComponent {}
