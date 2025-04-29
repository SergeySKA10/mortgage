import type {
    VideoDB,
    ArticlesDB,
} from '@/shared/shared-components/dataTypesFromSQL';

export type SortParametr = 'creation_time';

export const sortByParam = (
    data: any[] | undefined,
    parameter: SortParametr
): VideoDB[] | ArticlesDB[] => {
    if (!data) return [];
    // разделения массивов
    if (data.length < 2) {
        return data;
    } else {
        const middle = Math.floor(data.length / 2);
        const left = data.slice(0, middle);
        const right = data.slice(middle, data.length);

        return merge(
            sortByParam(left, parameter),
            sortByParam(right, parameter)
        );
    }

    // функция по сравнению и формированию массива
    function merge(left: any[], right: any[]) {
        const res: VideoDB[] | ArticlesDB[] = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (parameter in left[i] && parameter in right[j]) {
                if (
                    Date.parse(left[i][parameter]) >
                    Date.parse(right[j][parameter])
                ) {
                    res.push(left[i++]);
                } else {
                    res.push(right[j++]);
                }
            } else {
                console.error('Sort parameter not found in passed data array');
                res.push(left[i++], right[j++]);
            }
        }

        return res.concat(left.slice(i), right.slice(j));
    }
};
