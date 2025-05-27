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

import type { IFormResource } from '@/shared/shared-forms/shared-forms';
import type {
    BooksOrWebinarsDB,
    IResourcesDB,
} from '@/shared/shared-components/dataTypesFromSQL';
import type { IDashboardFormProp } from '@/shared/shared-components/dashboardTypes';
import './FormsDashboard.scss';

const FormResource = ({ method, data, id, query }: IDashboardFormProp) => {
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormResource>(
        {
            mode: 'onChange',
        }
    );

    // преобразование данных по id
    let sortData: BooksOrWebinarsDB;
    if (data && id) {
        for (const key in data as IResourcesDB) {
            for (
                let i = 0;
                i < (data as IResourcesDB)[key as keyof IResourcesDB].length;
                i++
            ) {
                if (
                    (data as IResourcesDB)[key as keyof IResourcesDB][i].id ===
                    id
                ) {
                    sortData = (data as IResourcesDB)[
                        key as keyof IResourcesDB
                    ][i];
                }
            }
        }
    }

    // заполняем поля формы при method === PUT и наличии sortData
    useEffect(() => {
        if (sortData) {
            reset({
                name: sortData.name,
                author: sortData.author,
                category: sortData.category,
                type: sortData.type,
                descr: sortData.descr.join('\n'),
                format: sortData.format.join(', '),
                pictures: sortData.pictures.join(', '),
                link: sortData.link,
            });
        }
    }, [reset, sortData!]);

    // POST запросы для книг и вебинаров
    const mutationResource = usePostData('resources', method, id);

    const onSubmit: SubmitHandler<IFormResource> = (formData) => {
        const formats = formData.format ? formData.format.split(',') : [];
        const link = formData.link ? formData.link : '';
        // формируем данные для отправки
        let obj: BooksOrWebinarsDB;

        switch (method) {
            case 'POST':
                obj = {
                    ...formData,
                    id: nanoid(),
                    pictures: formData.pictures.split(','),
                    format: formats,
                    descr: formData.descr.split('\n'),
                    link: link,
                };
                break;
            case 'PUT':
                obj = {
                    id: sortData.id,
                    ...formData,
                    pictures: formData.pictures.split(','),
                    format: formats,
                    descr: formData.descr.split('\n'),
                    link: link,
                };
                break;
            default:
                throw new Error(
                    'Method prop is incorrect (FormArticles component).'
                );
        }

        mutationResource.mutate(JSON.stringify(obj));
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
        } else if (mutationResource.isSuccess) {
            reset();
            queryClient.invalidateQueries({
                queryKey: [query],
            });
            setUserNotification(
                <p className="form-dashboard__success_msg">
                    Successfully. We will reply to you shortly.
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 2500);
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
                        placeholder={
                            method === 'PUT' ? '' : 'Enter author name'
                        }
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
                        placeholder={method === 'PUT' ? '' : 'Enter header'}
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
                        placeholder={
                            method === 'PUT'
                                ? ''
                                : 'Enter each description phrase on a new line'
                        }
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
                        placeholder={
                            method === 'PUT'
                                ? ''
                                : 'Enter formats separated by commas'
                        }
                        type="text"
                        {...register('format')}
                    />
                </div>
                <div>
                    <p className="form-dashboard__input">Covers</p>
                    <textarea
                        placeholder={
                            method === 'PUT'
                                ? ''
                                : 'Enter links on covers separated by commas'
                        }
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
                        placeholder={method === 'PUT' ? '' : 'Enter link'}
                        type="text"
                        {...register('link')}
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

export default FormResource;
