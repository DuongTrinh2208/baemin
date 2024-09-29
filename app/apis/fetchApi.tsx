import axios from "axios";

const DOMAIN_BE = "http://localhost:8080";

export const login = async (model: any) => {
    const {data} = await axios.post(`${DOMAIN_BE}/customer/login`, model);

    return data;
}

export const signup = async (model: any) => {
    const {data} = await axios.post(`${DOMAIN_BE}/customer/create`, model);

    return data;
}

export const fetchFoodCategory = async () => {
    const {data} = await axios.get(`${DOMAIN_BE}/food/category`);
    return data;
}

export const searchFoods = async (model: any) => {
    const url = `${DOMAIN_BE}/food/find?name=${model.name}`;
    console.log(url);
    const {data} = await axios.get(`${DOMAIN_BE}/food/find?name=${model.name}`);
    console.log(data);
    return data;
}