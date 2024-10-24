/* eslint-disable @typescript-eslint/no-explicit-any */
import { IActivity } from "../Models/activity-model";

interface Action {
    type: string;
    payload: any;
}

const activityReducer = (state: { activities: IActivity[] }, action: Action) => {
    switch (action.type) {
        case 'SET_ACTIVITIES':
            return {
                ...state,
                activities: action.payload
            }
        case 'ADD_ACTIVITY':
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case 'COMPLETE_ACTIVITY':
            return {
                ...state,
                activities: state.activities.map((activity: IActivity) => {
                    if (activity.id === action.payload) {
                        activity.completed = true;
                    }
                    return activity;
                })
            }
        default:
            return state;
    }
}

export default activityReducer;