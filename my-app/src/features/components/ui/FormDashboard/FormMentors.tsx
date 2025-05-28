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

import type { IFormMentors } from '@/shared/shared-forms/shared-forms';
import type { MentorsDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { IDashboardFormProp } from '@/shared/shared-components/dashboardTypes';
import './FormsDashboard.scss';

const FormMentors = ({ method, data, id, query }: IDashboardFormProp) => {
    const valuesData = useAppSelector((state) => state.dashboard.loadData);
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormMentors>({
        mode: 'onChange',
    });

    if (data && id) {
        const sortData = (data as MentorsDB[]).filter((el) => el.id === id)[0];
        setFormData(dispatch, sortData);
    }

    // заполняем поля формы при method === PUT и наличии sortData
    useEffect(() => {
        if (valuesData) {
            reset({
                name: (valuesData as MentorsDB).name,
                quality: (valuesData as MentorsDB).quality,
                descr: (valuesData as MentorsDB).descr,
                photo: (valuesData as MentorsDB).photo,
                link: (valuesData as MentorsDB).link,
            });
        }
    }, [reset, valuesData]);

    const mutationMentors = usePostData('mentors', method, id);

    const onSubmit: SubmitHandler<IFormMentors> = (formData) => {
        // формируем данные для отправки
        let obj: MentorsDB;
        const photo = formData.photo ? formData.photo : '/icons/profile.png';

        switch (method) {
            case 'POST':
                obj = {
                    id: nanoid(),
                    skills: [],
                    ...formData,
                    photo,
                };
                break;
            case 'PUT':
                obj = {
                    id: valuesData!.id,
                    skills: [],
                    ...formData,
                    photo,
                };
                break;
            default:
                throw new Error(
                    'Method prop is incorrect (FormMentors component).'
                );
        }

        mutationMentors.mutate(JSON.stringify(obj));
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
        } else if (mutationMentors.isSuccess) {
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
                    onClick={() => {
                        hidePopup(dispatch);
                        deleteFormData(dispatch);
                    }}
                ></div>
                <div>
                    <p className="form-dashboard__input">Mentor`s name</p>
                    <input
                        placeholder={
                            method === 'PUT' ? '' : "Enter mentor's name"
                        }
                        type="text"
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
                        placeholder={method === 'PUT' ? '' : 'Enter quality'}
                        type="text"
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
                        {...register('photo', {
                            pattern: {
                                value: new RegExp(
                                    'https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/\\D+'
                                ),
                                message:
                                    'This field must be empty or match the url: https://github.com ....',
                            },
                        })}
                    />
                    {formState.errors.photo ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            {formState.errors.photo.message}
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

export default FormMentors;
