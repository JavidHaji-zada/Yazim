import axios from "./axios";

const baseUrl = "/v1/user";

class CUserService {
  /**
   *
   * @param username
   * @param firstName
   * @param lastName
   * @param email
   * @param password
   */
  async register(
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    try {
      console.log("create user with ", {
        username,
        firstName,
        lastName,
        email,
        password,
      });
      await axios.post(baseUrl, {
        username,
        firstName,
        lastName,
        email,
        password,
      });
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }
}

export const UserService = new CUserService();
