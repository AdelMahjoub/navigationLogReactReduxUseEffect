export const PUSH_ROUTE = 'PUSH_ROUTE'

export const pushRoute = (route) => {
  return ({ type: PUSH_ROUTE, payload: route });
}