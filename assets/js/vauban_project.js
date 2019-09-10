$(document).ready(function(){

    //Leads Card bar chart

    new Chart(document.getElementById("bar-chart-leads"), {
        type: 'bar',
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
                {
                    label: "Number of views",
                    backgroundColor: ["#fff", "#fff","#fff","#fff","#fff"],
                    data: [60,50,1,20,30],
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            responsive: false
        }
    });

    //Total Pending Card bar chart

    new Chart(document.getElementById("bar-chart-pending"), {
        type: 'bar',
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
                {
                    label: "Number of pending",
                    backgroundColor: ["#fff", "#fff","#fff","#fff","#fff"],
                    data: [60,70,20,30,40],
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            responsive: false
        }
    });


    //Case Closed Card bar chart

    new Chart(document.getElementById("bar-chart-closed"), {
        type: 'bar',
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
                {
                    label: "Number of pending",
                    backgroundColor: ["#fff", "#fff","#fff","#fff","#fff"],
                    data: [60,70,20,30,40],
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            responsive: false
        }
    });


    //Completed Tasks Card bar chart

    new Chart(document.getElementById("bar-chart-completed"), {
        type: 'bar',
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
                {
                    label: "Completed tasks",
                    backgroundColor: ["#fff", "#fff","#fff","#fff","#fff"],
                    data: [60,80,70,30,50],
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            responsive: false
        }
    });

    //Sales in 2014 Card line chart

    var ctx = document.getElementById('line-chart-sales').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);

    //gradient for coloured line
    gradientStroke.addColorStop(0, '#4051B4');
    gradientStroke.addColorStop(0.125, '#634E93');
    gradientStroke.addColorStop(0.25, '#8E4A6D');
    gradientStroke.addColorStop(0.375, '#8E4A6D');
    gradientStroke.addColorStop(0.5, '#ED4D15');
    gradientStroke.addColorStop(0.625, '#FD6A00');
    gradientStroke.addColorStop(0.75, '#BCAC1E');
    gradientStroke.addColorStop(0.875, '#79AE3C');
    gradientStroke.addColorStop(1, '#51B04E');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
                data: [8600,114,1067,106,1707,1161,1353,26621,7843,2478],
                label: "Sales",
                fill: false,
                borderWidth: 5,
                borderColor: gradientStroke,
                pointBorderColor: gradientStroke,
                pointBackgroundColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 0,
            },
            ]
        },
        options: {
            title: {
                display: false,
                text: 'Sales'
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            legend: { display: false },
            responsive: false,
            borderWidth: 20
        }
    });

    //Activities Card pie chart
    new Chart(document.getElementById("activities-pie-chart"), {
        type: 'pie',
        data: {
            labels: ["Chrome", "Safari", "Firefox"],
            datasets: [{
                label: "Browsers",
                backgroundColor: ["#313FA0", "#38B5EF","#4CB050"],
                data: [2478,4267,1734]
            }]
        },
        options: {
            title: {
                display: true,
                text: ''
            },
            responsive: false,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 15,
                }
            }
        }
    });

    //Analytics Card bar chart
    new Chart(document.getElementById("analytics-bar-chart"), {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Users",
                    backgroundColor: "#313FA0",
                    data: [2478,5267,7134,1784,433, 1456, 458,102,1100,1250,5100,150]
                },
                {
                    label: "Customers",
                    backgroundColor: "#3F51B5",
                    data: [23,527,74,84,33, 415, 58,110,10,15,10,510]
                }
            ]
        },
        options: {
            legend: { display: true },
            title: {
                display: false,
                text: 'Users and customers'
            },
            scales: {
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                }],
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                }]
            },
        }
    });

    //if there are checkboxes checked, add a line trough the label
    $('.checkbox-label input').each(function () {
        if($(this).is(':checked')){
            $(this).parent().addClass('line-trough');
        }
    });

    //if the checkbox is pressed, check if it is checked and add or remove line trough label
    $('.checkbox-label input').on('change', function () {
        if($(this).is(':checked')){
            $(this).parent().addClass('line-trough');
        } else {
            $(this).parent().removeClass('line-trough');
        }
        var completed = $( ".checkbox-label input:checked" ).length;
        $('#clear-completed').html('Clear Completed ( ' + completed + ')');
    });

    //event for click on toggle all button
    $('#todo-toggle-all').on('click', function () {
        $('.checkbox-label input').each(function () {
            $(this).parent().toggleClass('line-trough');
            $(this).trigger('click');

        });
        var completed = $( ".checkbox-label input:checked" ).length;
        $('#clear-completed').html('Clear Completed ( ' + completed + ')');
    });

    //removes completed tasks from list
    $('#clear-completed').on('click', function () {
        $('.checkbox-label input').each(function () {
            if($(this).is(':checked')){
                $(this).parent().remove();
            }
        });
    });

    //counts number of completed tasks and adds it to button text
    var completed = $( ".checkbox-label input:checked" ).length;
    $('#clear-completed').html('Clear Completed ( ' + completed + ')');

    //open sidebar menu on mobile
    $('.open-menu').on('click', function () {
        $('#main-sidebar').css('width', '100%');
        $('#main-sidebar').css('display', 'block');
        $('#main-sidebar').css('position', 'inherit');
        $('.close-menu').css('display', 'block');
        $('.open-menu').css('display', 'none');
    });

    //close sidebar menu on mobile
    $('.close-menu').on('click', function () {
        $('#main-sidebar').css('width', '0');
        $('#main-sidebar').css('display', 'none');
        $('#main-sidebar').css('position', 'inherit');
        $('.close-menu').css('display', 'none');
        $('.open-menu').css('display', 'block');
    });

    //open followers menu
    $('.open-followers').on('mouseover', function () {
        console.log('tes');
        $('#followers-menu').css('width', '100%');
        $('#followers-menu').css('display', 'block');
        $('#followers-menu').css('position', 'inherit');
        // $('.close-menu').css('display', 'block');
        // $('.open-menu').css('display', 'none');
    });

});