import { GET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT} from '../actions/types';

const initialState = {
    products: [],
    addedItems: [],
    total: 0   
};

export default function products(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        case ADD_PRODUCT:
            let itemIndex = state.addedItems.findIndex(p => p['id'] === payload.id);
            if (itemIndex > -1) {
                let stateArray = state.addedItems.map(a => { return { ...a } });
                stateArray.find(p => p['id'] === payload.id).unit = payload.unit;
                let newTotal = stateArray.reduce((a, b) => { return a + ((b.unit) * parseInt(b.costPerUnit)) }, 0);
                return {
                    ...state,
                    addedItems: stateArray,
                    total: newTotal
                };
            } else {
                let addedItems = state.products.find(p => p['id'] === payload.id);
                let newTotal = parseInt(addedItems.costPerUnit) + state.total;
                let unitAdded = { ...addedItems, unit: 1 };
                return {
                    ...state,
                    addedItems: [...state.addedItems, unitAdded],
                    total: newTotal
                };
            }
        case REMOVE_PRODUCT:
            let newItems = state.addedItems.filter(p => p['id'] !== payload.id);
            let newTotal = 0;
            if (newItems.length) {
                newTotal = newItems.reduce((a, b) => { return a + ((b.unit) * parseInt(b.costPerUnit)) }, 0);
            }
            return {
                ...state,
                addedItems: newItems,
                total: newTotal                
            };
        default:
            return state;
    }
}