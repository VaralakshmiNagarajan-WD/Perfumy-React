import oneImage from "../assets/one.jpg"
import twoImage from "../assets/two.jpg"
import threeImage from "../assets/three.jpg"

//Product Component
function Product() {
    return (
      <div class="products">
  
        <div class="box">
          <img src={oneImage}></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
        <div class="box">
          <img src={twoImage}></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
        <div class="box">
          <img src={threeImage}></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
  
      </div>
    )
  }

  export default Product
  
  