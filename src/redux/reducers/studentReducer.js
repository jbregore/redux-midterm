import * as actionTypes from "../types";

const initialState = {
    studentList: [],
    topStudent: [],
    viewOneStudent: {},
    error: null,
};

function studentReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.VIEW_ONE_STUDENT: {
            return {
                ...state,
                viewOneStudent: action.payload,
                error: null,
            };
        }
        case actionTypes.SET_GOSEARCH: {
            return {
                studentList: action.payload,
                error: null,
            };
        }
        case actionTypes.SET_TOPSTUDENT: {
            return {
                ...state,
                topStudent: action.payload,
                error: null,
            };
        }
        case actionTypes.SET_LIST: {
            return {
                ...state,
                studentList: action.payload,
                error: null,
            };
        }
        default:
            return {
                ...state,
            };
    }
}

export default studentReducer;
