'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';

import { useState, useEffect, JSX } from 'react';
import { useAppDispatch } from '@/hooks/redux.hooks';
import { hidePopup } from '@/app/dashboard/dashboardSlice';

import usePostData from '../../../../services/usePostData';

import { ButtonForm } from '../Buttons/ButtonForm';
import Spinner from '../Spinner/Spinner';

import type { IFormMentors } from '@/shared/shared-forms/shared-forms';
import type { MentorsDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { IDashboardFormProp } from '@/shared/shared-components/dashboardTypes';
import './FormsDashboard.scss';

const FormMentors = ({ method, data, id }: IDashboardFormProp) => {
    const dispatch = useAppDispatch();
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormMentors>({
        mode: 'onChange',
    });

    // преобразование данных по id
    let sortData: MentorsDB;
    if (data && id) {
        sortData = (data as MentorsDB[]).filter((el) => el.id === id)[0];
    }

    // POST запросы для книг и вебинаров
    const mutationMentors = usePostData('mentors');

    const onSubmit: SubmitHandler<IFormMentors> = (data) => {
        // формируем данные для отправки
        const obj: MentorsDB = {
            id: nanoid(),
            skills: [],
            ...data,
        };

        mutationMentors.mutate(JSON.stringify(obj));

        reset();
    };

    //создаем state для отображения статуса отправки формы
    const [userNotification, setUserNotification] =
        useState<JSX.Element | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (mutationMentors.isError) {
            setUserNotification(
                <p className="form-dashboard__error_msg">
                    There was an error sending data. Please try again later...
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (mutationMentors.isPending) {
            setUserNotification(<Spinner />);
            timer = setTimeout(() => setUserNotification(null), 4000);
        } else if (mutationMentors.isSuccess) {
            setUserNotification(
                <p className="form-dashboard__success_msg">
                    Successfully. We will reply to you shortly.
                </p>
            );
            timer = setTimeout(() => setUserNotification(null), 4000);
        }

        return () => clearTimeout(timer);
    }, [
        mutationMentors.isError,
        mutationMentors.isPending,
        mutationMentors.isSuccess,
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
                        value={method === 'PATCH' ? `${sortData!.name}` : ''}
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
                    <p className="form-dashboard__input">Quality</p>
                    <input
                        placeholder={method === 'PATCH' ? '' : 'Enter quality'}
                        type="text"
                        value={method === 'PATCH' ? `${sortData!.quality}` : ''}
                        {...register('quality', {
                            required: 'This field is required',
                            maxLength: 20,
                            minLength: 2,
                        })}
                    />
                    {formState.errors.quality ? (
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
                        value={method === 'PATCH' ? `${sortData!.descr}` : ''}
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
                        value={method === 'PATCH' ? `${sortData!.photo}` : ''}
                        {...register('photo', {
                            required: 'This field is required',
                        })}
                    />
                </div>
                <div>
                    <p className="form-dashboard__input">Link video</p>
                    <input
                        placeholder={method === 'PATCH' ? '' : 'Enter link'}
                        type="text"
                        value={method === 'PATCH' ? `${sortData!.link}` : ''}
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

export default FormMentors;
