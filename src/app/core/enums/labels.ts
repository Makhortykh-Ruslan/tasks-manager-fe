export const labels = {
  EMAIL: 'Email',
  PASSWORD: 'Password',
  NAME: 'Name',
  REMEMBER_ME: 'Remember me',
  NOTE_NAME: 'Note name',
  DESCRIPTION: 'Description',
} as const;

export type TLabels = (typeof labels)[keyof typeof labels];
