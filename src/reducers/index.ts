export const GET_LAUNCHES = 'spacex/launches/LOAD';
export const GET_LAUNCHES_SUCCESS = 'spacex/launches/LOAD_SUCCESS';
export const GET_LAUNCHES_FAIL = 'spacex/launches/LOAD_FAIL';
export const GET_LAUNCHPADS = 'spacex/launchpads/LOAD';
export const GET_LAUNCHPADS_SUCCESS = 'spacex/launchpads/LOAD_SUCCESS';
export const GET_LAUNCHPADS_FAIL = 'spacex/launchpads/LOAD_FAIL';

export default function reducer(state = { launches: [], launchpads: [] }, action: any) {
    switch (action.type) {
        case GET_LAUNCHES:
            return { ...state, loading: true };
        case GET_LAUNCHES_SUCCESS:
            return { ...state, loading: false, launches: action.payload.data };
        case GET_LAUNCHES_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching launches'
            };
        case GET_LAUNCHPADS:
            return { ...state, loading: true };
        case GET_LAUNCHPADS_SUCCESS:
            return { ...state, loading: false, launchpads: action.payload.data };
        case GET_LAUNCHPADS_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching launch pads'
            };
        default:
            return state;
    }
}

export function listLaunches(limit: number, offset: number) {
    return {
        type: GET_LAUNCHES,
        payload: {
            request: {
                url: `/launches?limit=${limit}&offset=${offset}&order=desc`
            }
        }
    };
}

export function listLaunchpads() {
    return {
        type: GET_LAUNCHPADS,
        payload: {
            request: {
                url: `/launchpads`
            }
        }
    };
}