import { api } from "./configs/axiosConfigs";


const AuctionAPI = {
    get: async (id) => {
        const response = await api.request({
            url: `/auction/${id}`,
            method: "GET",
        })
        return response.data;
    },
    getBids: async (id) => {
        const response = await api.request({
            url: `/auction/${id}/bids`,
            method: "GET",
        })
        return response.data;
    },
}


export {
    AuctionAPI
};
