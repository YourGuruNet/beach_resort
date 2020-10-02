import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaTaxi, FaBath } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Free cocktails every day visit us and grab yours, starting from tasty starters ending with a cold beer",
      },
      {
        icon: <FaTaxi />,
        title: "free parking",
        info: "We have a place for your car, so feel free to drive by car, and of course also a big choice of rental cars especially for you",
      },
      {
        icon: <FaBath />,
        title: "free sauna",
        info: "Yes you read right we have a free sauna for you,an ready to use, almost 100 square meters large pool and lot more of beach activities",
      },
    ],
    test: [
        {
        info: "Free cocktails every day visit us and grab yours, starting from tasty starters ending with a cold beer",
        },
        {
            info: "Free cocktails every day visit us and grab yours, starting from tasty starters ending with a cold beer",
            },
            {
                info: "Free cocktails every day visit us and grab yours, starting from tasty starters ending with a cold beer",
                }
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="our services" />
        <div className="services-center">
        {this.state.services.map((item,index) => {
            return <article key={index} className="services services-description">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>
        })} 
        </div>
      </section>
    );
  }
}
// the map allows returning the exact number of items as it grouped in state
// and we just make the root to index and name the objects for example item but it can be a different name