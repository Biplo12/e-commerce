import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h3>Sign up for inspiration</h3>
        <div className="newsletter-input">
          <input type="text" placeholder="Email address*" />
          <button type="submit">
            <span className="un">Submit</span>
          </button>
        </div>
        <p>
          By signing up, you’re confirming that you’re happy for us to keep in
          touch with you. You can opt out at any time. For more information
          about how we use your data, our privacy practices and your rights,
          please read our privacy policy and cookie policy
        </p>
      </div>
      <div className="seperate-line" />
      <div className="newsletter-contact-content">
        <h3>Speak to our experts</h3>
        <div className="newsletter-contact-details">
          <div>
            <h5>Customer service:</h5>
            <a>Call +0 000 000 000</a>
          </div>
          <div>
            <h5>Visit us IN-STORE:</h5>
            <a>Example address 1/23</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
