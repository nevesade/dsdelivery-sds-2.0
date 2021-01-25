import axios from "axios";

const API_URL = 'http://192.168.1.199:8080';

function fetchOrders(){

    return axios(`${API_URL}/orders`);
}

export default fetchOrders;

export function confirmDelivery(orderId: number)  {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}