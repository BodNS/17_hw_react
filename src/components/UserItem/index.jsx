import React from "react";

const UserItem = (props) => {
    const {user:{id, fName, lName}} = props;
    return (
        <li key={id}>
            <span>UserID: "{id}" UserFullName:"{fName} {lName}"</span>
        </li>
    )

}

export default UserItem;