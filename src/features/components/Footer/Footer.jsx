import { Link } from 'react-router-dom';
import { Button } from '../Buttons/Buttons';

import './Footer.scss';
import './FooterMedia.scss';
import logo from '../../../assets/icons/main_page/logo/logo_white.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <header className="footer__header">
                <div className="footer__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="footer__btn">
                    <Button type='white' text='Schedule a time' link='#'/>
                </div>
            </header>

            <div className="footer__line">
                <hr className="line_dark"/>
            </div>
        
            <div className="footer__info">
                <div className="footer__contacts">
                    <div className="footer__contacts_company">
                        <div className="footer__contacts_ul roboto-bold">
                            <div className="footer__contacts_header">Contact us</div>
                            <address className="footer__contacts_list roboto-regular">14511 Myford Road, Suite 100, Tustin, CA 92780</address>
                            <Link className="footer__contacts_list roboto-regular" to="800-450-2010">800-450-2010</Link>
                            <Link className="footer__contacts_list roboto-regular" to="customerservice@nafinc.com">customerservice@nafinc.com</Link>
                        </div>
                    </div>
                    <nav className="footer__contacts_education">
                        <ul className="footer__contacts_ul roboto-bold">
                            <div className="footer__contacts_header">Education</div>
                            <li> <Link className="footer__contacts_list roboto-regular" to="/blog">Blog</Link></li>
                            <li><Link className="footer__contacts_list roboto-regular" to="/ebook">Ebook</Link></li>
                            <li><Link className="footer__contacts_list roboto-regular" to="/webinar">Webinar</Link></li>
                        </ul>
                    </nav>
                    <nav className="footer__contacts_legal">
                        <ul className="footer__contacts_ul roboto-bold">
                            <div className="footer__contacts_header">Legal</div>
                            <li><Link className="footer__contacts_list roboto-regular" to="#">Terms of use</Link></li>
                            <li><Link className="footer__contacts_list roboto-regular" to="#">Privacy policy</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer__info_descr">
                    <div className="roboto-light">New American Funding makes Customer Service our number one priority. We encourage you to call our Corporate Customer 
                        Service department at 800-450-2010 ext. 7100 between 8 am and 5:00 pm Pacific or email us anytime at customerservice@nafinc.com for any complaint resolution you may have regarding the origination of your loan.
                    </div>
                    <div className="roboto-light">This site is not authorized by the New York State Department of Financial Services. No mortgage solicitation activity or loan applications for 
                        properties located in the State of New York can be facilitated through this site. Read more at <a href="https://www.newamericanfunding.com/#SsSswc4OzfksTC0E.99">https://www.newamericanfunding.com/#SsSswc4OzfksTC0E.99</a>
                    </div>
                </div>

            </div>

        <hr className="line_dark"/>
        
        <div className="footer__descr roboto-light">
            If you received a letter from New American Funding and would like to be removed from our mailing list, please call 800-450-2010. © 2018 Broker Solutions, Inc. 
            DBA New American Funding. All Rights Reserved.
        </div>
        </footer>
    )
}

export default Footer;