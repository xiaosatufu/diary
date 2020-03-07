import React, { useState, useEffect } from 'react';
import "./style.css"
import { Link,useHistory } from 'react-router-dom'

import { Card,Button } from 'antd-mobile'

import axios from '../utils/axios'





// const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


const Home = () => {

    const [list, setList] = useState([])
    
    const history = useHistory()
    useEffect(() => {
        axios.get('/list').then(res => {
            console.log(res)
            const { data } = res
            console.log(data)
            setList(data)
        })
    }, [])


    return (
        <div className='diary-list'>
            {
                list.map(item =>
                    <Link to={{ pathname: "detail", search: `?id=${item.id}` }}> <Card className='diary-item'>
                        <Card.Header
                            title={item.title}
                            thumb={item.url}
                            extra={<span>阴天</span>}
                        />
                        <Card.Body>
                            <div>{item.content}</div>
                        </Card.Body>
                        <Card.Footer content={item.date} />
                    </Card></Link>
                )
            }
            <Button type="primary" onClick={()=>history.push('/edit')}>新增日记</Button>
        </div>
    )
}

export default Home;