const url = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true'

const func = function(){
    var data = ""
    fetch(url).then((resp) => resp.json()) 
    .then(function(resp) {

        for(i=0; i< resp.length ; i++)
        {
            var infected = resp[i].infected
            var deceased = resp[i].deceased
            var cured = resp[i].recovered

            if(infected == null)
            infected = "-"
            if(deceased == null)
            deceased = "-"
            if(cured == null)
            cured = "-"
            
            data += "<tr><td>" + resp[i].country + "</td><td>"+ infected +"</td><td>"+ deceased +"</td><td>"+ cured +"</td></tr>";            
        }

        var info = document.getElementById('info')
        info.innerHTML = data
    });  
}

func()