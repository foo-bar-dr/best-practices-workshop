import React from 'react';
import EmployeeTable from './components/EmployeeTable';

const DryGood = () => {
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

  const ActionButtonsUserArray = [
    {
        name: "View",
        onClickHandler: () => {
            console.log("Viewing Data as user")
        }
    }
  ];

  const ActionButtonsAdminArray = [
    {
        name: "View",
        onClickHandler: () => {
            console.log("Viewing Data as admin")
        }
    },
    {
        name: "Edit",
        onClickHandler: () => {
            console.log("Editing Data as admin")
        }
    }
  ]

  return (
    <div>
      <h3>DRY: Good code example</h3>
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
          <EmployeeTable EmployeeDataArray={EmployeeData} ActionButtonsArray={ActionButtonsUserArray} />
        </div>
        <div>
          <h3>Admin Table</h3>
          <EmployeeTable EmployeeDataArray={EmployeeData} ActionButtonsArray={ActionButtonsAdminArray} />
        </div>
      </div>
    </div>
  );
};

export default DryGood;