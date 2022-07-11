import React, { Component } from 'react'
import Banner from './index'
import pic1 from './img/pic1.jpg'
import pic2 from './img/pic2.jpg'
import pic3 from './img/pic3.jpg'
import pic4 from './img/pic4.jpg'

export default class Test extends Component {
    render() {
        return (
            <Banner imgSrcs={[pic1, pic2, pic3, pic4]} duration={500} />
        )
    }
}
