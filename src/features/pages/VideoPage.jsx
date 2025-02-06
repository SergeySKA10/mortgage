// import { useState, useEffect } from "react";

// const VideoPage = () => {
//     // const _apiYouTube = 'https://www.youtube.com/watch?v=';

//     const [player, setPlayer] = useState(null);

//     useEffect(() => {
//         setPlayer(document.querySelector('#player'));

//         if (player) {
//             initPlayer();
//         }
//     }, [player])

//     const createPlayer = (url) => {
//         const player = new YT.Player('player', {
//             height: '100%',
//             width: '100%',
//             videoId: url,
//             events: {
//               'onReady': onPlayerReady,
//               'onStateChange': onPlayerStateChange
//             }
//         });

//         console.log(player);
//     }

//     const initPlayer = () => {
//         const tag = document.createElement('noscript');

//         tag.src = "https://www.youtube.com/iframe_api";
//         const firstScriptTag = document.getElementsByTagName('noscript')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//         createPlayer('ZRcfHk3unR8');
//     }

//     return (
//         <section style={{
//             display: 'flex', 
//             justifyContent: 'center', 
//             padding: '50px', 
//             width: '100%', 
//             height: '100%'
//             }}>
//             <div id="player" style={{
//                 width: "720px",
//                 height: "480px",
//                 boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)'
//             }}>

//             </div>
//         </section>
//     )
// }

// export default VideoPage;