import { createSlice, current } from '@reduxjs/toolkit';


export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [
      {id: 1, projectInfo: "Landing page", projectManager: "Walt Cossani", assignedTo: "Ignacio Truffa", status: "enabled"},
      {id: 2, projectInfo: "E-commerce shop", projectManager: "Walt Cossani", assignedTo: "Ignacio Truffa", status: "enabled"},
      {id: 3, projectInfo: "CRM linkroom", projectManager: "Walt Cossani", assignedTo: "Ignacio Truffa", status: "enabled"}
    ],
  },
  reducers: {
    deleteProject: (state, action) => {
      const currentState = current(state);
      const filteredProject = currentState.projects.filter(item => item.id !== action.payload);

      return {
        ...currentState,
        projects: filteredProject
      };
    },
    addProject: (state, action) => {
      const currentState = current(state);
      return {
        ...currentState,
        projects: [...state.projects, action.payload]
      }
    }
  }
});

export const { deleteProject, addProject } = projectsSlice.actions;

export default projectsSlice.reducer;
