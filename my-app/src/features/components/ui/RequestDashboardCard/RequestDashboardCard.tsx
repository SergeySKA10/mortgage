import { IRequestDashboardCard } from '@/shared/shared-components/componentsTypes';
import './RequestDashboardCard.scss';

export const RequestDashboardCard = ({
    data,
}: {
    data: IRequestDashboardCard;
}) => {
    const { email, format, date } = data;
    return (
        <div className="request_card">
            <p>
                {format
                    ? `Category: Book, format: ${format}`
                    : `Category: Webinar`}
            </p>
            <p>Email: ${email}</p>
            <p>Date: {date as string}</p>
        </div>
    );
};
