import "../../../src/App.css";
import styles from "./About.module.css";
import images from "../../Data/images";

export default function About() {
  return (
    <div
      className={`${styles.about}  flex__center section__padding`}
      id="About"
    >
      <div className={`${styles.about_content} flex__center`}>
        <div className={styles.about_content_about}>
          <h1 className="headtext__cormorant">About Us</h1>
          <p className="p__opensans">
            Welcome to Travelers Hut, the ultimate destination for food
            enthusiasts! Our restaurant takes you on a culinary journey with a
            diverse menu featuring mouthwatering dishes such as burgers, pizzas,
            salads, corn, and delightful lunchboxes. Indulge your sweet tooth
            with our delectable desserts while savoring the taste of our unique
            coffees and teas, making every visit a memorable and satisfying
            experience. Join us and embark on a gastronomic adventure like no
            other!
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className={`${styles.about_content_utensils} flex__center`}>
          <img src={images.utensils} alt="utensils img" />
        </div>

        <div className={styles.about_content_history}>
          <h1 className="headtext__cormorant">Our History</h1>
          <p className="p__opensans">
            Our History Founded by Lyova Hovakimyan, Travelers Hut is a
            family-run restaurant, born from a passion for culinary excellence.
            With a warm and inviting atmosphere, we offer a diverse menu
            featuring burgers, pizzas, salads, corn, lunchboxes, sweets, and
            unique coffees and teas, ensuring every visit is a delightful and
            memorable experience. Join us on our storied journey and savor the
            flavors of our extraordinary heritage.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}
