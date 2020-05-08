const url = 'https://api.covid19india.org/data.json'
const url2 = 'https://api.thevirustracker.com/free-api?global=stats'
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

    wcured.innerHTML = resp2.results[0].total_recovered;
    wactive.innerHTML = resp2.results[0].total_active_cases;
    death.innerHTML = resp2.results[0].total_deaths;

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
