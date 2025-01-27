import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';
import { Button } from '../ui/Buttons/Button';

import './AboutEbook.scss';
import './AboutEbookMedia.scss';

const AboutEbook = () => {
    const {process, getData: {data, isError, isPending}} = useGetData('resources', 7);

    const content = setContent({process, isError, isPending, Components: <ViewWrapper data={data}/>})

    return (
        <section class="about_ebook">
            {content}
        </section>
    )
}

const ViewWrapper = ({data: {picture, descr}}) => {
    return (
        <div class="about_ebook__wrapper">
            <div class="about_ebook__cover">
                <img src={picture} alt="cover"/>
            </div>
            <div class="about_ebook__content">
                <h2 class="header__h2-left roboto-bold">About the book</h2>
                <p class="about_ebook__descr roboto-regular">{descr}</p>
                <form class="about_ebook__form" action="">
                    <input class="roboto-light" name="email" placeholder="Your Email" type="text" required/>
                    <Button link={'#'} text={'Get the eBook'}/>
                </form>
            </div>
        </div>
)
}

export default AboutEbook;