'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect, JSX } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/hooks/redux.hooks';
import { hidePopup } from '@/app/dashboard/dashboardSlice';
import useDeletetData from '../../../../services/useDeleteData';
import Spinner from '../Spinner/Spinner';

import type { Key } from '@/services/getOptions';
import type { IFormArticles } from '@/shared/shared-forms/shared-forms';
import './FormsDashboard.scss';

export const FormDelete = ({ id, query }: { id: string; query: Key }) => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();
    const { handleSubmit } = useForm<IFormArticles>();
    const mutationData = useDeletetData(query, 'DELETE');

    const onSubmit: SubmitHandler<IFormArticles> = () => {
        mutationData.mutate(id);
    };

    //создаем state для отображения статуса отправки формы
    const [userNotification, setUserNotification] =
        useState<JSX.Element | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (mutationData.isError) {
            setUserNotification(
                <p className="form-dashboard__error_msg">
                    There was an error sending data. Please try again later...
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (mutationData.isPending) {
            setUserNotification(<Spinner />);
        } else if (mutationData.isSuccess) {
            queryClient.invalidateQueries({
                queryKey: [query],
            });
            setUserNotification(
                <p className="form-dashboard__success_msg">
                    Successfully. We will reply to you shortly.
                </p>
            );
            timer = setTimeout(() => {
                setUserNotification(null);
                hidePopup(dispatch);
            }, 2500);
        }

        return () => clearTimeout(timer);
    }, [mutationData.isError, mutationData.isPending, mutationData.isSuccess]);

    return (
        <form
            className="form__delete"
            action=""
            onSubmit={handleSubmit(onSubmit)}
        >
            <div
                className="form-dashboard__close"
                onClick={() => hidePopup(dispatch)}
            ></div>
            Do you want to delete this item
            <div className="form__delete__btn">
                {!userNotification ? (
                    <button
                        className="btn btn__mini"
                        style={{ backgroundColor: 'red' }}
                    >
                        Delete
                    </button>
                ) : (
                    userNotification
                )}
            </div>
        </form>
    );
};
