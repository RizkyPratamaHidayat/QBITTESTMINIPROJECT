import React, { useEffect, useState } from 'react';
import './styles.scss'

import { connect } from 'react-redux';
const DetailComponent = (props) => {
    const { className, product } = props;
    console.log('data asdsa: ', product)
    return (
        <div className={className} {...props}>
            <table border="1">
                <thead>
                    <th>No</th>
                    <th>image</th>
                    <th>nama</th>
                    <th>Category</th>
                    <th>harga</th>
                    <th>deskripsi</th>
                </thead>
                <tbody>

                    {Object.entries(product)?.map((item, index) => {
                        return (
                            <tr>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                <img width={100} src={item[1].image} alt="Cheetah!" />
                                </td>
                                <td>
                                    {item[1].title}
                                </td>
                                <td>
                                    {item[1].category}
                                </td>
                                <td>
                                    {item[1].price}
                                </td>
                                <td>
                                    {item[1].description}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        product: state.generalReducer.product,
    }
}

export default connect(mapStateToProps)(DetailComponent);
