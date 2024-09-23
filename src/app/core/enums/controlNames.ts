export const controlNames = {
  NAME: 'name',
  PASSWORD: 'password',
  EMAIL: 'email',
} as const;

export type ControlNames = (typeof controlNames)[keyof typeof controlNames];
