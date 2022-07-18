import Commodity from "../../component/Commodity";

const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === Commodity.id)
            if (exist) {
                return state.map((x) => x.id === Commodity.id ? { ...x, qty: x.qty + 1 } : x);
            }
            else {
                const product = action.payload
                return [
                    ...state, {
                        ...Commodity,
                        qty: 1
                    }
                ]
            }
            break;
            case "DELITEM":
                const exist1 = state.find((x) => x.id === Commodity.id)
            if (exist1.qty === 1) {
                return state.filter((x) => x.id === Commodity.id);
            }
            else{
                return state.map((x) => x.id === Commodity.id ? { ...x, qty: x.qty - 1 } : x);
            }
            break;
        default:
            return state;
            break;


    }
}

export default handleCart;