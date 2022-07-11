import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

import Banner from '../../components/Banner'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'

export default function Home(props) {
    return <Layout header={<Header {...props} />}>
        <div style={{
            margin: '40px 0 60px 0'
        }}>
            <Banner imgSrcs={[pic1, pic2, pic3, pic4]} />
        </div>
    </Layout>
}
