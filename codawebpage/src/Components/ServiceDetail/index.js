import React from "react";
import "./servicedetail.css";
import { FaArrowLeft } from "react-icons/fa";

const ServciveeDetail = () => {
  return (
    <div className="ServciveeDetail">
      <div className="backFunction">
        <a href="/">
          <FaArrowLeft className="LeftArrwdetail" />
          <p>Back</p>
        </a>
      </div>

      <div className="detailwrapper">
        <div className="wrapperheader">
          <h1>PAYMENT AND PURCHASE ISSUES</h1>
        </div>
        <div className="wrapperbody">
          <ul>
            <li>
              <a href="https://sg.support.codashop.com/hc/en-us/articles/360003830176-I-Have-Made-a-Transaction-but-How-to-Find-the-Voucher-Code">
                I Have Made a Transaction, but How to Find the Voucher Code?
              </a>
            </li>
            <li>
              <a href="https://sg.support.codashop.com/hc/en-us/articles/360002049596-How-Can-I-Get-a-History-of-My-Transactions">
                How Can I Get a History of My Transactions?
              </a>
            </li>
            <li>
              <a href="https://sg.support.codashop.com/hc/en-us/articles/360002046155-I-Got-an-Error-Code-When-Making-a-Purchase">
              I Got an Error Code When Making a Purchase
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServciveeDetail;
