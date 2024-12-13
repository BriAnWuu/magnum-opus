import { api } from "./configs/axiosConfigs";


const BidAPI = {
    postBid: async (body) => {
        const response = await api.request({
            url: `/bid`,
            method: "POST",
            data: body,
        });
        
        return response.status;
    },
}


export {
    BidAPI
};
