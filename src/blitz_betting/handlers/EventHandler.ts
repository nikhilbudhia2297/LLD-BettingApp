import {Event} from "../entities/Event";

export class EventHandler{
    private eventList : Event[];

    constructor() {
        this.eventList = [];
    }

    getEvent(event : Event) {
        return this.eventList.find((e : Event)=> e == event)!;
    }

    addEvent(event : Event){
        this.eventList.push(event);
        console.log(`added event : NAME : ${event.name} PRIZE : ${event.prizeItem}`)
    }

}