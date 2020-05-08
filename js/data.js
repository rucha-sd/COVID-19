const url = 'https://api.covid19india.org/data.json'
const func = function(){
    var data = ""
    fetch(url).then((resp) => resp.json()) 
    .then(function(resp) {

        console.log(resp.statewise[0].active)
        for(i=1; i< resp.statewise.length ; i++)
        {
            data += "<tr><td>" + resp.statewise[i].state + "</td><td>"+ resp.statewise[i].active +"</td><td>"+ resp.statewise[i].deaths +"</td><td>"+resp.statewise[i].recovered +"</td></tr>";            
        }

        var info = document.getElementById('info')
        info.innerHTML = data
    });  
}

func()