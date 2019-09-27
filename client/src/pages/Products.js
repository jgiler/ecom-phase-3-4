import React from "react";
import { Form } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

class Products extends React.Component {
  state = {
    products: [],
    typeFilter: "All",
    priceFilter: false
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = _ => {
    axios.get("api/products").then(res => {
   
      this.setState({ products: res.data.products });
    }).catch(err => {
      console.log(err)
    });
  };



  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  filterProducts = (products, typeFilter, priceFilter) => {
    // Duplicate Products
    let filteredProducts = products;

    // Apply Filters
    // Type/Category
    if (typeFilter !== "All") {
      console.log('sup')
      filteredProducts = filteredProducts.filter(
        product => product.category.toLowerCase() === typeFilter.toLowerCase()
        
      );
    }

    // Price
    if (priceFilter) {
      filteredProducts = filteredProducts.filter(
        product => product.price <= parseInt(priceFilter)
      );
    }

    // Return out filtered products
    return filteredProducts;
  };

  render() {
    const { products, typeFilter, priceFilter } = this.state;

    // Filtering our Products
    const filteredProducts = this.filterProducts(
      products,
      typeFilter,
      priceFilter
    );

    return (
      <div className="wrapper">
        {/* Filters */}
        <Form>
          <Form.Group>
            <Form.Label>Filter by Type</Form.Label>
            <Form.Control
              name="typeFilter"
              onChange={this.handleChange}
              as="select"
            >
              <option>All</option>
              <option>Item</option>
              <option>Bedroom</option>
              <option>Clothes</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter Your Maximum Price</Form.Label>
            <Form.Control
              name="priceFilter"
              type="number"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        <div className="product-grid">
          {filteredProducts.length > 1 ? (
            filteredProducts.map((product, index) => (
              <Product key={index} {...product} />
            ))
          ) : (
            <p>No Products Meet that Criteria</p>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
