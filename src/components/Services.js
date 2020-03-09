import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state ={
        services: [
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae."
            },
            {
                icon:<FaHiking />,
                title:"Endless hiking ",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae."
            },
            {
                icon:<FaShuttleVan />,
                title:"free shuttle",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae."
            },
            {
                icon:<FaBeer />,
                title:"strongest beer",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae."
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
