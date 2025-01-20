import PromoBlog from "../components/PromoBlog/PromoBlog";
import Steps from "../components/Step/Steps";
import Books from "../components/BlogBook/Books";
import Education from "../components/BlogEducation/Education";

const BlogPage = () => {
    return (
        <>
            <PromoBlog/>
            <Steps/>
            {/* <Books/> */}
            <Education/>
        </>
    )
}

export default BlogPage;