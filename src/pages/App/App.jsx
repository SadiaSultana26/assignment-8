import React, { use } from "react";

const App = ({appPromise})  => {
    const data =use(appPromise);
    console.log (data)
    return (
        <div>
           <h1>single App</h1>
        </div>
    );
};

export default App ;