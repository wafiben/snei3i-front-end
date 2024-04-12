import { User } from "./user";

export type UserState = {
  users: User[];
  loading: boolean;
  letter: string;
  age: number;
  user:User|null
};
