
function getnum(num){
    // console.log(num)
    var result = document.getElementById("result1");
    result.value += num;
}

function clearResult(){
    // console.log(num)
    var result = document.getElementById("result1");
    result.value = "";
}

function Getresult(){
    var result = document.getElementById("result1");
    result.value = eval(result.value)
}