function open(a) {
    if(a.value=="X"){
        a.innerHTML=" X "
    }else{
        a.innerHTML="☰"
    }
}

const element = document.getElementById('btn')
element.addEventListener("click", () => {
	open(element);
});