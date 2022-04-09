import { createSlice, current } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [
      {
        id: 1,
        projectName: "Landing page",
        projectManager: "Walt Cossani",
        assignedTo: "Ignacio Truffa",
        status: "enabled",
      },
      {
        id: 2,
        projectName: "E-commerce shop",
        projectManager: "Walt Cossani",
        assignedTo: "Ignacio Truffa",
        status: "enabled",
      },
      {
        id: 3,
        projectName: "CRM linkroom",
        projectManager: "Walt Cossani",
        assignedTo: "Ignacio Truffa",
        status: "enabled",
      },
    ],
  },
  reducers: {
    deleteProject: (state, action) => {
      const currentState = current(state);
      const filteredProject = currentState.projects
        ? currentState.projects.filter((item) => item.id !== action.payload)
        : currentState.filter((item) => item.id !== action.payload);

      return {
        ...currentState,
        projects: filteredProject,
      };
    },
    addProject: (state, action) => {
      const currentState = current(state);
      return {
        ...currentState,
        projects: [...state.projects, action.payload],
      };
    },
    editProject: (state, action) => {
      const currentState = current(state);
      const indexProject = currentState.projects
        ? parseInt(
            currentState.projects.findIndex(
              (item) => item.id === parseInt(action.payload.id)
            )
          )
        : parseInt(
            currentState.findIndex(
              (item) => item.id === parseInt(action.payload.id)
            )
          );
      const updatedProject = currentState.projects
        ? {
            ...action.payload,
            projects: currentState.projects[indexProject].projectName,
          }
        : {
            ...action.payload,
            projects: currentState[indexProject].projectName,
          };

      const from = currentState.projects
        ? currentState.projects.slice(0, indexProject)
        : currentState.slice(0, indexProject);
      const to = currentState.projects
        ? currentState.projects.slice(indexProject + 1)
        : currentState.slice(indexProject + 1);
      return [...from, updatedProject, ...to];
    },
  },
});

export const { deleteProject, addProject, editProject } = projectsSlice.actions;

export default projectsSlice.reducer;
