import React from "react";
import { IActivity } from "../../Models/activity-model";
import { ActivityDescription, ActivityContainer, Container, List, StyledActivity, ActivityTitle } from "../PendingActivities/PendingActivities";
import styled from "styled-components";

interface ICompletedActivitiesProps {
    activities: IActivity[];
}

const ConclusionTitle = styled.p`
color: #39dd40;
font-size: 1.2rem;
`;

const ConclusionDate = styled.span`
font-size: 1.2rem;`;
const ConclusionContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;`;


const formatDate = (dateString: string) => {
    const date= new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} às ${hours}:${minutes}`;
}
const CompletedActivities: React.FC<ICompletedActivitiesProps> = ({ activities }) => {
    const completedActivities = activities.filter(activity => activity.completed === true);
    return (
        <Container>
            <List>
                {completedActivities.map(activity => (
                    <StyledActivity key={activity.id}>
                        <ActivityContainer>
                        <ActivityTitle>{activity.title}</ActivityTitle>
                        <ActivityDescription>{activity.description}</ActivityDescription>
                        </ActivityContainer>
                        <ConclusionContainer>
                        <ConclusionTitle>Data de conclusão: </ConclusionTitle> 
                        <ConclusionDate>
                            {activity.completed_at ? formatDate(activity.completed_at) : ' Data desconhecida'}
                        </ConclusionDate>
                        </ConclusionContainer>
                    </StyledActivity>
                ))}
            </List>
        </Container>
        );
        }

export default CompletedActivities;