/* eslint-disable @typescript-eslint/no-explicit-any */

import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CreateActivity from './Pages/CreateActivity/CreateActivity';
import api from './api';
import { IActivity } from './Models/activity-model';
import { useReducer } from 'react';
import activityReducer from './reducers/activityReducer';
import CompletedActivities from './Pages/CompletedActivities/CompletedActivities';
import PendingActivities from './Pages/PendingActivities/PendingActivities';
import styled from 'styled-components';

const initialState = {
  activities: [] as IActivity[]}

  const SectionTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  color: white;
  margin: 0;
  padding: 1rem;
`;

const ContentWrapper = styled.div`
  flex: 1;         
  overflow-y: auto;
  scroll-behavior: smooth;
  width: 100%;        
  padding: 0;
  margin-top: 1rem;
  `;

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState);
 
  api.get('/activities')
    .then(response => {
      dispatch({ type: 'SET_ACTIVITIES', payload: response.data })
    });

  const removeActivity = (id: string) => {
    api.delete(`/activities/${id}`)
    .catch(error => {console.error('Erro ao remover atividade', error)});
  }

  const addActivity = (activity: any) => {
    api.post('/activities', activity)
    .catch(error => {console.error('Erro ao adicionar atividade', error)});}

  const completeActivity = (id: string) => {
    const activity = state.activities.find((activity: IActivity) => activity.id === id);

    if (activity) {
      const updatedActivity: IActivity = {
        ...activity,
        completed: !activity.completed,
        completed_at: !activity.completed ? new Date() : null 
      };
      api.put(`/activities/${id}`, updatedActivity)
      .then(response => {
        dispatch({ type: 'COMPLETE_ACTIVITY', payload: response.data })
      })
    }
  }

  return (
    <Router>
    <Layout>
      <Routes>
        
        <Route path="/" element={
          <>
          <SectionTitle>Todas Atividades</SectionTitle>
          <ContentWrapper>
          <Home activities={state.activities} completeActivity={completeActivity} removeActivity={removeActivity} />
          </ContentWrapper>
          </>} 
          />
        
        <Route path="/create-activity" element={
          <>
          <SectionTitle>Criar Nova Atividade</SectionTitle>
          <ContentWrapper>
          <CreateActivity addActivity={addActivity} />
          </ContentWrapper>
          </>}
          />
          
        <Route path="/pendent" element={
          <>
          <SectionTitle>Atividades Pendentes</SectionTitle>
          <ContentWrapper>
          <PendingActivities activities={state.activities} />
          </ContentWrapper>
          </>}
          />
        
        <Route path="/completed" element={
          <>
          <SectionTitle>Atividades Concluídas</SectionTitle>
          <ContentWrapper>
          <CompletedActivities activities={state.activities} />
          </ContentWrapper>
          </>}
          />
      </Routes>
    </Layout>
    </Router>
  )
}


export default App
