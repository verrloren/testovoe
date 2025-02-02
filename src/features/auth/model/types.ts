export type LoginResponse = {
  success: boolean;
	response: string;
}
export interface LogoutResponse {
	success: boolean;
	response: string;
}
export type RegisterResponse = {
  success: boolean;
  response: string;
}

export interface TokenResponse {
  token?: string;
}
