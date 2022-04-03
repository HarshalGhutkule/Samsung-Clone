import styled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { color } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "../HomePage/LandingPage/NavBar/NavBar";
import { Footer } from "../HomePage/LandingPage/Footer/Footer";
import { Link, useParams } from "react-router-dom";

export const Cart = () => {
  const [data, setData] = useState([]);
  const[price,setprice]=useState(0)

  const {id} = useParams();
  console.log(id);

let total=0;
  useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    axios.get(`http://localhost:3001/mobiles/${id}`).then((res) => {
       total=res.data.reduce(function (a, b) {
        return a + b.price[0];
      }, 0)
      console.log(total,"sum")
      setprice(total)
      setData(res.data);
    });
  }
  console.log(data);

  

  
  console.log(price,"val")


  const [value ,setValue] = useState(
   data.reduce(function (a, b) {
    return a + b.price[0];
  }, 0));
  //console.log(subtotal)

   console.log(value,"out")
  let gst = Math.round(price * 0.18);
  let dis = Math.round(price * 0.2);

  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();

  let output = cDay + 4 + "/" + cMonth + "/" + cYear;
  let output1 = cDay + 5 + "/" + cMonth + "/" + cYear;

  function handlechange() {
   
    let x = "masai10";
    console.log("in",price)
    let a = document.getElementById("standard-basic").value;
    if (a == x) {
      let s=price*0.1;
    
      setprice(price-s)
    }
  }

  const Offer = styled.div`
    width: 700px;
    height: 80px;
    background-color: #f5f7fe;
    margin-left: 50px;
  `;
  const Part = styled.div`
    display: flex;
  `;
  const Part1 = styled.div`
    text-align: left;
    margin-left: 50px;
  `;
  const Part2 = styled.div`
    display: flex;
    text-align: left;
    margin-left: 50px;
  `;
  const Part3 = styled.div`
    display: flex;
  `;
  const Total = styled.div`
    display: flex;
    text-align: left;
    margin-left: 40px;
    width: 300px;
    height: 50px;
    padding: 10px;
    gap: 0px;
    background-color: #f7f7f7;
    justify-content: space-between;
  `;

  const Value = styled.div`
    width: 300px;
    height: 20px;
    row-gap: 0px;
    background-color: #f7f7f7;
    justify-content: space-between;
    display: flex;
    text-align: left;
    margin-left: 40px;
    margin-right: 40px;
    padding: 10px;
  `;
  const Big = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Main = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
  `;
  const Main1 = styled.div`
    height: 330px;
    margin-right: 40px;
    margin-top: -120px;
    background-color: #f7f7f7;
  `;

  const Final = styled.div`
    margin: auto;
    margin-top: 80px;
    margin-left: 100px;
    font-size: 12px;
  `;
  const Final1 = styled.div`
    margin: auto;
    margin-left: 10px;
    font-size: 12px;
  `;
  const Final2 = styled.div`
    margin-left: 170px;
    font-size: 12px;
  `;

  return (
    <div>
      <NavBar/>
      <Offer>
        <TextField
          id="standard-basic"
          label="Enter your coupn code"
          variant="standard"
          style={{ marginTop: "10px", marginLeft: "20px", borderRadius: 20 }}
        />
        <Button
          variant="outlined"
          className="Button"
          onClick={()=>{
            handlechange();
          }}
          style={{
            color: "white",
            backgroundColor: "#e4e5e7",
            width: "100px",
            height: "40px",
            marginTop: "20px",
            marginLeft: "20px",
            borderRadius: 20,
          }}
        >
          Apply
        </Button>
      </Offer>
      <hr
        width="60%"
        style={{
          marginLeft: "30px",
          marginTop: "30px",
          color: "gray",
        }}
      ></hr>

      <div>
        <Big>
          <div
            style={{
              overflowY: "scroll",
              height: "600px",
              overflowX: "hidden",
            }}
          >
            {" "}
            {data.map((el) => {
              return (
                <>
                  {" "}
                  <Main>
                    <Part>
                      <div
                        style={{
                          marginTop: "10px",
                          marginLeft: "20px",
                          overflow: "hidden",
                          height: "100%",
                        }}
                      >
                        <img src={el.actualImage} width="200px" />
                      </div>

                      <h3
                        style={{
                          marginLeft: "30px",
                        }}
                      >
                        {el.product_name}
                      </h3>
                      <h3 style={{ marginLeft: "350px" }}>
                        ₹{el.price[0].toFixed(2)}
                      </h3>
                    </Part>
                    <h6
                      style={{
                        marginLeft: "780px",
                        marginTop: "-50px",
                        textDecoration: "line-through",
                      }}
                    >
                      ₹{Number(el.price[1]).toFixed(2)}
                    </h6>

                    <h6
                      style={{
                        marginLeft: "760px",
                        marginTop: "-25px",
                        color: "blue",
                      }}
                    >
                      SAVE ₹{(Number(el.price[1]) - el.price[0]).toFixed(2)}
                    </h6>

                    <Part1>
                      <p
                        style={{
                          marginLeft: "200px",
                          marginTop: "-30px",
                        }}
                      >
                        Standard Delivery:{output}
                      </p>
                      <p
                        style={{
                          marginLeft: "200px",
                        }}
                      >
                        Installation & Demo: {output1}
                      </p>
                      <Part3>
                        <h4
                          style={{
                            marginLeft: "200px",
                          }}
                        >
                          Discounts
                        </h4>
                        <h4
                          style={{
                            marginLeft: "440px",
                          }}
                        >
                          -₹{dis.toFixed(2)}
                        </h4>
                      </Part3>
                      <Part3>
                        <h4
                          style={{
                            marginLeft: "200px",
                            textDecoration: "underline",
                          }}
                        >
                          +Buy one more
                        </h4>
                        <button
                          style={{
                            marginLeft: "440px",
                            height: "-5px",
                            width: "-5px",
                            backgroundColor: "white",
                            border: "none",
                          }}
                        >
                          <img
                            src="https://th.bing.com/th/id/OIP.HNBdUwT8hx6ZXmY5h1hPUQHaIL?pid=ImgDet&rs=1"
                            height="20px"
                            width="20px"
                          />
                        </button>
                      </Part3>
                      <hr
                        style={{
                          marginLeft: "200px",
                        }}
                      ></hr>
                    </Part1>
                    <Part2>
                      <img
                        src="https://www.samsung.com/in/web/dist/img/tradein-icon.b1ccb57.svg"
                        style={{
                          marginLeft: "200px",
                        }}
                      />
                      <h4
                        style={{
                          marginLeft: "30px",
                        }}
                      >
                        Exchange Offer
                      </h4>
                    </Part2>
                    <p
                      style={{
                        marginLeft: "315px",
                        marginTop: "-20px",
                        fontSize: "12px",
                      }}
                    >
                      Exchange your product & receive exchange discount on your
                      order
                    </p>

                    <hr
                      width="175%"
                      style={{
                        marginLeft: "-15px",
                        marginTop: "10px",
                        color: "gray",
                      }}
                    ></hr>
                  </Main>
                </>
              );
            })}
          </div>
          <div>
            <Main1>
              <Total>
                <h2>Total:</h2>
                <h2>₹{price.toFixed(2)}</h2>
              </Total>
              <hr width="90%" style={{}}></hr>

              <Value>
                <p>Subtotal</p>
                <p>₹{(price-gst-dis).toFixed(2)}</p>
              </Value>
              <Value>
                <p>Discount</p>
                <p>₹{dis.toFixed(2)}</p>
              </Value>
              <Value>
                <p>Shipping charges</p>
                <p>₹0.00</p>
              </Value>
              <Value>
                <p>Estimated GST*</p>
                <p>₹{gst.toFixed(2)}</p>
              </Value>
              <Value>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    width: "800px",
                    height: "40px",
                    marginTop: "20px",
                    borderRadius: 20,
                  }}
                ><Link style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to={"/payment"}>Pay Now</Link>
                  
                </button>
              </Value>
              <Final>
                <p>No Cost EMI starts from ₹ 15072.22/ month.</p>
                <p>Standard EMI starts from ₹ 12571.25/ month.</p>
              </Final>
              <hr width="100%"></hr>

              <Final1>
                <p>
                  By submitting your order, you agree to the Terms of Service,
                  Terms of Use and
                </p>
              </Final1>
              <Final2>
                <p>Privacy Policy</p>
              </Final2>
            </Main1>
          </div>
        </Big>
      </div>
      <Footer/>
    </div>
  );
};
