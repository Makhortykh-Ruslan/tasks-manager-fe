export const placeholders = {
  EMAIL: 'Enter your email',
  PASSWORD: 'Enter your password',
  NAME: 'Enter your name',
} as const;

export type TPlaceholder = (typeof placeholders)[keyof typeof placeholders];
