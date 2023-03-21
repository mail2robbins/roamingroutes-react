// import React from "react";
//import { Link } from "react-router-dom";
// import MailTo from "../components/MailTo";

// const Contact = () => {
//   return (
//     <>
//       <div>Contact Us</div>
//       <MailTo
//         label="Write me an E-Mail"
//         mailto="mailto:roaming.routes.tours@gmail.com"
//       />
//       <p>&nbsp;123</p>
//       <Link to="/" className="btn btn-hero">
//         Back to Home
//       </Link>
//     </>
//   );
// };

// export default Contact;

import { useState } from "react";
import FormRow from "../components/FormRow";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/ContactPage";
import Logo from "../components/Logo";
import SendEmail from "../libraries/SendEmail";

const initialState = {
  name: "",
  email: "",
};

function Contact() {
  const [values, setValues] = useState(initialState);
  //const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, location, image } = useSelector(
    (store) => store.tour.selectedTour
  );
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = values;
    if (!email || !name) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    // window.location.href = `mailto:roaming.routes.tours@gmail.com?body=I am interested in the tour package '${title}' for location: ${location}.&subject=New Enquiry for the tour package - ${title}`;
    // toast.success(`Enquiry sent successfully for the tour package '${title}'`);
    const { status } = await SendEmail({
      from_name: name,
      message: `I am interested in the tour package '${title}' for location: ${location}.`,
      reply_to: "roaming.routes.tours@gmail.com",
      to_name: email,
      to_address: email,
      //subject: `New Enquiry for the tour package - ${title}`,
    });
    if (status === 1) {
      toast.success(
        `Enquiry sent successfully for the tour package '${title}'`
      );
    } else {
      toast.error(
        `An error occured while sending the enquiry on the tour package '${title}'`
      );
    }

    navigate("/");
  };

  const goBackHome = () => {
    navigate("/");
  };

  return (
    <Wrapper className="full-page">
      {/* <article className="tour-card"> */}

      <form className="form" onSubmit={onSubmit}>
        <div className="center-div">
          <Logo />
        </div>
        <h3>&nbsp;</h3>
        <h3>Send Enquiry</h3>
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt={title} />
        </div>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Enquire
        </button>
        &nbsp;
        <button className="btn btn-block" onClick={goBackHome}>
          Back Home
        </button>
      </form>
      {/* </article> */}
    </Wrapper>
  );
}
export default Contact;
