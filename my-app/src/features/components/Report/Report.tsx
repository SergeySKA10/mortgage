import { useAppSelector } from '@/hooks/redux.hooks';

import ReportCard from '../ui/ReportCard/ReportCard';
import './Report.scss';

const Report = () => {
    const reports = useAppSelector((state) => state.report.report);

    const reportsWrapper = reports.map((el) => (
        <ReportCard key={el.id} data={el} />
    ));

    return (
        <section className="report">
            <h2 className="header__h2 roboto-bold">{"What's in the report"}</h2>
            <div className="report__wrapper">{reportsWrapper}</div>
        </section>
    );
};

export default Report;
