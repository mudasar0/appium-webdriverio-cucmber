export const LOGIN_USERS = {
    LOCKED:{
      username: 'locked_out_user',
      password: 'secret_sauce',
    },
    NO_MATCH:{
      username: 'd',
      password: 'd',
    },
    NO_USER_DETAILS:{
      username: '',
      password: '',
    },
    NO_PASSWORD:{
      username: 'standard_user',
      password: '',
    },
    STANDARD:{
      username: 'standard_user',
      password: 'secret_sauce',
    },
  };
  export const MESSAGE = {
    LOCKED:{
      message:'Sorry, this user has been locked out.',
    },
    NO_MATCH:{
        message:'Username and password do not match any user in this service.',
    },
    NO_USER_DETAILS:{
        message:'Username is required',
    },
    NO_PASSWORD:{
        message:'Password is required',
    },
    STANDARD:{
        message:'PRODUCTS',
    },
  };