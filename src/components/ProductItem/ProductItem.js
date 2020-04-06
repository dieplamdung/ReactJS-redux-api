import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends (Component) {
    onDelete = (id) => {
        if(confirm('Bạn chắc chắn muốn xóa?')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { products, index } = this.props;
        var statusName = products.status ? 'Con hang' : 'het hang';
        var statusClass = products.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link 
                        to={`/product/${products.id}/edit`}
                        className="btn btn-default mr-10"
                        >
                        Sửa
                    </Link>
                    <button type="button" 
                            className="btn btn-danger" 
                            onClick = {()=>this.onDelete(products.id)}>
                        Xoa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;