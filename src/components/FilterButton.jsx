import React from 'react';

function FilterButton(props) {

  return (
    <button className={"filters__item" + (props.isSelected ? " is-selected" : "")}  onClick={props.handleClick}>
      {props.text}
      <i className="fas fa-sort-down" />
    </button>
  );
}

export default FilterButton;