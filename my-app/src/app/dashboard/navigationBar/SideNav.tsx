import Link from 'next/link';
import { Line } from '@/features/components/ui/Line/Line';
import './SideNav.scss';

export const SideNav = () => {
    return (
        <aside className="aside">
            <h1 className="header__h1">Sections</h1>
            <Line />
            <nav className="aside-navigation">
                <ul>
                    <li>
                        <Link
                            href={'/dashboard/artices'}
                            className="aside-navigation-item"
                        >
                            Article
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/mentors'}
                            className="aside-navigation-item"
                        >
                            Mentors
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/books'}
                            className="aside-navigation-item"
                        >
                            Books
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/webinars'}
                            className="aside-navigation-item"
                        >
                            Webinars
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/reviews'}
                            className="aside-navigation-item"
                        >
                            Reviews
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/storys'}
                            className="aside-navigation-item"
                        >
                            Storys
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/videos'}
                            className="aside-navigation-item"
                        >
                            Video articles
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
