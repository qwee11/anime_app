import React from 'react'

import { Spinner } from 'react-bootstrap'
import DisplayWatchPie from './DisplaysWatchPie'
import DisplayScoresBar from './DisplayScoresBars'

import { getTitleStatisticsWithMode } from '../withModeFunctions'

type props = {
    mode: 'anime' | 'manga',
    id: string
}

const DisplayStatistics: React.FC<props> = ({ mode, id }) => {
    const {data, error, isLoading} = getTitleStatisticsWithMode(mode)(id)
    
    if (error) {
        return (
            <div>
                <div className="title-page__info__watch-chart bg-secondary-subtle">
                    <h1>Error occured!</h1>
                </div>
                <div className="title-page__info__scores-chart bg-secondary-subtle">
                    <h1>Error occured!</h1>
                </div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
                <div className="title-page__info__watch-chart bg-secondary-subtle">
                    <Spinner variant='light' />
                </div>
                <div className="title-page__info__scores-chart bg-secondary-subtle">
                    <Spinner variant='light' />
                </div>
            </div>
        )
    }

    if (data) {
        return (
            <div>
                <div className="title-page__info__watch-chart bg-secondary-subtle">
                    <DisplayWatchPie
                        completed={data.data.completed}
                        dropped={data.data.dropped}
                        onHold={data.data.on_hold}
                        planToGrokking={data.data.plan_to_watch}
                        grokking={data.data.watching}
                        mode={mode}
                    />
                </div>
                <div className="title-page__info__scores-chart bg-secondary-subtle">
                    <DisplayScoresBar
                        scores={data.data.scores}
                    />
                </div>
            </div>
        );
    };
};

export default DisplayStatistics;