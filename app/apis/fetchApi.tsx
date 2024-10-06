import axios from "axios";

const DOMAIN_BE = "http://localhost:8080";

export const login = async (model: any) => {
    const { data } = await axios.post(`${DOMAIN_BE}/customer/login`, model);

    return data;
}

export const signup = async (model: any) => {
    const { data } = await axios.post(`${DOMAIN_BE}/customer/create`, model);

    return data;
}

export const fetchFoodCategory = async () => {
    const { data } = await axios.get(`${DOMAIN_BE}/food/category`);
    return data;
}

export const searchFoods = async (model: any) => {
    const url = `${DOMAIN_BE}/food/find?name=${model.name}`;

    const { data } = await axios.get(`${DOMAIN_BE}/food/find?name=${model.name}`);

    return data;
}

export const fetchAllFoods = async () => {
    const { data } = await axios.get(`${DOMAIN_BE}/food/list`);
    return data;
}

export const getStoreData = async (model: any) => {
    const { data } = await axios.get(`${DOMAIN_BE}/food/store?storeId=${model.storeId}`);
    console.log(data);
    return data;
}

export const getFoodsInStoreData = async (model: any) => {
    const { data } = await axios.get(`${DOMAIN_BE}/food/storeFoods?storeId=${model.storeId}`);
    console.log(data);
    return data;
}

export const createOrder = async (model: any) => {
    const { storeId, listFoods } = model;
    const token = localStorage.getItem('jwtToken');

    if (token == null) {
        return null;
    }

    const data = await axios.post(`${DOMAIN_BE}/order/create-order`, {
        storeId,
        listFoods
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}

export const getOrderFoods = async (model: any) => {
    const { orderId } = model;
    const token = localStorage.getItem('jwtToken');

    if (token == null) {
        return null;
    }
    const data = await axios.get(`${DOMAIN_BE}/order/get-order?orderId=${orderId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}

export const payOrder = async (model: any) => {
    const {orderId} = model;
    const token = localStorage.getItem('jwtToken');

    if (token == null) {
        return null;
    }
    const data = await axios.post(`${DOMAIN_BE}/order/pay-order`, 
        {
            orderId
        },
        {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}