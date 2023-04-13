//your JS code here. If required.

let btn = document.querySelector("input");
btn.addEventListener("click",removeData);
function removeData(){
	let list = document.getElementById("colorSelect");
	list.remove(list.selectedIndex);

}