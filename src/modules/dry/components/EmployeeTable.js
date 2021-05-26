import React from 'react';
import ActionColumn from './ActionColumn';
import TableHeader from './TableHeader';

const EmployeeTable = (props) => {
    const { EmployeeDataArray, ActionButtonsArray } = props;
    return (
      <table>
        <tbody>

          <TableHeader />

          {EmployeeDataArray?.map((employee) => (
            <tr key={employee?.id}>
              <td style={{color: 'red'}}>{employee?.name}</td>
              <td>{employee?.employee_id}</td>
              <td>
                <ActionColumn ActionButtonsArray={ActionButtonsArray} />
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    );
};

export default EmployeeTable;