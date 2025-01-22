import { useState } from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('waiting');

    const request = async (meta) => {
        const {url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}, format = 'json'} = meta;
        setProcess('render');

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            
            let data;

            switch (format) {
                case 'json':
                    data = await response.json();
                    break;
                case 'blob':
                    data = await response.blob();
                    break;
                default: 
                    throw new Error ('Invalid format specified for request');
            }
            

            return data;

        } catch(e) {
            throw e;
        }
    };

    return {request, process}
}