'use client';

import { useState, useEffect, JSX } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/hooks/redux.hooks';
import { hidePopup } from '@/app/dashboard/dashboardSlice';
import { deleteSlideStory } from '../SliderStory/sliderStorySlice';
import Spinner from '../Spinner/Spinner';

import { KeyQuery } from '@/shared/shared-components/dashboardTypes';
import type { DeleteFormProps } from '@/shared/shared-forms/shared-forms';
import './FormsDashboard.scss';

export const FormDeleteFromSore = ({
    id,
    query,
}: {
    id: string;
    query: KeyQuery;
}) => {
    const [loading, setloading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [sendForm, setSendForm] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const { handleSubmit } = useForm<DeleteFormProps>();

    const onSubmit: SubmitHandler<DeleteFormProps> = () => {
        try {
            switch (query) {
                case 'articles':
                    deleteSlideStory(dispatch, id);
                    setloading(false);
                    setSendForm(true);
                default:
                    setloading(false);
                    throw new Error(
                        'Query prop is incorrect (FormDeleteFromSore component).'
                    );
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                throw new Error(`${e}`);
            }
        }
    };

    //создаем state для отображения статуса отправки формы
    const [userNotification, setUserNotification] =
        useState<JSX.Element | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (error) {
            setUserNotification(
                <p className="form-dashboard__error_msg">
                    {`There was an error sending data. Error: ${error}\nPlease try again later...`}
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (loading) {
            setUserNotification(<Spinner />);
        } else if (sendForm) {
            setUserNotification(
                <p className="form-dashboard__success_msg">
                    Successfully. We will reply to you shortly.
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 2500);
        }

        return () => clearTimeout(timer);
    }, [loading, error, sendForm]);

    return (
        <form
            className="form__delete"
            action=""
            onSubmit={() => {
                handleSubmit(onSubmit);
                setloading(true);
            }}
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
