import request from "../http/request";

export const _searchMusic = (params: any) => request.get("/search", { params });
