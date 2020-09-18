import React from "react";
import "./App.css";
import { useStateValue } from "./StateProivder";
import "./store.js";

function Order() {
// const [{ user }] = useStateValue();

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
              <h1>Let's Get Started</h1>
              <div className="shop-item">
                <h2>Select your size</h2>

                <div className="shop-item">
                  <span className="shop-item-title">Small</span>
                  <img className="shop-item-image" />
                  <div className="shop-item-details">
                    <span className="shop-item-price">$6.25</span>
                    <input
                      type="checkbox"
                      className="btn btn-primary shop-item-button"
                    />
                  </div>
                </div>
                <div className="shop-item">
                  <span className="shop-item-title">Medium</span>
                  <img className="shop-item-image" />
                  <div className="shop-item-details">
                    <span className="shop-item-price">$7.55</span>
                    <input
                      type="checkbox"
                      className="btn btn-primary shop-item-button"
                    />
                  </div>
                </div>
                <div className="shop-item">
                  <span className="shop-item-title">Large</span>
                  <img className="shop-item-image" />
                  <div className="shop-item-details">
                    <span className="shop-item-price">$8.85</span>
                    <input
                      type="checkbox"
                      className="btn btn-primary shop-item-button"
                    />
                  </div>
                </div>
                <h2>Select your crust</h2>
                <div className="shop-items">
                  <div className="shop-item">
                    <span className="shop-item-title">Thin crust</span>
                    <img className="shop-item-image" />
                    <div className="shop-item-details">
                      <span className="shop-item-price">$.75</span>
                      <input
                        type="checkbox"
                        className="btn btn-primary shop-item-button"
                      />
                    </div>
                  </div>
                  <div className="shop-item">
                    <span className="shop-item-title">Deep Dish</span>

                    <img className="shop-item-image" />
                    <div className="shop-item-details">
                      <span className="shop-item-price">$1.00</span>
                      <input
                        type="checkbox"
                        className="btn btn-primary shop-item-button"
                      />
                    </div>
                  </div>
                  <div className="shop-item">
                    <span className="shop-item-title">Hand tossed Round</span>

                    <img className="shop-item-image" />
                    <div className="shop-item-details">
                      <span className="shop-item-price">$1.00</span>
                      <input
                        type="checkbox"
                        className="btn btn-primary shop-item-button"
                      />
                    </div>
                    <div className="shop-item">
                      <span className="shop-item-title">Califlower Crust</span>

                      <img className="shop-item-image" />
                      <div className="shop-item-details">
                        <span className="shop-item-price">$1.10</span>
                        <input
                          type="checkbox"
                          className="btn btn-primary shop-item-button"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h2>Select your meats</h2>
                <div className="shop-items">
                  <div className="shop-item">
                    <span className="shop-item-title three">Pepperoni</span>

                    <img className="shop-item-image" />
                    <div className="shop-item-details">
                      <span className="shop-item-price">$.75</span>
                      <input
                        type="checkbox"
                        className="btn btn-primary shop-item-button"
                      />
                    </div>
                  </div>
                  <div className="shop-item">
                    <span className="shop-item-title four">Bacon</span>

                    <img className="shop-item-image" />
                    <div className="shop-item-details">
                      <span className="shop-item-price">$.85</span>
                      <input
                        type="checkbox"
                        className="btn btn-primary shop-item-button"
                      />
                    </div>
                    <div className="shop-items">
                      <div className="shop-item">
                        <span className="shop-item-title five">Beef</span>

                        <img className="shop-item-image" />
                        <div className="shop-item-details">
                          <span className="shop-item-price">$.75</span>
                          <input
                            type="checkbox"
                            className="btn btn-primary shop-item-button"
                          />
                        </div>
                      </div>
                      <div className="shop-item">
                        <span className="shop-item-title six">Bbq chicken</span>

                        <img className="shop-item-image" />
                        <div className="shop-item-details">
                          <span className="shop-item-price">$1.10</span>
                          <input
                            type="checkbox"
                            className="btn btn-primary shop-item-button"
                          />
                        </div>
                        <div className="shop-items">
                          <div className="shop-item">
                            <span className="shop-item-title seven">Ham</span>

                            <img className="shop-item-image" />
                            <div className="shop-item-details">
                              <span className="shop-item-price">$.75</span>
                              <input
                                type="checkbox"
                                className="btn btn-primary shop-item-button"
                              />
                            </div>
                          </div>
                          <div className="shop-items">
                            <div className="shop-item">
                              <span className="shop-item-title eight">
                                Meatballs
                              </span>

                              <img className="shop-item-image" />
                              <div className="shop-item-details">
                                <span className="shop-item-price">$.75</span>
                                <input
                                  type="checkbox"
                                  className="btn btn-primary shop-item-button"
                                />
                              </div>
                            </div>
                            <div className="shop-item">
                              <span className="shop-item-title nine">
                                Sausage
                              </span>
                              <img src="Meats/Sausage.jpg" />
                              <img className="shop-item-image" />
                              <div className="shop-item-details">
                                <span className="shop-item-price">$.75</span>
                                <input
                                  type="checkbox"
                                  className="btn btn-primary shop-item-button"
                                />
                              </div>
                              <div className="shop-items">
                                <div className="shop-item">
                                  <span className="shop-item-title ten">
                                    Salami
                                  </span>

                                  <img className="shop-item-image" />
                                  <div className="shop-item-details">
                                    <span className="shop-item-price">
                                      $.75
                                    </span>
                                    <input
                                      type="checkbox"
                                      className="btn btn-primary shop-item-button"
                                    />
                                  </div>
                                </div>
                                <div className="shop-item">
                                  <span className="shop-item-title eleven">
                                    Turkey
                                  </span>

                                  <img className="shop-item-image" />
                                  <div className="shop-item-details">
                                    <span className="shop-item-price">
                                      $.75
                                    </span>
                                    <input
                                      type="checkbox"
                                      className="btn btn-primary shop-item-button"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <h2>Select your Cheese</h2>
                                  <div className="shop-items">
                                    <div className="shop-item">
                                      <span className="shop-item-title twelve">
                                        American
                                      </span>

                                      <img className="shop-item-image" />
                                      <div className="shop-item-details">
                                        <span className="shop-item-price">
                                          $.75
                                        </span>
                                        <input
                                          type="checkbox"
                                          className="btn btn-primary shop-item-button"
                                        />
                                      </div>
                                    </div>
                                    <div className="shop-item">
                                      <span className="shop-item-title thirteen">
                                        Cheddar
                                      </span>

                                      <img className="shop-item-image" />
                                      <div className="shop-item-details">
                                        <span className="shop-item-price">
                                          $.75
                                        </span>
                                        <input
                                          type="checkbox"
                                          className="btn btn-primary shop-item-button"
                                        />
                                      </div>
                                      <div className="shop-items">
                                        <div className="shop-item">
                                          <span className="shop-item-title fourteen">
                                            Blue Cheese
                                          </span>
                                          <img src="Cheese/Blue Cheese.jpg" />
                                          <img className="shop-item-image" />
                                          <div className="shop-item-details">
                                            <span className="shop-item-price">
                                              $.75
                                            </span>
                                            <input
                                              type="checkbox"
                                              className="btn btn-primary shop-item-button"
                                            />
                                          </div>
                                        </div>
                                        <div className="shop-item">
                                          <span className="shop-item-title fifteen">
                                            Pepper Jack
                                          </span>
                                          <img src="Cheese/Pepperjack.jpg" />
                                          <img className="shop-item-image" />
                                          <div className="shop-item-details">
                                            <span className="shop-item-price">
                                              $.75
                                            </span>
                                            <input
                                              type="checkbox"
                                              className="btn btn-primary shop-item-button"
                                            />
                                          </div>
                                          <div className="shop-items">
                                            <div className="shop-item">
                                              <span className="shop-item-title sixteen">
                                                Colby
                                              </span>

                                              <img className="shop-item-image" />
                                              <div className="shop-item-details">
                                                <span className="shop-item-price">
                                                  $.75
                                                </span>
                                                <input
                                                  type="checkbox"
                                                  className="btn btn-primary shop-item-button"
                                                />
                                              </div>
                                            </div>
                                            <div className="shop-item">
                                              <span className="shop-item-title seventeen">
                                                Feta
                                              </span>

                                              <img className="shop-item-image" />
                                              <div className="shop-item-details">
                                                <span className="shop-item-price">
                                                  $1.10
                                                </span>
                                                <input
                                                  type="checkbox"
                                                  className="btn btn-primary shop-item-button"
                                                />
                                              </div>
                                              <div className="shop-items">
                                                <div className="shop-item">
                                                  <span className="shop-item-title eighteen">
                                                    Smoked Gouda
                                                  </span>
                                                  <img src="Cheese/Smoked Gouda.jpg" />
                                                  <img className="shop-item-image" />
                                                  <div className="shop-item-details">
                                                    <span className="shop-item-price">
                                                      $1.10
                                                    </span>
                                                    <input
                                                      type="checkbox"
                                                      className="btn btn-primary shop-item-button"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="shop-item">
                                                  <span className="shop-item-title">
                                                    Mozerella
                                                  </span>
                                                  <img
                                                    className="whoa"
                                                    src="Cheese/Mozzarella.jpg"
                                                  />
                                                  <img className="shop-item-image" />
                                                  <div className="shop-item-details">
                                                    <span className="shop-item-price">
                                                      $.75
                                                    </span>
                                                    <input
                                                      type="checkbox"
                                                      className="btn btn-primary shop-item-button"
                                                    />
                                                  </div>
                                                </div>
                                                <div>
                                                  <h2>
                                                    Select your vegtables/fruit
                                                  </h2>
                                                  <div className="shop-item">
                                                    <span className="shop-item-title">
                                                      Avacado
                                                    </span>

                                                    <img className="shop-item-image" />
                                                    <div className="shop-item-details">
                                                      <span className="shop-item-price">
                                                        $2.00
                                                      </span>
                                                      <input
                                                        type="checkbox"
                                                        className="btn btn-primary shop-item-button"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="shop-item">
                                                    <span className="shop-item-title">
                                                      Cherry tomatoes
                                                    </span>
                                                    <img src="Veg and Fruit/Cherry Tomatoes.jpg" />
                                                    <img className="shop-item-image" />
                                                    <div className="shop-item-details">
                                                      <span className="shop-item-price">
                                                        $1.05
                                                      </span>
                                                      <input
                                                        type="checkbox"
                                                        className="btn btn-primary shop-item-button"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="shop-item">
                                                    <span className="shop-item-title">
                                                      Green Pepper{" "}
                                                    </span>
                                                    <img src="Veg and Fruit/Green Peppers.jpg" />
                                                    <img className="shop-item-image" />
                                                    <div className="shop-item-details">
                                                      <span className="shop-item-price">
                                                        $1.05
                                                      </span>
                                                      <input
                                                        type="checkbox"
                                                        className="btn btn-primary shop-item-button"
                                                      />
                                                    </div>
                                                    <div className="shop-items">
                                                      <div className="shop-item">
                                                        <span className="shop-item-title">
                                                          Mushrooms
                                                        </span>
                                                        <img src="Veg and Fruit/Mushrooms.jpg" />
                                                        <img className="shop-item-image" />
                                                        <div className="shop-item-details">
                                                          <span className="shop-item-price">
                                                            $1.05
                                                          </span>
                                                          <input
                                                            type="checkbox"
                                                            className="btn btn-primary shop-item-button"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div className="shop-item">
                                                        <span className="shop-item-title">
                                                          Onions
                                                        </span>
                                                        <img src="Veg and Fruit/onions.jpg" />
                                                        <img className="shop-item-image" />
                                                        <div className="shop-item-details">
                                                          <span className="shop-item-price">
                                                            1.05
                                                          </span>
                                                          <input
                                                            type="checkbox"
                                                            className="btn btn-primary shop-item-button"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div className="shop-item">
                                                        <span className="shop-item-title">
                                                          Olives
                                                        </span>
                                                        <img src="Veg and Fruit/Olives.jpg" />
                                                        <img className="shop-item-image" />
                                                        <div className="shop-item-details">
                                                          <span className="shop-item-price">
                                                            $1.05
                                                          </span>
                                                          <input
                                                            type="checkbox"
                                                            className="btn btn-primary shop-item-button"
                                                          />
                                                        </div>
                                                        <div className="shop-items">
                                                          <div className="shop-item">
                                                            <span className="shop-item-title">
                                                              Peas
                                                            </span>
                                                            <img src="Veg and Fruit/Peas.jpg" />
                                                            <img className="shop-item-image" />
                                                            <div className="shop-item-details">
                                                              <span className="shop-item-price">
                                                                $1.05
                                                              </span>
                                                              <input
                                                                type="checkbox"
                                                                className="btn btn-primary shop-item-button"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div className="shop-item">
                                                            <span className="shop-item-title">
                                                              Red Beans
                                                            </span>
                                                            <img src="Veg and Fruit/Red beans.png" />
                                                            <img className="shop-item-image" />
                                                            <div className="shop-item-details">
                                                              <span className="shop-item-price">
                                                                $1.05
                                                              </span>
                                                              <input
                                                                type="checkbox"
                                                                className="btn btn-primary shop-item-button"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div className="shop-item">
                                                            <span className="shop-item-title">
                                                              Red Pepper
                                                            </span>
                                                            <img src="Veg and Fruit/Red peppers.jpg" />
                                                            <img className="shop-item-image" />
                                                            <div className="shop-item-details">
                                                              <span className="shop-item-price">
                                                                $1.05
                                                              </span>
                                                              <input
                                                                type="checkbox"
                                                                className="btn btn-primary shop-item-button"
                                                              />
                                                            </div>
                                                            <div className="shop-items">
                                                              <div className="shop-item">
                                                                <span className="shop-item-title">
                                                                  Roasted Garlic
                                                                </span>
                                                                <img src="Veg and Fruit/roated garlic.jpg" />
                                                                <img className="shop-item-image" />
                                                                <div className="shop-item-details">
                                                                  <span className="shop-item-price">
                                                                    $1.05
                                                                  </span>
                                                                  <input
                                                                    type="checkbox"
                                                                    className="btn btn-primary shop-item-button"
                                                                  />
                                                                </div>
                                                              </div>
                                                              <div className="shop-item">
                                                                <span className="shop-item-title">
                                                                  Spinach
                                                                </span>
                                                                <img src="Veg and Fruit/Spinach.jpg" />
                                                                <img className="shop-item-image" />
                                                                <div className="shop-item-details">
                                                                  <span className="shop-item-price">
                                                                    $.75
                                                                  </span>
                                                                  <input
                                                                    type="checkbox"
                                                                    className="btn btn-primary shop-item-button"
                                                                  />
                                                                </div>
                                                                <div className="shop-items">
                                                                  <div className="shop-item">
                                                                    <span className="shop-item-title">
                                                                      Zucchini
                                                                    </span>
                                                                    <img src="Veg and Fruit/Zucchini.jpg" />
                                                                    <img className="shop-item-image" />
                                                                    <div className="shop-item-details">
                                                                      <span className="shop-item-price">
                                                                        $1.10
                                                                      </span>
                                                                      <input
                                                                        type="checkbox"
                                                                        className="btn btn-primary shop-item-button"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                  <div className="shop-item">
                                                                    <span className="shop-item-title">
                                                                      Sweet Corn
                                                                    </span>
                                                                    <img src="Veg and Fruit/Sweet corn.jpeg" />
                                                                    <img className="shop-item-image" />
                                                                    <div className="shop-item-details">
                                                                      <span className="shop-item-price">
                                                                        $1.05
                                                                      </span>
                                                                      <input
                                                                        type="checkbox"
                                                                        className="btn btn-primary shop-item-button"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                  <div className="shop-item">
                                                                    <span className="shop-item-title">
                                                                      Pickles
                                                                    </span>
                                                                    <img src="Veg and Fruit/Pickles.jpg" />
                                                                    <img className="shop-item-image" />
                                                                    <div className="shop-item-details">
                                                                      <span className="shop-item-price">
                                                                        $1.05
                                                                      </span>
                                                                      <input
                                                                        type="checkbox"
                                                                        className="btn btn-primary shop-item-button"
                                                                      />
                                                                    </div>
                                                                    <div className="shop-items">
                                                                      <div className="shop-item">
                                                                        <span className="shop-item-title">
                                                                          Pinapple
                                                                        </span>
                                                                        <img src="Veg and Fruit/pinapple.jpg" />
                                                                        <img className="shop-item-image" />
                                                                        <div className="shop-item-details">
                                                                          <span className="shop-item-price">
                                                                            $1.05
                                                                          </span>
                                                                          <input
                                                                            type="checkbox"
                                                                            className="btn btn-primary shop-item-button"
                                                                          />
                                                                        </div>
                                                                        <h2>
                                                                          Select
                                                                          your
                                                                          Herbs
                                                                          and
                                                                          Spices
                                                                        </h2>
                                                                        <div className="shop-item">
                                                                          <span className="shop-item-title">
                                                                            Basil
                                                                          </span>
                                                                          <img className="shop-item-image" />
                                                                          <div className="shop-item-details">
                                                                            <span className="shop-item-price">
                                                                              $.75
                                                                            </span>
                                                                            <input
                                                                              type="checkbox"
                                                                              className="btn btn-primary shop-item-button"
                                                                            />
                                                                          </div>
                                                                          <div className="shop-item">
                                                                            <span className="shop-item-title">
                                                                              Bay
                                                                              Leaf
                                                                            </span>
                                                                            <img className="shop-item-image" />
                                                                            <div className="shop-item-details">
                                                                              <span className="shop-item-price">
                                                                                $.75
                                                                              </span>
                                                                              <input
                                                                                type="checkbox"
                                                                                className="btn btn-primary shop-item-button"
                                                                              />
                                                                            </div>
                                                                            <div className="shop-item">
                                                                              <span className="shop-item-title">
                                                                                Chives
                                                                              </span>
                                                                              <img className="shop-item-image" />
                                                                              <div className="shop-item-details">
                                                                                <span className="shop-item-price">
                                                                                  $.75
                                                                                </span>
                                                                                <input
                                                                                  type="checkbox"
                                                                                  className="btn btn-primary shop-item-button"
                                                                                />
                                                                              </div>
                                                                              <div className="shop-item">
                                                                                <span className="shop-item-title">
                                                                                  Cilantro
                                                                                </span>
                                                                                <img className="shop-item-image" />
                                                                                <div className="shop-item-details">
                                                                                  <span className="shop-item-price">
                                                                                    $.75
                                                                                  </span>
                                                                                  <input
                                                                                    type="checkbox"
                                                                                    className="btn btn-primary shop-item-button"
                                                                                  />
                                                                                </div>
                                                                                <div className="shop-item">
                                                                                  <span className="shop-item-title">
                                                                                    Dill
                                                                                  </span>
                                                                                  <img className="shop-item-image" />
                                                                                  <div className="shop-item-details">
                                                                                    <span className="shop-item-price">
                                                                                      $.75
                                                                                    </span>
                                                                                    <input
                                                                                      type="checkbox"
                                                                                      className="btn btn-primary shop-item-button"
                                                                                    />
                                                                                  </div>
                                                                                  <div className="shop-item">
                                                                                    <span className="shop-item-title">
                                                                                      Garlic
                                                                                    </span>
                                                                                    <img className="shop-item-image" />
                                                                                    <div className="shop-item-details">
                                                                                      <span className="shop-item-price">
                                                                                        $.75
                                                                                      </span>
                                                                                      <input
                                                                                        type="checkbox"
                                                                                        className="btn btn-primary shop-item-button"
                                                                                      />
                                                                                    </div>
                                                                                    <div className="shop-item">
                                                                                      <span className="shop-item-title">
                                                                                        Oregano
                                                                                      </span>
                                                                                      <img className="shop-item-image" />
                                                                                      <div className="shop-item-details">
                                                                                        <span className="shop-item-price">
                                                                                          $.75
                                                                                        </span>
                                                                                        <input
                                                                                          type="checkbox"
                                                                                          className="btn btn-primary shop-item-button"
                                                                                        />
                                                                                      </div>
                                                                                      <div className="shop-item">
                                                                                        <span className="shop-item-title">
                                                                                          Pepper
                                                                                        </span>
                                                                                        <img className="shop-item-image" />
                                                                                        <div className="shop-item-details">
                                                                                          <span className="shop-item-price">
                                                                                            $.75
                                                                                          </span>
                                                                                          <input
                                                                                            type="checkbox"
                                                                                            className="btn btn-primary shop-item-button"
                                                                                          />
                                                                                        </div>
                                                                                        <div className="shop-item">
                                                                                          <span className="shop-item-title">
                                                                                            Rosemary
                                                                                          </span>
                                                                                          <img className="shop-item-image" />
                                                                                          <div className="shop-item-details">
                                                                                            <span className="shop-item-price">
                                                                                              $.75
                                                                                            </span>
                                                                                            <input
                                                                                              type="checkbox"
                                                                                              className="btn btn-primary shop-item-button"
                                                                                            />
                                                                                          </div>
                                                                                          <div className="shop-item">
                                                                                            <span className="shop-item-title">
                                                                                              Basil
                                                                                            </span>
                                                                                            <img className="shop-item-image" />
                                                                                            <div className="shop-item-details">
                                                                                              <span className="shop-item-price">
                                                                                                $.75
                                                                                              </span>
                                                                                              <input
                                                                                                type="checkbox"
                                                                                                className="btn btn-primary shop-item-button"
                                                                                              />
                                                                                            </div>
                                                                                            <div className="shop-item">
                                                                                              <span className="shop-item-title">
                                                                                                Jalapeno
                                                                                                Peppers
                                                                                              </span>
                                                                                              <img className="shop-item-image" />
                                                                                              <div className="shop-item-details">
                                                                                                <span className="shop-item-price">
                                                                                                  $.75
                                                                                                </span>
                                                                                                <input
                                                                                                  type="checkbox"
                                                                                                  className="btn btn-primary shop-item-button"
                                                                                                />
                                                                                              </div>
                                                                                              <h2>
                                                                                                Select
                                                                                                your
                                                                                                specialty
                                                                                                items
                                                                                              </h2>
                                                                                              <div className="shop-item">
                                                                                                <span className="shop-item-title">
                                                                                                  Mac
                                                                                                  and
                                                                                                  Cheese
                                                                                                </span>
                                                                                                <img src="Special items/Mac and cheese.jpg" />
                                                                                                <img className="shop-item-image" />
                                                                                                <div className="shop-item-details">
                                                                                                  <span className="shop-item-price">
                                                                                                    $3.25
                                                                                                  </span>
                                                                                                  <input
                                                                                                    type="checkbox"
                                                                                                    className="btn btn-primary shop-item-button"
                                                                                                  />
                                                                                                </div>
                                                                                                <div className="shop-item">
                                                                                                  <span className="shop-item-title">
                                                                                                    Lobster
                                                                                                  </span>
                                                                                                  <img />
                                                                                                  <img className="shop-item-image" />
                                                                                                  <div className="shop-item-details">
                                                                                                    <span className="shop-item-price">
                                                                                                      $4.25
                                                                                                    </span>
                                                                                                    <input
                                                                                                      type="checkbox"
                                                                                                      className="btn btn-primary shop-item-button"
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="shop-item">
                                                                                                    <span className="shop-item-title">
                                                                                                      Shrimp
                                                                                                    </span>
                                                                                                    <img src="Special items/Shrimp.jpg" />
                                                                                                    <img className="shop-item-image" />
                                                                                                    <div className="shop-item-details">
                                                                                                      <span className="shop-item-price">
                                                                                                        $4.10
                                                                                                      </span>
                                                                                                      <input
                                                                                                        type="checkbox"
                                                                                                        className="btn btn-primary shop-item-button"
                                                                                                      />
                                                                                                    </div>
                                                                                                    <div className="shop-item">
                                                                                                      <span className="shop-item-title">
                                                                                                        Salmon
                                                                                                      </span>
                                                                                                      <img src="Special items/Salmon.jpg" />
                                                                                                      <img className="shop-item-image" />
                                                                                                      <div className="shop-item-details">
                                                                                                        <span className="shop-item-price">
                                                                                                          $4.10
                                                                                                        </span>
                                                                                                        <input
                                                                                                          type="checkbox"
                                                                                                          className="btn btn-primary shop-item-button"
                                                                                                        />
                                                                                                      </div>
                                                                                                      <div className="shop-item">
                                                                                                        <span className="shop-item-title">
                                                                                                          Mashed
                                                                                                          Potatoes
                                                                                                        </span>
                                                                                                        <img src="Special items/Mashed potatoes.jpg" />
                                                                                                        <img className="shop-item-image" />
                                                                                                        <div className="shop-item-details">
                                                                                                          <span className="shop-item-price">
                                                                                                            $1.50
                                                                                                          </span>
                                                                                                          <input
                                                                                                            type="checkbox"
                                                                                                            className="btn btn-primary shop-item-button"
                                                                                                          />
                                                                                                        </div>
                                                                                                      </div>
                                                                                                      <section className="container content-section">
                                                                                                        <h2 className="section-header">
                                                                                                          CART
                                                                                                        </h2>
                                                                                                        <div className="cart-row">
                                                                                                          <span className="cart-item cart-header cart-column">
                                                                                                            ITEM
                                                                                                          </span>
                                                                                                          <span className="cart-price cart-header cart-column">
                                                                                                            PRICE
                                                                                                          </span>
                                                                                                          <span className="cart-quantity cart-header cart-column">
                                                                                                            QUANTITY
                                                                                                          </span>
                                                                                                        </div>
                                                                                                        <div className="cart-items"></div>
                                                                                                        <div className="cart-total">
                                                                                                          <strong className="cart-total-title">
                                                                                                            Total
                                                                                                          </strong>
                                                                                                          <span className="cart-total-price">
                                                                                                            $0
                                                                                                          </span>
                                                                                                        </div>
                                                                                                        <button
                                                                                                          className="btn btn-primary btn-purchase"
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
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
