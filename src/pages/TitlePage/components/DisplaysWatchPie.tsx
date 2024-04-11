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
                    'rgba(13, 110, 253, 0.5)',
                    'rgba(102, 16, 242, 0.5)',
                    'rgba(214, 51, 132, 0.5)',
                    'rgba(220, 53, 69, 0.5)',
                    'rgba(255, 193, 7, 0.5)',
                ],
                borderColor: [
                    'rgba(13, 110, 253, 1)',
                    'rgba(102, 16, 242, 1)',
                    'rgba(214, 51, 132, 1)',
                    'rgba(220, 53, 69, 1)',
                    'rgba(255, 193, 7, 1)',
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