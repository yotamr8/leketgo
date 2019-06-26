import { connect } from "react-redux"
import {Toast} from 'react-bootstrap'
import { Z_BLOCK } from "zlib";

class ToastBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({show: false});
        setTimeout(() => this.props.dispatch({ type: 'DISMISS_TOAST', timestamp: this.props.toast }), 2000);
    }

    componentDidMount() {
        setTimeout(() => this.setState({show: true}));
    }

    render() {
        return ( 
            <div className='mb-2' style={{'display': this.state.show ? 'block' : 'none'}}>
                <Toast key={this.props.key} onClose={this.handleClose} show={this.state.show} delay={this.props.toast.delay} autohide>
                            <Toast.Header>
                            {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                            <strong className="mr-auto">{this.props.toast.title}</strong>
                            {/* <small>just now</small> */}
                            </Toast.Header>
                            <Toast.Body>{this.props.toast.body}</Toast.Body>
                </Toast>
            </div>);
    }
}
export default connect(state => state)(ToastBlock);