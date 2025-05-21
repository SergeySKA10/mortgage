'use client';

import { useAppSelector } from '@/hooks/redux.hooks';
import { FormDelete } from '@/features/components/ui/FormDashboard/FormDelete';
import FormArticles from '@/features/components/ui/FormDashboard/FormArticles';
import FormMentors from '@/features/components/ui/FormDashboard/FormMentors';
import FormVideo from '@/features/components/ui/FormDashboard/FormVideoResources';
import FormResource from '@/features/components/ui/FormDashboard/FormResources';

export const ContentPopup = () => {
    const query = useAppSelector((state) => state.dashboard.query);
    const action = useAppSelector((state) => state.dashboard.action);
    console.log(action);
    const id = useAppSelector((state) => state.dashboard.idItem);
    const method =
        action === 'create' ? 'POST' : action === 'change' ? 'PATCH' : 'DELETE';

    switch (query) {
        case '':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return <FormArticles method={method} />;
            } else {
                return <FormArticles method={method} />;
            }
        case 'articles':
            if (action === 'delete') {
                return <FormDelete id={id} />;
            } else if (action === 'change') {
                return <FormArticles method={method} />;
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
