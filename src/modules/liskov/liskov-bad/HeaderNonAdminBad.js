import React from 'react';
import HeaderBad from './HeaderBad';

const HeaderNonAdminBad = (props) => {

    const { onClickRefreshButton } = props

    return (
        <div>
            <HeaderBad onClickRefreshButton={onClickRefreshButton} hideAdminButton={true} />
        </div>
    );
};

export default HeaderNonAdminBad;