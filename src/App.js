import ShowTodos from "./components/showTodos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import AddTodo from "./components/addTodoForm";
import TodoDetail from "./components/todoDetail";
import EditTodo from "./components/EditTodoForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addtodo" component={AddTodo} />
          <Route path="/showtodo/:id" component={TodoDetail} />
          <Route path="/showtodo" component={ShowTodos} />
          <Route path="/edittodo/:id" component={EditTodo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
