import api from "../http/http.js";

class CategoryService {
  async getAllCategories() {
    const response = await api.get('/category/getAllCategories');
    return response;
  }

  async addCategory(formData) {
    const response = await api.post('/category/addCategory', formData);
    return response;
  }

  async deleteCategory(name) {
    const response = await api.delete(
      '/category/deleteCategory',
      {
        data: {
          name
        }
      }
    );
  }
}

export default new CategoryService();