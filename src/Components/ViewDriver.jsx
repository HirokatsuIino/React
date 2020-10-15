import React from 'react'

class ViewDriver extends React.Component {

    render() {
        return(
            <div>
                <span>{ this.props.data.name }</span>
            </div>
        )
    }
}

export default ViewDriver