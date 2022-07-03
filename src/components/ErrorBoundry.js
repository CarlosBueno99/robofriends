import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            haserror: false
        }
    }

    componentDidCatch(error, info){
        this.setState({haserror: true})
    }



    render(){
        const props = this.props;
        return this.state.haserror ? <h1>Ooops, this didn't work</h1> : props.children
    }
}

export default ErrorBoundry;