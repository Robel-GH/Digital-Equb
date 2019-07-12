import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {manualPayAction} from "../redux/actions/pay/pay";

class PayManual extends Component {
    static propTypes={
        pay:PropTypes.array,
        manualPayAction:PropTypes.func,
    };

    componentDidMount() {
        const {pay, manualPayAction} = this.props;
        if(pay.isPayed === false){
            manualPayAction()
        }
    }

    render() {
        const {pay} = this.props;
        return (
            pay.isPayed ?
                <Fragment>
                    <strong className="text-primary">Successfully paid!</strong>
                </Fragment>
                :
            <Fragment>

            </Fragment>
        );
    }
}

const mapStateToProps=(state)=>({
    pay: state.pay
});
export default connect(mapStateToProps, {manualPayAction}) (PayManual);