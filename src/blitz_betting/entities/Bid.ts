import {User} from "./User";

export class Bid {
    private static seq = 0;
    private static allowedBids = 5;
    private user : User;
    private amounts : number[];
    private usedAmount : number;

    constructor(user : User, amounts : number[]) {
        if(amounts.length > Bid.allowedBids){
            throw new Error('only 5 bids allowed');
        }
        this.user = user;
        this.amounts = amounts;
        let max = -1;
        for(let i = 0; i < this.amounts.length; i++){
            max = Math.max(max, amounts[i]);
        }
        this.usedAmount = max;
        if(this.user.getUserCoins() < max){
            throw new Error(`user ${user.getUserId()} does not have amount of ${max} coins`);
        }
        this.user.deductCoins(max);
    }

    getUsedAmount(){
        return this.usedAmount;
    }

    getUser(){
        return this.user;
    }
}