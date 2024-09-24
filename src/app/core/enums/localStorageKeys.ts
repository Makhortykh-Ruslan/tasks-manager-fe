export const LocalStorageKeys = {
  ACCESS_TOKEN: 'access-token',
  QUICKBOOKS_AUTH_MODEL: 'quick-books-auth',
} as const;

export type TLocalStorage =
  (typeof LocalStorageKeys)[keyof typeof LocalStorageKeys];
