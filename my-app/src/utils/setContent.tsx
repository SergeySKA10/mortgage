import type {
    IContent,
    ICreateContent,
} from '@/shared/shared-utils/setContentType';
import type { Data } from '@/shared/shared-components/dataTypesFromSQL';
import ErrorMessage from '../features/components/ui/ErrorMessage/ErrorMessage';
import { sortByParam } from './sortByParam';

const renderContent = ({
    data,
    Component,
    sorted = null,
    dataAtr = null,
    limitContent = null,
}: ICreateContent) => {
    if (sorted && dataAtr) {
        let ind = 0;
        let size = '';
        // сортируем данные
        return sortByParam(data as Data, sorted).map((el, i) => {
            // ограничиваем количество
            if (limitContent && i >= limitContent) {
                return null;
            }
            // назначаем дата атрибуты
            if (dataAtr[ind] && i === dataAtr[ind].index) {
                size = dataAtr[ind].value;
                ind += 1;
            } else {
                size = '';
            }
            return <Component key={el.id} data={{ size, ...el }} />;
        });
    } else if (sorted) {
        // сортируем
        return sortByParam(data as Data, sorted).map((el, i) => {
            // ограничиваем количество
            if (limitContent && i >= limitContent) {
                return null;
            }

            return <Component key={el.id} data={el} />;
        });
    } else if (dataAtr) {
        // назначаем дата атрибуты
        let ind = 0;
        let size = '';
        return (data as Data).map((el, i) => {
            // ограничиваем количество
            if (limitContent && i >= limitContent) {
                return null;
            }

            if (dataAtr[ind] && i === dataAtr[ind].index) {
                size = dataAtr[ind].value;
                ind += 1;
            } else {
                size = '';
            }
            return <Component key={el.id} data={{ size, ...el }} />;
        });
    } else {
        return (data as Data).map((el, i) => {
            // ограничиваем количество
            if (limitContent && i >= limitContent) {
                return null;
            }

            return <Component key={el.id} data={el} />;
        });
    }
};

const setContent = ({
    process = null,
    isError = null,
    isPending = null,
    refetch,
    Skeleton = () => <></>,
    data,
    Component,
    sorted = null,
    dataAtr = null,
    limitContent = null,
}: IContent) => {
    if (process === 'waiting') {
        return null;
    } else if (isError) {
        if (refetch) {
            return <ErrorMessage refetch={refetch} />;
        }
    } else if (isPending) {
        return <Skeleton />;
    } else if (data) {
        if (Array.isArray(data)) {
            return renderContent({
                data,
                Component,
                sorted,
                dataAtr,
                limitContent,
            });
        } else {
            return (
                <ErrorMessage
                    message={`Error: invalid data: ${data}. Data type is not JSX.Element[]`}
                />
            );
        }
    } else {
        return (
            <ErrorMessage message="An error occurred while rendering the component" />
        );
    }
};

export default setContent;
