import orderData from "./orders/orderData";
import MenuList from "./orders/MenuList";
import React from "react";
import { useStateValue } from "./StateProvider";

import "./orders/style.css";
import "./App.css";

const Order = () => {
  const [menuData, changeMenuData] = React.useState(orderData);
  const forceUpdate = React.useState()[1].bind(null, Math.random());

  const handleChange = (addToCard, data) => {
    const {
      id: { menuIndex, subMenu },
    } = data;
    const { count } = menuData[menuIndex].data[subMenu];
    menuData[menuIndex].data[subMenu].count = addToCard ? count + 1 : count - 1;
    changeMenuData(menuData);
    forceUpdate();
  };

  const cartItems = (() =>
    menuData
      .map((menu) => menu.data)
      .reduce((p, n) => [...p, ...n], [])
      .filter((item) => item.count > 0))();

  const totalPrice = cartItems
    .map(({ value, count }) => Number(value) * count)
    .reduce((p, n) => p + n, 0)
    .toFixed(2);

  const handlePurchase = () => {
    alert(
      "Thank you for your purchase. Your order (#23412) will be availabe for pickup in 20 minutes. "
    );
    console.log(cartItems);
  }
  

  const [{ user }] = useStateValue();

  return (
    <div>
      <div className="build_page" id="home">
        <div className="container">
          <div className="row full-screen">
            <div className="home-content">
              <div className="block">
                <h1>IT'S TIME TO BUILD</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="build">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>HEY, {user?.email}! LET'S BUILD YOUR PIZZA!</h1>
              <div className="shop-item">
                {menuData.map((menuItems, i) => (
                  <MenuList
                    {...menuItems}
                    onChange={handleChange}
                    menuIndex={i}
                    key={i}
                  />
                ))}
                <div className="shop-menu">
                  <section className="container content-section">
                    <h2 className="section-header">CART</h2>
                    <table className="cart">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">ITEM</th>
                          <th scope="col">QTY</th>
                          <th scope="col">PRICE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.length ? (
                          cartItems.map(({ label, value, count }, i) => (
                            <tr key={i}>
                              <th scope="row">{i + 1}</th>
                              <td>{label}</td>
                              <td>{count}</td>
                              <td>${(value * count).toFixed(2)}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={4}>The cart is empty</td>
                          </tr>
                        )}
                        <tr>
                          <th colSpan={3}>Total</th>
                          <th>${totalPrice}</th>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      className="btn btn-primary btn-purchase"
                      disabled={!Boolean(Number(totalPrice))}
                      onClick={handlePurchase}
                      type="button"
                    >
                      PURCHASE
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;


// import React from "react";
// import "./App.css";
// import Cheese from "./products/Cheese";
// import Crust from "./products/Crust";
// import HerbsSpices from "./products/HerbsSpices";
// import Meats from "./products/Meats";
// import Size from "./products/Size";
// import Specialty from "./products/Specialty";
// import VeggiesFruit from "./products/VeggiesFruit";
// import { useStateValue } from "./StateProvider";
// import "./store.js";
// import Subtotal from "./Subtotal";

// function Order() {
//   const [{ user }] = useStateValue();
//   const [{ basket }, dispatch] = useStateValue();

//   return (
//     <div>
//       <div className="build_page" id="home">
//         <div className="container">
//           <div className="row full-screen">
//             <div className="home-content">
//               <div className="block">
//                 <h1>IT'S TIME TO BUILD</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="build">
//         <div className="section-title">
//           <h1>HEY, {user?.email}! LET'S BUILD YOUR PIZZA</h1>
//         </div>
//       </div>
//       <div className="home_product">
//         <div className="home_row">
//           <Size
//             id="1"
//             title="Size"
//             item="Small"
//             price={6.25}
//             item2="Medium"
//             price2={7.55}
//             item3="Large"
//             price3={8.85}
//           />
//         </div>
//         <div className="home_row">
//           <Crust
//             id="2"
//             title="Crust"
//             item="Thin Crust"
//             price={0.75}
//             item2="Deep Dish"
//             price2={1.05}
//             item3="Hand Tossed"
//             price3={1.05}
//             item4="Califlower Crust"
//             price4={1.15}
//           />
//         </div>
//         <div className="home_row">
//           <Cheese
//             id="4"
//             title="Cheese"
//             item="American"
//             price={0.75}
//             item2="Cheddar"
//             price2={0.75}
//             item3="Blue Cheese"
//             price3={0.75}
//             item4="Pepper Jack"
//             price4={0.75}
//             item5="Colby"
//             price5={0.75}
//             item6="Feta"
//             price6={1.1}
//             item7="Smoked Gouda"
//             price7={1.1}
//             item8="Mozerella"
//             price8={0.75}
//           />
//         </div>

//         <div className="home_row">
//           <VeggiesFruit
//             id="4"
//             title="Veggies and Fruit"
//             item="Avacado"
//             price={2.0}
//             item2="Tomatoes"
//             price2={1.05}
//             item3="Green Pepper"
//             price3={1.05}
//             item4="Mushrooms"
//             price4={1.05}
//             item5="Onions"
//             price5={1.05}
//             item6="Olives"
//             price6={1.05}
//             item7="Peas"
//             price7={1.05}
//             item8="Red Beans"
//             price8={1.05}
//             item9="Red Pepper"
//             price9={1.05}
//             item10="Spinach"
//             price10={0.75}
//             item11="Zucchini"
//             price11={1.1}
//             item12="Sweet Corn"
//             price12={1.05}
//             item13="Pickles"
//             price13={1.05}
//             item14="Pineapple"
//             price14={1.05}
//           />
//         </div>
//         <div className="home_row">
//           <Meats
//             id="3"
//             title="Meats"
//             item="Pepperoni"
//             price={0.75}
//             item2="Bacon"
//             price2={0.85}
//             item3="Beef"
//             price3={0.75}
//             item4="BBQ Chicken"
//             price4={1.15}
//             item5="Ham"
//             price5={0.75}
//             item6="Sausage"
//             price6={0.75}
//             item7="Salami"
//             price7={0.75}
//             item8="Turkey"
//             price8={0.75}
//           />
//         </div>
//         <div className="home_row">
//           <HerbsSpices
//             id="4"
//             title="Herbs and Spices"
//             item="Basil"
//             price={0.75}
//             item2="Bay Leaf"
//             price2={0.75}
//             item3="Cilantro"
//             price3={0.75}
//             item4="Dill"
//             price4={0.75}
//             item5="Garlic"
//             price5={0.75}
//             item6="Oregano"
//             price6={0.75}
//             item7="Pepper"
//             price7={0.75}
//             item8="Rosemary"
//             price8={0.75}
//             item9="Basil"
//             price9={0.75}
//             item10="Jalepenos"
//             price10={0.75}
//           />
//         </div>
//         <div className="home_row">
//           <Specialty
//             id="2"
//             title="Specialty Items"
//             item="Mac and Cheese"
//             price={3.25}
//             item2="Lobster"
//             price2={4.25}
//             item3="Shrimp"
//             price3={4.1}
//             item4="Salmon"
//             price4={4.1}
//             item5="Mashed Potatoes"
//             price5={1.5}
//           />
//         </div>
//         <div className='home_row'>
//           <Subtotal />
//         </div>
//       </div>
//   );
// }

// export default Order;
