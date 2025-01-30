import { User } from "../../domain/User";

export type UserRepository = {
  findById: (id: number) => Promise<User | null>;
  save: (user: User) => Promise<void>;
};
