import React from "react";

const DryBad = () => {
  const EmployeeData = [
    {
      id: 1,
      name: "John Doe",
      employee_id: "39914",
    },
    {
      id: 2,
      name: "John Smith",
      employee_id: "89392",
    },
    {
      id: 3,
      name: "Joe Bloggs",
      employee_id: "93989",
    },
  ];

  return (
    <div>
      <h3>DRY: bad code example</h3>
      <div
        style={{
          display: "flex",
          width: 1000,
          margin: 20,
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>User Table</h3>
          <table>
            <tbody>
              <tr>
                <th style={{ width: 170 }}>Name</th>
                <th style={{ width: 200 }}>Employee ID</th>
                <th>Action</th>
              </tr>
              {EmployeeData?.map((employee) => (
                <tr key={employee?.id}>
                  <td>{employee?.name}</td>
                  <td>{employee?.employee_id}</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3>Admin Table</h3>
          <table>
            <tbody>
              <tr>
                <th style={{ width: 170 }}>Name</th>
                <th style={{ width: 200 }}>Employee ID</th>
                <th>Action</th>
              </tr>
              {EmployeeData?.map((employee) => (
                <tr key={employee?.id}>
                  <td>{employee?.name}</td>
                  <td>{employee?.employee_id}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DryBad;
