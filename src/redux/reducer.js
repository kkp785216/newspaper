export const initialState = {

}

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'Hello':
            return {
                ...state,
                name: payload.name
            }

        default:
            return state
    }
}