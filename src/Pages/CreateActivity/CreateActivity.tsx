import React, { useState } from "react";
import { IActivity } from "../../Models/activity-model";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #E7E247;
    font-size: 35px;
    font-weight: bold;
    background-color: transparent;
    color: white;`;

const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #E7E247;
    cursor: pointer;
    
    &:hover {
        background-color: #575407;
        transition: 0.3s ease;
    }
    `;

interface ICreateActivityProps {
    addActivity: (activity: IActivity) => void;
}

const CreateActivity: React.FC<ICreateActivityProps> = ({ addActivity }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [created_at, setCreated_at] = useState(new Date())
    const [completed_at, setCompleted_at] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addActivity({
            id: (Math.floor(Math.random() * 1000)).toString(),
            title,
            description,
            completed,
            created_at,
            completed_at
        });
        setTitle("");
        setDescription("");
        setCompleted(false);
        setCreated_at(new Date());
        setCompleted_at("");
    }

    return (
        <Container>
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
            <Button type="submit">Adicionar</Button>
        </Form>
        </Container>
    );
}


export default CreateActivity;