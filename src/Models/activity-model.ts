export interface IActivity {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    created_at: Date;
    completed_at?: string;
}