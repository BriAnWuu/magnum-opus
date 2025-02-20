import { api } from "./configs/axiosConfigs";

const AuctionAPI = {
    getAuctionByArtworkId: async (artwork_id) => {
        const response = await api.request({
            url: `/auction?artworkId=${artwork_id}`,
            method: "GET",
        });
        return response.data;
    },
    getBids: async (id) => {
        const response = await api.request({
            url: `/auction/${id}/bids`,
            method: "GET",
        });
        return response.data;
    },
};

export { AuctionAPI };
