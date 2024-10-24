import React from "react";
import { IActivity } from "../../Models/activity-model";

interface ICompletedActivitiesProps {
    activities: IActivity[];
}

const CompletedActivities: React.FC<ICompletedActivitiesProps> = ({ activities }) => {
    const completedActivities = activities.filter(activity => activity.completed === true);
    return (
        <div>
            <h1>Atividades concluídas</h1>
            <ul>
                {completedActivities.map(activity => (
                    <li key={activity.id}>
                        <h2>{activity.title}</h2>
                        <p>{activity.description}</p>
                        <p>{activity.completed_at}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CompletedActivities;