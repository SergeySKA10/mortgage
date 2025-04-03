import PromoMain from '@/features/components/PromoMain/PromoMain';
import GettingBlock from '@/features/components/GettingBlock/GettingBlock';
import StoryBlock from '@/features/components/StoryBlock/StoryBlock';
import CustomersBlock from '@/features/components/CustomersBlock/CustomersBlock';
import EducationBlock from '@/features/components/EducationBlock/EducationBlock';
import '@/style/global.css';

export default function Home() {
    return (
        <>
            <PromoMain />
            <GettingBlock />
            {/* <StoryBlock />
            <CustomersBlock />
            <EducationBlock /> */}
        </>
    );
}
