export const actionsName = {
  UPDATE: 'update',
  DELETE: 'delete',
  UPDATE_POSITION_NOTE: 'updatePositionNote',
} as const;

export type ActionsName =
  (typeof actionsName)[keyof typeof actionsName];
