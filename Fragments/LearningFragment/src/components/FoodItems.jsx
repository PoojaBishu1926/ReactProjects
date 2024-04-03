// import React from 'react';
import PropTypes from "prop-types";
import styles from "./Items.module.css";

function FoodItems({ item, handleKeyDown }) {
  return (
    <>
      <ul className="list-group">
        {item.map((itemName, index) => (
          <li key={index} className="list-group-item kg-item">
            {itemName}
            <button
              className={`${styles.button} btn btn-info`}
              onChange={handleKeyDown}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

FoodItems.propTypes = {
  item: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FoodItems;
