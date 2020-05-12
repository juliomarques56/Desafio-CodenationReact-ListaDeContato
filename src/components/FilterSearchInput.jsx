import React from 'react'

function FilterSearchInput(props) {

    return (
        <input type="text" className="filters__search__input" onChange={props.handleContactsSearch} placeholder="Pesquisar" />
    );
  }
  
  export default FilterSearchInput;