'use client';

import type { ISpeakerCardProps } from '@/shared/shared-components/componentsTypes';

import Image from 'next/image';
import { ButtonPlay } from '../Buttons/ButtonPlay';
import { Line } from '../Line/Line';

import './SpeakerCard.scss';

const SpeakerCard = (props: ISpeakerCardProps) => {
    const { photo, link, name, quality, descr, skills } = props.data;

    // формируем skills для отображения на странице
    const skillsElements = skills.map((el) => {
        return (
            <div key={el.id} className="getting__descr_skill">
                <div>
                    <Image
                        width={22}
                        height={22}
                        src={el.icon}
                        alt={el.skill}
                    />
                </div>
                <p className="roboto-regular">{el.skill}</p>
            </div>
        );
    });

    return (
        <div className="getting__block">
            <div className="getting__promo">
                <div className="getting__promo_btn">
                    <div className="getting__promo_img">
                        <Image
                            height={273}
                            width={389}
                            src={photo}
                            alt={`speaker ${name}`}
                        />
                    </div>
                    <ButtonPlay link={link} />
                    <div className="getting__promo_descr roboto-regular">
                        Meet {name}
                    </div>
                </div>
            </div>

            <div className="getting__descr">
                <p className="getting__descr_subheader roboto-bold">
                    {quality}
                </p>
                <h4 className="getting__descr_header roboto-bold">{name}</h4>
                <p className="getting__descr_text roboto-regular">{descr}</p>
                <div className="getting__descr_block roboto-bold">Skills</div>
                <div className="getting__line">
                    <Line />
                </div>
                <div className="getting__descr_skills">{skillsElements}</div>
            </div>
        </div>
    );
};

export default SpeakerCard;
