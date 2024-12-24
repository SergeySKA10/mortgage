import avatarScott from '../assets/img/main_page/avatar_consultant/avatar_scott.png';
import avatarJustin from '../assets/img/main_page/avatar_consultant/avatar_justin.png';

import photoJustin from '../assets/img/main_page/getting_mortgage/Justin.png';
import photoScott from '../assets/img/main_page/getting_mortgage/Scott.png';
import skillDeels from '../assets/icons/main_page/skills_justin/deals.svg';
import skillRightWay from '../assets/icons/main_page/skills_justin/compass.svg';
import skillDatabase from '../assets/icons/main_page/skills_justin/database.svg';
import skillDocs from '../assets/icons/main_page/skills_justin/docs.svg';
import skillLinguist from '../assets/icons/main_page/skills_scott/globe.svg';
import skillHelper from '../assets/icons/main_page/skills_scott/life-buoy.svg';
import skillSeacher from '../assets/icons/main_page/skills_scott/home.svg';
import skillGuru from '../assets/icons/main_page/skills_scott/users.svg';

import logoGoogle from '../assets/icons/main_page/customers/rating/google.png';
import logoZillow from '../assets/icons/main_page/customers/rating/zillow.png';

import photoEmely from '../assets/img/main_page/customers/Emily.png';
import photoMichael from '../assets/img/main_page/customers/Michael.png';
import iconGoogle from '../assets/icons/main_page/customers/G.svg';

const initialState = {
    articles: [
        {
            id: 'Article1',
            subheader: 'Blog',
            header: 'Article #1',
            descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.',
            avatar: avatarScott,
            nameSpeaker: 'Scott Johnson'
        },
        {
            id: 'Article2',
            subheader: 'Blog',
            header: 'Article #2',
            descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.',
            avatar: avatarScott,
            nameSpeaker: 'Scott Johnson'
        },
        {
            id: 'Article3',
            subheader: 'Blog',
            header: 'Article #3',
            descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.',
            avatar: avatarJustin,
            nameSpeaker: 'Justin Roberts'
        }
    ],
    filters: [
        {
            id: 'all',
            name: 'All articles'
        }
    ],
    speakers: [
        {
            id: 'Justin',
            photo: photoJustin,
            name: 'Justin',
            quality: 'The master mind',
            descr: "Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)",
            skills: [
                {id: 'deelsJustin',icons: skillDeels, name: 'Deels'},
                {id: 'WayJustin', icons: skillRightWay, name: 'Find the right way'},
                {id: 'databaseJustin', icons: skillDatabase, name: 'Mortgage «database»'},
                {id: 'docsJustin', icons: skillDocs, name: 'Docs master'}
            ]
        },
        {
            id: 'Scott',
            photo: photoScott,
            name: 'Scott',
            quality: 'The educator',
            descr: "Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)",
            skills: [
                {id: 'linguistScott', icons: skillLinguist, name: 'Linguist'},
                {id: 'searcherScott', icons: skillSeacher, name: 'Perfect place searcher'},
                {id: 'helperScott', icons: skillHelper, name: 'Helper'},
                {id: 'guruScott', icons: skillGuru, name: 'Communication Guru'}
            ]
        }
    ],
    ratings: [
        {
            id: 'google',
            stars: '4.5 stars rating',
            icon: logoGoogle,
            reviews: '85 reviews'
        },
        {
            id: 'zillow',
            stars: '4 stars rating',
            icon: logoZillow,
            reviews: '22 reviews'
        }
    ],
    slidesReviews: [
        {
            id: 'Emely',
            photo: photoEmely,
            city: 'New York',
            name: 'Emily Pearson',
            profession: 'Engeneer',
            icon: iconGoogle,
            review: 'Terms of your offer, how quickly you can turn things around and who your lenders is. advising, calling listing agents, to get your deal done, Offer-Stage advising, calling listing agents, to get your deal done.'
        },
        {
            id: 'Michael',
            photo: photoMichael,
            city: 'Los angeles',
            name: 'Michael Bronson',
            profession: 'Product designe',
            icon: iconGoogle,
            review: 'Terms of your offer, how quickly you can turn things around and who your lenders is. advising, calling listing agents, to get your deal done, Offer-Stage advising, calling listing agents, to get your deal done.'
        }
    ],
    slidesStory: [
        {
            id: 'slide1',
            header: 'Get positioned',
            descr: 'Structure, pre-approval, gathering, put them into the position get the offer accepted.'
        },
        {
            id: 'slide2',
            header: 'Prep the offer',
            descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.'  
        },
        {
            id: 'slide3',
            header: 'Finalize Closing',
            descr: 'Put the final touches on from contract to close. Close the deal.'  
        }
    ],
    videoBlocks: [
        {
            id: 'video1',
            link: 'https://...',
            descr: 'The difference between «fixed rate» and «adjustable»',
            time: '0:29'
        },
        {
            id: 'video2',
            link: 'https://...',
            descr: 'What are points and credits?',
            time: '0:27'
        },
        {
            id: 'video3',
            link: 'https://...',
            descr: 'What are points and credits?',
            time: '0:27'
        }
    ]
}

export default initialState;