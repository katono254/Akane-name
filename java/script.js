var male=["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame",];
var female=["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
function flopper() {
    var greg=""
    var gender=document.forms["myForm"]["gender"].value;
    var date=document.forms["myForm"]["bday"].value;
    var charger=new Date(date);
    var katono=charger.getDay();
    if (gender==="male"){
        greg=male[katono];
    }else if(gender===female){
        greg=female[katono];
    }else{
        alert("invalid option")
    }
    alert(greg)
}