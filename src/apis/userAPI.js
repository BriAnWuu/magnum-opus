import { api } from "./configs/axiosConfigs";



const UserAPI = {
    update: async (id, body) => {
        const response = await api.request({
            url: `/user/${id}`,
            method: "PATCH",
            data: body,
        })
        return response.status;
    },
}


export {
    UserAPI
};

