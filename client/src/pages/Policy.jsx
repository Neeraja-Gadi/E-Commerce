import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={'Policy'}>
      <div className="row contacts ">
        <div className="col-md-6 ">
          <img
            src="/images/contacts.jpeg"
            alt="contacts"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>this is  privacy policy</p>
          <p>this is  privacy policy</p>
          <p>this is  privacy policy</p>
          <p>this is  privacy policy</p>
          <p>this is  privacy policy</p>
          <p>this is  privacy policy</p>

        </div>
      </div>
    </Layout>
  );
};

export default Policy;
