const React = require("react");
const CustomerChat = require("./src/components/CustomerChat").default;
const Location = require("./src/components/Location").default;
const Footer = require("./src/components/Footer").default;

exports.wrapPageElement = ({ element, props }) => (
  <React.Fragment>
    {element}
    <CustomerChat />
  </React.Fragment>
);

exports.wrapRootElement = ({ element, props }) => (
  <React.Fragment>
    {element}
    <Location />
    <Footer />
  </React.Fragment>
);
