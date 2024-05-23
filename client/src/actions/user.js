import axios from 'axios';
import { toast } from "react-toastify";

 
export const bgRegistration = (donorSubmit) => async dispatch => {
    dispatch({type : 'DONOR_REGISTRATION_REQUEST'})
    try {
        const res = await axios.post('/api/donor/submit',donorSubmit);
        dispatch({type : 'DONOR_REGISTRATION_SUCCESS'});
        toast.success("Details Submitted Successfully!", {
            position: "top-center",
          });
        // window.location.href = '/LoginDonator';

    } catch (error) {
        dispatch({type : 'DONOR_REGISTRATION_FAIL',payload : error});
        toast.success(`Failed to send! ${error} encountered! Try again Later,`, {
            position: "top-center",
          });
    }
};
// export const volunteerRegistration = (volunteerRegistrationrSubmit) => async dispatch => {
//     dispatch({type : 'USER_SIGNIN_REQUEST'})
//     try {
//         const res = await axios.post('/api/volunteer/registration',volunteerRegistrationrSubmit);
//         dispatch({type : 'VOLUNTEER_REGISTRATION_SUCCESS'});
//         toast.success("Details Submitted Successfully!", {
//             position: "top-center",
//           });
          
//           window.location.href = '/Donate';
//         } 
        
//         catch (error) {
//         dispatch({type : 'VOLUNTEER_REGISTRATION_FAIL',payload : error});
//         toast.success(`Failed to send! ${error} encountered! Try again Later,`, {
//             position: "top-center",
//           });
//     }
// };
export const Signinuser = (userSignin) => async dispatch => {
    dispatch({ type: 'USER_SIGNIN_REQUEST' });
    try {
        const res = await axios.post('/api/user/signin', userSignin);
        dispatch({ type: 'USER_SIGNIN_SUCCESS' });
        toast.success("Details Submitted Successfully!", {
            position: "top-center",
        });
        // Redirect after showing success message
        setTimeout(() => {
            window.location.href = '/Login';
        }, 2000); // Redirect after 2 seconds
    } catch (error) {
        dispatch({ type: 'USER_SIGNIN_FAIL', payload: error });
        toast.error(`Failed to send! ${error} encountered! Try again later.`, {
            position: "top-center",
        });
    }
};

export const loginuser = (user) => async (dispatch) => {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    try {
      toast.info("Logging in. Please wait...", { autoClose: false, position: "top-center" });
  
      const res = await axios.post('/api/user/login', user);
  
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.data });
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      window.location.href = '/';
      toast.success("Logged In Successfully!", { position: "top-center" });
    } catch (error) {
      dispatch({ type: 'USER_LOGIN_FAIL', payload: error });
      toast.error("Invalid Credentials! Please Check again", { position: "top-center" });
    }
  };
    

  export const logoutuser = () => dispatch => {

    toast.info("Logging you out.", { position: "top-center" });

    localStorage.removeItem('currentUser');
    window.location.href = '/';
}
