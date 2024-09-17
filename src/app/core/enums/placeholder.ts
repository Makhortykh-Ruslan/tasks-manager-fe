export const placeholders = {
  EMAIL: 'Enter your email',
  PASSWORD: 'Enter your password',
} as const;

export type TPlaceholder = (typeof placeholders)[keyof typeof placeholders];
