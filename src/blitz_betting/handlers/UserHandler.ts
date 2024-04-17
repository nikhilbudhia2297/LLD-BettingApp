import {User} from "../entities/User";

export class UserHandler {
    private userList : Map<number, User>;

    constructor() {
        this.userList = new Map();
    }

    addUser(user : User){
        if(this.userList.get(user.getUserId())){
            console.log(`user : ${user.getUserId()} is already registered`);
            return;
        }
        this.userList.set(user.getUserId(), user);
        console.log(`added user. ID = ${user.getUserId()}, NAME = ${user.getUsername()}`);
    }
}