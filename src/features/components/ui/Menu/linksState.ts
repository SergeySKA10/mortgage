import type { ILinks } from '@/shared/shared-components/componentsTypes';

export const linksState: ILinks = {
    linksOnPages: {
        pages: [
            {
                id: 'blog',
                link: '/blog',
                text: 'Blog',
            },
            {
                id: 'ebook',
                link: '/ebook',
                text: 'Ebook',
            },
            {
                id: 'webinar',
                link: '/webinar',
                text: 'Webinar',
            },
        ],
    },
    linksOnSection: {
        main: [
            {
                id: 'getting',
                link: '/getting',
                text: 'Your teachers',
            },
            {
                id: 'story',
                link: '/story',
                text: 'Your mortgage journey',
            },
            {
                id: 'customers',
                link: '/customers',
                text: 'What our customers say',
            },
        ],
        blog: [
            {
                id: 'resourse/blog',
                link: '/resourse/blog',
                text: 'Resources',
            },
            {
                id: 'education/blog',
                link: '/education/blog',
                text: 'Education',
            },
        ],
        book: [
            {
                id: 'author/book',
                link: '/author/book',
                text: 'About author',
            },
            {
                id: 'started/book',
                link: '/started/book',
                text: 'Get started with us',
            },
        ],
        webinar: [
            {
                id: 'author/webinar',
                link: '/author/webinar',
                text: 'About author',
            },
            {
                id: 'started/webinar',
                link: '/started/webinar',
                text: 'Get started with us',
            },
        ],
        secondBook: [
            {
                id: 'secondbook/articles',
                link: '/secondbook/articles',
                text: 'More articles',
            },
        ],
    },
};
