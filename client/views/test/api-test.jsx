import React from 'react'
import axios from 'axios'

/* eslint-disable */
export default class TestApi extends React.Component {
    componentDidMount() {
        // 1234
    }

    getTopics() {
        axios.get('/api/topics').then(
            resp => {
                console.log(resp)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    login() {
        axios.get('/api/user/login', {
            accessToken: '7c39b849-f91f-4168-b229-26a506a2aa84'
        }).then(
            resp => {
                console.log(resp)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    markAll() {
        axios.get('/api/message/mark_all?needAccessToken=true').then(
            resp => {
                console.log(resp)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getTopics}>topics</button>
                <button onClick={this.login}>login</button>
                <button onClick={this.markAll}>markAll</button>
            </div>
        )
    }
}
/* eslint-disable */