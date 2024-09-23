export const labels = {
  EMAIL: 'Email',
  PASSWORD: 'Password',
  REMEMBER_ME: 'Remember me',
} as const;

export type TLabels = (typeof labels)[keyof typeof labels];
