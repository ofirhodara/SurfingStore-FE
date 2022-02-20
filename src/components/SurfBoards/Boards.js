import React from "react";
import AvailableBoards from "./AvailableBoards";
import Introduction from "./Introduction";

const Boards = props => {

    return (   
       <React.Fragment>
        <Introduction></Introduction>
        <AvailableBoards></AvailableBoards>
       </React.Fragment>
    );
};


export default Boards;