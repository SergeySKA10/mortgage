'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';

// import { useState, useEffect, JSX } from 'react';
import { useAppDispatch } from '@/hooks/redux.hooks';
import {
    createNewSlideStory,
    // changeSlideStory,
} from '../SliderStory/sliderStorySlice';
import { hidePopup } from '@/app/dashboard/dashboardSlice';

import { ButtonForm } from '../Buttons/ButtonForm';
// import Spinner from '../Spinner/Spinner';

import type { IFormStories } from '@/shared/shared-forms/shared-forms';
import type { ISlideStory } from '@/shared/shared-components/componentsTypes';
import type { IDashboardFormStoreProp } from '@/shared/shared-components/dashboardTypes';
import './FormsDashboard.scss';

const FormStories = ({ method, data, id }: IDashboardFormStoreProp) => {
    const dispatch = useAppDispatch();
    console.log(data);
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm<IFormStories>({
        mode: 'onChange',
    });

    // преобразование данных по id
    let sortData: ISlideStory;
    if (data && id) {
        sortData = (data as ISlideStory[]).filter((el) => el.id === id)[0];
    }

    // POST запросы для книг и вебинаров
    // const mutationStories = usePostData('mentors');

    const onSubmit: SubmitHandler<IFormStories> = (data) => {
        // формируем данные для отправки
        const obj: ISlideStory = {
            id: nanoid(),
            ...data,
        };

        createNewSlideStory(dispatch, obj);

        reset();
    };

    //создаем state для отображения статуса отправки формы
    // const [userNotification, setUserNotification] =
    //     useState<JSX.Element | null>(null);

    // useEffect(() => {
    //     let timer: NodeJS.Timeout;

    //     if (mutationMentors.isError) {
    //         setUserNotification(
    //             <p className="form-dashboard__error_msg">
    //                 There was an error sending data. Please try again later...
    //             </p>
    //         );
    //         timer = setTimeout(() => setUserNotification(null), 4000);
    //     } else if (mutationMentors.isPending) {
    //         setUserNotification(<Spinner />);
    //         timer = setTimeout(() => setUserNotification(null), 4000);
    //     } else if (mutationMentors.isSuccess) {
    //         setUserNotification(
    //             <p className="form-dashboard__success_msg">
    //                 Successfully. We will reply to you shortly.
    //             </p>
    //         );
    //         timer = setTimeout(() => setUserNotification(null), 4000);
    //     }

    //     return () => clearTimeout(timer);
    // }, [
    //     mutationMentors.isError,
    //     mutationMentors.isPending,
    //     mutationMentors.isSuccess,
    // ]);

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
                    <p className="form-dashboard__input">Story header</p>
                    <input
                        placeholder={
                            method === 'change' ? '' : 'Enter story header'
                        }
                        type="text"
                        value={method === 'change' ? `${sortData!.header}` : ''}
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
                        value={method === 'change' ? `${sortData!.descr}` : ''}
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
                <div className="form-dashboard__btn">
                    <ButtonForm text={'Create'} />
                </div>
            </form>
            {/* {userNotification} */}
        </>
    );
};

export default FormStories;
