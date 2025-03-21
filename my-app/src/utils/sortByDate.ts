import { DataSort } from '@/shared/shared-utils/sortDataType';

// функции для сортировки блоков article по дате:
export const sortByDate = (data: DataSort): DataSort => {
    // функция разделения массивов
    if (data.length < 2) {
        return data;
    } else {
        const middle = Math.floor(data.length / 2);
        const left = data.slice(0, middle);
        const right = data.slice(middle, data.length);

        return merge(sortByDate(left), sortByDate(right));
    }

    // функция по сравнению и формированию массива
    function merge(left: DataSort, right: DataSort) {
        const res: DataSort = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (
                Date.parse(left[i].creation_time) >
                Date.parse(right[j].creation_time)
            ) {
                res.push(left[i++]);
            } else {
                res.push(right[j++]);
            }
        }

        return res.concat(left.slice(i), right.slice(j));
    }
};
