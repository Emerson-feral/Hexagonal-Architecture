import { User } from "../domain/User";
import { createInMemoryUserRepository } from "./repositories/InMemoryUserRepository";

const userRepository = createInMemoryUserRepository();

const user1: User = { id: 1, name: "Emerson" };
const user2: User = { id: 2, name: "Fernandes" };

async function run() {
  await userRepository.save(user1);
  await userRepository.save(user2);

  const foundUser = await userRepository.findById(2);

  console.log(">>>>>>> ", foundUser);
}

run().catch(console.error);
