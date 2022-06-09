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
    </div>
  );
};

export default Newsletter;
