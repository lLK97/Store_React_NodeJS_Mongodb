import React from 'react';
import Chart from 'react-apexcharts'

const CardChart = () => {
    const chartOptions = {
        series: [{
            name: 'Online Customers',
            data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
        }, {
            name: 'Store Customers',
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
        }],
        options: {
            color: ['#6ab04c', '#2980b9'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: false
            }
        }
    }
    const chartOptions2 = {
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        options: {
            chart: {
                background: 'transparent'
            },
            stroke: {
                colors: ['#fff']
            },
            fill: {
                opacity: 0.8
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    }
    return (
        <div className="chart-group col-12 row" >
            <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type='bar'
                height='100%'
                className='item col-12 col-lg-6'
            />
            <Chart
                options={chartOptions2.options}
                series={chartOptions2.series}
                type='polarArea'
                height='100%'
                className='item col-12 col-lg-6'
            />
        </div >
    );
}

export default CardChart;
