import { configureStore } from "@reduxjs/toolkit";
import addtodoreducer from "./addtodoreducer";
import deletereducer from "./deletereducer";
import edittodoreducer from "./edittodoreducer";
import patchreducer from "./patchreducer";
import showallreducer from "./showallreducer";
import tododetailreducer from "./tododetailreducer";

export const store = configureStore({
  reducer: {
    showall: showallreducer,
    addtodo: addtodoreducer,
    tododetail: tododetailreducer,
    patch: patchreducer,
    delete: deletereducer,
    edittodo: edittodoreducer,
  },
});
