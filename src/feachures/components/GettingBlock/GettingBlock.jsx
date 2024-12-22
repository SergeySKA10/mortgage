import './GettingBlock.scss';
import './GettingBlockMedia.scss';

import photoJustin from '../../../assets/img/main_page/getting_mortgage/Justin.png';
import photoScott from '../../../assets/img/main_page/getting_mortgage/Scott.png';
import skillDeels from '../../../assets/icons/main_page/skills_justin/deals.svg';
import skillRightWay from '../../../assets/icons/main_page/skills_justin/compass.svg';
import skillDatabase from '../../../assets/icons/main_page/skills_justin/database.svg';
import skillDocs from '../../../assets/icons/main_page/skills_justin/docs.svg';
import skillLinguist from '../../../assets/icons/main_page/skills_scott/globe.svg';
import skillHelper from '../../../assets/icons/main_page/skills_scott/life-buoy.svg';
import skillSeacher from '../../../assets/icons/main_page/skills_scott/home.svg';
import skillGuru from '../../../assets/icons/main_page/skills_scott/users.svg';

const GettingBlock = () => {
    const initialState = {
        speakers: [
            {
                photo: photoJustin,
                name: 'Justin',
                quality: 'The master mind',
                descr: "Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)",
                skills: [
                    {icons: skillDeels, name: 'Deels'},
                    {icons: skillRightWay, name: 'Find the right way'},
                    {icons: skillDatabase, name: 'Mortgage «database»'},
                    {icons: skillDocs, name: 'Docs master'}
                ]
            },
            {
                photo: photoScott,
                name: 'Scott',
                quality: 'The educator',
                descr: "Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)",
                skills: [
                    {icons: skillLinguist, name: 'Linguist'},
                    {icons: skillSeacher, name: 'Perfect place searcher'},
                    {icons: skillHelper, name: 'Helper'},
                    {icons: skillGuru, name: 'Communication Guru'}
                ]
            }
        ]
    }

    const speakersCard = initialState.speakers.map(el => {
        const {photo, name, quality, descr, skills} = el;
        return (
            <SpeakerBlock
                photo={photo} 
                name={name}
                quality={quality} 
                descr={descr}
                skills={skills}
            />
        )
    });

    return (
        <section class="getting">
            <div class="container">

                <h2 class="header__h2 roboto-bold">Getting a mortgage funded takes a village.</h2>
                <h3 class="header__h3 roboto-regular">Well, not quite a village, but two of the villages best lending heroes!</h3>

                <div class="getting__speakers">
                    {speakersCard}
                </div>
            </div>
        </section>
    )
}

const SpeakerBlock = (props) => {
    const {photo, name, quality, descr, skills} = props;

    const skillsElements = skills.map(el => {
        return (
            <div class="getting__descr_skill">
                <div>
                    <img src={el.icons} alt={el.name}/>
                </div>
                <p class="roboto-regular">{el.name}</p>
            </div>
        )
    });

    return (
        <div class="getting__block">
            <div class="getting__promo">
                <div class="getting__promo_btn">
                    <div class="getting__promo_img">
                        <img src={photo} alt="speaker Jusin"/>
                    </div>
                    <button class="btn btn__play">
                        <a href="#"><div class="btn__play-block"></div></a>
                    </button>
                    <div class="getting__promo_descr roboto-regular">Meet {name}</div>
                </div>
            </div>

            <div class="getting__descr">
                <p class="getting__descr_subheader roboto-bold">{quality}</p>
                <h4 class="getting__descr_header roboto-bold">{name}</h4>
                <p class="getting__descr_text roboto-regular">{descr}</p>
                <div class="getting__descr_block roboto-bold">Skills</div>
                <div class="getting__line">
                    <hr class="line line_dark"/>
                </div>
                <div class="getting__descr_skills">
                    {skillsElements}
                </div>
            </div>
        </div>
    )
    
}

export default GettingBlock;