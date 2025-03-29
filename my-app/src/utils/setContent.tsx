import type { IContent } from '@/shared/shared-utils/setContentType';
import type { Data } from '@/shared/shared-components/dataTypesFromSQL';
import ErrorMessage from '../features/components/ui/ErrorMessage/ErrorMessage';
// import Spinner from "../features/components/ui/Spinner/Spinner";

const setContent = ({
    process,
    isError,
    isPending,
    data,
    Component,
}: IContent) => {
    if (process === 'waiting') {
        return null;
    } else if (isError) {
        return <ErrorMessage />;
    } else if (isPending) {
        return <div>Loading</div>;
    } else if (data) {
        return (data as Data).map((el) => <Component key={el.id} data={el} />);
    } else {
        throw new Error(
            `Error while generating content, arguments passed to the function do not match the conditions: process: ${process}, error: ${isError}, pending: ${isPending}, components: ${Component}`
        );
    }
};

export default setContent;
