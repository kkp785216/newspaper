const action = (action) => {
    return (dispatch) => {
        switch (action.type) {
            case 'Hello':
                dispatch({
                    type: 'Hello',
                    payload: {
                        name: "Krishna"
                    }
                });
                break;

            default:
                break;
        }
    }
}

export default action