'use client';

import { useAppDispatch } from '@/hooks/redux.hooks';
import { hidePopup } from '@/app/dashboard/dashboardSlice';
import './FormsDashboard.scss';

export const FormBan = ({ text }: { text: string }) => {
    const dispatch = useAppDispatch();
    return (
        <div className="form__delete">
            <div
                className="form-dashboard__close"
                onClick={() => hidePopup(dispatch)}
            ></div>
            {text}
        </div>
    );
};
