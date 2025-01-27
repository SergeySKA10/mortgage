import './Report.scss';

const Report = () => {
    return (
        <section class="report">
            <h2 class="header__h2 roboto-bold">What's in the report</h2>
            <div class="report__wrapper">
                <div class="report__wrapper_elem">
                    <div class="report__wrapper_icon">
                        <img src="assets/icons/webinar_page/percent.svg" alt="rate"/>
                    </div>
                    <h4 class="header__h4 roboto-bold">Rate</h4>
                    <p class="report__wrapper_descr roboto-regular">Yes. Rate is important, but it's not everything. Understanding your rate is more important.</p>
                </div>

                <div class="report__wrapper_elem">
                    <div class="report__wrapper_icon">
                        <img src="assets/icons/webinar_page/users.svg" alt="Relationships"/>
                    </div>
                    <h4 class="header__h4 roboto-bold">Relationships</h4>
                    <p class="report__wrapper_descr roboto-regular">Build a solid relationship with a realtor a lender and never look back!</p>
                </div>

                <div class="report__wrapper_elem">
                    <div class="report__wrapper_icon">
                        <img src="assets/icons/webinar_page/clipboard.svg" alt="Pre-Approved"/>
                    </div>
                    <h4 class="header__h4 roboto-bold">Pre-Approved</h4>
                    <p class="report__wrapper_descr roboto-regular">Build a solid relationship with a realtor a lender and never look back!</p>
                </div>
            </div>
        </section>
    )
}

export default Report;