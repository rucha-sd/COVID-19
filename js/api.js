const url = 'https://api.covid19india.org/data.json'
const url2 = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true'
const ia = document.getElementById('ind_active')
const ir = document.getElementById('ind_rec')
const id = document.getElementById('ind_death')

particlesJS.load('particles-js', 'particles.json');

window.onload = function(){
    fetch(url).then((resp) => resp.json()) 
    .then(function(data) {
    india_act = data.statewise[0].active
    india_death = data.statewise[0].deaths
    india_rec = data.statewise[0].recovered
    ir.innerHTML = india_rec
    id.innerHTML = india_death
    ia.innerHTML = india_act
    }).then(function() {
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',    
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
          });
    })

    fetch(url2).then((resp2) => resp2.json()) 
    .then(function(resp2){
    var wcured =  document.getElementById('world_cured')
    var death = document.getElementById('world_deaths')
    var wactive = document.getElementById('world_active')

    var total_deaths = 0
    var total_active_cases = 0
    var total_recovered = 0

    for(i in resp2)
    {
        if(resp2[i].infected!="NA" && resp2[i].infected!=null)
        total_active_cases += resp2[i].infected
    }
    for(i in resp2)
    {
        if(resp2[i].deceased!="NA" && resp2[i].deceased!=null)
        total_deaths += resp2[i].deceased
    }
    for(i in resp2)
    {
        if(resp2[i].recovered!="NA" && resp2[i].recovered!=null)
        total_recovered += resp2[i].recovered
    }

    wcured.innerHTML = total_recovered;
    wactive.innerHTML = total_active_cases;
    death.innerHTML = total_deaths;

    console.log('Done')}).then(function() {
        $('.count2').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
          });
    })
}
