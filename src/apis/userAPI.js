import { api } from "./configs/axiosConfigs";



const UserAPI = {
    follow: async (id, body) => {
        const response = await api.request({
            url: `/user/${id}`,
            method: "PATCH",
            data: body,
        })
        console.log(response.data)
        return response.status;
    },
}


export {
    UserAPI
};

