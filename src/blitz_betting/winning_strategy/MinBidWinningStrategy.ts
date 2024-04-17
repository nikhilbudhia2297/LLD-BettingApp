import {WinningStrategy} from "./WinningStrategy";
import {Event} from "../entities/Event";
import {User} from "../entities/User";

export class MinBidWinningStrategy implements WinningStrategy{
    event : Event;

    constructor(event : Event) {
        this.event = event;
    }

    declareWinner(): User | null {
        const bids = this.event.getBids().getAllBids();
        let minAmt = 100000000;
        let winner : User | null = null ;
        for(let bid of bids){
            if(bid.getUsedAmount() < minAmt){
                minAmt = bid.getUsedAmount();
                winner = bid.getUser();
            }
        }
        console.log(`WINNER for event ${this.event.name} is ${winner?.getUserId()}`);
        return winner;
    }
}