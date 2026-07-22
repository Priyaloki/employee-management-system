import { useEffect, useState } from "react"
import EmployeeTable from "./EmployeeTable";
import SearchBar from "./SearchBar";
import EmployeeFormFields from "./EmployeeFormFields";
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "../services/employeeService";

function EmployeeForm() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");
    const [employees, setEmployees] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});

    async function loadEmployees() {
        try {
            const response = await getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    }

    useEffect(() => {
        loadEmployees();
    }, []);

    function validateForm() {

        let validationErrors = {};

        if (name.trim() === "") {
            validationErrors.name = "Name is required";
        } else if (name.length < 3) {
            validationErrors.name = "Name must contain at least 3 characters";
        }

        if (department.trim() === "") {
            validationErrors.department = "Department is required";
        }

        if (salary === "") {
            validationErrors.salary = "Salary is required";
        } else if (isNaN(salary)) {
            validationErrors.salary = "Salary must be a number";
        } else if (Number(salary) <= 0) {
            validationErrors.salary = "Salary must be greater than 0";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (editingId) {
            await updateEmployee(editingId, {
                name,
                department,
                salary
            });

            await loadEmployees();
            setEditingId(null);
            setMessage("Employee updated successfully.");

        } else {
            await addEmployee({
                name,
                department,
                salary
            });

            await loadEmployees();
            setMessage("Employee added successfully.");

        }

        setName("");
        setDepartment("");
        setSalary("");

    }

    async function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) {
            return;
        }

        await deleteEmployee(id);

        await loadEmployees();
        setMessage("Employee deleted successfully.");
    }

    function editEmployee(employee) {
        setName(employee.name);
        setDepartment(employee.department);
        setSalary(employee.salary);
        setEditingId(employee.id);
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {
                        message && (

                            <div className="alert alert-success">

                                {message}

                            </div>

                        )
                    }
                    <EmployeeFormFields
                        name={name}
                        setName={setName}
                        department={department}
                        setDepartment={setDepartment}
                        salary={salary}
                        setSalary={setSalary}
                        handleSubmit={handleSubmit}
                        editingId={editingId}
                        errors={errors}
                    />

                    <div className="card shadow-lg border-0 mt-4">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center mb-3">

                                <h3 className="mb-0">

                                    Employee List

                                </h3>

                                <span className="badge bg-dark">

                                    {employees.length} Employees

                                </span>

                            </div>

                            <SearchBar
                                search={search}
                                setSearch={setSearch}
                            />

                            <div className="mt-3">

                                <EmployeeTable
                                    employees={employees}
                                    search={search}
                                    editEmployee={editEmployee}
                                    handleDelete={handleDelete}
                                />

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default EmployeeForm;