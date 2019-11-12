var concount;
var pno;

function onupdate(pageno = 1) {
    var table = document.getElementById("ptable");
    deleteall();
    concount = document.getElementById("pageno").value; //takes 5/10/15/20 - contentcount
    var rem = arrpname.length / concount;

    if(pageno == "next"){
        document.getElementById("1").value = parseInt(document.getElementById("1").value, 10) + 1;
        pageno = document.getElementById("1").value;
    } else if ( pageno == "pre") {
        document.getElementById("pre").disabled = false;
        document.getElementById("1").value = parseInt(document.getElementById("1").value, 10) - 1;
        pageno = document.getElementById("1").value;       
    } else if(pageno == "create"){
        document.getElementById("1").value =1 ;
        pageno = 1; 
    } else if(pageno > Math.ceil(rem)){
        alert("Enter a proper Page number, redirecting to page number 1");
        document.getElementById('go').value = "";
        document.getElementById("1").value =1;
        pageno = 1;
    }else { document.getElementById("1").value = pageno;
    }

    if(pageno == 1){
            document.getElementById("pre").disabled = true;
        } else{
            document.getElementById("pre").disabled = false;
        }

    send(pageno);    
    send1(concount);        
        
    if( Math.ceil(rem) == pageno )
    {
        document.getElementById("next").disabled = true;
    } else{
            document.getElementById("next").disabled = false;
    }

    var j = 1;
    j = (concount * (pageno-1)) + 1; //sending the first element of the table to be displayed
    print(j);

    resetform();
}

function print(no) {
    var table = document.getElementById("ptable");
    var i = no;
    var j = 1;
    while (i <= arrpname.length && j <= concount) {

        var row = table.insertRow(j);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell1.innerHTML = check;
        cell2.innerHTML = i;
        cell3.innerHTML = arrpname[i - 1];
        cell4.innerHTML = arrseller[i - 1];
        cell5.innerHTML = arrprice[i - 1];
        cell6.innerHTML = editicon;
        cell7.innerHTML = deleteicon;
        cell8.innerHTML = readicon;

        j++;
        i++;
    }
}

function deleteall() {
    var table = document.getElementById("ptable");
    var rowCount = table.rows.length;
    for (var i = 1; i < rowCount; i++) {

        table.deleteRow(i);
        rowCount--;
        i--;
    }
}

function page_click(clicked_id) {
    onupdate(clicked_id);
}

function gotopage(){
    pno= document.getElementById('go').value;
                    
    if( pno!=="" && pno> 0){
        onupdate(pno);
    }else {alert("Enter a proper value");
    }

    document.getElementById('go').value="";
}
 	
 

