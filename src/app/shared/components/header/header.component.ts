import { AuthService } from 'src/app/core/services/auth.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  onDisconnect(){
    this.authService.logOut();
  }
}
