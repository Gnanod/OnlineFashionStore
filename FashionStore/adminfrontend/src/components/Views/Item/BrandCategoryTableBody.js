import React, {Component} from "react";
import './Style/Item.css'
import {MDBTable, MDBTableBody} from "mdbreact";

export default class BrandCategoryTableBody extends Component {

    render() {
        const {brandCategoryListList} = this.props;

        return (

            <MDBTableBody>
                {
                    brandCategoryListList.map(item => {
                        return (
                            <tr key={item.category.categoryCode}>
                                <td>{item.brand.brandName}</td>
                                <td>{item.category.categoryName}</td>

                            </tr>
                        )
                    })
                }

            </MDBTableBody>

        );
    }
}
