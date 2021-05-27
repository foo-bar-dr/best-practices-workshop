import React from 'react';

const Header = (props) => {
    const { onClickRefreshButton } = props;
    return (
        <>
            <h3>Users List Page</h3>
            <button onClick={onClickRefreshButton}>Refresh</button>
        </>
    );
};

export default Header;