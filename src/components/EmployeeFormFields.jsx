function EmployeeFormFields({
    name,
    setName,
    department,
    setDepartment,
    salary,
    setSalary,
    handleSubmit,
    editingId,
    errors
}) {

    return (

        <div className="card shadow p-4">

            <h2 className="text-center mb-4">
                {editingId ? "Update Employee" : "Add Employee"}
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">
                        <i className="bi bi-person-fill me-2"></i>
                        Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter employee name"
                    />
                    {errors.name && (
                        <div className="text-danger mt-1">
                            {errors.name}
                        </div>
                    )}

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        <i className="bi bi-building me-2"></i>
                        Department
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Enter department"
                    />

                    {errors.department && (
                        <div className="text-danger mt-1">
                            {errors.department}
                        </div>
                    )}

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        <i className="bi bi-currency-rupee me-2"></i>
                        Salary
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Enter salary"
                    />

                    {errors.salary && (
                        <div className="text-danger mt-1">
                            {errors.salary}
                        </div>
                    )}
                </div>

                <div className="text-center">

                    <button
                        className="btn btn-primary px-4"
                        type="submit"
                    >
                        {editingId ? "Update Employee" : "Add Employee"}
                    </button>

                </div>

            </form>

        </div>
    );
}

export default EmployeeFormFields;