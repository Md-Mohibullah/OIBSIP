numbers2=''
function sum()
{
    document.getElementById("screen_output").innerHTML=numbers2;
    document.getElementById("input").innerHTML="= "+eval(numbers2);
    numbers2=eval(numbers2);
}
function numbers(numbers1)
{
    if (numbers1=="sqrt"){
        numbers2=Math.sqrt(numbers2,0.5);
        document.getElementById("input").innerHTML=numbers2;
    }
    else{
        numbers2=numbers2+numbers1;
        document.getElementById("input").innerHTML=numbers2;
    }
}
function clear1()
{
    numbers2="0";
    document.getElementById("screen_output").innerHTML='';
    document.getElementById("input").innerHTML=numbers2;
    numbers2="";
}
function del()
{
    numbers2=numbers2.slice(0,numbers2.length-1);
    document.getElementById("input").innerHTML=numbers2;
}
function ans()
{
    numbers2=eval(numbers2);
    document.getElementById("screen_output").innerHTML=numbers2;
    document.getElementById("input").innerHTML="= "+eval(numbers2+numbers2);
    numbers2=eval(numbers2+numbers2);
}