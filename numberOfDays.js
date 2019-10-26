var birthDate=null;
var days=null;

/* Getting birthday date*/
document.getElementById("dateInput").addEventListener("change", function() {
    var input = this.value;
    birthDate=input;
});



/*  Getting todays date */
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();



/*Calculating days difference between today and your birthday*/

function calculate(){

if(birthDate===null){
alert("Please enter your Birth Date and then try again");

}else{

var date1 =new Date(birthDate);
var date2 = new Date(date);
var one_day=1000*60*60*24;
var date1_ms = date1.getTime();
var date2_ms = date2.getTime();
var difference_ms = date2_ms - date1_ms;
var output=Math.round(difference_ms/one_day);
console.log(output);
days=output;

document.getElementById("displayoutput").innerHTML = "You have lived "+output+" days so far ! ";
document.getElementById("displayoutput").className="alert alert-success d-block"


}



}