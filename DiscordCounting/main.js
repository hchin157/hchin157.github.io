/*Chart 1*/
var ctx = document.getElementById('summaryChart');
var ctx2 = document.getElementById('scoreChart');

var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: frameworks,
            datasets: [{
                label: 'Github Stars',
                data: stars
            }]
        },
        options: {
          maintainAspectRatio: true,
          responsive: true,
        }
});

var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: frameworks,
            datasets: [{
                label: 'Github Stars',
                data: stars
            }]
        },
        options: {
          maintainAspectRatio: true,
        }
});


let summaryPage = document.querySelector(".summary");
let scorePage = document.querySelector(".score");

summaryPage.style.display = "none";
scorePage.style.display = "none";
