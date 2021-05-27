import React from 'react';
import Header from './Header';

const HeaderAdmin = (props) => {
    const {onClickRefreshButton, onClickAddUserButton} = props;
    return (
        <>
            <Header onClickRefreshButton={onClickRefreshButton} />
            <button onClick={onClickAddUserButton}>Add new user</button>
        </>
    );
};

export default HeaderAdmin;
