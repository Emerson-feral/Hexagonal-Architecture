import { User } from "../../domain/User";
import { UserRepository } from "../ports/UserRepository";

export const getUser =
  (repo: UserRepository) =>
  async (id: number): Promise<User | null> => {
    return await repo.findById(id);
  };

export const createUser =
  (repo: UserRepository) =>
  async (id: number, name: string): Promise<void> => {
    const user: User = { id, name };
    return await repo.save(user);
  };
