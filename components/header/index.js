import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import MobileMenu from "../../components/MobileMenu";
import Logo from "../../public/images/logo.png";
import HeaderTopbar from "../HeaderTopbar";
import styles from "./Header.module.scss";

const Header = ({ menus = [] }) => {
  const pathname = useRouter()?.pathname;

  return (
    <div
      className={`middle-header header-style-3 ${styles["middle-header-mod"]} ${styles["header-style-3-mod"]}`}
    >
      <HeaderTopbar />
      <div className={`container`}>
        <div className={`header-content`}>
          <div className={`row`}>
            <div className={`col-lg-4 col-md-10 col-sm-10 col-10`}>
              <div className={`logo ${styles["logo-mod"]}`}>
                <Link href="/" title="Vivekanand Seva Mandal">
                  <a title="Vivekanand Seva Mandal">
                    <Image src={Logo} alt="" />
                    <div className={`text ${styles["text-mod"]}`}>
                      <div>Vivekanand</div>
                      <div>Seva Mandal</div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className={`col-lg-8 d-lg-block d-none`}>
              <nav>
                <ul>
                  {menus.map((menu) => {
                    if (menu.submenu?.length > 0) {
                      return (
                        <li key={menu.id}>
                          <Link href={menu.link}>
                            <a
                              className={
                                pathname === menu.link ? styles["active"] : ""
                              }
                            >
                              {menu.title}
                            </a>
                          </Link>
                          <ul>
                            {menu.submenu.map((submenu) => {
                              if (submenu.submenu?.length > 0) {
                                return (
                                  <li key={submenu.id}>
                                    <i className={`fa fa-angle-right`}></i>
                                    <Link href={submenu.link}>
                                      <a
                                        className={
                                          pathname === submenu.link
                                            ? styles["active"]
                                            : ""
                                        }
                                      >
                                        {submenu.title}
                                      </a>
                                    </Link>
                                    <ul>
                                      {submenu.submenu.map((subsubmenu) => {
                                        return (
                                          <li key={subsubmenu.id}>
                                            <Link href={subsubmenu.link}>
                                              <a
                                                className={
                                                  pathname === subsubmenu.link
                                                    ? styles["active"]
                                                    : ""
                                                }
                                              >
                                                {subsubmenu.title}
                                              </a>
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </li>
                                );
                              }
                              return (
                                <li key={submenu.id}>
                                  <Link href={submenu.link}>
                                    <a>{submenu.title}</a>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    }
                    return (
                      <li key={menu.id}>
                        <Link href={menu.link}>
                          <a
                            className={
                              menu.link === pathname ? styles["active"] : ""
                            }
                          >
                            {menu.title}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className={`col-md-2 col-sm-2 col-2`}>
              <MobileMenu menus={menus} />
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
