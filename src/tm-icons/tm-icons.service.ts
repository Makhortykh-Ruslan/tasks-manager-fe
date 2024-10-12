import { Injectable } from '@angular/core';

import { TmIcon } from './tm-icons';

@Injectable({
  providedIn: 'root',
})
export class TmIconsService {
  private registry = new Map<string, string>();

  public registerIcons(icons: TmIcon[]): void {
    icons.forEach((icon: TmIcon) =>
      this.registry.set(icon.name, icon.data),
    );
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`,
      );
    }
    return this.registry.get(iconName);
  }
}
