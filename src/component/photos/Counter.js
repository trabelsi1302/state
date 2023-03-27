import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        console.log('construction')
        super(props)
        this.state = {
            count: 0,
            color: 'green'
        }
    }

    componentDidMount(){
        console.log('component did mount')
        setTimeout( () => {
            document.getElementById('unique').innerHTML =' Component has been mounted'
        }, 3000)
    }

    componentDidUpdate(){
        console.log('component did update', this.state.count)
        if(this.state.count){
            document.getElementById('update').innerHTML = 'counter is at ' + this.state.count
            setTimeout(() => {
                this.setState({color: 'red'})
            }, 2000)
        }
    }

    componentWillUnmount(){
        console.log('component will unmout')
        alert('component will die')
    }


    render() {
        console.log('rendering')
        return (
            <div>

            </div>
        )
    }
}