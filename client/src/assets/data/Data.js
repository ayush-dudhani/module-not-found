// import all images from assets/images directory
// import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png"
// import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png"

import MainHarvestor from "../MainHarvester.jpg"
import Tractor from "../Tractor.jpg"
const Data = [
  {
    id: 1,
    brand: "FieldKing",
    rating: 112,
    carName: "Harvester",
    img: MainHarvestor,
    model: "Quanchai 4C6-100M22",
    price: 2000,
    speed: "10kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " HST (Hydrostatic transmission) with 42cc & electromagnetically operated valves for high efficiency and easy steering and operations in the field.Longer & wider rubber track causes less ground pressure which makes its operation smoother and quicker in swampy, uneven and wet fields.Vertical threshing rotor and strong concave sieves. 2.2 meter cutter bar helps in harvesting more acres per hour..",
  },

  {
    id: 2,
    brand: "FieldKing",
    rating: 102,
    carName: "Rotavator",
    img: img02,
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "  It has a Semi automatic dual speed gear box, which provides option of 2 different rotor rpm for different soil conditions and applications.We can easily change the rotor speed with the lever attached , without removing the back cover of the gear box.",
  },

  {
    id: 3,
    brand: "Mahindra",
    rating: 132,
    carName: "Tractor",
    img: Tractor,
    model: "475 DI XP Plus",
    price: 1500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mahindra 475 DI XP Plus is underpinned by an engine that is always ready to handle all kinds of terrains and farming operations. The powerful, extra-long stroke diesel engine drives the massive wheels and implements. This engine is faster, yet, the rated torque is low enough to exploit the enormous torque during your regular farming operations.",
  },

  {
    id: 4,
    brand: " JCB",
    rating: 102,
    carName: " JCB",
    img: img04,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The story of JCB is one of innovation, ambition and sheer hard work. From small beginnings building agricultural tipping trailers in 1945 to the global force in manufacturing the company has become today, JCB has constantly pushed the boundaries in our desire to be the best",
  },
]

export default Data
