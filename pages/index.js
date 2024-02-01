import { useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    // Load Facebook SDK script
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function() {
      // Initialize the SDK with your app and the Graph API version for your app
      FB.init({
        appId: '1651937501999025',
        xfbml: true,
        version: 'v19.0',
      });

      // If you need to do something else with the SDK, put it here
    };
  }, []);

  return (
    <div>
      <a href='https://www.facebook.com/dialog/oauth?client_id=1651937501999025&display=page&extras={"setup":{"channel":"IG_API_ONBOARDING"}}&redirect_uri=https://localhost:3000/success/&response_type=token&scope=token'>Login</a>
      <button onClick={() => {
        FB.login(function(response) {
          if (response.authResponse) {
            console.log('Welcome! Fetching your information....');
            FB.api('/me', { fields: 'name, email' }, function(response) {
              document.getElementById("profile").innerHTML = "Good to see you, " + response.name + ". I see your email address is " + response.email;
            });
          } else {
            console.log('User cancelled login or did not fully authorize.');
          }
        },{config_id: '1069004141074307',
        response_type: 'code',
        override_default_response_type: true});
      }}>Login with Facebook</button>
      <button onClick={() => signOut()}>Sign out</button>
      <h2>Add Facebook Login to your webpage</h2>
      <p id="profile"></p>
    </div>
  );
}
