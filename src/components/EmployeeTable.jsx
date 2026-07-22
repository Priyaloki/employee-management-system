function EmployeeTable({
    employees,
    search,
    editEmployee,
    handleDelete
}) {

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredEmployees.length === 0) {
        return (
            <div className="alert alert-warning">
                No employees found.
            </div>
        );
    }

    return (
        <div className="table-responsive">

            <table className="table table-hover align-middle table-bordered">
                <thead className="table-dark">
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {filteredEmployees.map((employee) => (

                        <tr key={employee.id}>

                            <td className="text-center" >{employee.id}</td>

                            <td className="text-center">{employee.name}</td>

                            <td>

                                <span className="badge bg-primary">

                                    {employee.department}

                                </span>

                            </td>

                            <td className="text-center">

                                <span className="badge bg-success">

                                    ₹ {employee.salary}

                                </span>

                            </td>

                            <td className="text-center">

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editEmployee(employee)}
                                >
                                    <i className="bi bi-pencil-square me-1"></i>
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(employee.id)}
                                >
                                    <i className="bi bi-trash me-1"></i>
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;