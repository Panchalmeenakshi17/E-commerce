// export const contactUser = (state={},action) => {
//     switch(action.type){
//         case 'USER_CONTACT_REQUEST' :
//             return{
//                 loading : true
//             }
//         case 'USER_CONTACT_SUCCESS' :
//             return{
//                 loading : false,
//                 success : true
//             }
//         case 'USER_CONTACT_FAIL' :
//             return{
//                 loading : false,
//                 error : action.payload
//             }
//         default : return state
//     }
// };
// export const bloodGroupRegistration = (state={},action) => {
//     switch(action.type){
//         case 'DONOR_REGISTRATION_REQUEST' :
//             return{
//                 loading : true
//             }
//         case 'DONOR_REGISTRATION_SUCCESS' :
//             return{
//                 loading : false,
//                 success : true
//             }
//         case 'DONOR_REGISTRATION_FAIL' :
//             return{
//                 loading : false,
//                 error : action.payload
//             }
//         default : return state
//     }
// };
// export const volunteerRegistration = (state={},action) => {
//     switch(action.type){
//         case 'VOLUNTEER_REGISTRATION_REQUEST' :
//             return{
//                 loading : true
//             }
//         case 'VOLUNTEER_REGISTRATION_SUCCESS' :
//             return{
//                 loading : false,
//                 success : true
//             }
//         case 'VOLUNTEER_REGISTRATION_FAIL' :
//             return{
//                 loading : false,
//                 error : action.payload
//             }
//         default : return state
//     }
// };

export const loginuserReducer = (state={},action) => {
    switch(action.type){
        case 'USER_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'USER_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentUser : action.payload
            }
        case 'USER_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};


export const userSignupReducer = (state={},action) => {
    switch(action.type){
        case 'USER_SIGNIN_REQUEST' :
            return{
                loading : true
            }
        case 'USER_SIGNIN_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'USER_SIGNIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};