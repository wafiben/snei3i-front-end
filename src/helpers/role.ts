import { UserRole } from "../tests/mocks/SignIn.test";

export class Authorisation {
  static isFreelancer(role: string): boolean {
    return role === UserRole.FREELANCER;
  }

  static isClient(role: string): boolean {
    return role === UserRole.CLIENT;
  }
}
