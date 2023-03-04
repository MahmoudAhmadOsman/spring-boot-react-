import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService {
	getProducts() {
		return axios.get(PRODUCT_API_BASE_URL + "/list");
	}

	saveProduct(product: any) {
		return axios.post(PRODUCT_API_BASE_URL + "/save" + product);
	}

	getProductById(id: any) {
		return axios.get(`${PRODUCT_API_BASE_URL}/${id}`);
	}

	updateProduct(id: number, product: any) {
		return axios.put(`${PRODUCT_API_BASE_URL}/${id}`, product);
	}

	deleteProduct(id: number) {
		return axios.delete(PRODUCT_API_BASE_URL + "/delete/" + id);
	}
}

export default new ProductService();
