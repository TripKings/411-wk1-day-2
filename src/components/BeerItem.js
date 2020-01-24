import React, {Component} from 'react'

class BeerItem extends Component {
    state = {
        liked: false
    }

    likePost = () => this.setState({ liked: !this.state.liked})

    render() {
        return(
            <div style ={{ border: '1px solid gray', padding: '50px'}}>
                <p>{this.props.info.name}</p>
                <p style ={{ color: 'red'}}>{this.props.info.first_brewed}</p>
                <button onClick={this.likePost}>like</button>
                <p>{this.state.liked.toString()}</p>
            </div>
        )
    }
}

export default BeerItem