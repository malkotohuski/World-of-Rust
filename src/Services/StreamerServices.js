import { mainRequest } from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/heroes";

export const heroServiceFactory = (token) => {
    const request = mainRequest(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const heroes = Object.values(result);

        return heroes;
    };

    const getOne = async (heroId) => {
        const result = await request.get(`${baseUrl}/${heroId}`);

        return result;
    };

    const create = async (heroData) => {
        const result = await request.post(baseUrl, heroData);

        return result;
    };

    const addComment = async (gameId, data) => {
        const result = await request.post(
            `${baseUrl}/${gameId}/comments`,
            data
        );

        return result;
    };

    return {
        getAll,
        getOne,
        create,
        addComment,
    };
};
