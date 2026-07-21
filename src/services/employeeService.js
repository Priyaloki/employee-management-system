import axios from "axios";

const BASE_URL = "http://localhost:8090/api/employees";

export const getEmployees = () => {
    return axios.get(BASE_URL);
};

export const addEmployee = (employee) => {
    return axios.post(BASE_URL, employee);
};

export const updateEmployee = (id, employee) => {
    return axios.put(`${BASE_URL}/${id}`, employee);
};

export const deleteEmployee = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};

export const getEmployeeById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};