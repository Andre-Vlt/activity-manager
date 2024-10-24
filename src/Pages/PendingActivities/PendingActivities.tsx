import React from "react";
import { IActivity } from "../../Models/activity-model";
import styled from "styled-components";




const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    `;


const ActivityTitle = styled.span`
    font-weight: bold;
    color: #ddd96c;
    font-size: 1.5rem;
    `;

const List = styled.ul`
    list-style-type: number;
    padding: 0;
    color: #ddd96c;
    font-size: 1.5rem;`;

const StyledActivity = styled.li`
    border: 1px solid #E7E247;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 5px;`;

const ActivityDescription = styled.span`
    font-size: 1.2rem;
    color: #d9d9d9;
    `;

const ActivityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`;
interface IPendingActivitiesProps {
    activities: IActivity[];
}

const PendingActivities: React.FC<IPendingActivitiesProps> = ({ activities }) => {
    const completedActivities = activities.filter(activity => activity.completed === false);
    return (
        <Container>
            <List>
                {completedActivities.map(activity => (
                    <StyledActivity key={activity.id}>
                        <ActivityContainer>
                        <ActivityTitle>{activity.title}</ActivityTitle>
                        <ActivityDescription>{activity.description}</ActivityDescription>
                        </ActivityContainer>
                        <p>{activity.completed_at}</p>
                    </StyledActivity>
                ))}
            </List>
        </Container>
        );
        }

export default PendingActivities;