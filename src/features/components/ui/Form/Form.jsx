import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";

import { useMutation } from "@tanstack/react-query";
import { useHttp } from "../../../../hooks/http.hook";

import { ButtonForm } from "../Buttons/ButtonForm";
import './Form.scss';
import './FormMedia.scss';

const Form = ({id, text, format = null, index = ''}) => {
    const { register, handleSubmit, formState, reset } = useForm({
        mode: 'onChange'
    });

    const { request } = useHttp();

    const mutationBook = useMutation({
        mutationFn: (body) => request({
            url: 'http://localhost:3008/book',
            method: 'POST',
            body: body,
        }),
        onSuccess: (data) => {
          console.log(data);
        }
      })

    const mutationWebinar = useMutation({
        mutationFn: (body) => request({
            url: 'http://localhost:3008/webinar',
            method: 'POST',
            body: body,
        }),
        onSuccess: (data) => {
            console.log(data, 'POST - success');
        }
    })

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
        </>
    )
}

export default Form;