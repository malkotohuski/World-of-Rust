import * as request from "./requester";

const baseUrl = "/http://localhost:3030/jsonstore/comments";

export const getAll = async (heroId) => {
    const query = encodeURIComponent(`heroId=${heroId}`);

    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
};
