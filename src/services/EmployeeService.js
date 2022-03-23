import axios from "axios";

const EMPLOYEE_API_BASE_URI ="http://localhost:8080";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URI);
    }
}
export default new EmployeeService();