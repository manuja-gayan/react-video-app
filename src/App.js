import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import VideoScreen from "./modules/video/VideoScreen";
import 'antd/dist/antd.css';

const App = () => {
    return (
        <VideoScreen/>
        
        // <BrowserRouter>
        //     <Switch>
        //         <Route exact path="/build/" component={VideoScreen}/>
        //     </Switch>
        // </BrowserRouter>
    )
};
export default App;