import React, { Component } from "react";
import styles from "./index.css";
import cn from "classnames";

class UserItem extends Component {
  constructor(props) {
    super(props);
    const {
      user: { id, fName, lName },
    } = props;

    this.state = {
      isChecked: false,
    };

    this.checked = this.checked.bind(this);
  }

  checked = () => {
    this.setState((state) => ({
      isChecked: !isChecked,
    }));

    const checkedClass = cn(styles.input, { [styles.checked]: isChecked });

    return (
      <li>
        <label>
          <input
            type="checkbox"
            onClick={this.checked}
            className={checkedClass}
          ></input>
          UserID: {id} UserFullName: {fName} {lName}
        </label>
      </li>
    );
  };
}
export default UserItem;









/* function ListItem(props) {
  // Правильно! Не нужно определять здесь ключ:
  return <li>{props.value}</li>;
} */