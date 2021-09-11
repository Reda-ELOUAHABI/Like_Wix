import React from "react";

import {
  Card,
  CardFooter,
  Container,
  Row,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import TableProducts from "components/Components/Table";
import "./styleProductsUser.css";
// const MapWrapper = () => {
//   return (
//     <>
//       <div className="map-canvas">
//         <h1> Products Page User</h1>
//       </div>
//     </>
//   );
// };

const Products = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <h3 className="mb-0">Products</h3>
            <p>
              <i className="fas fa-long-arrow-alt-down"></i> import &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-up"></i> export &nbsp; 
              More Actions <i className="fas fa-sort-down"></i>
            </p>
            <button className="AddProductBTN"> Add Products</button>
            <Card className="shadow">
              <h1 className="ALL">ALL </h1>
              <hr className="hr" 
              style={{
                    marginBottom: "70px",
              }} />
              {/* <div className="container small my-5"> */}
              <div>
                <div>
                  {/* <div className="row d-flex justify-content-between mx-auto mt-4 mb-3"> */}
                  <div id="Filter-Serach">
                    {/* <div className="col-lg-8 col-md-12"> */}
                    <div className="row justify-content-end">
                      <i
                        className="fa fa-search"
                        id="iconSearch"
                        aria-hidden="true"
                      ></i>
                      <div className="input-group col-lg-10 col-md-12 SearchProducts">
                        <div className="input-group-append">
                          <select
                            className="form-control rounded-0 text-capitalize"
                            id="search-filter"
                            name="search-filter"
                          >
                            <option value="listitem">Filter</option>
                            <option value="Type">Type</option>
                            <option value="Vendor">Vendor</option>
                          </select>
                        </div>

                        <div className="input-group-prepend ">
                          {/* <i className="fa fa-search" aria-hidden="true" ></i> */}
                          <input
                            className="form-control"
                            id="search-box"
                            type="text"
                            name="search"
                            placeholder="Search Products "
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
             
              {/* TableProducts */}
              <TableProducts />
              <CardFooter className="py-4">
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Products;
