'use client';

import { useAppSelector } from '@/hooks/redux.hooks';
import { useQueryClient } from '@tanstack/react-query';
import { FormDelete } from '@/features/components/ui/FormDashboard/FormDelete';
import FormArticles from '@/features/components/ui/FormDashboard/FormArticles';
import FormMentors from '@/features/components/ui/FormDashboard/FormMentors';
import FormVideo from '@/features/components/ui/FormDashboard/FormVideoResources';
import FormResource from '@/features/components/ui/FormDashboard/FormResources';
import type { ArticlesDB } from '@/shared/shared-components/dataTypesFromSQL';

export const ContentPopup = () => {
    const query = useAppSelector((state) => state.dashboard.query);
    const action = useAppSelector((state) => state.dashboard.action);
    const id = useAppSelector((state) => state.dashboard.idItem);
    const method =
        action === 'create' ? 'POST' : action === 'change' ? 'PATCH' : 'DELETE';
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData([query]);

    switch (query) {
        case '':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return (
                    <FormArticles
                        data={data as ArticlesDB[]}
                        id={id}
                        method={method}
                    />
                );
            } else {
                return <FormArticles method={method} />;
            }
        case 'articles':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return (
                    <FormArticles
                        data={data as ArticlesDB[]}
                        id={id}
                        method={method}
                    />
                );
            } else {
                return <FormArticles method={method} />;
            }
        case 'mentors':
            return <FormMentors />;
        case 'video':
            return <FormVideo />;
        case 'resources':
            return <FormResource />;
        default:
            return (
                <div>
                    Form not found. Query is incorrect in ContentPopup component
                </div>
            );
    }
};
