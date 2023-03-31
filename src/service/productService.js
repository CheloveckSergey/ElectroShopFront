import api from "../http/http.js";

class ProductService {
  async addProduct({ name, price, category, brand }) {
    const response = await api.post('/admin/addProduct', {
      name, price, category, brand
    });
    return response;
  }

  async getAllProducts() {
    const response = await api.get('/product/getAllProducts');
    return response;
  }

  async getAllProductsWithFilter(categoryFilters = [], brandFilters= [], curPage) {
    const response = await api.post(
      '/product/getAllProductsWithFilter',
      {
        categoryFilters, brandFilters, curPage
      }
    );
    // console.log(response);
    return response
  }

  async getProductByName(name) {
    const response = await api.post(
      '/product/getProduct',
      {name}
    );
    return response;
  }

  async addProductProbe(formData) {
    const response = await api.post(
      '/product/addProduct',
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }
    );
    return response;
  }

  async updateProduct(formData, id) {
    formData.append('id', id);
    console.log(formData);
    const response = await api.put(
      '/product/updateProduct',
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }
    );
    return response;
  }

  async deleteProduct(name) {
    const response = await api.delete(
      '/product/deleteProduct',
      {
        data: {
          name
        }
      }
    );
  }
}

export default new ProductService();