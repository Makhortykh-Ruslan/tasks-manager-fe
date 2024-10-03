import { Pipe, PipeTransform } from '@angular/core';
import { appRoutes } from '@core/constants';
import { roles, TMRoles } from '@core/enums/roles';

@Pipe({
  name: 'navBar',
  standalone: true,
})
export class NavBarPipe implements PipeTransform {
  public transform(value: string, role: TMRoles): string {
    switch (role) {
      case roles.USER:
        return `${appRoutes.user.routerPath}/${value}`;
      case roles.ADMIN:
        return `${appRoutes.admin.routerPath}/${value}`;
      default:
        return `${appRoutes.user.routerPath}/${value}`;
    }
  }
}
