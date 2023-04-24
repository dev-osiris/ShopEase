const Home = () => {
    return (
      <div className="side-padding">
        <h1>To buy exclusive laptops with a wide variety of brands click now!</h1>

        <div className="side-by-side" style={{backgroundColor: "#ececd2", textAlign: "left"}}>
          <div style={{paddingTop: "5em", display: "grid"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum dolor!
            Quibusdam quae ipsam voluptates nobis inventore? Totam veniam magni, possimus quo 
            voluptatum nulla, officiis nesciunt deleniti et incidunt modi.

            <a href="/store">
              <button className="store-btn">Shop Now</button>
            </a>
          </div>

            <img className="home-img" src={require("./images/Home_Laptop.jpg")} alt="Laptop" />
        </div>
      </div>
    );
  };
  
  export default Home; 