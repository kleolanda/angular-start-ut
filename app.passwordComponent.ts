import { Component } from '@angular/core';

@Component({
  selector: 'my-pass-app',
  template: `
    <div>
        <h1>{{greeting}}</h1>
    </div>
    <div>
        <input [(ngModel)]="password" name="password" (ngModelChange)="grade()">
        <input [(ngModel)]="repeatedPassword" name="repeatedPassword" (ngModelChange)="checkSame()">
        <p>Password strength: {{strength}}</p>
        <p>{{secondPasStatus}}</p>
    </div>
  `
})
export class AppPasswordComponent {
  greeting = 'Input passwords';
  password = '';
  repeatedPassword = '';
  strength = '';
  secondPasStatus = 'Type 2nd pass';
  grade() {
    var size = this.password.length;
    if (size > 8) {
        this.strength = 'strong';
    }
    else if (size > 3) {
        this.strength = 'medium';
    } else {
        this.strength = 'weak';
    }
  };
  checkSame() {
      if (this.password == this.repeatedPassword) {
          this.secondPasStatus = 'Password is OK';
      } else {
          this.secondPasStatus = 'Type the same password in 2nd textbox.';
      }
  };
}