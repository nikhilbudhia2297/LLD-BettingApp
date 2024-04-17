import {BlitzBettingApp} from "./BlitzBettingApp";
import {User} from "./entities/User";
import {Event} from "./entities/Event";
import {Item} from "./entities/Item";

export class Main{
    static run(){
        const app = new BlitzBettingApp();
        const user1 = new User('User 1', 1000);
        const user2 = new User('User 2', 2000);
        const user3 = new User('User 3', 3000);
        const user4 = new User('User 4', 4000);
        app.addUser(user1);
        app.addUser(user2);
        app.addUser(user3);
        app.addUser(user4);


        const item1 = new Item('Item 1');
        const event1 = new Event('Event 1', item1);

        app.addEvent(event1);

        app.registerUserForEvent(user1, event1);
        app.registerUserForEvent(user2, event1);
        app.registerUserForEvent(user3, event1);
        app.registerUserForEvent(user4, event1);

        app.addUserBids(user1, event1, [10,20,30,40]);
        app.addUserBids(user2, event1, [100,20,300,40]);
        app.addUserBids(user3, event1, [105,210,30,405]);
        app.addUserBids(user4, event1, [101,20,300,400]);

        app.declareWinner(event1);
    }
}

Main.run();