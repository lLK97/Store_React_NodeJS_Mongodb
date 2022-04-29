import { INIT_STATE } from "../../constant"
const usersReducer = (state = INIT_STATE.data, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'DATA_USERS':
            return payload
        default:
            return state
    }
}
export default usersReducer;