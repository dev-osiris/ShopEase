const Home = () => {
    return (
      <div className="side-padding Home-text">
        <h1>To buy exclusive laptops with a wide variety of brands click now!</h1>

        <div className="side-by-side" style={{backgroundColor: "#ececd2", textAlign: "left"}}>
          <div style={{paddingTop: "1em", display: "grid"}}>
            <p>
              Welcome to shopEase We understand the importance of having a reliable
              and efficient laptop, whether you're a student, professional, or simply need a device
              for entertainment purposes. 
              Our collection features the latest models from top brands, ensuring you have access to
              the best technology on the market. Our user-friendly interface and secure payment
              options make it easy for you to find and purchase the laptop that best suits your needs.
              Start browsing now and upgrade your laptop today!
            </p>

            <a style={{display:"contents"}} href="/store">
              <button className="shop-now-btn">Shop Now</button>
            </a>
          </div>

            <img className="home-img" src={require("./images/Home_Laptop.jpg")} alt="Laptop" />
        </div>
      </div>
    );
  };
  
  export default Home; 