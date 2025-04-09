import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ButtonDirective } from '@core/directives/button.directive';
import { ControlConverterPipe } from '@core/pipes/control-converter.pipe';
import { InputComponent } from '@core/components/input/input.component';
import { LoaderComponent } from '@core/components/loader/loader.component';
import { LogoComponent } from '@core/components/logo/logo.component';
import { controlNames, labels, placeholders } from '@core/enums';
import { AbstractErrorMessages } from '@core/abstract';
import { AuthFormGroupService } from '../../services/auth-form-group.service';
import { AuthService } from '@core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { appRoutes } from '@core/constants/routes';
import { finalize, take, tap } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthSpace } from '@core/store/auth-store/auth.actions';

@Component({
  selector: 'app-registration',
  providers: [AuthFormGroupService, AuthService],
  imports: [
    CommonModule,
    ButtonDirective,
    ControlConverterPipe,
    InputComponent,
    LoaderComponent,
    LogoComponent,
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RegistrationComponent
  extends AbstractErrorMessages
  implements OnInit
{
  public isShowLoading = signal<boolean>(false);

  public controlNames = controlNames;
  public placeholders = placeholders;
  public labels = labels;

  private authFormGroupService = inject(AuthFormGroupService, {
    self: true,
  });
  private authService = inject(AuthService, {
    self: true,
  });
  private router = inject(Router);
  private store = inject(Store);
  private activatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.initData();
  }

  public handleSubmit(): void {
    this.isShowLoading.set(true);

    this.authService
      .registrationUser(this.formGroup.getRawValue())
      .pipe(
        take(1),
        tap((response) => {
          this.store.dispatch(
            new AuthSpace.SetAccessToken(response.model),
          );
          this.router.navigate(['']);
        }),
        finalize(() => this.isShowLoading.set(false)),
      )
      .subscribe();
  }

  public handleRedirectToLogIn(): void {
    this.router.navigate([appRoutes.login.routerPath], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  private initData(): void {
    this.authFormGroupService.initRegistrationFormGroup();
    this.formGroup =
      this.authFormGroupService.getRegistrationFormGroup();
  }
}
