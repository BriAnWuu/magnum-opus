import { api } from "./configs/axiosConfigs";


const ArtworksAPI = {
    get: async (id) => {
        const response = await api.request({
            url: `/artworks/${id}`,
            method: "GET",
        })
        return response.data;
    },
    getAll: async (query = null) => {
        const response = await api.request({
            url: '/artworks',
            method: "GET",
            params: {
                q: query,
            },
        })
        return response.data;
    },
}


export {
    ArtworksAPI
};
