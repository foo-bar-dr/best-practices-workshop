import React from 'react';
import HeaderAdmin from './HeaderAdmin';

const LiskovExampleGood = () => {

    const onClickRefreshButton = () => {
        console.log("Refreshed");
    }
    
    const onClickAddUserButton = () => {
        console.log("User Added")
    }
    
    return (
        <div>
        <h1>Liskov Example: Good</h1>
            <HeaderAdmin onClickRefreshButton={onClickRefreshButton} onClickAddUserButton={onClickAddUserButton} />
        </div>
    );
};

export default LiskovExampleGood;