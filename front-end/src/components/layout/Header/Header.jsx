import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            ONLİNE / HAVALE ÖDEMELERDE KARGO ÜCRETİ 19,99TL! -{" "}
            <a href="index.html">ŞİMDİ SATIN ALIN!</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <a href="index.html" className="logo">
                <img
                  src="https://cdn.qukasoft.com/f/996869/cG96WmFta3QrNjQrTm53Z1RvTnE/images/logo/logo-20.webp"
                  alt="logo"
                />
              </a>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <a href="index.html" className="menu-link active">
                      ANA MENÜ
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">Yeni Gelenler</a>
                        </li>
                        <li>
                          <a href="#">Çok Satanlar</a>
                        </li>
                        <li>
                          <a href="#">Sezon/23</a>
                        </li>
                        <li>
                          <a href="#">Ürünleri Keşfet</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <a href="shop.html" className="menu-link">
                      KATEGORİLER
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="mega-menu-products">
                            <h3 className="megamenu-product-title">
                              ÜST GİYİM
                            </h3>
                            <ul className="megamenu-list">
                              <li>
                                <a href="#">T-Shirt</a>
                              </li>
                              <li>
                                <a href="#">Bluz</a>
                              </li>
                              <li>
                                <a href="#">Gömlek</a>
                              </li>
                              <li>
                                <a href="#">Elbise</a>
                              </li>
                              <li>
                                <a href="#">Hırka</a>
                              </li>
                              <li>
                                <a href="#">Takım</a>
                              </li>
                              <li>
                                <a href="#">Sweatshirt</a>
                              </li>
                              <li>
                                <a href="#">Kazak</a>
                              </li>
                              <li>
                                <a href="#">Bralet</a>
                              </li>
                              <li>
                                <a href="#">Crop</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu-products">
                            <h3 className="megamenu-product-title">
                              ALT GİYİM
                            </h3>
                            <ul className="megamenu-list">
                              <li>
                                <a href="#">Pijama</a>
                              </li>
                              <li>
                                <a href="#">Eşofman</a>
                              </li>
                              <li>
                                <a href="#">Pantolon</a>
                              </li>
                              <li>
                                <a href="#">Tayt</a>
                              </li>
                              <li>
                                <a href="#">Etek</a>
                              </li>
                              <li>
                                <a href="#">Şort</a>
                              </li>
                              <li>
                                <a href="#">Jean</a>
                              </li>
                            </ul>
                            <h3 className="megamenu-product-title">
                              DIŞ GİYİM
                            </h3>
                            <ul className="megamenu-list">
                              <li>
                                <a href="#">Ceket</a>
                              </li>
                              <li>
                                <a href="#">Mont</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu-products">
                            <h3 className="megamenu-product-title">
                              TAKI & AKSESUAR
                            </h3>
                            <ul className="megamenu-list">
                              <li>
                                <a href="#">Kemer</a>
                              </li>
                              <li>
                                <a href="#">Gözlük</a>
                              </li>
                            </ul>
                            <h3 className="megamenu-product-title">
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">ÇANTA</a>
                                </li>
                              </ul>
                            </h3>
                            <h3 className="megamenu-product-title">
                              <ul className="megamenu-list">
                                <li>
                                  <a href="shop.html">TÜMÜNÜ GÖR</a>
                                </li>
                              </ul>
                            </h3>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <a href="#">
                            <img src="img/mega_menu.jpg" alt="" />
                          </a>
                          <h2 className="megamenu-single-title">
                            TÜM ÜRÜNLERDE %25 İNDİRİM!
                          </h2>
                          <h4 className="megamenu-single-subtitle">
                            10 Haziran - 13 Temmuz
                          </h4>
                          <a
                            href="shop.html"
                            className="megamenu-single-button btn btn-sm"
                          >
                            Şimdi Satın Alın
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <a href="contact.html" className="menu-link">
                      {" "}
                      İLETİŞİM{" "}
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="blog.html" className="menu-link">
                      {" "}
                      BLOG{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <button className="search-button">
                  <i className="bi bi-search"></i>
                </button>
                <a href="account.html" className="header-account">
                  <i className="bi bi-person-heart"></i>
                </a>
                <a
                  href="https://www.instagram.com/matbutikk/?hl=tr"
                  className="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <div className="header-cart">
                  <a href="cart.html" className="header-cart-link">
                    <i className="bi bi-cart3"></i>
                    <span className="header-cart-count">0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;