const Task = (props) => {
  return (
    <li>{props.value}</li>
  );
}

function App() {
  const taskList = ['estudar', 'jogar', 'dormir', 'tomar café'];
  return (
    <ol>
      {taskList.map((task) => <Task value={task}/>)}
    </ol>
  );
}

export default App;
