class inInformation {
    constructor(arr) {
        this.information = arr // Mảng ds trận đấu
    }
// Hàm hiển thị ds trận đấu
    showInformation() {
        let table = "";
        for (let i = 0; i < this.information.length; i++) {
            table += "<tr>";
            table += "<td>"
            table += this.information[i].match;
            table += "</td>";

            table += "<td>";
            table += this.information[i].result;
            table += "</td>";

            table += "<td>";
            table += this.information[i].day;
            table += "</td>";

            table += "<td>";
            table += this.information[i].time;
            table += "</td>";

            table += "<td>";
            table += this.information[i].money;
            table += "</td>";

            table += "<td>" +
                "<button type='button' onclick='deleteMatch("+ i +")'>Huỷ kèo</button>" +
                "<button type='button' onclick='editMatch(" + i +")'>Sửa kèo</button>" +
                "</td>";

            table += "</tr>";
        }
        document.getElementById("listName").innerHTML = table;
    }



    addMatch(match) {
        this.information.push(match);
    }


    delete(match) {
        this.information.splice(match,1);
    }


    edit(matchEdit, match,result,day,time,money) {
        matchEdit.edit2(match,result,day,time,money);
    }

    findById(id){
        return this.information[id];
    }
}