import {UserEventRegistration} from "../entities/UserEventRegistration";
import {User} from "../entities/User";
import {Event} from "../entities/Event";

export class EventRegistrationHandler{
    private readonly event : Event;
    private registrations : UserEventRegistration[];

    constructor(event : Event) {
        this.event = event;
        this.registrations = [];
    }

    registerUserForEvent(user : User){
        const reg = new UserEventRegistration(user, this.event);
        this.registrations.push(reg);
        // console.log(`registerUserForEvent: ${JSON.stringify(reg)}`);
    }

    checkIsUserRegistered(user : User){
        return this.registrations.find((reg : UserEventRegistration) => reg.getUser());
    }

    getRegistrations(){
        return this.registrations;
    }
}