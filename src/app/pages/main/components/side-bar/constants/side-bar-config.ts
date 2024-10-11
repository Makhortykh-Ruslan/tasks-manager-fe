import { ISideBarItem } from '../interfaces/i-side-bar-item';
import { roles, TMRoles } from '@core/enums/roles';
import { generateUniqueId } from '@core/utils/functions';

const USER_SIDE_BAR: ISideBarItem[] = [
  {
    title: 'Notes',
    path: 'notes',
    icon: 'note',
    id: generateUniqueId(),
  },
  {
    title: 'Reminders',
    path: 'reminders',
    icon: 'bell',
    id: generateUniqueId(),
  },
  {
    title: 'Archive',
    path: 'archive',
    icon: 'archive',
    id: generateUniqueId(),
  },
  {
    title: 'Removed',
    path: 'removed',
    icon: 'trash',
    id: generateUniqueId(),
  },
  {
    title: 'Support',
    path: 'support',
    icon: 'lifebuoy',
    classes: ['top'],
    id: generateUniqueId(),
  },
  {
    title: 'Settings',
    path: 'settings',
    icon: 'gear',
    id: generateUniqueId(),
  },
];

const ADMIN_SIDE_BAR: ISideBarItem[] = [];

export const sideBarItems: Map<TMRoles, ISideBarItem[]> = new Map([
  [roles.USER, USER_SIDE_BAR],
  [roles.ADMIN, ADMIN_SIDE_BAR],
]);
