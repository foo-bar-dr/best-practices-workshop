import React from 'react';
import HeaderBad from './HeaderBad';
import HeaderNonAdminBad from './HeaderNonAdminBad';

const LiskovExampleBad = () => {

    const onClickRefreshButton = () => {
        console.log("Refreshed");
    }
    
    const onClickAddUserButton = () => {
        console.log("User Added")
    }

    return (
        <div>
        <h1>Liskov Example: Bad</h1>
            <HeaderBad onClickRefreshButton={onClickRefreshButton} onClickAddUserButton={onClickAddUserButton} />

            {/* Replace HeaderNonAdminBad with HeaderBad */}
            {/* <HeaderNonAdminBad onClickRefreshButton={onClickRefreshButton} /> */}

        </div>
    );
};

export default LiskovExampleBad;