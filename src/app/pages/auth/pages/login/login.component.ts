import { Component } from '@angular/core';
import { InputComponent } from '@core/components/input/input.component';
import { LogoComponent } from '@core/components/logo/logo.component';
import { labels } from '@core/enums/labels';
import { placeholders } from '@core/enums/placeholder';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.scss'],
  imports: [InputComponent, LogoComponent],
})
export class LoginComponent {
  public placeholders = placeholders;
  public labels = labels;
}
