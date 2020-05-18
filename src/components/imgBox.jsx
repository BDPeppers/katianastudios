import React from 'react';

class imgBox extends React.Component{

    render(){
        return(
            <div className={this.props.classProp}>
                <img src={this.props.imgProp} alt={this.props.altProp}/>
                {/* <img src={smile} alt="panda"/> */}
            </div>
                  
        );
    }
}

export default imgBox;