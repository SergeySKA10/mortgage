import { useSelector } from 'react-redux';

import { ButtonPlay } from '../Buttons/Buttons';
import {Line} from '../Line/Line';

import './GettingBlock.scss';
import './GettingBlockMedia.scss';



const GettingBlock = () => {
    // получаем спикеров для формирования карточек
    const speakers = useSelector(state => state.reducer.speakers);

    // формируем карточки для отображения в Main Page
    const speakersCard = speakers.map(el => {
        return (
            <SpeakerBlock
                key={el.id}
                data={el}
            />
        )
    });

    return (
        <section className="getting">
            <div className="container">

                <h2 className="header__h2 roboto-bold">Getting a mortgage funded takes a village.</h2>
                <h3 className="header__h3 roboto-regular">Well, not quite a village, but two of the villages best lending heroes!</h3>

                <div className="getting__speakers">
                    {speakersCard}
                </div>
            </div>
        </section>
    )
}

const SpeakerBlock = (props) => {
    const {photo, name, quality, descr, skills} = props.data;

    // формируем skills для отображения на странице
    const skillsElements = skills.map(el => {
        return (
            <div key={el.id} className="getting__descr_skill">
                <div>
                    <img src={el.icons} alt={el.name}/>
                </div>
                <p className="roboto-regular">{el.name}</p>
            </div>
        )
    });

    return (
        <div className="getting__block">
            <div className="getting__promo">
                <div className="getting__promo_btn">
                    <div className="getting__promo_img">
                        <img src={photo} alt="speaker Jusin"/>
                    </div>
                    <ButtonPlay link='#'/>
                    <div className="getting__promo_descr roboto-regular">Meet {name}</div>
                </div>
            </div>

            <div className="getting__descr">
                <p className="getting__descr_subheader roboto-bold">{quality}</p>
                <h4 className="getting__descr_header roboto-bold">{name}</h4>
                <p className="getting__descr_text roboto-regular">{descr}</p>
                <div className="getting__descr_block roboto-bold">Skills</div>
                <div className="getting__line">
                    <Line/>
                </div>
                <div className="getting__descr_skills">
                    {skillsElements}
                </div>
            </div>
        </div>
    )
    
}

export default GettingBlock;