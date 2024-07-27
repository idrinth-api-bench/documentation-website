/* eslint-disable quotes */
import React from "react";
import Layout from "../../components/layout.tsx";

const Index = () => (
  <Layout page="disclosure" path="/disclosure">
    <div className="title-card">
      <h1>Security Policy</h1>
    </div>

    <div className="card">
      <h2>Supported Versions</h2>
      <p>
        The current version is always the one being supported for security and
        bugfixes. Changes to older versions will not happen, due to time
        restrictions.
      </p>
    </div>

    <div className="card">
      <h2>Security contact information</h2>
      <p>
        To report a security vulnerability, please use the{" "}
        <a
          href="https://tidelift.com/security"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tidelift security contact
        </a>
        . Tidelift will coordinate the fix and disclosure.
      </p>
    </div>
  </Layout>
);
export default Index;
