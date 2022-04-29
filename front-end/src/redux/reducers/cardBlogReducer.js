import { INIT_STATE } from "../../constant"
const cardReducer = (state = INIT_STATE.data, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'DATA_CARDBLOG':
            return payload
        default:
            return state;
    }
}
export default cardReducer;