import React from 'react'
import { Pie } from 'react-chartjs-2';

type props = {
    completed: number,
    grokking: number,
    onHold: number,
    dropped: number,
    planToGrokking: number,
    mode: 'anime' | 'manga'
}

const DisplayWatchPie: React.FC<props> = ({
    completed,
    dropped,
    onHold,
    planToGrokking,
    grokking,
    mode
}) => {
    const data = {
        labels: ['Completed', mode === 'anime' ? "Watching" : "Reading", 'On Hold', 'Dropped', mode === 'anime' ? "Plan to watch" : 'Plan to read'],
        datasets: [
            {
                label: '# of Votes',
                data: [
                    completed,
                    grokking,
                    onHold,
                    dropped,
                    planToGrokking
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 3,
            },
        ],
    };

    return (
        <Pie data={data} />
    )
}

export default DisplayWatchPie