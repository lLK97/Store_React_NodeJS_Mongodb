import { INIT_STATE } from "../../constant"
const dataReducer = (state = INIT_STATE.data, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'DATA_PRODUCT':
            return payload
        default:
            return state
    }
}
export default dataReducer;