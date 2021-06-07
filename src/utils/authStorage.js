import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const token = await AsyncStorage.getItem(this.namespace);
    return token ? JSON.parse(token) : undefined;
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(this.accessToken, JSON.stringify(accessToken));
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(this.namespace);
  }
}

export default AuthStorage;
