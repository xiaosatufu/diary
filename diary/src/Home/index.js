import React from 'react';
import "./style.css"

import { Card } from 'antd-mobile'
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


const Home = () => {
    return (
        <div className='diary-list'>
            {
                list.map(item => <Card className='diary-item'>
                    <Card.Header
                        title="asd"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span>阴天</span>}
                    />
                    <Card.Body>
                        <div>{item}</div>
                    </Card.Body>
                    <Card.Footer content="2020-01-09" />
                </Card>)
            }
        </div>
    )
}

export default Home;