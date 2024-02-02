import { useEffect } from 'react';


// export default function Home() {

//   useEffect(() => {
//     // Load Facebook SDK script
//     (function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {return;}
//       js = d.createElement(s); js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));

//     window.fbAsyncInit = function() {
//       // Initialize the SDK with your app and the Graph API version for your app
//       FB.init({
//         // appId: '1374916353149686', //login test
//         appId: '1651937501999025', //influencer
//         xfbml: true,
//         version: 'v19.0',
//       });

//       // If you need to do something else with the SDK, put it here
//     };
//   }, []);

//   return (
//     <div>
//       <button onClick={() => {
//         FB.login(function(response) {
//           if (response.authResponse) {
//             console.log(response.authResponse);
//             console.log('Welcome! Fetching your information....');
//             FB.api('me/accounts', { fields: 'data' }, function(responseNew) {
//               console.log("res of me.accounts",responseNew)
//               const pageId = responseNew.data[0].id
//               FB.api(`${pageId}?fields=instagram_business_account`,
//               { fields: 'instagram_business_account' },
//               function(res){
//                 console.log("success",res.instagram_business_account.id)
//               }
//               )
//               // document.getElementById("profile").innerHTML = "Good to see you, " + responseNew.name + ". I see your email address is " + responseNew.email;
//             });
//           } else {
//             console.log('User cancelled login or did not fully authorize.');
//           }
//         },{
//           // config_id: '3682492275365546', login2
//           config_id: '397032019679968',
//         response_type: 'token',
//         override_default_response_type: true});
//       }}>Login with Facebook</button>
//       <button>Sign out</button>
//       <h2>Add Facebook Login to your webpage</h2>
//       <p id="profile"></p>
//     </div>
//   );
// }

export default function Home(){
  return (
    <h1>hello</h1>
  )
}
