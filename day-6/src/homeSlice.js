const initialState = {
    welcomeMessage: 'Welcome to the Home Page!',
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default homeReducer;