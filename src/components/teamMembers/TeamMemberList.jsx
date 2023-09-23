import React from 'react';
import { useTeamContext } from '../../context/TeamContext';
import { ListItem, OrderedList, Heading, BackgroundDiv } from '../../styles/TeamMemberListStyles'

const TeamMemberList = () => {
    const { teamMembers } = useTeamContext();

    return (
        <BackgroundDiv >
            <Heading>
                <span>Join</span> <span>the</span> <span>team</span>
            </Heading>
            <OrderedList>
                {teamMembers.map((member, index) => (
                    <ListItem key={index}>{member}</ListItem>
                ))}
            </OrderedList>
        </BackgroundDiv>
    );
};

export default TeamMemberList;
