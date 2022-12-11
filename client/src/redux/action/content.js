import { GET_CONTENT } from "../actionType/actionType";

export const loaContent = (data) => {
    return {
        type: GET_CONTENT,
        payload:data
    };
}