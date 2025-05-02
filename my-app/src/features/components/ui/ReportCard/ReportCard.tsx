import Image from 'next/image';
import type { IReport } from '@/shared/shared-components/componentsTypes';
import './ReportCard.scss';

const ReportCard = ({ data: { src, header, descr } }: { data: IReport }) => {
    return (
        <div className="report__wrapper_elem">
            <div className="report__wrapper_icon">
                <Image src={src} alt="rate" height={18} width={18} />
            </div>
            <h4 className="header__h4 roboto-bold">{header}</h4>
            <p className="report__wrapper_descr roboto-regular">{descr}</p>
        </div>
    );
};

export default ReportCard;
