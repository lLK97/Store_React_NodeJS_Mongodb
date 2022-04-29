import { INIT_STATE } from "../../constant"
const menuReducer = (state = INIT_STATE.data, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'DATA_MENU':
            return payload
        default:
            return state
    }
}
export default menuReducer;