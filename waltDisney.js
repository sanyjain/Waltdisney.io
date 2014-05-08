
function fnLoad(){
	var str = window.location.search;
	//var reg = new RegExp('&|=');
	var list = str.split("&");
	var content1 = list[0];
	var content2 = list[1];
	var content3 = list[2];
	var content4 = list[3];
	var content5 = list[4];
	var dateList1 = content1.split("=");
	var dateList2 = content2.split("=");
	var date1 = dateList1[1];
	var date2 = dateList2[1];
	var finalDate = date1+" - "+date2;
	var re = new RegExp('%2F', 'g');
    finalDate = finalDate.replace(re, '/');
	//alert(content5);
	var adultList = content3.split("=");
	var numAdult = adultList[1]+' Adult(s)';
	var childList = content4.split("=");
	var numChild = childList[1]+' Children';
	var resortName = content5.split("=");
	var villa = resortName[1];
	//alert(villa);
    var villaName = villa.replace(/\+/g, " ");
    //alert(villaName);
    document.getElementById("display_date").innerHTML = finalDate;
    document.getElementById("display_person").innerHTML = numAdult+', '+numChild;
    document.getElementById("display_villa").innerHTML = villaName; 
    document.getElementById("lodge-display").innerHTML = villaName; 
}