import React from "react";
import { IActivity } from "../../Models/activity-model";
import styled from "styled-components";

interface ActivitiesListProps {
    activities: IActivity[];
    // removeActivity: (id: number) => void;
    completeActivity: (id: string) => void;
}


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;`
;


const List = styled.ul`
    list-style: none;
    padding: 0;`
    ;

const ListItem = styled.li<{completed: boolean}>`
    padding: 10px;
    border: 1px solid #E7E247;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: ${({completed}) => completed ? 'line-through' : 'none'};
    margin-bottom: 10px;
    `;

const ActivityInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  `;

const Checkbox = styled.div`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    cursor: pointer;

   input {
    opacity: 1;
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    }

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #ddd96c;
    }

`;

const ActivityTitle = styled.span`
    font-weight: bold;
    color: #ddd96c;
    `;

const ActivityDescription = styled.span`
    font-size: 1.5rem;
    color: #d9d9d9;
    `;

const ActivityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const Home:React.FC<ActivitiesListProps> = ({ activities, completeActivity}) => {
    return (
        <Container>
       <List>
        {activities?.map((activity) => (
            
            <ListItem key={activity.id} completed={activity.completed}>
                <ActivityInfo>
                    <Checkbox>
                        <input
                        type="checkbox"
                        checked={activity.completed}
                        onChange={() => completeActivity(activity.id)} />
                    </Checkbox>
                    <ActivityContainer>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivityDescription>{activity.description}</ActivityDescription>
                    </ActivityContainer>
                </ActivityInfo>
            </ListItem>
        ))};
         </List>
        </Container>
    );
};
       

export default Home;