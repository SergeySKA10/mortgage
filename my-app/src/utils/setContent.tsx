import type { IContent } from '@/shared/shared-utils/setContentType';
import type { Data } from '@/shared/shared-components/dataTypesFromSQL';
import ErrorMessage from '../features/components/ui/ErrorMessage/ErrorMessage';

const setContent = ({
    process = null,
    isError = null,
    isPending = null,
    Skeleton = () => <></>,
    data,
    Component,
}: IContent) => {
    if (process === 'waiting') {
        return null;
    } else if (isError) {
        return <ErrorMessage />;
    } else if (isPending) {
        return <Skeleton />;
    } else if (data) {
        if (Array.isArray(data)) {
            return (data as Data).map((el) => (
                <Component key={el.id} data={el} />
            ));
        } else if (typeof data) {
            // return (data as Data).map((el) => <Component key={el.id} data={el} />);
            console.log('data');
        } else {
            throw new Error(
                `Error: invalid data: ${data}. Data type is not JSX.Element[]`
            );
        }
    } else {
        return <ErrorMessage />;
    }
};

export default setContent;
