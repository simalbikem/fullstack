import "./Slider.css";
import "./Category-Item.css";

const Slider_Category_a = () => {
  return (
    <section className="slider">
      <div className="slider-elements">
        <div className="slider-image-a">
          <img
            src="img/slider/slider_a/slider.png"
            className="img-fluid-a"
            alt="" />
        </div>

        <section className="categories">
          <div className="category-list-a">
            <ul className="category-list">
              <li className="category-item">
                <img
                  src="img/categories/category-a/categories1.png"
                  alt=""
                  className="category-image" />
              </li>

              <li className="category-item">
                <img
                  src="img/categories/category-a/categories2.png"
                  alt=""
                  className="category-image" />
              </li>
            </ul>
            <ul className="category-list">
              <li className="category-item">
                <img
                  src="img/categories/category-a/categories3.png"
                  alt=""
                  className="category-image" />
              </li>

              <li className="category-item">
                <img
                  src="img/categories/category-a/categories4.png"
                  alt=""
                  className="category-image" />
              </li>
            </ul>
          </div>
        </section>

        <div className="slider-item">
          <div className="slider-image">
            <a href="index.html">
              <img
                src="img/slider/slider_c/slider1.png"
                className="img-fluid"
                alt="" />
            </a>
          </div>
        </div>

        <div className="slider-item">
          <div className="slider-image">
            <a href="index.html">
              <img
                src="img/slider/slider_c/slider2.png"
                className="img-fluid"
                alt="" />
            </a>
          </div>
        </div>

        <div className="slider-item">
          <div className="slider-image">
            <a href="index.html">
              <img
                src="img/slider/slider_c/slider3.png"
                className="img-fluid"
                alt="" />
            </a>
          </div>
        </div>

        <div className="slider-clickables">
          <div className="slider-dots">
            <button className="slider-dot active" onClick="currentSlide(1)">
              <span></span>
            </button>
            <button className="slider-dot" onClick="currentSlide(2)">
              <span></span>
            </button>
            <button className="slider-dot" onClick="currentSlide(3)">
              <span></span>
            </button>
          </div>
        </div>

        <div className="slider-item">
          <div className="slider-image">
            <a href="index.html">
              <img
                src="img/slider/slider_d/slider4.png"
                className="img-fluid"
                alt="" />
            </a>
          </div>
        </div>

        <div className="slider-item">
          <div className="slider-image">
            <a href="index.html">
              <img
                src="img/slider/slider_d/slider5.png"
                className="img-fluid"
                alt="" />
            </a>
          </div>
        </div>

        <div className="slider-item">
          <div className="slider-image">
            <a href="index.html">
              <img
                src="img/slider/slider_d/slider6.png"
                className="img-fluid"
                alt="" />
            </a>
          </div>
        </div>

        <div className="slider-clickables-2"></div>
      </div>
    </section>
  );
};

export default Slider_Category_a;
