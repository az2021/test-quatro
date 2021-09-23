import { makeServer } from "../../server";
window.server = makeServer()
export const GET_ALL = "GET_ALL"

export const getAll = () => {

    return async dispatch => {
        let res = await fetch("/api/restaurents");
        let data = await res.json();
        dispatch({
            type: GET_ALL,
            data: data.restaurents
        })
    }
}