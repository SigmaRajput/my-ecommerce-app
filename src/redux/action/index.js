export const addCart =(commodity)=>
{
    return{
        type: "ADDITEM",
        payload: commodity
    }

}

export const delCart =(commodity)=>
{
    return{
        type: "DELITEM",
        payload: commodity
    }

}