import { Component } from '@angular/core';

import { TmIconModule } from '../../../tm-icons/tm-icon.module';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  standalone: true,
  imports: [TmIconModule],
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {}
