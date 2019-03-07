import { PUSH_ROUTE } from '../actions/navigationLogActions';

export const defaultState = { routes: [] }
const defaultAction = { type: '', payload: null }

const navigationLogReducer = (
  state = defaultState,
  action = defaultAction
) => {
  switch (action.type) {
    case PUSH_ROUTE:
      return {
        ...state,
        routes: [...state.routes, action.payload]
      }
    default:
      return state
  }
}

export default navigationLogReducer;