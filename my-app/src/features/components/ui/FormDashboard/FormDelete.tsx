'use client';

import { useAppDispatch } from '@/hooks/redux.hooks';
import { hidePopup } from '@/app/dashboard/dashboardSlice';
import './FormsDashboard.scss';

export const FormDelete = ({ id }: { id: number }) => {
    console.log(id);
    const dispatch = useAppDispatch();
    return (
        <div className="form__delete">
            <div
                className="form-dashboard__close"
                onClick={() => hidePopup(dispatch)}
            ></div>
            Do you want to delete this item
            <div className="form__delete__btn">
                <button
                    className="btn btn__mini"
                    style={{ backgroundColor: 'red' }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
