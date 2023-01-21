//We can create a context using the createContext method. 
import { createContext, useState } from "react";


//First, we need to export out the context itself. 
/*
   We can see the context as two pieces.
   One is the actual storage itself, and this is the literal context.
*/
//We pass the default value to the createContext method.
//This is the actual value that we want to access. 
//currentUser is an object. Usually the empty state of an object should be null because we want a null check to define whether
//or not we have an existing user object or no object. We know that there's no context when the current user value is null.
//The setter function default value is a function that does nothing. An empty function that returns null. 
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null
});

//The provider is the actual component. 
//We receive children and we need to return <UserContext.Provider/>
//Every context that gets built for us, there's a Provider. The Provider is the component that will
//wrap around any other components that need access to the values inside. (!!!)
//The provider is going to receive the value, which is going to hold the actual contextual values. 
//We want to store a user object ([currentUser]). 
//With useState we can store the state of the user. currentUser gets both the actual value and the setter function (serCurrentUser).
//Next we have to generate the value that passes to the {children} in the Provider.
//THE PROVIDER IS ALLOWING ANY OF ITS CHILD COMPONENTS TO ACCESS THE VALUES INSIDE OF ITS useState. 
//We want to be able to call the setter and get the value anywhere inside of the component tree that is nested within the Provider
//value. (value={value})
export const UserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null);
   const value = { currentUser, setCurrentUser }; 
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

/*
Example:
   Let's say we have "app" for example. App being our appcomponent. We're going to wrap this in the 
   UserProvider component.
   App is going to be the {children}. We want to take this children and then put it around our
   <UserContext.Provider/>.
*/