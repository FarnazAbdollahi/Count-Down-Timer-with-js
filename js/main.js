function countDown (){
    var final = document.getElementById("date").value;
    finalDate = new Date(final).getTime();
    var timing = setInterval(showTime, 1000); 

function showTime () {
    var atTheMoment = new Date().getTime();
    
    var timeDiff = finalDate - atTheMoment ;
    
    if(timeDiff > 0){
        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
        var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("timer").style.display = 'block';
        document.getElementById("exp").style.display = 'none';

        document.getElementById("showDay").innerHTML = '<b>' + days + '</b><br>' + " D" ; 
        document.getElementById("showDay").style.backgroundColor = '#009688';
        document.getElementById("showDay").style.borderWidth = '30px';
        document.getElementById("showDay").style.borderStyle = 'solid'; 
        document.getElementById("showDay").style.borderColor = 'rgb(178, 223, 219)';

        document.getElementById("showHour").innerHTML = '<b>' + hours + '</b><br>' + " H"; ;
        document.getElementById("showHour").style.backgroundColor = '#009688';
        document.getElementById("showHour").style.borderWidth = '30px';
        document.getElementById("showHour").style.borderStyle = 'solid'; 
        document.getElementById("showHour").style.borderColor = '#rgb(178, 223, 219)';

        document.getElementById("showMin").innerHTML = '<b>' + minutes + '</b><br>' + " M";
        document.getElementById("showMin").style.backgroundColor = '#009688';
        document.getElementById("showMin").style.borderWidth = '30px';
        document.getElementById("showMin").style.borderStyle = 'solid'; 
        document.getElementById("showMin").style.borderColor = 'rgb(178, 223, 219)';

        document.getElementById("showSecond").innerHTML = '<b>' + seconds + '</b><br>' + " S";
        document.getElementById("showSecond").style.backgroundColor = '#009688';
        document.getElementById("showSecond").style.borderWidth = '30px';
        document.getElementById("showSecond").style.borderStyle = 'solid'; 
        document.getElementById("showSecond").style.borderColor = 'rgb(178, 223, 219)';
    }
    else {
        clearInterval(timing); 
        document.getElementById("timer").style.display = 'none';
        document.getElementById("exp").style.display = 'block';
        document.getElementById("exp").innerHTML = '<b>' + "The Time is Over!"; + '</b>';
        document.getElementById("exp").style.color = 'black';
    }
}
}