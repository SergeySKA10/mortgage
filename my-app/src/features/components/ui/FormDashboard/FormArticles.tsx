'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';

import { useState, useEffect, JSX } from 'react';
import { useAppDispatch } from '@/hooks/redux.hooks';
import { hidePopup } from '@/app/dashboard/dashboardSlice';

import usePostData from '../../../../services/usePostData';

import { ButtonForm } from '../Buttons/ButtonForm';
import Spinner from '../Spinner/Spinner';

import type { IFormArticles } from '@/shared/shared-forms/shared-forms';
import type { ArticlesDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { IDashboardFormProp } from '@/shared/shared-components/dashboardTypes';
import './FormsDashboard.scss';

const FormArticles = ({ method }: IDashboardFormProp) => {
    const dispatch = useAppDispatch();
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormArticles>(
        {
            mode: 'onChange',
        }
    );

    // POST запросы для книг и вебинаров
    const mutationArticles = usePostData('articles');

    const onSubmit: SubmitHandler<IFormArticles> = (data) => {
        const date = new Date();
        const year = date.getFullYear();
        const month =
            date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        // формируем данные для отправки
        const obj: ArticlesDB = {
            id: nanoid(),
            creation_time: `${year}-${month}-${day}`,
            ...data,
        };

        mutationArticles.mutate(JSON.stringify(obj));

        reset();
    };

    //создаем state для отображения статуса отправки формы
    const [userNotification, setUserNotification] =
        useState<JSX.Element | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (mutationArticles.isError) {
            setUserNotification(
                <p className="form-dashboard__error_msg">
                    There was an error sending data. Please try again later...
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (mutationArticles.isPending) {
            setUserNotification(<Spinner />);
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (mutationArticles.isSuccess) {
            setUserNotification(
                <p className="form-dashboard__success_msg">
                    Successfully. We will reply to you shortly.
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        }

        return () => clearTimeout(timer);
    }, [
        mutationArticles.isError,
        mutationArticles.isPending,
        mutationArticles.isSuccess,
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
                    <p className="form-dashboard__input">Mentor`s name</p>
                    <input
                        placeholder={
                            method === 'PATCH' ? '' : "Enter mentor's name"
                        }
                        type="text"
                        value={method === 'PATCH' ? 'change' : ''}
                        {...register('name', {
                            required: true,
                            maxLength: 50,
                            minLength: 2,
                        })}
                    />
                    {formState.errors.name ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required. Minimum number of characters
                            2, maximum - 50
                        </p>
                    ) : null}
                </div>
                <div>
                    <p className="form-dashboard__input">Header</p>
                    <input
                        placeholder={method === 'PATCH' ? '' : 'Enter header'}
                        type="text"
                        value={method === 'PATCH' ? 'change' : ''}
                        {...register('header', {
                            required: 'This field is required',
                            maxLength: 20,
                            minLength: 2,
                        })}
                    />
                    {formState.errors.header ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required. Minimum number of characters
                            2, maximum - 20
                        </p>
                    ) : null}
                </div>
                <div>
                    <p className="form-dashboard__input">Subheader</p>
                    <input
                        placeholder={
                            method === 'PATCH' ? '' : 'Enter subheader'
                        }
                        type="text"
                        value={method === 'PATCH' ? 'change' : ''}
                        {...register('subheader', {
                            required: 'This field is required',
                            maxLength: 20,
                            minLength: 2,
                        })}
                    />
                    {formState.errors.subheader ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required. Minimum number of characters
                            2, maximum - 20
                        </p>
                    ) : null}
                </div>
                <div>
                    <p className="form-dashboard__input">Description</p>
                    <textarea
                        placeholder={
                            method === 'PATCH' ? '' : 'Enter description'
                        }
                        value={method === 'PATCH' ? 'change' : ''}
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
                    <p className="form-dashboard__input">Link for avatar</p>
                    <input
                        placeholder={method === 'PATCH' ? '' : 'Enter path'}
                        type="text"
                        value={method === 'PATCH' ? 'change' : ''}
                        {...register('avatar', {
                            required: 'This field is required',
                        })}
                    />
                </div>
                <div>
                    <p className="form-dashboard__input">Link video</p>
                    <input
                        placeholder={method === 'PATCH' ? '' : 'Enter link'}
                        type="text"
                        value={method === 'PATCH' ? 'change' : ''}
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

export default FormArticles;
