import React from 'react'
import ViewDriver from './ViewDriver'

class DriversContainer extends React.Component {
    render() {
        return(
            <div className='productList'>
                {this.props.productData.map((data) => {
                    return(
                        <ViewDriver data={ data } key={ data.id } />
                    )
                })}
            </div>
        )
    }
}

export default DriversContainer
