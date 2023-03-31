import api from "../http/http.js";

class BrandService {
  async getAllBrands() {
    const response = await api.get('/brand/getAllBrands');
    return response;
  }

  async addBrand(formData) {
    const response = await api.post('/brand/addBrand', formData);
    return response;
  }

  async deleteBrand(name) {
    const response = await api.delete(
      '/brand/deleteBrand',
      {
        data: {
          name
        }
      }
    );
  }
}

export default new BrandService();