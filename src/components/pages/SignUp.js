import '../../App.css';
import React from 'react';
import Mailchimp from 'react-mailchimp-form'

export const SignUp = () => {

  return (
    <div>
      <Mailchimp
        action="https://gmail.us5.list-manage.com/subscribe/post?u=4d589355c15f3fbe07bfedccb&amp;id=31b9ac7397"

        //Adding multiple fields:
        fields={[
          {
            className: 'email',
            name: 'EMAIL',
            placeholder: 'email address',
            type: 'email',
            required: true
          },
          {
            name: 'FNAME',
            placeholder: 'enter your name',
            type: 'text',
            required: true
          }
        ]}
        // Change predetermined language
        messages={
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }
        }
        // Add a personalized class
        className='sign-up'
      />
    </div>
  )
}

export default SignUp;