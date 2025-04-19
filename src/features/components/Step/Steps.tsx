// import useGetData from '../../../services/useGetData';
// import setContent from '../../../utils/setContent';
// import { sortByDate } from '../../../utils/sortByDate';

// import { useState, useEffect } from 'react';

// import VideoCard from '../ui/VideoCard/VideoCard';

// import './Steps.scss';
// import './StepsMedia.scss';

// const Steps = () => {
//     // делаем запрос для получения данных
//     const {process, getData: {data, isError, isPending}} = useGetData('video', 2);

//     // создаем state для блока видео
//     const [videos, setVideos] = useState([]);

//     // формируем карточки с видео
//     useEffect(() => {
//         if (data) {
//             const sortData = sortByDate(data);
//             setVideos(videos => sortData.map(el => <VideoCard key={el.id} data={el}/>));
//         }
//     }, [data]);

//     return (
//         <section className="steps">
//             <div className="container">
//                 <div className="steps__wrapper">
//                     {setContent({process, isError, isPending, Components: videos})}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Steps;
