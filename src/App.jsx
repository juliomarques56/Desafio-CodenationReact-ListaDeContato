import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import orderBy from './utils';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchFild: "",
      loading: false,
      selected: null
    };
  }

  componentDidMount() {
    this.setState({loading: true})

    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((response) => response.json())
      .then((response) => this.setState({ contacts: response, loading:false }));
      
  }

  handleContactsSearch = (e) => 
    this.setState({ 
      searchFild: e.target.value 
    }
  );  

  handleClickOrder(event, order) {
    
    let newContacts = [];
    newContacts = orderBy(this.state.contacts, order);

    this.setState({
      contacts: newContacts,
      selected:order
    });
  };

  render() {
    const { contacts, searchFild } = this.state;
    const filterContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchFild.toLocaleLowerCase())
    );
    return (
      <div className="app" data-testid="app">
        <Topbar/>
        
        <Filters 
        handleContactsSearch={this.handleContactsSearch} 
        handleClick={(event, order) =>this.handleClickOrder(event, order)}
        selected={this.state.selected}
        />
        
        <Contacts 
        contacts={filterContacts} 
        loading={this.state.loading}
        />
        
        
      </div>
    );
  }
}

export default App;
