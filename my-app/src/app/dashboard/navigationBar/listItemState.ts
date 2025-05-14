import type { IListItemsState } from '@/shared/shared-components/dashboardTypes';

export const listItmesState: IListItemsState = {
    dbList: [
        {
            id: 'articles',
            name: 'Article',
            category: 'DB',
        },
        {
            id: 'mentors',
            name: 'Mentors',
            category: 'DB',
        },
        {
            id: 'resources',
            name: 'Resources',
            category: 'DB',
        },
        {
            id: 'slidesReviews',
            name: 'Reviews',
            category: 'DB',
        },
        {
            id: 'video',
            name: 'Video articles',
            category: 'DB',
        },
    ],
    storeList: [
        {
            id: 'stories',
            name: 'Stories',
            category: 'Store',
        },
    ],
    requestList: [
        {
            id: 'book',
            name: 'Books',
            category: 'Request',
        },
        {
            id: 'webinar',
            name: 'Webinars',
            category: 'Request',
        },
    ],
    statisticsSheet: [
        {
            id: 'ratings',
            name: 'Ratings',
            category: 'DB',
        },
    ],
};
