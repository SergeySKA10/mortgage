import type { Metadata } from 'next';
import { SideNav } from './navigationBar/SideNav';
import { PopUp } from './popup/PopUp';
import { ButtonDashboard } from '@/features/components/ui/Buttons/ButtonDashboard';
import '@/style/global.css';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard',
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="dashboard">
                <SideNav />
                <div className="dashboard__content">
                    <div className="dashboard__content-btn">
                        <ButtonDashboard text={'Create'} type="create" />
                    </div>
                    <div className="dashboard__content-cards">{children}</div>
                </div>
                <PopUp />
            </div>
        </>
    );
}
