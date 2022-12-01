//import { authAction } from './authState';
export class Coin{
    block_time_in_minutes:number | undefined;
    id: string | undefined
    name: string | undefined;
    symbol: string | undefined;
}

export class coinState{
    coins:Coin[]=[];
}
export enum coinActionType{
    dealateCoins="dealateCoins",
    refreshCoins= "refreshCoins",
}
export interface authAction{
    type:coinActionType;
    payload?:any;
}
export function dealateCoins(coinName:string):authAction{
    return{type:coinActionType.dealateCoins, payload:null};
}

export function refreshCoins(coins:Coin[]):authAction{
    return{type:coinActionType.refreshCoins, payload:coins};
}

export function coinReducer(currentState:coinState=new coinState
            , action:authAction):coinState{
    const newState= {...currentState};
switch(action.type){
    case coinActionType.dealateCoins:
        newState.coins=[];
        break;

    case coinActionType.refreshCoins:
        newState.coins = action.payload;
        break;
}

    return newState;
}