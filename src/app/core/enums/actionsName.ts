export const actionsName = {
  UPDATE: 'update',
  DELETE: 'delete',
} as const;

export type ActionsName =
  (typeof actionsName)[keyof typeof actionsName];
