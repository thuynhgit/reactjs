import React, { Component } from 'react';
import xrpl from '../utils/xrpl';
// import { RippleAPI } from 'ripple-lib'


class Explorer extends Component {
    state = {
        ledgerVersion:'',
        txs:'',
        hash:'',
        parentCloseTime:''
    }
    componentDidMount() {
        setInterval(async() => {
            const res = await xrpl.ledgerInfo()
            // console.log(res.ledgerVersion)
            this.setState({
                ledgerVersion:res.ledgerVersion.toLocaleString(),
                hash:res.ledgerHash,
                txs:res.transactions.length,
                parentCloseTime:res.parentCloseTime
            });
        }, 3000);
    }


    render() {
        // const {address, secret, info} = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    {this.state.ledgerVersion}
                    </div>
                    <div className="col">
                    {this.state.hash}
                    </div>
                    <div className="col">
                    {this.state.txs}
                    </div>
                    <div className="col">
                    {/* {this.state.parentCloseTime} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Explorer;