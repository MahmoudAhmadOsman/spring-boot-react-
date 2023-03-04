import axios from "axios";

const REGISTER_API_BASE_URL = "http://localhost:8080/api/v2";

class RegisterService {
	getCustomers() {
		return axios.get(REGISTER_API_BASE_URL + "/users");
	}

	saveCustomer(customerData: any) {
		return axios.post(REGISTER_API_BASE_URL + "/register", customerData);
	}

	getCustomerById(id: any) {
		return axios.get(`${REGISTER_API_BASE_URL}/${id}`);
	}

	updateCustomer(id: number, customerData: any) {
		return axios.put(`${REGISTER_API_BASE_URL}/${id}`, customerData);
	}

	deleteCustomer(id: number) {
		return axios.delete(REGISTER_API_BASE_URL + "/delete/" + id);
	}
}

export default new RegisterService();
