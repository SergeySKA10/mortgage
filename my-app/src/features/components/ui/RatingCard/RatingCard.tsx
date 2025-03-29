'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, JSX } from 'react';
import type { IRatingsProps } from '@/shared/shared-components/componentsTypes';

import { Line } from '../Line/Line';

import './RatingCard.scss';

const RatingCard = ({ data }: IRatingsProps) => {
    const { stars, icon, reviews, link } = data;

    const [starsBlock, setStars] = useState<JSX.Element[]>([]);

    useEffect(() => {
        setStars(() => createStars(stars));
    }, []);

    // функция по созданию звезд и заполнения background в соответствии с рейтингом
    const createStars = (str: string): JSX.Element[] => {
        const stars = [];
        const numArray: RegExpMatchArray | null = str.match(/\d(?:\.\d)?/g);

        if (numArray) {
            const num: number = +numArray.join('');
            for (let i = 1; i <= 5; i++) {
                if (i <= num) {
                    stars.push(
                        <div
                            key={i}
                            style={{ background: 'rgba(39,143,180,1)' }}
                        />
                    );
                } else if (i > num) {
                    if (num % 1 > 0 && num % 1 < 1) {
                        const gradientBlue = (num % 1) * 100;
                        const gradientWhite = 100 - gradientBlue;
                        stars.push(
                            <div
                                key={i}
                                style={{
                                    background: `linear-gradient(90deg, rgba(39,143,180,1) ${gradientBlue}%, rgba(255,255,255,1) ${gradientWhite}%)`,
                                }}
                            />
                        );
                    } else {
                        stars.push(
                            <div key={i} style={{ background: '#ffffff' }} />
                        );
                    }
                }
            }

            return stars;
        } else {
            console.log('error: no numbers found in the original data string');
            return [];
        }
    };

    return (
        <div className="customers__block">
            <div className="customers__block-descr">
                <div className="customers__block_text roboto-bold">{stars}</div>
                <div className="customers__block_img">
                    <Image src={icon} alt="google" width={30} height={30} />
                </div>
                <div className="customers__block_line">
                    <Line />
                </div>
                <div className="customers__block_reviews">
                    <p className="roboto-regular">Based on</p>
                    <Link className="roboto-bold" href={`${link}`}>
                        {reviews}
                    </Link>
                </div>
            </div>
            <div className="line__vertical-mini"></div>
            <div className="customers__block-stars">{starsBlock}</div>
        </div>
    );
};

export default RatingCard;
