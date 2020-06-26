import React from "react";
import "./styles.css";
import Counter from "./component/Counter";
import HookCounter from "./hooks/HookCounter";
import HookListTodo from "./hooks/HookListTodo";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AppNew from "./hooks/ToDoList/AppNew";
import PostMain from "./hooks/PostList/PostMain";
import BoxColor1 from "./hooks/BoxColor/BoxColor1";
import BoxColor2 from "./hooks/BoxColor/BoxColor2";

export default function App() {
    return (
        <Router>
            <div className="App">
                {/*<Counter/>*/}
                <HookCounter/>
                <HookListTodo/>
                <BoxColor1 />
                <BoxColor2 />
            </div>
            <div><Link to={"/"}>Back to App</Link></div>
            <div><Link to={"/to-list"}>Go to App ToDo List</Link></div>
            <div><Link to={"/api-list"}>API List</Link></div>
            <Switch>
                <Route path="/to-list">
                    <AppNew/>
                </Route>
                <Route path="/api-list">
                    <PostMain/>
                </Route>
            </Switch>
        </Router>
    );
}
