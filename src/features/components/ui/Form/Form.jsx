import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { useHttp } from "../../../../hooks/http.hook";

import { ButtonForm } from "../Buttons/ButtonForm";
import './Form.scss';
import './FormMedia.scss';

const Form = ({id, text}) => {
    const { register, handleSubmit, formState } = useForm({
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
        },
      })

    const mutationWebinar = useMutation({
    mutationFn: (body) => request({
        url: 'http://localhost:3008/webinar',
        method: 'POST',
        body: body,
    }),
    onSuccess: (data) => {
        console.log(data);
    },
    })

    // выводим ошибку при заполнении формы
    const emailError = formState.errors['email']?.message;

    const onSubmit = (data) => {
        if (id === 'webinar-form') {
            // console.log(data)
            mutationWebinar.mutate(JSON.stringify(data))
        } else if (id === 'book-form') {
            mutationBook.mutate(JSON.stringify(data))
        } else {
            throw new Error('Шdentifier error. Such form does not exist')
        }
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