import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'app';
  logs: string[] = [];

  constructor(
    private authService: AuthenticationService,
    private http: HttpClient) { }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  callApi() {
    this.http.get(environment.webApi)
      .subscribe(result => {
        this.logs.push(`Received result from Web API: ` + JSON.stringify(result));
      });
  }

  get user(): string {
    const user = this.authService.getUser();
    if (!user) { return null; }

    return user.name;
  }

  get isOnline(): boolean {
    return this.authService.isOnline();
  }

}
