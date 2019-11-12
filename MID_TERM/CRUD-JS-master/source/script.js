var selectedRow = null;
var i=0;

var editicon = '<i onClick = "edit(this)" class = "fas fa-edit btnedit"></i>';
var deleteicon = '<i onClick = "deletee(this)" class = "fas fa-trash btndelete"></i>';
var readicon = '<i  onClick="read(this)" id="btnread" class="fab fa-readme btnread" ></i>';
var check = '<input type="checkbox"  name="checkbox" value="checkbox">';

var arrpname = ['Apple Iphone XR', 'Redmi Note 7', 'Redmi Note 7 Pro', 'Lenovo Z2 Plus', 'Honor 7 Plus', 'Sony Bravia 80 cm (32 Inches) Smart TV (Black) ', 'Samsung Galaxy M30 (Gradation Blue, 4+64 GB)', 'OnePlus 7 Pro (Nebula Blue, 8GB RAM, 256GB Storage)', 'Vivo V15 (Aqua Blue, 6GB RAM, 64GB Storage)','Back Cover for Mi Redmi Note 7, Mi Redmi Note 7 Pro (Blue, Grip Case)', 'JBL C150SI Wired Headset with Mic  (Black, In the Ear)', 'HP U1 16 GB MicroSDHC Class 10 100 Mbps Memory Card', 'Syska WC-2A Mobile Charger', 'Huami Amazfit Stratos Black Smartwatch', 'BIRATTY Virtual Reality Glasses 3D VR Box Headsets ', 'Avermedia USB Microphone AM310 Gaming Accessory Kit ', 'Transcend StoreJet 25M3 2.5 inch 1 TB External Hard Disk', 'SanDisk Ultra Dual Drive M3.0 32 GB OTG Drive ','Apple - (Core i5/8 GB DDR3/1 TB/Mac OS X Mavericks/512 MB) ','MSI GS Core i7 8th Gen'];
var arrseller = ['Amazon', 'Flipkart', 'EBay', 'Snapdeal', 'Amazon', 'Flipkart', 'EBay', 'Snapdeal', 'Flipkart','Amazon', 'Flipkart', 'EBay', 'Snapdeal', 'Amazon', 'Flipkart', 'EBay', 'Snapdeal', 'Flipkart','Snapdeal','Amazon'];
var arrprice = ['60999', '10999', '13999', '9999', '46999', '35999', '20999', '36999', '20999','299', '799', '299', '399', '12999', '3999', '10999', '6999', '599','114999','149999'];
var l = arrpname.length;

var page = 1;
var pp;
var con =5;

var pro; //for edit purpose
var sell;
var pri;

var delpro;
var delsell;
var delpri;

function create() {
   var formdata = readformdata();   //creating a new record
    insert(formdata);
    resetform();
    onupdate("create");
    activefunction(1);
}

function readformdata() {    //to read the form in which details are entered
    var formdata = {};    
    formdata["pname"] = document.getElementById("pname").value;
    formdata["seller"] = document.getElementById("seller").value;
    formdata["price"] = document.getElementById("price").value;
    formdata["edit"] = editicon;
    formdata["delete"] = deleteicon;
    formdata["read"] = readicon;
    return formdata;
}

function insert(data) {    //inserting a new row
    var table = document.getElementById("ptable").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);
    var cell8 = newrow.insertCell(7);

    data.id=l+1;
    cell1.innerHTML = check;
    cell2.innerHTML = data.id;
    cell3.innerHTML = data.pname;
    cell4.innerHTML = data.seller;
    cell5.innerHTML = data.price;
    cell6.innerHTML = data.edit;
    cell7.innerHTML = data.delete; 
    cell8.innerHTML = data.read; 
  
    arrpname.push(data.pname);
    arrseller.push(data.seller);
    arrprice.push(data.price);
    l=l+1;
}

function resetform() {    
    document.getElementById("pname").value = "";
    document.getElementById("seller").value = "";
    document.getElementById("price").value = "";
}

function edit(td) {    // editing the record in which this element id is passed 
    row = td.parentElement.parentElement;
        count = td.parentElement;
        
        pp = (((page-1)*con) + row.rowIndex);
    document.getElementById("btn-create").disabled = true;
    document.getElementById("btn-update").disabled = false;
    selectedRow = td.parentElement.parentElement;   // row selected 
    
    document.getElementById("pname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("seller").value = selectedRow.cells[3].innerHTML;
    document.getElementById("price").value = parseInt(selectedRow.cells[4].innerHTML, 10);    

    pro = selectedRow.cells[2].innerHTML;
    sell = selectedRow.cells[3].innerHTML;
    pri =   document.getElementById("price").value;
    
    
}

function send(p){
   page = p; 
}

function send1(concount){
    con = concount; //for deletion sending the concount here
}

function deletee(td) {   
    if (confirm('Are you Sure ?')) {
        row = td.parentElement.parentElement;
        count = td.parentElement;
        
        pp = (((page-1)*con) + row.rowIndex);
        
        delpro = arrpname[pp-1];
        delsell = arrseller[pp-1];
        delpri = arrprice[pp-1];
        
        arrpname.splice(pp-1,1); // pp-1 refers to the variable in the array
        arrseller.splice(pp-1,1);
        arrprice.splice(pp-1,1);

        document.getElementById("ptable").deleteRow(row.rowIndex);    
        resetform();
        document.getElementById("btn-undo").disabled = false; 
        
    } 
    onupdate(p);   
}

function undo(){          
    var temparrpname;
    var temparrseller;
    var temparrprice;

    for(i=arrpname.length;i>=pp;i--){
        temparrpname = arrpname[i-1];
        arrpname[i-1]=arrpname[i];
        arrpname[i] = temparrpname;

        temparrseller = arrseller[i-1];
        arrseller[i-1]=arrseller[i];
        arrseller[i] = temparrseller;

        temparrprice = arrprice[i-1];
        arrprice[i-1]=arrprice[i];
        arrprice[i] = temparrprice;
    }
    arrpname[pp-1] = delpro;
    arrseller[pp-1] = delsell;
    arrprice[pp-1] = delpri;

    document.getElementById("btn-undo").disabled = true; 
    onupdate(1);    
}

function deleteselected() {
    var table = document.getElementById("ptable"); 
    var checkbox = table.getElementsByTagName('input');
  
    if (confirm('Are you Sure ?')) {
    for (var i = 1; i < arrpname.length;i++ ) {
      if(checkbox[i].checked){
        var row = checkbox[i].parentNode.parentNode;
        var ind = (((page-1)*con) + row.rowIndex);
        
        arrpname.splice(ind-1,1);
        arrseller.splice(ind-1,1);
        arrprice.splice(ind-1,1);
        table.deleteRow(i); i--;
      }
    } 
}   document.getElementById("btn-undo").disabled = true; 
    onupdate(p);
}

function checkall() {
    var checkboxes = document.getElementsByTagName('input');
    
    var val = null;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === 'checkbox') {
            if (val === null) val = checkboxes[i].checked;
            checkboxes[i].checked = val;
            document.getElementById("btn-delete").disabled = false; 
        }
    }    
}

function updateform() { // after editing by pressing update, the data gets updated

    var name = document.forms["productform"]["pname"].value;
    var price = document.forms["productform"]["price"].value;
    var seller = document.forms["productform"]["seller"].value;
    var f=0; 
    if (name === "") {
    alert("Product Name must be filled out");
    return false; f=1; 
    }
    if (price === "") {
        alert("Price must be filled out");
        return false; f=1; 
    }
    if (price > 200000){
        alert("Price cannot be greater than 200000");
        return false; f=1; 
    }
    if (seller === "") {
        alert("Seller must be Choosen out");
        return false; f=1; 
    }
    if(f==1){
        edit(this);
    }

    if(f==0){
        selectedRow.cells[2].innerHTML = document.getElementById("pname").value;
        selectedRow.cells[3].innerHTML = document.getElementById("seller").value;
        selectedRow.cells[4].innerHTML = document.getElementById("price").value;

    for( i =0; i < arrpname.length ; i++){
        if(i== (pp -1 )){
            arrpname[i] = selectedRow.cells[2].innerHTML;
            arrseller[i] = selectedRow.cells[3].innerHTML;
            arrprice[i] = selectedRow.cells[4].innerHTML;
        }
    }
    document.getElementById("btn-create").disabled = false;    
    document.getElementById("btn-update").disabled = true;
    resetform(); 

    arrpname.replace(pro,selectedRow.cells[2].innerHTML); // pp-1 refers to the variable in the array
    arrseller.replace(sell, selectedRow.cells[3].innerHTML);
    arrprice.replace(pri,selectedRow.cells[4].innerHTML);
    }

}

function exist() {  
    var table = document.getElementById("ptable");    

    for (i = 1; i <=5  ; i++) {
        var row = table.insertRow(i);
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
    }
}

function login() {
    var str1 = "Admin";
    var str2 = "pass"
    var str3 = document.getElementById("uname").value;
    var str4 = document.getElementById("psw").value;

    if ((str3 === str1) && (str4 === str2)) {
        window.location.assign("../source/home.html");
    } else {
        alert("User Name or Password is Wrong, Kindly check it !")
    }
}

function search() {   //search multiple entities
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myinput");
    filter = input.value.toUpperCase();    
    table = document.getElementById("ptable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        td1 = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            txtValue1 = td1.textContent || td1.innerText;
            
            if ((txtValue.toUpperCase().indexOf(filter) > -1)|| (txtValue1.toUpperCase().indexOf(filter) > -1)) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }        
    }
}

function productvalidate(){
    var name = document.forms["productform"]["pname"].value;
    var price = document.forms["productform"]["price"].value;
    var seller = document.forms["productform"]["seller"].value;
    var f=0; 
    if (name === "") {
    alert("Product Name must be filled out");
    return false; f=1; 
    }
    if (price === "") {
        alert("Price must be filled out");
        return false; f=1; 
    }
    if (price > 200000){
        alert("Price cannot be greater than 200000");
        return false; f=1; 
    }
    if (seller === "") {
        alert("Seller must be Choosen out");
        return false; f=1; 
    }
    if( f === 0 )
    create();
}

function loginvalidate(){
    var name = document.forms["loginform"]["uname"].value;
    var pass = document.forms["loginform"]["psw"].value;
    var f=0; 
    if (name === "") {
      alert("User Name must be filled out");
      return false; f=1; 
    }
    if (pass === "") {
        alert("Password must be filled out");
        return false; f=1; 
    }
    if( f === 0 )
    login();
}

function read(td){
    selectedRow = td.parentElement.parentElement;
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    span.onclick = function() { // When the user clicks on <span> (x), close the modal
        modal.style.display = "none";
    }

    window.onclick = function(event) { // When the user clicks anywhere outside of the modal, close it
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.getElementById("disid").innerHTML =  selectedRow.cells[1].innerHTML;
    document.getElementById("dispro").innerHTML =  selectedRow.cells[2].innerHTML;
    document.getElementById("dissell").innerHTML =  selectedRow.cells[3].innerHTML;
    document.getElementById("disprice").innerHTML =  selectedRow.cells[4].innerHTML;
}