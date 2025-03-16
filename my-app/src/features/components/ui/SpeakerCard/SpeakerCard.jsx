// import { ButtonPlay } from '../Buttons/ButtonPlay';
// import {Line} from '../Line/Line';

// import './SpeakerCard.scss';

// const SpeakerCard = (props) => {
//     const {photo, link, name, quality, descr, skills} = props.data;

//     // формируем skills для отображения на странице
//     const skillsElements = skills.map(el => {
//         return (
//             <div key={el.id} className="getting__descr_skill">
//                 <div>
//                     <img src={el.icons} alt={el.name}/>
//                 </div>
//                 <p className="roboto-regular">{el.name}</p>
//             </div>
//         )
//     });

//     return (
//         <div className="getting__block">
//             <div className="getting__promo">
//                 <div className="getting__promo_btn">
//                     <div className="getting__promo_img">
//                         <img src={photo} alt={`speaker ${name}`}/>
//                     </div>
//                     <ButtonPlay link={link}/>
//                     <div className="getting__promo_descr roboto-regular">Meet {name}</div>
//                 </div>
//             </div>

//             <div className="getting__descr">
//                 <p className="getting__descr_subheader roboto-bold">{quality}</p>
//                 <h4 className="getting__descr_header roboto-bold">{name}</h4>
//                 <p className="getting__descr_text roboto-regular">{descr}</p>
//                 <div className="getting__descr_block roboto-bold">Skills</div>
//                 <div className="getting__line">
//                     <Line/>
//                 </div>
//                 <div className="getting__descr_skills">
//                     {skillsElements}
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default SpeakerCard;
