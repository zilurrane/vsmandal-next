import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import Link from "next/link";
import { Fragment } from "react";
import styles from "./MobileMenu.module.scss";

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;
    const { menus } = this.props;

    return (
      <div>
        <div
          className={`mobileMenu ${isMenuShow ? `${styles["show-mod"]}` : ""} ${styles["mobileMenu-mod"]
            }`}
        >
          <ul className={`responsivemenu ${styles["responsivemenu-mod"]}`}>
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p onClick={this.setIsOpen(item.id)}>
                      {item.title}
                      {item.submenu ? (
                        <i
                          className={`fa fa-angle-right`}
                          aria-hidden="true"
                        ></i>
                      ) : (
                        ""
                      )}
                    </p>
                  ) : (
                    <Link href={item.link}>{item.title}</Link>
                  )}
                  {item.submenu ? (
                    <Collapse isOpen={item.id === isOpen}>
                      <Card>
                        <CardBody>
                          <ul>
                            {item.submenu.map((submenu) => (
                              <Fragment key={submenu.id}>
                                <li key={submenu.id}>
                                  <Link
                                    className={`active`}
                                    href={submenu.link}
                                  >
                                    {submenu.title}
                                  </Link>
                                </li>
                                {submenu.submenu && <li>
                                  <ul>
                                    {submenu.submenu.map((subsubmenu) => (
                                      <li key={subsubmenu.id}>
                                        <Link
                                          className="active"
                                          href={subsubmenu.link}
                                        >
                                          {subsubmenu.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>}
                              </Fragment>
                            ))}
                          </ul>
                        </CardBody>
                      </Card>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`showmenu ${styles['showmenu-mod']}`} onClick={this.menuHandler}>
          <i className={`fa fa-bars`} aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
