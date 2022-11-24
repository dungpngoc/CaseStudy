class Information {
    constructor(match,result,day,time,money) {
        this.match = match;
        this.result = result;
        this.day = day;
        this.time = time;
        this.money = money;
    }
    getMatch() {
        return this.match;
    }
    getResult() {
        return this.result;
    }
    getDay() {
        return this.day;
    }
    getTime(){
        return this.time;
    }
    getMoney() {
        return this.money;
    }
    setMatch(match) {
        this.match = match;
    }
    setResult(result) {
        this.result = result;
    }
    setDay(day) {
        this.day = day;
    }
    setTime(time) {
        this.time = time;
    }
    setMoney(money) {
        this.money = money;
    }
    edit2(match,result,day,time,money) {
        this.match = match;
        this.result = result;
        this.day = day;
        this.time = time;
        this.money = money;
    }
}
