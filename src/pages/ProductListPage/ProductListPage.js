import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRepuest, actDelectProductRequest } from './../../actions/Index';


class ProductListPage extends (Component) {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }
    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12bs3-">
                <Link to="/product/add" className="btn btn-default mb-10">
                    Them SP
                </Link>
                {/*ProductList */}
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
    showProduct = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((products, index) => {
                return (
                    <ProductItem
                        key={index}
                        products={products}
                        index={index}
                        onDelete = {this.onDelete}
                    />
                )
            });
        }
        return result
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = ( dispatch, props ) =>{
    return{
        fetchAllProducts: () => {
            dispatch(actFetchProductsRepuest());
        },
        onDeleteProduct: (id) => {
            dispatch(actDelectProductRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
