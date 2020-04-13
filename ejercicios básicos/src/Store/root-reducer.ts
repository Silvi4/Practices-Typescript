import { Dispatch,Action, Reducer } from 'redux';

export interface InitialState {
    name: string;
    address: string;
}

export const initialState: InitialState = {
    name: '',
    address: '',
};

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<InitialState>;
}

export enum ActionType {
    UpdateName,
    UpdateAddress,
    DeleteName,
    DeleteAddress,
}

export const rootReducer: Reducer<InitialState | any, DispatchAction> = (state = initialState, action) => {
    switch(action.type) {
        case ActionType.UpdateName:
            return { ...state, name: action.payload.name }
        case ActionType.DeleteName:
            return { ...state, name: ''}
        case ActionType.DeleteAddress:
            return { ...state, address: ''}
        case ActionType.UpdateAddress:
            return { ...state, address: action.payload.address || ''}
        default:
            return state
    }
}

export class RootDispatcher {
    
    private readonly dispatch: Dispatch<DispatchAction>;
    
    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch; 
    }
    updateName = (name: string) => this.dispatch({type: ActionType.UpdateName, payload: {name}});
    
    updateAddress = (address: string) => this.dispatch({type: ActionType.UpdateAddress, payload: {address}});
    
    deleteName = () => this.dispatch({type: ActionType.DeleteName, payload: {}});
    
    deleteAddress = () => this.dispatch({type: ActionType.DeleteAddress, payload: {}})
}