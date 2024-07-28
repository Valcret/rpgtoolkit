import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Remplacez par l'URL de votre API

class ImageService {
  constructor(baseURL = BASE_URL) {
    this.client = axios.create({
      baseURL
    });
  }

  // Create a new image
  async createImage(imageData) {
    try {
      const response = await this.client.post('/images', imageData);
      return response.data;
    } catch (error) {
      console.error('Error creating image:', error);
      throw error;
    }
  }

  // Read all images
  async fetchImages() {
    try {
      const response = await this.client.get('/images');
      return response.data;
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  }

  // Read a single image by ID
  async fetchImageById(id) {
    try {
      const response = await this.client.get(`/images/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching image with ID ${id}:`, error);
      throw error;
    }
  }

  // Update an image by ID
  async updateImage(id, imageData) {
    try {
      const response = await this.client.put(`/images/${id}`, imageData);
      return response.data;
    } catch (error) {
      console.error(`Error updating image with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete an image by ID
  async deleteImage(id) {
    try {
      const response = await this.client.delete(`/images/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting image with ID ${id}:`, error);
      throw error;
    }
  }
}

export default new ImageService();
