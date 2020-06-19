import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Todo from './components/Todo';
import todosData from './components/todosData';
import Contact from './components/Contact';
import Joke from './components/Joke';
import jokesData from './components/jokesData';
import './App.css';

class App extends React.Component {
  // const jokeComponents = jokesData.map((joke) => (
  //   <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  // ));
  constructor(props) {
    super(props);
    //将数据放在state中
    this.state = {
      todos: todosData,
    };
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <Todo key={item.id} item={item} />
    ));
    return (
      <div>
        {todoItems}
        {/* {jokeComponents}
      <Joke content={{ question: '', punchLine: 'pu' }} />
      <Contact contact={{ name: 'bill', phone: '123' }} />
      <Contact contact={{ name: 'bier', phone: '234' }} />
      <Contact contact={{ name: 'mars', phone: '345' }} />
      <Header></Header>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <MainContent></MainContent>
      <Footer></Footer> */}
      </div>
    );
  }
}

export default App;
