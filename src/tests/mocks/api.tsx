export enum UserRole {
  CLIENT = "CLIENT",
  FREELANCER = "FREELANCER",
}

export type MockUser = {
  id: string;
  email: string;
  role: UserRole;
  name: string;
};

export type responseSignIn = {
  token: string;
};

export const mockSignInResponse = {
  token: "fake-jwt-token-123",
};

export const mockClientUser = {
  id: "123",
  email: "client@example.com",
  role: "CLIENT",
  name: "John Client",
};

export const mockFreelancerUser = {
  id: "456",
  email: "freelancer@example.com",
  role: "FREELANCER",
  name: "Jane Freelancer",
};
