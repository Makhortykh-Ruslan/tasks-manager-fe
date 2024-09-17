export const labels = {
  EMAIL: 'Email',
  PASSWORD: 'Password',
} as const;

export type TLabels = (typeof labels)[keyof typeof labels];
