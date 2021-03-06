import React from 'react'
import axios from 'axios';

import DriversContainer from './DriversContainer'

class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:3000/drivers')
            .then((results) => {
                console.log(results)
                this.setState({products: results.data})
            })
            .catch((data) =>{
                console.log(data)
            })

    }

    render() {
        return (
            <div className='app-main'>
                <DriversContainer productData={ this.state.products } />
            </div>
        );
    }
}

export default MainContainer