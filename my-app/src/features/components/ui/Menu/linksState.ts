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
                id: '#getting',
                link: 'getting',
                text: 'Your teachers',
            },
            {
                id: '#story',
                link: 'story',
                text: 'Your mortgage journey',
            },
            {
                id: '#customers',
                link: 'customers',
                text: 'What our customers say',
            },
        ],
    },
};
