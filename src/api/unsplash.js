import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID oSF-5uL8nNAKwCLQr2H0YNZyHaLGkb3nOwkEBoSYxAs'
    }
});