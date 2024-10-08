export const placeholders = {
  // Enter //
  EMAIL: 'Enter your email',
  PASSWORD: 'Enter your password',
  NAME: 'Enter your name',
  ENTER_NOTE_NAME: 'Enter the note name',
  ENTER_DESCRIPTION: 'Enter a description...',

  // Search //
  SEARCH: 'Search (⌘K)',
} as const;

export type TPlaceholder = (typeof placeholders)[keyof typeof placeholders];
