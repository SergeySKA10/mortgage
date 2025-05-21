'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';

import { useState, useEffect, JSX } from 'react';
import { useAppDispatch } from '@/hooks/redux.hooks';
import { hidePopup } from '@/app/dashboard/dashboardSlice';

import usePostData from '../../../../services/usePostData';

import { ButtonForm } from '../Buttons/ButtonForm';
import Spinner from '../Spinner/Spinner';

import type { IFormResource } from '@/shared/shared-forms/shared-forms';
import type { BooksOrWebinarsDB } from '@/shared/shared-components/dataTypesFromSQL';
import './FormsDashboard.scss';

const FormResource = () => {
    const dispatch = useAppDispatch();
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormResource>(
        {
            mode: 'onChange',
        }
    );

    // POST запросы для книг и вебинаров
    const mutationResource = usePostData('resources');

    const onSubmit: SubmitHandler<IFormResource> = (data) => {
        const formats = data.format ? data.format.split(',') : [];
        const link = data.link ? data.link : '';
        // формируем данные для отправки
        const obj: BooksOrWebinarsDB = {
            ...data,
            id: nanoid(),
            pictures: data.pictures.split(','),
            format: formats,
            descr: data.descr.split('\n'),
            link: link,
        };

        mutationResource.mutate(JSON.stringify(obj));

        reset();
    };

    //создаем state для отображения статуса отправки формы
    const [userNotification, setUserNotification] =
        useState<JSX.Element | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (mutationResource.isError) {
            setUserNotification(
                <p className="form-dashboard__error_msg">
                    There was an error sending data. Please try again later...
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (mutationResource.isPending) {
            setUserNotification(<Spinner />);
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (mutationResource.isSuccess) {
            setUserNotification(
                <p className="form-dashboard__success_msg">
                    Successfully. We will reply to you shortly.
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        }

        return () => clearTimeout(timer);
    }, [
        mutationResource.isError,
        mutationResource.isPending,
        mutationResource.isSuccess,
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
                    <p className="form-dashboard__input">Author name</p>
                    <input
                        placeholder="Enter author name"
                        type="text"
                        {...register('author', {
                            required: true,
                            maxLength: 30,
                            minLength: 2,
                        })}
                    />
                    {formState.errors.author ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required. Minimum number of characters
                            2, maximum - 30
                        </p>
                    ) : null}
                </div>
                <div>
                    <p className="form-dashboard__input">Book name</p>
                    <input
                        placeholder="Enter header"
                        type="text"
                        {...register('name', {
                            required: 'This field is required',
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
                    <p className="form-dashboard__input">Category</p>
                    <select
                        {...register('category', {
                            required: 'This field is required',
                        })}
                    />
                    {formState.errors.category ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required.
                        </p>
                    ) : null}
                </div>
                <div>
                    <p className="form-dashboard__input">Viewing options</p>
                    <select
                        {...register('type', {
                            required: 'This field is required',
                        })}
                    />
                    {formState.errors.type ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required.
                        </p>
                    ) : null}
                </div>
                <div>
                    <p className="form-dashboard__input">Description</p>
                    <textarea
                        placeholder="Enter each description phrase on a new line"
                        {...register('descr', {
                            required: 'This field is required',
                            maxLength: 1000,
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
                    <p className="form-dashboard__input">Formats</p>
                    <input
                        placeholder="Enter formats separated by commas"
                        type="text"
                        {...register('format')}
                    />
                </div>
                <div>
                    <p className="form-dashboard__input">Covers</p>
                    <textarea
                        placeholder="Enter links on covers separated by commas"
                        {...register('pictures', {
                            required: 'This field is required',
                        })}
                    />
                    {formState.errors.pictures ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required.
                        </p>
                    ) : null}
                </div>
                <div>
                    <p className="form-dashboard__input">Link video</p>
                    <input
                        placeholder="Enter link"
                        type="text"
                        {...register('link')}
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

export default FormResource;
