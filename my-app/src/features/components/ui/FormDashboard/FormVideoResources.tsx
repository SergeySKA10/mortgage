'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';
import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect, JSX } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hooks';
import {
    hidePopup,
    setFormData,
    deleteFormData,
} from '@/app/dashboard/dashboardSlice';

import usePostData from '../../../../services/usePostData';

import { ButtonForm } from '../Buttons/ButtonForm';
import Spinner from '../Spinner/Spinner';

import type { IFormVideo } from '@/shared/shared-forms/shared-forms';
import type { VideoDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { IDashboardFormProp } from '@/shared/shared-components/dashboardTypes';
import './FormsDashboard.scss';

const FormVideo = ({ method, data, id, query }: IDashboardFormProp) => {
    const valuesData = useAppSelector((state) => state.dashboard.loadData);
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormVideo>({
        mode: 'onChange',
    });

    if (data && id) {
        const sortData = (data as VideoDB[]).filter((el) => el.id === id)[0];
        setFormData(dispatch, sortData);
    }

    // заполняем поля формы при method === PUT и наличии sortData
    useEffect(() => {
        if (valuesData) {
            reset({
                descr: (valuesData as VideoDB).descr,
                link: (valuesData as VideoDB).link,
            });
        }
    }, [reset, valuesData]);

    const mutationVideo = usePostData('video', method, id);

    const onSubmit: SubmitHandler<IFormVideo> = (formData) => {
        const date = new Date();
        const year = date.getFullYear();
        const month =
            date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        // формируем данные для отправки
        let obj: VideoDB;

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
                    id: valuesData!.id,
                    creation_time: `${year}-${month}-${day}`,
                    ...formData,
                };
                break;
            default:
                throw new Error(
                    'Method prop is incorrect (FormVideo component).'
                );
        }

        mutationVideo.mutate(JSON.stringify(obj));
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
        } else if (mutationVideo.isSuccess) {
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
                deleteFormData(dispatch);
            }, 2500);
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
                    onClick={() => {
                        hidePopup(dispatch);
                        deleteFormData(dispatch);
                    }}
                ></div>
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

export default FormVideo;
