import ErrorMessage from "../features/components/ui/ErrorMessage/ErrorMessage";
import Spinner from "../features/components/ui/Spinner/Spinner";

const setContent = ({process, isError, isPending, Components}) => {
    if (process === 'waiting') {
        return null;
    } else if (isError) {
        return <ErrorMessage/>
    } else if (isPending) {
        return <Spinner/>
    } else if (Components) {
        return (
            <>
                {Components}
            </>
        )
    } else {
        throw new Error('Error while generating data');
    }
}

export default setContent;