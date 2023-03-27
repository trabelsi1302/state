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
                <button onClick={() => this.decrement()}>-</button>
                <h1>count: {this.state.count}</h1>
                <button onClick={() => this.increment()}>+</button>
                <div id='unique'></div>
                <div id='update' style={{color: this.state.color}}></div>
            </div>
        )
    }
}