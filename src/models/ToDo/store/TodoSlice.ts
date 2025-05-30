import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MsServices from "../../../api/services";

const initialState = {
  todoList: null,
  error: null,
  loading: false,
};

// export const getTodos = createAsyncThunk(
//   "getTodos",
//   async (data, { dispatch, rejectWithValue }) => {
//     const requestData = JSON.stringify(data);
//     const url = `http://localhost:8080/api/todos/getAllTodoList`;
//     const response = await MsServices(
//       { url, data: requestData },
//       { rejectWithValue, method: "get" }
//     );
//     return response;
//   }
// );

export const getTodos = createAsyncThunk(
  "getTodos",
  async (
    data: Record<string, any> | undefined, // optional payload
    { rejectWithValue }
  ) => {
    const url = `http://localhost:8080/api/todos/getAllTodoList`;

    const response = await MsServices(
      { url, data }, // pass data if exists, else undefined
      { rejectWithValue, method: "GET" }
    );
    return response;
  }
);

const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    unSetError: (state) => {
      state.error = null;
    },
    resetToDoData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getTodos.fulfilled, (state, action) => {
      const responseData = action?.payload;
      state.loading = false;
      state.todoList = responseData;
    });

    builder.addCase(getTodos.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default TodoSlice.reducer;

export const { unSetError, resetToDoData } = TodoSlice.actions;
