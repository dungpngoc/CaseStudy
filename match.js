let match = new Information("A vs B",11,"23/11/2022",22,100)
let arr = [match];
let manage = new inInformation(arr);

function addMatch() {
    let match1 = document.getElementById("match").value;
    let result = document.getElementById("result").value;
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;
    let money = document.getElementById("money").value;

    let match =  new Information(match1,result,day,time,money);
    manage.addMatch(match);
    manage.showInformation();
    clear();
}

function clear(){
    document.getElementById("match").value = "";
    document.getElementById("result").value = "";
    document.getElementById("day").value = "";
    document.getElementById("time").value = "";
    document.getElementById("money").value = "";
}

function deleteMatch(match){
    manage.delete(match);
    manage.showInformation();
}
let matchid = 0
function editMatch(match){
    let matchEdit = manage.findById(match);
    document.getElementById("match").value = matchEdit.match;
    document.getElementById("result").value = matchEdit.result;
    document.getElementById("day").value = matchEdit.day;
    document.getElementById("time").value= matchEdit.time;
    document.getElementById("money").value = matchEdit.money;

    matchid = match
}

function updateMatch() {
    let match1 = document.getElementById("match").value;
    let result = document.getElementById("result").value;
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;
    let money = document.getElementById("money").value;

    let matchEdit = manage.findById(matchid);
    manage.edit(matchEdit, match1,result,day,time,money);
    manage.showInformation();
    clear();
}


manage.showInformation();