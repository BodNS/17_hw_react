import React, { Component } from "react";

const UserItem = (props) => {
    const {user:{id, fName, lName}} = props;
    return (
        <li>
            <span>UserID: "{id}" UserFullName:"{fName} {lName}"</span>
        </li>
    )

}

export default UserItem;