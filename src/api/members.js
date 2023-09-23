import axios from 'axios';
import { apiUrl } from '../utils/config';


export const fetchTeamMembers = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching team members:', error);
        throw error;
    }
}
