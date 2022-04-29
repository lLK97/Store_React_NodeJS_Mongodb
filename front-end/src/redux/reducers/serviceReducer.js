import { INIT_STATE } from "../../constant"
const serviceReducer = (state = INIT_STATE.data, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'DATA_SERVICE':
            return payload
        default:
            return state
    }
}
export default serviceReducer;