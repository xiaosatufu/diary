import React, { useState, useEffect } from 'react'

import { NavBar, Icon, List } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import { getQueryString } from '../utils'
import axios from '../utils/axios'

const Detail = () => {
    const [detail, setDetail] = useState({})
    const history = useHistory()
    const id = getQueryString('id')
    console.log(id)

    useEffect(() => {
        axios.get(`/detail/${id}`).then(res => {
            console.log(res)
            const { data } = res
            if (data.length) {
                setDetail(data[0])
            }
        })
    }, [])

    const deleteDiary = (id) =>{
        axios.post('/delete',{id}).then(res=>{
            console.log(res)
            history.push('/')
        })
    }


    return (
        <div className="diary-detail">
            <NavBar mode="light"
                icon={<Icon type="left" />}

                onLeftClick={() => history.goBack()}
                rightContent={[
                    <Icon onClick={() => deleteDiary(detail.id)} key="0" type="cross-circle-o"></Icon>,
                    <img onClick={() => history.push(`/edit?id=${detail.id}`)} style={{ width: 26 }} src="//s.weituibao.com/1578721957732/Edit.png" alt=""/>


                ]}
            >title{detail.id}</NavBar>
            <List renderHeader={() => `${detail.date}`} className="my-list">
                <List.Item>
                    {detail.content}
                </List.Item>

            </List>
        </div>
    )
}

export default Detail