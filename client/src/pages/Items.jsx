import { Col } from "reactstrap"
import { Link } from "react-router-dom"
import "../styles/item.css"

const Item = (props) => {
  const { id, img, displayName, Price, address, phone } = props.item

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="item">
        <div className="img">
          <img src={img} alt="" style={{width: "250px", height: "130px", marginLeft:"auto", marginRight: "auto", borderRadius: "10px"}} />
        </div>

        <div className="item-content mt-4">
          <h4 className="section__title text-center">{displayName}</h4>
          <h6 className="rent__price text-center mt-">
            Rs {Price}.00 / Day <span>/ Day</span>
          </h6>

          <div className="item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-tools-line"></i> {displayName}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {address}
            </span>
            {/* <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span> */}
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
          <button className="item-btn car__btn-rent" style={{width: "40%", borderRadius:"5px"}}>
            <Link to={`/equipments/${id}`}>Rent</Link>
          </button>

          <button className="item-btn car__btn-details" style={{width: "40%", borderRadius:"5px"}}>
            <Link to={`/equipments/${id}`}>Details</Link>
          </button>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default Item
