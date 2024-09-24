export interface AuthStateModel {
  access_token: string | null;
}

export const DEFAULT_AUTH_STATE: AuthStateModel = {
  access_token: null,
};

export enum AUTH_ACTIONS {
  SET_ACCESS_TOKEN = '[auth] SET ACCESS TOKEN',
  RESET_ACCESS_TOKEN = '[auth] RESET ACCESS TOKEN',
  SET_QUICKBOOKS_AUTH_MODEL = '[auth] SET QUICKBOOKS AUTH MODEL',
}
