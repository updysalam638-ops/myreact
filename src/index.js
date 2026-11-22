import React from 'react';
import Post from './components/Post';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.js';

const root = createRoot(document.getElementById('root'));
const Layout =(props)=>{
    return (
    <div style={{backgroundColor:"yellowgreen"}}>
        {props.children}
    </div>
    )
}
const Name = () => {
    const developers = ['Ali', 'Muse', 'Muno'];

    return (
        <ul>
            {developers.map((developer, index) => (
                <Developer
                    developer={developer}
                    key={index}
                />
            ))}
        </ul>
    );
};

const Developer = (props) => {
    const handleClick = () => {
    alert(`welcome ${props.developer}!`);
    };

    return (
        <li onClick={handleClick}>
        {props.developer}
        </li>   
    );
};

export default Name;

root.render(
    <>
        <Layout>
        <App/>
        <Post title="hello boss" desc="this best 1"/>
        <Post title="hello boss 1" desc="this best 2" />
        <Post title="hello boss 2" desc="this best 3"/>
        </Layout>
         <Name/>
         </>
);