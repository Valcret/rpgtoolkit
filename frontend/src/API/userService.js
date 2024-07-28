import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Remplacez par l'URL de votre API

class UserService {
  constructor(baseURL = BASE_URL) {
    this.client = axios.create({
      baseURL
    });
  }

  // Create a new user
  async createUser(userData) {
    try {
      const response = await this.client.post('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // Read all users
  async fetchUsers() {
    try {
      const response = await this.client.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  // Read a single user by ID
  async fetchUserById(id) {
    try {
      const response = await this.client.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      throw error;
    }
  }

  // Update a user by ID
  async updateUser(id, userData) {
    try {
      const response = await this.client.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete a user by ID
  async deleteUser(id) {
    try {
      const response = await this.client.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
      throw error;
    }
  }
}

export default new UserService();
