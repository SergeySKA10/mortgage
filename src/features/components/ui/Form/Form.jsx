import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";

import { useState, useEffect } from "react";

import usePostData from "../../../../services/usePostData";

import { ButtonForm } from "../Buttons/ButtonForm";
import Spinner from '../Spinner/Spinner';
import './Form.scss';
import './FormMedia.scss';

const Form = ({id, text, format = null, index = ''}) => {
    // используем reactHookForm
    const { register, handleSubmit, formState, reset } = useForm({
        mode: 'onChange'
    });

    // POST запросы для книг и вебинаров
    const mutationBook = usePostData('book');
    const mutationWebinar = usePostData('webinar');

    // выводим ошибку при заполнении формы
    const emailError = formState.errors['email']?.message;

    const onSubmit = (data) => {
        // формируем данные для отправки
        let obj = {}

        if (format) {
            if (index) {
                obj = {
                    id: nanoid(),
                    format: format[index],
                    ...data
                }
            } else {
                obj = {
                    id: nanoid(),
                    format: 'PDF',
                    ...data
                }
            }
        } else {
            obj = {
                id: nanoid(),
                ...data
            }
        }  

        // отправляем данные в нужную бд в зависимости от нахождения формы
        if (id === 'webinar-form') {
            mutationWebinar.mutate(JSON.stringify(obj))
        } else if (id === 'book-form') {
            mutationBook.mutate(JSON.stringify(obj))
        } else {
            throw new Error('Шdentifier error. Such form does not exist')
        }

        reset();
    }

    //создаем state для отображения статуса отправки формы
    const [userNotification, setUserNotification] = useState(null);

    useEffect(() => {
        let timer;

        if(mutationBook.isError || mutationWebinar.isError) {
            setUserNotification(<p className="roboto-regular error_msg">There was an error sending data. Please try again later...</p>)
            timer = setTimeout(userNotification => setUserNotification(null), 4000);
        } else if (mutationBook.isPending || mutationWebinar.isPending) {
            setUserNotification(<Spinner/>)
            timer = setTimeout(userNotification => setUserNotification(null), 4000);
        } else if (mutationBook.isSuccess || mutationWebinar.isSuccess) {
            setUserNotification(<p className="roboto-regular success_msg">Successfully. We will reply to you shortly.</p>)
            timer = setTimeout(userNotification => setUserNotification(null), 4000);
        }
        console.log(timer);

        return () => clearTimeout(timer);
    }, [mutationBook.isError, mutationWebinar.isError, mutationBook.isPending, mutationWebinar.isPending, mutationBook.isSuccess, mutationWebinar.isSuccess]);

    return (
        <>
            <form 
                id={id} 
                className="form" 
                action=""
                onSubmit={handleSubmit(onSubmit)}>
                <input className="roboto-light" 
                        name="email" 
                        placeholder="Enter your email"
                        type="text" 
                        {...register('email', {
                            required: 'This field is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            }
                        })}/>
                <ButtonForm text={text}/>
            </form>
            {emailError ? <p className="roboto-regular error_msg">{emailError}</p> : null}
            {userNotification}
            
        </>
    )
}

export default Form;