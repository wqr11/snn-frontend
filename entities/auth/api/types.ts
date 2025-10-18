export interface SignInParams {
  email: string;
  password: string;
}

export interface SignInResult {
  access_token: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  is_group: boolean;
}

export interface SignUpResult {
  id: string;
  email: string;
}
