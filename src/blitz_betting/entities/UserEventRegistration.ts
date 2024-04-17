import {User} from "./User";
import {Event} from "./Event";

export class UserEventRegistration {
    static seq = 0;
    private readonly id : number
    private readonly user : User;
    private readonly event : Event;
    private readonly registrationDate : Date;

    constructor(user : User, event : Event) {
        this.id = UserEventRegistration.seq++;
        this.registrationDate = new Date();
        this.user = user;
        this.event = event;
    }

    getUser(){
        return this.user;
    }

}