import React, { Component } from "react";
import Slider from "react-slick";

export default class NavSliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    settings1 = {
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        // adaptiveHeight: true // Se adapta bien a la primera imagen, el resto las deja, las largas las corta
    };

    settings2 = {
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
        accessibility: true,
    };

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <div>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    {...this.settings1}
                >
                    {this.props.cabanas.map((image, i) => (
                        <img key={i} src={image.fileUrl} alt={this.props.cabanas.alt}
                            className="rounded-xl" />
                    ))}
                </Slider>

                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    {...this.settings2}
                >
                    {this.props.cabanas.map((image, i) => (
                        <div key={i}>
                            <div className="mx-2">
                                <img src={image.fileUrl} alt={this.props.cabanas.alt}
                                    className="rounded-lg" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}