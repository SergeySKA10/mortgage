 // функции для сортировки блоков article по дате:
export const sortByDate = (data) => {
    // функция разделения массивов
    function mergeSort(data) {
        if (data.length < 2) {
            return data;
        } else {
            const middle = Math.floor(data.length / 2);
            const left = data.slice(0, middle);
            const right = data.slice(middle, data.length);
            
            return merge( mergeSort(left), mergeSort(right) );
        }
    }

    // функция по сравнению и формированию массива
    function merge(left, right) {
        const res = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (Date.parse(left[i].creation_time) > Date.parse(right[j].creation_time)) {
                res.push(left[i++]);
            } else {
                res.push(right[j++]);
            }
        }

        return res.concat(left.slice(i), right.slice(j))
    }

    return mergeSort(data);
}