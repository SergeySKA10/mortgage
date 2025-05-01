import { IReports } from '@/shared/shared-components/componentsTypes';

export const reportInitialState: IReports = {
    report: [
        {
            id: 'Rate#',
            src: 'https://raw.githubusercontent.com/SergeySKA10/mortgage/18d084c5ee990382bec9cf9c3f8875f856f339e0/src/assets/icons/webinar_page/percent.svg',
            header: 'Rate',
            descr: "Yes. Rate is important, but it's not everything. Understanding your rate is more important.",
        },
        {
            id: 'Relationships#',
            src: 'https://raw.githubusercontent.com/SergeySKA10/mortgage/18d084c5ee990382bec9cf9c3f8875f856f339e0/src/assets/icons/webinar_page/users.svg',
            header: 'Relationships',
            descr: 'Build a solid relationship with a realtor a lender and never look back!',
        },
        {
            id: 'Pre-Approved#',
            src: 'https://raw.githubusercontent.com/SergeySKA10/mortgage/18d084c5ee990382bec9cf9c3f8875f856f339e0/src/assets/icons/webinar_page/clipboard.svg',
            header: 'Pre-Approved',
            descr: 'Build a solid relationship with a realtor a lender and never look back!',
        },
    ],
};
