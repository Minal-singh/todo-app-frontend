import {
  Checkbox,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { patchtodo } from "../redux/patchreducer";
import { fetchdata, getData } from "../redux/showallreducer";
import ButtonComponent from "./ButtonComponent";
import Home from "./home";

function ShowTodos() {
  const [refresh, setRefresh] = useState(true);

  const data = useSelector(getData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (refresh) {
      dispatch(fetchdata());
      setRefresh(false);
    }
  }, [dispatch, refresh]);

  const handleChange = (d) => {
    const data = { ...d, completed: d.completed ? false : true };
    dispatch(patchtodo(data));
    setRefresh(true);
  };

  return (
    <>
      <Home />
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: grey[800] }}>
                <TableCell align="center" width="20%">
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      color: "#fff",
                    }}
                  >
                    Completed
                  </h3>
                </TableCell>
                <TableCell align="center" width="20%">
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      color: "#fff",
                    }}
                  >
                    Title
                  </h3>
                </TableCell>
                <TableCell align="center" width="30%">
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      color: "#fff",
                    }}
                  >
                    Description
                  </h3>
                </TableCell>
                <TableCell align="center" width="30%">
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      color: "#fff",
                    }}
                  >
                    Actions
                  </h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => {
                return (
                  <TableRow
                    key={d.id}
                    sx={{ backgroundColor: d.completed ? grey[200] : grey[50] }}
                  >
                    <TableCell align="center" width="20%">
                      <Checkbox
                        color="primary"
                        checked={d.completed}
                        onClick={() => handleChange(d)}
                      />
                    </TableCell>
                    <TableCell align="center" width="20%">
                      <Link
                        to={`showtodo/${d.id}`}
                        style={{
                          color: deepPurple,
                          fontWeight: "bold",
                          fontSize: "20px",
                          textDecoration: d.completed ? "line-through" : "none",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          width: "200px",
                        }}
                      >
                        {d.title}
                      </Link>
                    </TableCell>
                    <TableCell align="center" width="30%">
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: "bolder",
                          textDecoration: d.completed ? "line-through" : "",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          width: "300px",
                        }}
                      >
                        {d.description}
                      </p>
                    </TableCell>
                    <TableCell align="center" width="30%">
                      {<ButtonComponent data={d} />}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default ShowTodos;
