import axios from "axios";

const API_URL = 'https://nevesade-sds2.herokuapp.com';

function fetchOrders(){

    return axios(`${API_URL}/orders`);
}

export default fetchOrders;

