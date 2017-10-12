var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Atlyginimas',
            data: [],
            backgroundColor: [
                
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: 'Amžius',
            data: [],
            backgroundColor: [
                'rgba(255,99,132,0)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 2,
            type: 'line'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



var ctx = document.getElementById("myRadar").getContext('2d');
var myRadar = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    
});

seima_name = [];
totalsum = 0;
seima_m = [];
pro = [];
function bam_add() {
    myChart.data.labels.push(document.getElementById('box_name').value);
    myChart.data.datasets[1].data.push(document.getElementById('box_age').value);
    myChart.data.datasets[0].data.push(document.getElementById('box_m').value);
    seima_name.push(document.getElementById('box_name').value);
    seima_m.push(parseInt(document.getElementById('box_m').value));
    totalsum = 0;
    push_radar(seima_name,seima_m);
    if(parseInt(document.getElementById('box_m').value) <= 380){
        myChart.data.datasets[0].backgroundColor.push('rgba(255,99,132,0.5)',);
    } else {
        myChart.data.datasets[0].backgroundColor.push('rgba(153, 102, 255, 0.5)',);
    }
    myChart.update();
    myRadar.update();
}

/*function bam_add(){
    if (document.getElementById('box_name').value !== '') {
        if (document.getElementById('box_age').value !== '') {
    myChart.data.labels.push(document.getElementById('box_name').value);
    myChart.data.datasets[0].data.push(document.getElementById('box_age').value);
    myChart.update();
    } else {
        alert('Laukas amžius yra tuščias');
    }
} else {
    alert('Laukas vardas yra tuščias');
}
};*/

function push_radar(seima_name,seima_m){
        myRadar.data.labels = [];
        myRadar.data.datasets[0].data = []; 
        pro = [];
        count_array(seima_m);
    for (var i = 0; i < seima_name.length; i++) {

        
        myRadar.data.labels.push(seima_name[i] + " " + pro[i] + "%");
        myRadar.data.datasets[0].data.push(seima_m[i]);
        
    }
    myRadar.update();
}

function count_array(taip){
    for (var i = taip.length - 1; i >= 0; i--) {
        totalsum += taip[i];
        
    }
    sitas(taip);
}

function sitas(taip){
    for (var i = 0; i < taip.length; i++) {
        pro.push(((taip[i]/totalsum)*100).toFixed(2));
    }
}

function bam_remove() {
    myChart.data.labels.pop();
    myChart.data.datasets[0].data.pop();
    myChart.update();
    
};
function bam_clear(){
        myChart.data.labels = [];
        myChart.data.datasets[0].data = [];
        myChart.data.datasets[1].data = [];
        myChart.update();
};

