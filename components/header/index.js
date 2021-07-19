import React, { memo } from 'react'
import Logo from '../../public/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'

const Header = () => {

    const menus = [{ "id": 1, "title": "Home", "link": "\/" }, { "id": 2, "title": "About Us", "link": "\/about" }, { "id": 3, "title": "Projects", "link": "\/projects", "submenu": [{ "id": 31, "title": "Youth Empowerment", "link": "\/projects\/youth-empowerment", "submenu": [{ "id": 311, "title": "Library", "link": "\/projects\/youth-empowerment\/library" }, { "id": 312, "title": "IT Team", "link": "\/projects\/youth-empowerment\/it-team" }] }] }, { "id": 4, "title": "Events", "link": "\/events", "submenu": [{ "id": 41, "title": "Socio-Cultural", "link": "\/events\/socio-cultural", "submenu": [{ "id": 411, "title": "Swami Vivekanand Jayanti", "link": "\/events\/socio-cultural\/swami-vivekanand-jayanti" }, { "id": 412, "title": "Rashtrapujan", "link": "\/events\/socio-cultural\/rashtrapujan" }] }] }, { "id": 5, "title": "Contact", "link": "\/contact" }];
    const currentLocation = '/home';

    return (
        <div className="middle-header header-style-3">
            <HeaderTopbar />
            <div className="container">
                <div className="header-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-10 col-sm-10 col-10">
                            <div className="logo">
                                <Link href="/" title="Vivekanand Seva Mandal">
                                    <a href="/" title="Vivekanand Seva Mandal">
                                        <Image src={Logo} alt="" />
                                        <div className="text">
                                            <div>Vivekanand</div>
                                            <div>Seva Mandal</div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-lg-block d-none">
                            <nav>
                                <ul>
                                    {
                                        menus.map((menu) => {
                                            if (menu.submenu?.length > 0) {
                                                return <li key={menu.id}>
                                                    <Link href={menu.link} className={currentLocation?.pathname?.includes(menu.link) ? "active" : ""}>{menu.title}</Link>
                                                    <ul>
                                                        {
                                                            menu.submenu.map((submenu) => {
                                                                if (submenu.submenu?.length > 0) {
                                                                    return <li key={submenu.id}>
                                                                        <i className="fa fa-angle-right"></i>
                                                                        <Link href={submenu.link} className={currentLocation?.pathname?.includes(submenu.link) ? "active" : ""}>{submenu.title}</Link>
                                                                        <ul>
                                                                            {
                                                                                submenu.submenu.map(subsubmenu => {
                                                                                    return <li key={subsubmenu.id}>
                                                                                        <Link href={subsubmenu.link} className={currentLocation?.pathname?.includes(subsubmenu.link) ? "active" : ""}>{subsubmenu.title}</Link>
                                                                                    </li>
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    </li>
                                                                }
                                                                return <li key={submenu.id}>
                                                                    <Link href={submenu.link}>{submenu.title}</Link>
                                                                </li>
                                                            })
                                                        }
                                                    </ul>
                                                </li>
                                            }
                                            return <li key={menu.id}>
                                                <Link href={menu.link} className={menu.link === currentLocation?.pathname ? "active" : ""}>{menu.title}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2">
                            <MobileMenu menus={menus} />
                        </div>
                    </div>

                    <div className="clearfix"></div>
                </div>

            </div>
        </div>
    )
}

export default memo(Header);