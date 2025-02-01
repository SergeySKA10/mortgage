import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import { useEffect } from 'react';

import Form from '../ui/Form/Form';

import './AboutEbook.scss';
import './AboutEbookMedia.scss';

const AboutEbook = ({setAuthor, setNameBook, setFormat, format, indexActiveFormat}) => {
    // получение данных
    const {process, getData: {data, isError, isPending}} = useGetData('resources', 7);

    const content = setContent({process, isError, isPending, Components: <ViewWrapper format={format} index={indexActiveFormat} data={data?.books[0]}/>})

    // запись в state автора и название книги
    useEffect(() => {
        if(data) {
            setAuthor(data.books[0].author);
            setNameBook(data.books[0].name);
            setFormat(format => format.concat(data.books[0].format))
        }
    }, [data])

    return (
        <section class="about_ebook">
            {content}
        </section>
    )
}

const ViewWrapper = ({format, index, data: {pictures, descr}}) => {
    return (
        <div class="about_ebook__wrapper">
            <div class="about_ebook__cover">
                <img src={pictures[0]} alt="cover"/>
            </div>
            <div class="about_ebook__content">
                <h2 class="header__h2-left roboto-bold">About the book</h2>
                <p class="about_ebook__descr roboto-regular">{descr[0]}</p>
                <Form format={format} index={index} id='book-form' text='Get the eBook'/>
            </div>
        </div>
)
}

export default AboutEbook;