import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs} from "chart.js/auto"

ChartJs.defaults.color = "#fff"

type props = {
    scores: [
        {
            percentage: number
        }
    ]
}

const barDataLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const DisplayScoresBar: React.FC<props> = ({scores}) => {

    const barData = {
        labels: barDataLabels,
        datasets: [
            {
                label: '# percentage',
                data: scores.map(score => score.percentage),
                backgroundColor: 'rgba(255, 255, 255, 1)',
            }
        ],
    };

    const barOptions = {
        responsive: true,
        color: "#FFFFFF",
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                color: '#ffffff',
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

  return (
    <Bar data={barData} options={barOptions} />
  );
};

export default DisplayScoresBar;