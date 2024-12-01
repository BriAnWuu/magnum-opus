import { api } from "./configs/axiosConfigs";


const ArtworksAPI = {
    get: async (id) => {
        try {
            const response = await api.request({
                url: `/artworks/${id}`,
                method: "GET",
            })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    getAll: async () => {
        try {
            const response = await api.request({
                url: '/artworks',
                method: "GET",
            })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
}

export {
    ArtworksAPI
};
