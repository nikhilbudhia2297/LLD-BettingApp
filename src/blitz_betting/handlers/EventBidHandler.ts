import {Event} from "../entities/Event";
import {Bid} from "../entities/Bid";

export class EventBidHandler {
    private readonly event : Event;
    private bids : Bid[];

    constructor(event : Event) {
        this.event = event;
        this.bids = [];
    }

    addUserBid(bid : Bid){
        this.bids.push(bid);
    }

    getAllBids(){
        return this.bids;
    }
}