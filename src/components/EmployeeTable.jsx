import React from "react";

export default function EmployeeTable({
  employees,
  setEmployees,
  setEditData,
  setPage,
}) {
  const deleteEmp = (id) => {
    setEmployees(employees.filter((e) => e.id !== id));
  };

  const editEmp = (emp) => {
    setEditData(emp);
    setPage("form");
  };

  return (
    <div className="table-wrap">
      <h2>Employee Records</h2>

      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td><img src={e.photo} className="img-sm" alt="" /></td>
              <td>{e.name}</td>
              <td>{e.phone}</td>
              <td>{e.email}</td>
              <td>{e.designation}</td>
              <td>{e.department}</td>
              <td>{e.salary}</td>
              <td>{e.active ? "Active" : "Inactive"}</td>
              <td>
                <button onClick={() => editEmp(e)}>Edit</button>
                <button onClick={() => deleteEmp(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
