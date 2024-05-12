import React, { createContext, useState } from 'react';

import {ILoginDetailsProps} from './LoginInterface'

interface ContextProviderProps {
    children: React.ReactNode;
}

// Declare the shape of the context data
interface UserContextType {
    authorisedUser: ILoginDetailsProps | null; // Now optional
    addAuthorisedUser: (authorisedUser: ILoginDetailsProps) => void; // Now optional
}

export const UserContext = createContext<UserContextType | null>(null);


export function ContextProvider({ children }: ContextProviderProps) {

    // const defaultContextValue: UserContextType = {
    //     addAuthorisedUser: () => {} // No-op function as default
    // };
    
    const [authorisedUser, setAuthorisedUser] = useState<ILoginDetailsProps| null>(null);

    const addAuthorisedUser = (newUser: ILoginDetailsProps) => {
        setAuthorisedUser(newUser);
    };

    return (
        <UserContext.Provider value={{ authorisedUser, addAuthorisedUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default ContextProvider;