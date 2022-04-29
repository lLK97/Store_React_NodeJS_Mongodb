import { INIT_STATE } from "../../constant"
const footReducer = (state = INIT_STATE.data, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'DATA_FOOT':
            return payload
        default:
            return state
    }
}
export default footReducer;