'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';

import { useState, useEffect, JSX } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hooks';
import {
    createNewSlideStory,
    changeSlideStory,
} from '../SliderStory/sliderStorySlice';
import {
    hidePopup,
    setFormData,
    deleteFormData,
} from '@/app/dashboard/dashboardSlice';

import { ButtonForm } from '../Buttons/ButtonForm';
import Spinner from '../Spinner/Spinner';

import type { IFormStories } from '@/shared/shared-forms/shared-forms';
import type { ISlideStory } from '@/shared/shared-components/componentsTypes';
import type { IDashboardFormStoreProp } from '@/shared/shared-components/dashboardTypes';
import './FormsDashboard.scss';

const FormStories = ({ method, data, id }: IDashboardFormStoreProp) => {
    // состояния статусов загрузки
    const [loading, setloading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [sendForm, setSendForm] = useState<boolean>(false);

    const valuesData = useAppSelector((state) => state.dashboard.loadData);
    const dispatch = useAppDispatch();
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormStories>({
        mode: 'onChange',
    });

    if (data && id) {
        const sortData = (data as ISlideStory[]).filter(
            (el) => el.id === id
        )[0];
        setFormData(dispatch, sortData);
    }

    useEffect(() => {
        if (valuesData) {
            reset({
                header: (valuesData as ISlideStory).header,
                descr: (valuesData as ISlideStory).descr,
            });
        }
    }, [reset, valuesData]);

    // POST запросы для книг и вебинаров
    // const mutationStories = usePostData('mentors');

    const onSubmit: SubmitHandler<IFormStories> = (formData) => {
        try {
            // формируем данные для отправки
            let obj: ISlideStory;

            switch (method) {
                case 'create':
                    obj = {
                        id: nanoid(),
                        ...formData,
                    };
                    createNewSlideStory(dispatch, obj);
                    setloading(false);
                    setSendForm(true);
                    break;
                case 'change':
                    obj = {
                        id: valuesData!.id,
                        ...formData,
                    };
                    changeSlideStory(dispatch, obj);
                    setloading(false);
                    setSendForm(true);
                    break;
                default:
                    setloading(false);
                    throw new Error(
                        'Method prop is incorrect (FormStories component).'
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

    // создаем state для отображения статуса отправки формы
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
            reset();
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
    }, [loading, error, sendForm]);

    return (
        <>
            <form
                className="form-dashboard"
                action=""
                onSubmit={() => {
                    setloading(true);
                    handleSubmit(onSubmit);
                }}
            >
                <div
                    className="form-dashboard__close"
                    onClick={() => {
                        hidePopup(dispatch);
                        deleteFormData(dispatch);
                    }}
                ></div>
                <div>
                    <p className="form-dashboard__input">Story header</p>
                    <input
                        placeholder={
                            method === 'change' ? '' : 'Enter story header'
                        }
                        type="text"
                        {...register('header', {
                            required: true,
                            maxLength: 50,
                            minLength: 2,
                        })}
                    />
                    {formState.errors.header ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required. Minimum number of characters
                            2, maximum - 50
                        </p>
                    ) : null}
                </div>
                <div>
                    <p className="form-dashboard__input">Description</p>
                    <textarea
                        placeholder={
                            method === 'change' ? '' : 'Enter description'
                        }
                        {...register('descr', {
                            required: 'This field is required',
                            maxLength: 100,
                            minLength: 20,
                        })}
                    />
                    {formState.errors.descr ? (
                        <p tabIndex={0} className="form-dashboard__error_msg">
                            This field is required. Minimum number of characters
                            20, maximum - 100
                        </p>
                    ) : null}
                </div>
                {userNotification ? (
                    userNotification
                ) : (
                    <div className="form-dashboard__btn">
                        <ButtonForm
                            text={method === 'create' ? 'Create' : 'Change'}
                        />
                    </div>
                )}
            </form>
        </>
    );
};

export default FormStories;
