export interface LoggedInUser {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    firstName: string;
    lastName: string;
  }
}
