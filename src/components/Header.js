import React from "react";
import BluePointLogo from "../images/BluePointLogo.png";

function Header() {
  return (
    <div className="App">
      <header>
        <div class="header-top">
          <div class="container">
            <ul class="header-social-container">
              <li>
                <a href="/admin" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
            <div class="header-alert-news">
              <p>
                <b> Envío Gratis </b>
                Si ordena mas de 2000 Lempiras
              </p>
            </div>
            <div class="header-top-actions">
              <select name="currency">
                <option value="usd">USD</option>
                <option value="eur">LPS</option>
              </select>
              <select name="language">
                <option value="en-US">English</option>
                <option value="es-ES">Español</option>
              </select>
            </div>
          </div>
        </div>
        <div class="header-main">
          <div class="container">
            <div>
              <a class="header-logo" href="/">
                <img src={BluePointLogo} alt="Blue Point" />
                Blue Point
              </a>
            </div>
            <div class="header-search-container">
              <input
                type="search"
                name="search"
                class="search-field"
                placeholder="Busque su Producto..."
              />
              <button class="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>
            <div class="header-user-actions">
              <button class="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </button>
              <button class="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span class="count">0</span>
              </button>
              <button class="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span class="count">0</span>
              </button>
            </div>
          </div>
        </div>
        <nav class="desktop-navigation-menu">
          <div class="container">
            <ul class="desktop-menu-category-list">
              <li class="menu-category">
                <a href="/" class="menu-title">
                  Admin
                </a>
                <ul class="dropdown-list">
                  <li class="dropdown-item">
                    <a href="/venta">Facturar</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/reporte">Consultar</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/actualizar">Actualizar</a>
                  </li>
                </ul>
              </li>
              <li class="menu-category">
                <a href="/" class="menu-title">
                  Categorias
                </a>
                <div class="dropdown-panel">
                  <ul class="dropdown-panel-list">
                    <li class="menu-title">
                      <a href="/">Electronicos</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Computadoras</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Portatiles</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Camaras</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Tablet</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Telefonos Moviles</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">
                        <img
                          src="assets/images/electronics-banner-1.jpg"
                          alt="headphone collection"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>
                  <ul class="dropdown-panel-list">
                    <li class="menu-title">
                      <a href="/">Hombres</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Formal</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Casual</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Sports</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Chaquetas</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">gafas de sol</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">
                        <img
                          src="assets/images/mens-banner.jpg"
                          alt="men's fashion"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>
                  <ul class="dropdown-panel-list">
                    <li class="menu-title">
                      <a href="/">Women's</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Formal</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Casual</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Perfume</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Cosmetics</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Bags</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">
                        <img
                          src="assets/images/womens-banner.jpg"
                          alt="women's fashion"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>
                  <ul class="dropdown-panel-list">
                    <li class="menu-title">
                      <a href="/">Electronics</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Smart Watch</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Smart TV</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Keyboard</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Mouse</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">Microphone</a>
                    </li>
                    <li class="panel-list-item">
                      <a href="/">
                        <img
                          src="assets/images/electronics-banner-2.jpg"
                          alt="mouse collection"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu-category">
                <a href="/" class="menu-title">
                  Blog
                </a>
              </li>
              <li class="menu-category">
                <a href="/" class="menu-title">
                  Mejores Ofertas
                </a>
                <ul class="dropdown-list">
                  <li class="dropdown-item">
                    <a href="/">Productos Nuevos</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/">Mejores Precios</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/">Ofertas De Temporada</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        {/*___________________________________*
                   MENU MOVIL 
        *_____________________________________*/}

        <div class="mobile-bottom-navigation">
          <button class="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <button class="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span class="count">0</span>
          </button>
          <button class="action-btn">
            <ion-icon name="home-outline"></ion-icon>
          </button>
          <button class="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span class="count">0</span>
          </button>
          <button class="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        </div>
        <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
          <div class="menu-top">
            <h2 class="menu-title">Menu</h2>
            <button class="menu-close-btn" data-mobile-menu-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <ul class="mobile-menu-category-list">
            <li class="menu-category">
              <a href="/" class="menu-title">
                Home
              </a>
            </li>
            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Men's</p>
                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    class="remove-icon"
                  ></ion-icon>
                </div>
              </button>
              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Shirt
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Shorts & Jeans
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Safety Shoes
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Wallet
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Women's</p>
                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    class="remove-icon"
                  ></ion-icon>
                </div>
              </button>
              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Dress & Frock
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Earrings
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Necklace
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Makeup Kit
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Jewelry</p>
                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    class="remove-icon"
                  ></ion-icon>
                </div>
              </button>
              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Earrings
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Couple Rings
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Necklace
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Bracelets
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Perfume</p>
                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    class="remove-icon"
                  ></ion-icon>
                </div>
              </button>
              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Clothes Perfume
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Deodorant
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Flower Fragrance
                  </a>
                </li>
                <li class="submenu-category">
                  <a href="/" class="submenu-title">
                    Air Freshener
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-category">
              <a href="/" class="menu-title">
                Blog
              </a>
            </li>
            <li class="menu-category">
              <a href="/" class="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
          <div class="menu-bottom">
            <ul class="menu-category-list">
              <li class="menu-category">
                <button class="accordion-menu" data-accordion-btn>
                  <p class="menu-title">Language</p>
                  <ion-icon
                    name="caret-back-outline"
                    class="caret-back"
                  ></ion-icon>
                </button>
                <ul class="submenu-category-list" data-accordion>
                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      English
                    </a>
                  </li>
                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      Espa&ntilde;ol
                    </a>
                  </li>
                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      Fren&ccedil;h
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-category">
                <button class="accordion-menu" data-accordion-btn>
                  <p class="menu-title">Currency</p>
                  <ion-icon
                    name="caret-back-outline"
                    class="caret-back"
                  ></ion-icon>
                </button>
                <ul class="submenu-category-list" data-accordion>
                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      USD &dollar;
                    </a>
                  </li>
                  <li class="submenu-category">
                    <a href="/" class="submenu-title">
                      EUR &euro;
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="menu-social-container">
              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" class="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
