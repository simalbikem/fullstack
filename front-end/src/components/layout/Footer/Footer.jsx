import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe-row">
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe-wrapper">
              <div className="footer-subscribe">
                <div className="footer-subscribe-top">
                  <h3 className="subscribe-title">E-Bülten</h3>
                </div>
                <div className="footer-subscribe-bottom">
                  <form>
                    <input
                      type="email"
                      placeholder="E-Posta adresinizi giriniz."
                    />
                    <button className="bi bi-envelope-paper-heart-fill"></button>
                  </form>
                  <div className="download-app">
                    <h4>Uygulamalarımız:</h4>
                    <a href="#">
                      <img src="img/footer/app-store.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="img/footer/play-store.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-contact-wrapper">
              <div className="footer-concact-top">
                <h3 className="contact-title">Bize Ulaşın</h3>
                <h4 className="contact-items">
                  <u>Telefon:</u> 0553 675 69 98 <br />
                  <u>Mail:</u>
                  info@matbutikshop.com <br />
                  <u>Adres:</u> Yıldırım Mahallesi, Ali Fuat Başgil Caddesi,
                  No:61/A, Bayrampaşa/İstanbul
                </h4>
                <p className="contact-available">
                  Haftaiçi saat 09:00 ve 18:00 arasında ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="policy">
        <div className="container">
          <ul className="policy-list">
            <li className="policy-item">
              <i className="bi bi-truck"></i>
              <div className="policy-texts">
                <strong>Hızlı Teslimat</strong>
                <span>Siparişleriniz en kısa sürede elinize ulaşır.</span>
              </div>
            </li>
            <li className="policy-item">
              <i className="bi bi-headset"></i>
              <div className="policy-texts">
                <strong>7/24 Destek</strong>
                <span>Öneri ve şikayetlerinizi bize iletebilirsiniz.</span>
              </div>
            </li>
            <li className="policy-item">
              <i className="bi bi-box2-heart"></i>
              <div className="policy-texts">
                <strong>Geniş Ürün Yelpazesi</strong>
                <span>Binlerce ürün ve kampanya seçeneği </span>
              </div>
            </li>
            <li className="policy-item">
              <i className="bi bi-credit-card"></i>
              <div className="policy-texts">
                <strong>Güvenli Alışveriş</strong>
                <span>Güvenli ve kolay ödeme sistemi</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <a href="#" className="logo">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <div className="footer-description">
                <p>
                  Mat Butik ile stilinizi 20% sezon indirimi ile yansıtın.
                  <br />
                  Uygun fiyatlarla her sezon yenilenin!
                </p>
              </div>
              <div className="footer-contact">
                <p>
                  <a href="tel:0 553 675 69 98">(+90) 553 675 69 98</a> –
                  <a href="mailto:info@matbutikshop.com">
                    info@matbutikshop.com
                  </a>
                </p>
              </div>
            </div>
            <div className="widget-nav-menu">
              <h4>KURUMSAL</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Mesafeli Satış Sözleşmesi</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">Gizlilik Sözleşmesi</a>
                </li>
                <li>
                  <a href="#">Değişim & İade</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>MÜŞTERİ HİZMETLERİ</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                  <a href="#">Sipariş Takip</a>
                </li>
                <li>
                  <a href="#">Havale Bildirimleri</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>KATEGORİLER</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">DIŞ GİYİM</a>
                </li>
                <li>
                  <a href="#">ÜST GİYİM</a>
                </li>
                <li>
                  <a href="#">ALT GİYİM</a>
                </li>
                <li>
                  <a href="#">TAKI & AKSESUAR</a>
                </li>
                <li>
                  <a href="#">İÇ GİYİM</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <div className="site-copyright">
              <p>
                Tüm bilgileriniz 256bit SSL Sertifikası ile korunmaktadır. ©2024
                Tüm Hakları Saklıdır _ by Şimal Bikem CEYLAN
              </p>
            </div>
            <a href="#">
              <img src="img/footer/cards.png" alt="" />
            </a>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="menu-list-item">Gizlilik Politikası</li>
                <li className="menu-list-item">Şartlar ve Koşullar</li>
                <li className="menu-list-item">İade Politikası</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;