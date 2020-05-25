import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas2';

  constructor( private authService: LoginService) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    return this.authService.logout();
  }
}
