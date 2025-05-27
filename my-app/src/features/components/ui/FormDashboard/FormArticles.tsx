'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';
import { useQueryClient } from '@tanstack/react-query';
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

const FormArticles = ({ method, data, id, query }: IDashboardFormProp) => {
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();
    // преобразование данных по id
    let sortData: ArticlesDB;
    if (data && id) {
        sortData = (data as ArticlesDB[]).filter((el) => el.id === id)[0];
    }

    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormArticles>(
        {
            mode: 'onChange',
        }
    );

    // заполняем поля формы при method === PUT и наличии sortData
    useEffect(() => {
        if (sortData) {
            reset({
                name: sortData.name,
                header: sortData.header,
                subheader: sortData.subheader,
                descr: sortData.descr,
                avatar: sortData.avatar,
                link: sortData.link,
            });
        }
    }, [reset, sortData!]);

    const mutationArticles = usePostData('articles', method, id);

    const onSubmit: SubmitHandler<IFormArticles> = (formData) => {
        const date = new Date();
        const year = date.getFullYear();
        const month =
            date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        // формируем данные для отправки
        let obj: ArticlesDB;

        switch (method) {
            case 'POST':
                obj = {
                    id: nanoid(),
                    creation_time: `${year}-${month}-${day}`,
                    ...formData,
                };
                break;
            case 'PUT':
                obj = {
                    id: sortData.id,
                    creation_time: `${year}-${month}-${day}`,
                    ...formData,
                };
                break;
            default:
                throw new Error(
                    'Method prop is incorrect (FormArticles component).'
                );
        }

        mutationArticles.mutate(JSON.stringify(obj!));
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
        } else if (mutationArticles.isSuccess) {
            reset();
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
                        {...register('name', {
                            required: true,
                            maxLength: 50,
                            minLength: 2,
                        })}
                        placeholder={
                            method === 'PUT' ? '' : "Enter mentor's name"
                        }
                        type="text"
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
                        placeholder={method === 'PUT' ? '' : 'Enter header'}
                        type="text"
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
                        placeholder={method === 'PUT' ? '' : 'Enter subheader'}
                        type="text"
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
                            method === 'PUT' ? '' : 'Enter description'
                        }
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
                        placeholder={method === 'PUT' ? '' : 'Enter path'}
                        type="text"
                        {...register('avatar', {
                            required: 'This field is required',
                        })}
                    />
                </div>
                <div>
                    <p className="form-dashboard__input">Link video</p>
                    <input
                        placeholder={method === 'PUT' ? '' : 'Enter link'}
                        type="text"
                        {...register('link', {
                            required: 'This field is required',
                        })}
                    />
                </div>
                {!userNotification ? (
                    <div className="form-dashboard__btn">
                        <ButtonForm
                            text={method === 'PUT' ? 'Change' : 'Create'}
                        />
                    </div>
                ) : (
                    userNotification
                )}
            </form>
        </>
    );
};

export default FormArticles;
