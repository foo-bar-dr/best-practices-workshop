import React from 'react';

const HeaderBad = (props) => {
    const { onClickRefreshButton, onClickAddUserButton, hideAdminButton } = props;

    
    return (
        <>
            <h3>Users List Page</h3>
            <button onClick={onClickRefreshButton}>Refresh</button>
            {!hideAdminButton ? <button onClick={() => onClickAddUserButton()}>Add User</button> : null}
        </>
    );
};

export default HeaderBad;
