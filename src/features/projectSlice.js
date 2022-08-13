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
        status: "Enabled",
        description: "lorem ipsum dolor sit amet",
        createdAt: "09/09/2020 10:30am"
      },
      {
        id: 2,
        projectName: "E-commerce shop",
        projectManager: "Walt Cossani",
        assignedTo: "Ignacio Truffa",
        status: "Enabled",
        description: "lorem ipsum dolor sit amet",
        createdAt: "09/09/2020 10:30am"
      },
      {
        id: 3,
        projectName: "CRM linkroom",
        projectManager: "Walt Cossani",
        assignedTo: "Ignacio Truffa",
        status: "Enabled",
        description: "lorem ipsum dolor sit amet",
        createdAt: "09/09/2020 10:30am"
      },
      
    ],
  },
  reducers: {
    deleteProject (state, action) {
       return state.projects.filter((item) => item.id !== action.payload);
    },
    addProject (state, action) {
      state.projects.push(action.payload);
    },
    editProject: (state, action) => {
      const id = action.payload.id;
      state.projects[id] = action.payload;
    },
  },
});

export const { deleteProject, addProject, editProject } = projectsSlice.actions;

export default projectsSlice.reducer;
