import {UserHandler} from "./handlers/UserHandler";
import {EventHandler} from "./handlers/EventHandler";
import {User} from "./entities/User";
import {Event} from "./entities/Event";
import {Bid} from "./entities/Bid";

export class BlitzBettingApp{
    private userHandler : UserHandler;
    private eventHandler : EventHandler;

    constructor(){
        this.userHandler = new UserHandler();
        this.eventHandler = new EventHandler();
    }

    addUser(user : User){
        this.userHandler.addUser(user);
    }

    addEvent(event : Event){
        this.eventHandler.addEvent(event);
    }

    registerUserForEvent(user : User, event : Event){
        event.registerUser(user);
    }

    addUserBids(user : User, event : Event, bids : number[]){
        const newBid = new Bid(user, bids);
        event.addBid(newBid);
    }

    declareWinner(event : Event){
        event = this.eventHandler.getEvent(event);
        event.declareWinner();
    }

    getPastWinners(){

    }
}
