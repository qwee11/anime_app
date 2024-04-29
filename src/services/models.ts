export type Anime = {
    mal_id: 0,
    images: {
        webp: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
        }
    },
    rank: number,
    trailer: {
        youtube_id: string,
        url: string,
        embed_url: string
    },
    titles: [
        {
            type: string,
            title: string
        }
    ],
    title: string,
    title_english: string,
    type: string,
    source: string,
    episodes: number,
    status: string,
    airing: boolean,
    aired: {
        from: string,
        to: string,
        prop: {
            from: {
                day: number,
                month: number,
                year: number
            },
            to: {
                day: number,
                month: number,
                year: number
            },
            string: string
        }
    },
    duration: string,
    score: number,
    popularity: number,
    favorites: number,
    synopsis: string,
    genres: [
        {
            mal_id: number,
            name: string
        }
    ],
}

export type Manga = {
    mal_id: number,
    images: {
        webp: {
            image_url: string,
            large_image_url: string
        }
    },
    title: string,
    title_english: string,
    type: string,
    chapters: number,
    publishing: boolean,
    score: number,
    rank: number,
    popularity: number,
    synopsis: string,
    genres: [
        {
            mal_id: number,
            name: string
        }
    ],
}

export type pagination = {
        last_visible_page: number,
        has_next_page: boolean,
        items: {
            count: number,
            total: number,
            per_page: number
        }
}

export type animeResponse = {
    data: Anime[],
    pagination: pagination
}

export type mangaResponse = {
    data: Anime[],
    pagination: pagination
}

export type titleGenres = {
    mal_id: number,
    name: string,
}

export type animeStatisticsResponse = {
    watching: number,
    completed: number,
    on_hold: number,
    dropped: number,
    plan_to_watch: number,
    total: number,
    scores: [
        {
            score: number,
            votes: number,
            percentage: number
        }
    ]
}

export type mangaStatisticsResponse = {
    reading: number,
    completed: number,
    on_hold: number,
    dropped: number,
    plan_to_read: number,
    total: number,
    scores: [
        {
            score: number,
            votes: number,
            percentage: number
        }
    ]
}

export type topTitlesArgs = {
    page: number,
    filter: string
}

export type searchedTitlesArgs = {
    genres: number[] | null,
    start_date: string | null,
    order_by: string | null,
    q: string | null,
    page: number
}

export type character = {
    mal_id: number,
    images: {
        webp: {
            image_url: string
        }
    },
    name: string
}

export type voiceActor = {
    person: {
        mal_id: number,
        images: {
            jpg: {
                image_url: string
            }
        },
        name: string
    },
    language: string
}

export type animeCharactersResponse = {
    character: character,
    voice_actors: voiceActor[]
}

export type mangaCharactersResponse = {
    character: character,
    role: string
}