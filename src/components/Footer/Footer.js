import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=".main-footer">
      <div className="footerText">
        <a href="zurich.com">Version</a>
        <p className="copyright">
          &copy; {new Date().getFullYear()}
          <a href="zurich.com">Zurich</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;




















{/*import { Layout } from "antd";
import React from "react";

const Footer = () => {
  return (
    <Layout>
      <Layout.Footer style={{ textAlign: "center" }}>
        KnowledgeBaseApp ©2021 Created by React Dev
      </Layout.Footer>
    </Layout>
  );
};

export default Footer;
*/}