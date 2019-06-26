import { connect } from "react-redux"
import ToastBlock from '../components/ToastBlock.js'

class Toasts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
            aria-live="assertive"
            aria-atomic="true"
            style={{
              position: 'relative',
              left: '20px',
              top: '600px',
              zIndex: '2000'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              
              {this.props.toasts.map((toast, index) => {
                return (
                    <ToastBlock key={index} toast={toast}/>
                    );
                })}
            </div>
          </div>
        );
    }
}
export default connect(state => state)(Toasts);