import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService {
	getProducts() {
		return axios.get(PRODUCT_API_BASE_URL);
	}

	saveProduct(product: any) {
		return axios.post(PRODUCT_API_BASE_URL, product);
	}

	getProductById(productId: any) {
		return axios.get(PRODUCT_API_BASE_URL + "/" + productId);
	}

	updateProduct(product: any, productId: any) {
		return axios.put(PRODUCT_API_BASE_URL + "/" + productId, product);
	}

	deleteProduct(productId: any) {
		return axios.delete(PRODUCT_API_BASE_URL + "/" + productId);
	}
}

export default new ProductService();
