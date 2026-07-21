function EmployeeTable({
    employees,
    search,
    editEmployee,
    handleDelete
}){

    const filteredEmployees = employees.filter((employee) => 
    employee.name.toLowerCase().includes(search.toLowerCase())
    );

    if(filteredEmployees.length === 0){
        return(
            <div className="alert alert-warning">
                No employees found.
            </div>
        );
    }

    return(
        <table className="table table-bordered table-striped table-hover">
            <thead  className="table-dark">
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

                        <td>{employee.id}</td>

                        <td>{employee.name}</td>

                        <td>{employee.department}</td>

                        <td>₹ {employee.salary}</td>

                        <td className="text-center">

                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => editEmployee(employee)}
                            >
                                Edit
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(employee.id)}
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>
        </table>
    );
}

export default EmployeeTable;