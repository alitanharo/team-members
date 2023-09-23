import React from 'react';
import TeamMemberList from '../components/teamMembers/TeamMemberList';
import TeamMemberForm from '../components/teamMembers/TeamMemberForm';
import { ViewContainer } from '../styles/ViewStyles';


function View() {
  return (
    <ViewContainer>
      <TeamMemberList />
      <TeamMemberForm />
    </ViewContainer>
  );
}

export default View;
