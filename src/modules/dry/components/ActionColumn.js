import React from "react";

const ActionColumn = (props) => {
  const { ActionButtonsArray } = props;
  return (
    <div>
      {ActionButtonsArray?.map((actionButton) => (
        <button
          onClick={actionButton?.onClickHandler}
          style={{ fontSize: 16 }}
          key={actionButton?.name}
        >
          {actionButton?.name}
        </button>
      ))}
    </div>
  );
};

export default ActionColumn;
