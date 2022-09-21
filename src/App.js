import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

function App() {
  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our Dapp",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Purchase your product and earn your NFT.",

      trigger: "issues",

    },
    {

      id: "issues",

      message: "Do you need any help?",

      trigger: "Ang",

    },

   
    {

      id: "Ang",

      options: [

        {

          value: "YES",

          label: "YES",

          trigger: "YES",

        },

        { value: "NO", label: "NO", trigger: "NO" },

      ],

    },

    {

      id: "NO",

      message:

        "Happy Shopping!!",

      end: true,

    },

    {

      id: "YES",

      message:

        "Thanks for letting your response, Our team will resolve your issue ASAP",

      end: true,

    },

  ]; 
  return (
 
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <> 
    <Segment floated="right">
    <ChatBot steps={steps} />
  </Segment>
  </>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
         
          Learn React
        </a>
       
      </header>
    </div>
  );
}

export default App;
