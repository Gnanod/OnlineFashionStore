import React, {Component} from 'react';

class WishListColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">products</p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">product Name</p>

                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">price</p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Reviews</p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Add to Cart</p>

                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">remove</p>

                    </div>



                </div>

            </div>
        );
    }
}

export default WishListColumns;