import React from 'react';

const TableHeader = () => {
  return (
    <tr>
      <th style={{ width: 170 }}>Name</th>
      <th style={{ width: 200 }}>Employee ID</th>
      <th>Action</th>
    </tr>
  );
};

export default TableHeader;