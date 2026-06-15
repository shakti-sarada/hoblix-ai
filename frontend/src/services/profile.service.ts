import api from "../lib/axios";

class ProfileService {
  async getProfile(userId: number) {
    const response = await api.get(
      `/users/${userId}`
    );

    return response.data;
  }

  async updateProfile(
      userId: number,
      data: any
    ) {
      const response =
        await api.put(
          `/users/${userId}`,
          data
        );

      return response.data;
    }

}

export default new ProfileService();