import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
const Privacy = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="Privacy" subTitle="Policy" />

        <div className="w3-container">
          <div className="w3-content">
            <h4>GDPR</h4>

            <p>
              We respect your privacy and are committed to protecting your
              personal data. In accordance with the General Data Protection
              Regulation (GDPR), we would like to inform you about the data we
              collect and how it is used.
            </p>
            <p>
              When you visit our website, we collect information such as your IP
              address, location, and browsing habits. This information helps us
              understand our audience and improve our website. We may also use
              cookies to personalize your experience and show you relevant
              content and ads. By using our website, you consent to the
              collection and use of your data as described in this policy. If
              you would like to opt out of data collection or change your
              preferences, you can do so by adjusting your browser settings or
              contacting us.
            </p>
            <p>
              Thank you for visiting our website and for supporting our
              commitment to protecting your privacy.
            </p>
          </div>
        </div>
        <div className="w3-container">
          <div className="w3-content">
            <h4>CPRA</h4>

            <p>
              We value your privacy and are committed to protecting your
              personal information. In accordance with the California Privacy
              Rights Act (CPRA), we would like to inform you about the personal
              data we collect, how it is used, and your rights under the CPRA.
            </p>
            <p>
              When you visit our website, we may collect information such as
              your IP address, location, and browsing habits. This information
              helps us understand our audience and improve our website. We may
              also use cookies and other tracking technologies to personalize
              your experience and show you relevant content and ads. By using
              our website, you consent to the collection and use of your
              personal information as described in this policy.
            </p>
            <p>
              Under the CPRA, you have the right to request that we delete your
              personal information, and to opt out of the sale of your personal
              information. To exercise these rights, please contact us. Thank
              you for visiting our website and for supporting our commitment to
              protecting your privacy under the CPRA.
            </p>
            <Link to="/" className="btn btn-hero">
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
