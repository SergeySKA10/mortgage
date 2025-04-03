import type { IContent } from '@/shared/shared-utils/setContentType';
import type { Data } from '@/shared/shared-components/dataTypesFromSQL';
// import ErrorMessage from '../features/components/ui/ErrorMessage/ErrorMessage';
// import Spinner from "../features/components/ui/Spinner/Spinner";

// const setContent = ({
//     process,
//     isError,
//     isPending,
//     Skeleton,
//     data,
//     Component,
// }: IContent) => {
//     if (process === 'waiting') {
//         return null;
//     } else if (isError) {
//         return <ErrorMessage />;
//     } else if (isPending) {
//         if (!Skeleton) {
//             return <div>Loading</div>;
//         } else {
//             return <Skeleton />;
//         }
//     } else if (data) {
//         return (data as Data).map((el) => <Component key={el.id} data={el} />);
//     } else {
//         throw new Error(
//             `Error while generating content, arguments passed to the function do not match the conditions: process: ${process}, error: ${isError}, pending: ${isPending}, components: ${Component}`
//         );
//     }
// };

// export default setContent;

const setContent = ({ data, Component }: IContent) => {
    if (Array.isArray(data)) {
        return (data as Data).map((el) => <Component key={el.id} data={el} />);
    } else if (typeof data) {
        // return (data as Data).map((el) => <Component key={el.id} data={el} />);
        console.log('data');
    } else {
        throw new Error(
            `Error: invalid data: ${data}. Data is not JSX Component`
        );
    }
};

export default setContent;
