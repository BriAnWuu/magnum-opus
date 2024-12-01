import { api } from "./configs/axiosConfigs";


const AuctionAPI = {
    get: async (id) => {
        try {
            const response = await api.request({
                url: `/auction/${id}`,
                method: "GET",
            })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    getBids: async (id) => {
        try {
            const response = await api.request({
                url: `/auction/${id}/bids`,
                method: "GET",
            })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
}


export {
    AuctionAPI
};
