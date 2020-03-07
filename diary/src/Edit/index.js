import React, { useState, useEffect } from 'react'
import { List, InputItem, TextareaItem, DatePicker, ImagePicker, Toast, Button } from 'antd-mobile'
import './style.css'
import moment from 'moment'
import { getQueryString } from '../utils'
import axios from '../utils/axios'

const Edit = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [files, setFile] = useState([])
    const id = getQueryString('id')
    const onChange = (files, type, index) => {
        console.log(files, type, index)
        setFile(files)
    }


    useEffect(() => {
        if (id) {
            axios.get(`/detail/${id}`).then(res => {
                const { data } = res
                console.log(data[0].title)
                if (data.length) {
                    setTitle(data[0].title)
                    console.log(title)
                    setContent(data[0].content)
                    setDate(new Date(data[0].date))
                    setFile([{ url: data[0].url }])
                }
            })
        }
    }, [])

    const publish = () => {
        if (!title || !content || !date) {
            Toast.fail('请填写必要参数')
            return
        }
        const params = {
            title,
            content,
            date: moment(date).format('YYYY-MM-DD'),
            url: files.length ? files[0].url : ''
        }

        if(id) {
            params['id'] = id
            console.log(params)
            axios.post('/update',params).then(res=>{
                Toast.success('更新成功')
            })
            return false
        }

        axios.post('/add', params).then(res => {
            console.log(res)
            Toast.success('success')
        })
    }

    return (
        <div className="diary-edit">
            <List renderHeader={() => 'edit diary'}>
                <InputItem
                    clear
                    placeholder="请输入标题"
                    value={title}
                    onChange={(value) => setTitle(value)}
                >
                    标题
                </InputItem>
                <TextareaItem
                    rows={6}
                    placeholder="请输入日记内容"
                    value={content}
                    onChange={(value) => setContent(value)}
                >
                </TextareaItem>
                <DatePicker
                    mode="date"
                    title="请选择日期"
                    extra="请选择日期"
                    value={date}
                    onChange={date => setDate(date)}
                >
                    <List.Item
                        arrow="horizontal"
                    >日期</List.Item>
                </DatePicker>
                <ImagePicker
                    files={files}
                    onChange={onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 1}
                    multiple={false}
                >

                </ImagePicker>
                <Button type="primary" onClick={() => publish()}>发布</Button>
            </List>
        </div>
    )
}

export default Edit