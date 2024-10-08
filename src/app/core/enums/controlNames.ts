export const controlNames = {
  NAME: 'name',
  PASSWORD: 'password',
  EMAIL: 'email',
  USER_NAME: 'userName',
  TITLE: 'title',
  DESCRIPTION: 'description',
  USER: 'userId',
} as const;

export type ControlNames = (typeof controlNames)[keyof typeof controlNames];
