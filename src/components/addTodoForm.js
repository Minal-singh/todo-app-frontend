import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Checkbox,
  Container,
  TextField,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Home from "./home";
import { addtodo } from "../redux/addtodoreducer";

function AddTodo() {
  const [open, setOpen] = useState(false);
  const [titleField, setTitleField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [completedField, setCompletedField] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (val) => {
    const a = {
      title: titleField,
      description: descriptionField,
      completed: completedField,
    };
    dispatch(addtodo(a));
    val.preventDefault();
    setTitleField("");
    setDescriptionField("");
    setCompletedField(false);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Home />
      <Container>
        <form onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
            required
            sx={{ mb: "10px" }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={descriptionField}
            onChange={(e) => setDescriptionField(e.target.value)}
            multiline
            required
          />

          <br />
          <Checkbox
            type="checkbox"
            value={completedField}
            onChange={(e) => setCompletedField(e.target.value)}
          />
          <label htmlFor="completed">Completed</label>
          <br />
          <Button
            variant="contained"
            type="submit"
            value="submit"
            sx={{ borderRadius: "10px" }}
          >
            Submit
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Todo added"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          action={action}
        />
      </Container>
    </>
  );
}

export default AddTodo;
