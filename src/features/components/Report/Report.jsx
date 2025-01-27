import { useSelector } from 'react-redux';

import ReportCard from '../ui/ReportCard/ReportCard';
import './Report.scss';

const Report = () => {
    const reports = useSelector(state => state.report.report);

    const reportsWrapper = reports.map(el => <ReportCard key={el.id} data={el}/>);

    return (
        <section class="report">
            <h2 class="header__h2 roboto-bold">What's in the report</h2>
            <div class="report__wrapper">
                {reportsWrapper}
            </div>
        </section>
    )
}

export default Report;