import { createContext, useContext, useState, useEffect } from 'react';
import { fetchTeamMembers } from '../api/members';

const TeamContext = createContext();

export const useTeamContext = () => {
    return useContext(TeamContext);
};

export const TeamProvider = ({ children }) => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        // Fetch initial team member data from the API
        fetchTeamMembers()
            .then((data) => setTeamMembers(data.team))
            .catch((error) => console.error('Error fetching team members:', error));
    }, []);

    const addMember = (newMember) => {
        setTeamMembers([...teamMembers, newMember]);
    };

    return (
        <TeamContext.Provider value={{ teamMembers, addMember }}>
            {children}
        </TeamContext.Provider>
    );
};
