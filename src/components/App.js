import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID oSF-5uL8nNAKwCLQr2H0YNZyHaLGkb3nOwkEBoSYxAs'
            }
        });
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>)
    }
    
}

export default App;