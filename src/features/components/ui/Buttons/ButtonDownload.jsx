import { useHttp } from '../../../../hooks/http.hook';
import { useState, useEffect } from 'react';

import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonDownLoad = ({path, name}) => {
    const {request} = useHttp();

    // создаем state для отслеживания нажатия на кнопку
    const [pressBtn, setPressBtn] = useState(false);

    // создаем state для формирования оповещения ошибки
    const [errorMessage, setErrorMessage] = useState(false);

    // функция удаления ошибки
    const deleteError = () => {
        setErrorMessage(false);
    }

    // запуск таймаута для удаления ошибки и возвращению кнопки
    useEffect(() => {
        let timerID;
        if(errorMessage) {
            timerID = setTimeout(deleteError, 3000);
            setPressBtn(pressBtn => !pressBtn);
        }

        return () => clearTimeout(timerID);
    }, [errorMessage]);

    // функция скачивания pdf файла 
    const downloadFile = async (path) => {
        // делаем запрос для получения файла
        try {
            const data = await request({url: path, format: 'blob'});

            // создаем ссылку, добавляем атрибуты и формируем url файла
            const link = document.createElement('a');
            link.setAttribute('href', URL.createObjectURL(data));
            link.setAttribute('download', name);
            link.style.display = 'none';

            // добавляем ссылку на сайт и кликаем на нее
            document.body.append(link);
            link.click();

            // удаляем ссылку и url
            link.remove();
            URL.revokeObjectURL(link.href);
            setPressBtn(pressBtn => !pressBtn);
        } catch(e) {
            setErrorMessage(true);
            console.log(e);
        }
        
    }

    // скачивание файла при клике на кнопку
    useEffect(() => {
        if (pressBtn) {
            downloadFile(path);
        }
    }, [pressBtn]);

    return (
        <>
            {errorMessage ? 
                <p className='roboto-regular' style={{fontSize: '14px', color: 'red', marginTop: '15px'}}>File not found. Please try again later...</p>
                :   <button className={`btn btn__watch-download`} disabled={pressBtn} onClick={() => setPressBtn(pressBtn => !pressBtn)}>
                        <div className="btn btn__watch-download-text roboto-bold">Download</div>
                        <div className="btn btn__watch-download-arrow"></div>
                    </button>
            }
        </>
        
    )
}