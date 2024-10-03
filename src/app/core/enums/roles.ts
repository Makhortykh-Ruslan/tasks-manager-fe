export const roles = {
  ADMIN: 'admin',
  USER: 'user',
} as const;

export type TMRoles = (typeof roles)[keyof typeof roles];
