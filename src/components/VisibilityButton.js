import React from 'react' 

function VisibilityButton ({handleAll, handleCaught, handleUncaught}) {
    return (
    <div>
        <button onClick={handleAll}>All</button>
        <button onClick={handleCaught}>Caught</button>
        <button onClick={handleUncaught}>Uncaught</button>
    </div>
    );
}

export default VisibilityButton