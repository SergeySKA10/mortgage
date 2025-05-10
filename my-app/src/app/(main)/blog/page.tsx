import PromoBlog from '@/features/components/PromoBlog/PromoBlog';
import Steps from '@/features/components/Steps/Steps';
import Books from '@/features/components/Books/Books';
import Education from '@/features/components/Education/Education';
import '@/style/global.css';

export default function Blog() {
    return (
        <>
            <PromoBlog />
            <Steps />
            <Books />
            <Education />
        </>
    );
}
