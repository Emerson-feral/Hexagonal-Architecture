import { UserRepository } from "../../application/ports/UserRepository";
import { User } from "../../domain/User";

export const createInMemoryUserRepository = (): UserRepository => {
  let users: User[] = [];

  return {
    findById: async (id) => users.find((user) => user.id === id) || null,
    save: async (user) => {
      users = [...users, user];
    },
  };
};
