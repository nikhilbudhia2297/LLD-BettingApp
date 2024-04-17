import {Item} from "./Item";
import {User} from "./User";
import {EventStatus} from "../enums/EventStatus";
import {EventRegistrationHandler} from "../handlers/EventRegistrationHandler";
import {WinningStrategy} from "../winning_strategy/WinningStrategy";
import {MinBidWinningStrategy} from "../winning_strategy/MinBidWinningStrategy";
import {EventBidHandler} from "../handlers/EventBidHandler";
import {Bid} from "./Bid";

export class Event{
    private static _eventIdSeq = 0;
    private readonly _id : number;
    private readonly _name : string;
    private readonly _prizeItem : Item;
    private readonly _date : Date;
    private status : EventStatus;

    private winner : User | null;
    private registrations : EventRegistrationHandler;
    private eventBids : EventBidHandler;
    private winningStrategy : WinningStrategy;

    constructor(name : string, prizeItem : Item){
        this._id = Event._eventIdSeq++;
        this._name = name;
        this._prizeItem = prizeItem;
        this._date = new Date();
        this.winner = null;
        this.status = EventStatus.STARTED;
        this.registrations = new EventRegistrationHandler(this);
        this.eventBids = new EventBidHandler(this);
        this.winningStrategy = new MinBidWinningStrategy(this);
    }

    static get eventIdSeq(): number {
        return this._eventIdSeq;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get prizeItem(): Item {
        return this._prizeItem;
    }

    get date(): Date {
        return this._date;
    }

    registerUser(user : User){
        this.registrations.registerUserForEvent(user);
    }

    getBids(){
        return this.eventBids;
    }

    addBid(bid : Bid){
        this.eventBids.addUserBid(bid);
    }


    declareWinner(){
        this.winningStrategy.declareWinner();
    }

    private setWinner(user : User): void {
        this.winner = user;
        this.status = EventStatus.COMPLETED;
    }

}