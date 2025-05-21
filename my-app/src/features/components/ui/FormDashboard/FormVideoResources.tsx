'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';

import { useState, useEffect, JSX } from 'react';
import { useAppDispatch } from '@/hooks/redux.hooks';
import { hidePopup } from '@/app/dashboard/dashboardSlice';

import usePostData from '../../../../services/usePostData';

import { ButtonForm } from '../Buttons/ButtonForm';
import Spinner from '../Spinner/Spinner';

import type { IFormVideo } from '@/shared/shared-forms/shared-forms';
import type { VideoDB } from '@/shared/shared-components/dataTypesFromSQL';
import './FormsDashboard.scss';

const FormVideo = () => {
    const dispatch = useAppDispatch();
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormVideo>({
        mode: 'onChange',
    });

    // POST запросы для книг и вебинаров
    const mutationVideo = usePostData('video');

    const onSubmit: SubmitHandler<IFormVideo> = (data) => {
        const date = new Date();
        const year = date.getFullYear();
        const month =
            date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        // формируем данные для отправки
        const obj: VideoDB = {
            id: nanoid(),
            creation_time: `${year}-${month}-${day}`,
            ...data,
        };

        mutationVideo.mutate(JSON.stringify(obj));

        reset();
    };

    //создаем state для отображения статуса отправки формы
    const [userNotification, setUserNotification] =
        useState<JSX.Element | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (mutationVideo.isError) {
            setUserNotification(
                <p className="form-dashboard__error_msg">
                    There was an error sending data. Please try again later...
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (mutationVideo.isPending) {
            setUserNotification(<Spinner />);
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (mutationVideo.isSuccess) {
            setUserNotification(
                <p className="form-dashboard__success_msg">
                    Successfully. We will reply to you shortly.
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        }

        return () => clearTimeout(timer);
    }, [
        mutationVideo.isError,
        mutationVideo.isPending,
        mutationVideo.isSuccess,
    ]);

    return (
        <>
            <form
                className="form-dashboard"
                action=""
                onSubmit={handleSubmit(onSubmit)}
            >
                <div
                    className="form-dashboard__close"
                    onClick={() => hidePopup(dispatch)}
                ></div>
                <div>
                    <p className="form-dashboard__input">Description</p>
                    <textarea
                        placeholder="Enter description"
                        {...register('descr', {
                            required: 'This field is required',
                            maxLength: 300,
                            minLength: 50,
                        })}
                    />
                    {formState.errors.descr ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required. Minimum number of characters
                            50, maximum - 300
                        </p>
                    ) : null}
                </div>
                <div>
                    <p className="form-dashboard__input">Link video</p>
                    <input
                        placeholder="Enter link"
                        type="text"
                        {...register('link', {
                            required: 'This field is required',
                        })}
                    />
                </div>
                <div className="form-dashboard__btn">
                    <ButtonForm text={'Create'} />
                </div>
            </form>
            {userNotification}
        </>
    );
};

export default FormVideo;
