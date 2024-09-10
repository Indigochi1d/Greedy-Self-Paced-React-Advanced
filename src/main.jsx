import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import rootReducer from "./modules";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
});
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
