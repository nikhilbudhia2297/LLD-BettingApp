import {User} from "../entities/User";
import {Event} from "../entities/Event";

export interface WinningStrategy{
    event : Event;
    declareWinner() : User | null;
}