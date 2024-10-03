export const labels = {
  EMAIL: 'Email',
  PASSWORD: 'Password',
  NAME: 'Name',
  REMEMBER_ME: 'Remember me',
} as const;

export type TLabels = (typeof labels)[keyof typeof labels];
