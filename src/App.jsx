import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

export default function App() {
  const [page, setPage] = useState("home");
  const [employees, setEmployees] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Home employees={employees} />}
      {page === "form" && (
        <EmployeeForm
          employees={employees}
          setEmployees={setEmployees}
          editData={editData}
          setEditData={setEditData}
          setPage={setPage}
        />
      )}
      {page === "view" && (
        <EmployeeTable
          employees={employees}
          setEmployees={setEmployees}
          setEditData={setEditData}
          setPage={setPage}
        />
      )}
    </>
  );
}
