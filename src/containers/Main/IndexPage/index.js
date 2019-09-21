import React from "react";
import SubmitForms from "../From";

import { LocaleProvider, Button } from "antd";

import "./style";

const Nav = [
  { name: "Services", value: "1", key: 1 },
  { name: "Platform", value: "2", key: 2 },
  { name: "Case Studies", value: "3", key: 3 }
];

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = () => {
    // this.refs.submitForms.handleSubmit();
    console.log(this.refs.submitForms);
  };
  render() {
    return (
      <div className="index-page">
        <header className="header">
          <div className="header-left">
            <div className="logo">
              <span className="name">Cstar</span>
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0246 7.11144C19.1203 7.09636 19.192 7.19729 19.1462 7.28269L10.2298 23.9155C10.175 24.0177 10.0209 23.9868 10.0097 23.8713L9.08405 14.2983C9.08001 14.2565 9.054 14.2201 9.01582 14.2028L0.356158 10.2688C0.250219 10.2207 0.271478 10.0643 0.386421 10.0462L19.0246 7.11144Z"
                    fill="#FF695B"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="header-right">
            <ul>
              {Nav.map(item => (
                <li key={item.key}>{item.name}</li>
              ))}
            </ul>
            <div className="header-btn">
              <div className="btn">Get Start</div>
            </div>
          </div>
        </header>
        <div className="content-index">
          <div className="introduce">
            <span className="title">
              Import duties, taxes, and
              <br /> fee calculator
            </span>
            <span className="detail">
              Estimate your duties and fees using this simple calculator.
            </span>
          </div>
          <SubmitForms ref="submitForms" />
          <div className="customs-duty">
            <div className="content">
              <div className="left">
                <span className="title">What is a customs duty?</span>
                <br />
                <span className="details">
                  <span className="line-1">
                    This is a content block. It should support 1-2 paragraphs.
                  </span>
                  <br />
                  <span className="line-2">
                    One of the ways we bring value to our customers is the full
                    suite of logistics and technology services we provide. The
                    ability to offer multiple transportation services on one
                    technology platform enables us to be a true single source
                    solution for our customers.
                  </span>
                </span>
                <br />
                <a className="small-cta" href="##">
                  Small CTA link
                </a>
              </div>
              <div className="right">
                <div className="image"></div>
              </div>
            </div>
          </div>
          <div className="duty-rate">
            <div className="content">
              <div className="left">
                <div className="image"></div>
              </div>
              <div className="right">
                <span className="title">What is a customs duty?</span>
                <br />
                <span className="details">
                  <span className="line-1">
                    This is a content block. It should support 1-2 paragraphs.
                  </span>
                  <br />
                  <span className="line-2">
                    One of the ways we bring value to our customers is the full
                    suite of logistics and technology services we provide. The
                    ability to offer multiple transportation services on one
                    technology platform enables us to be a true single source
                    solution for our customers.
                  </span>
                </span>
                <br />
                <a className="small-cta" href="##">
                  Small CTA link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="left">
            <div>
              <span className="name">Cstar</span>
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0246 7.11144C19.1203 7.09636 19.192 7.19729 19.1462 7.28269L10.2298 23.9155C10.175 24.0177 10.0209 23.9868 10.0097 23.8713L9.08405 14.2983C9.08001 14.2565 9.054 14.2201 9.01582 14.2028L0.356158 10.2688C0.250219 10.2207 0.271478 10.0643 0.386421 10.0462L19.0246 7.11144Z"
                    fill="#FF695B"
                  />
                </svg>
              </span>
            </div>
            <span className="detail">
              Customs clearance for
              <br />
              fast growing importers
            </span>
          </div>
          <div className="right">
            <ul>
              <li className="white">Solutions</li>
              <li>Importers & Traders</li>
              <li>Enterprises</li>
              <li>Micro-businesses</li>
              <li>Ecommerce</li>
              <li>By Industry and Goods</li>
            </ul>
            <ul>
              <li className="white">Services</li>
              <li>Customs Clearance</li>
              <li>Import Agency</li>
              <li>Freight Forwarding</li>
              <li>Warehousing & Delivery</li>
              <li>Cold Chain & Perishables</li>
            </ul>
            <ul>
              <li className="white">Company</li>
              <li>Our Platform</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>24/7 Support</li>
            </ul>
          </div>
				</div>
				<div className="bottom-index">
					<div className="container">
						<p className="white">Legal</p>
						<p>
							Customs brokerage services are provided by Flexport’s wholly-owned subsidiary, Flexport Customs LLC, 
							a licensed customs brokerage with a national permit. International ocean freight forwarding services are provided by
							Flexport International LLC, a licensed Ocean Transportation Intermediary FMC# 025219NF. 
							U.S. trucking services are provided by Flexport International, LLC, a FMCSA licensed property broker USDOT 
							#2594279 and MC #906604-B. All transactions are subject to Flexport’s standard terms and conditions, 
							available at www.flexport.com/terms 沪ICP备16041494号
						</p>
						<span className="last">Copyright © 2019 Flexport Inc.&nbsp;&nbsp;|&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;erms of Use</span>
					</div>
				</div>
      </div>
    );
  }
}

export default IndexPage;
