import Chart from "../../components/chart/Chart"
import "./product.css"
import {Link} from 'react-router-dom'

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
            <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chart />
        </div>
      </div>
      <div className="productBottom"></div>
    </div>
  )
}
