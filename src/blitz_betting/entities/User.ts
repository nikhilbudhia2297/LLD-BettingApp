export class User {
    static userIdSeq = 0;
    private readonly id : number;
    private readonly name : string;
    private walletCoins : number;

    constructor(name : string, walletCoins : number) {
        this.id = User.userIdSeq++;
        this.name = name;
        this.walletCoins = walletCoins;
    }

    getUserId(){
        return this.id;
    }

    getUsername(): string {
        return this.name;
    }

    getUserCoins(){
        return this.walletCoins;
    }

    deductCoins(coins : number){
        if(this.walletCoins < coins){
            throw new Error(`invalid number of coins for user :${this.id} : coins : ${this.walletCoins} : required coins ${coins}`);
        }
        this.walletCoins -= coins;
    }
}