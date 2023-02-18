// Here you will see your date and time
class YourTime extends React.Component {
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return <h1>Время: {this.state.date.toLocaleTimeString()}</h1>;
  }
}
class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Привет {this.props.FirstName} {this.props.LastName}
        </h1>
        <h1>Сегодняшняя дата: {new Date().toLocaleDateString()}</h1>
        <YourTime />
      </div>
    );
  }
}
class HelloUser extends React.Component {
  render() {
    return (
      <Greeting
        FirstName={prompt("Введите ваше имя:")}
        LastName={prompt("Введите вашу фамилию:")}
      />
    );
  }
}
root.render(<HelloUser />);

// subscribe to js
const button = document.querySelector("#button");
button.addEventListener("click", () => (button.textContent = "Thanks"));

// subscribe to React
class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "Subsribe",
    };
  }
  changeMessage() {
    this.setState({
      content: "Thanks",
    });
  }
  render() {
    return (
      <button onClick={() => this.changeMessage()}>{this.state.content}</button>
    );
  }
}
root.render(<Subscribe />);

// list of numbers to js
const numbers = [1, 2, 3, 4, 5];
const list = numbers.map((number) => <li>{number}</li>);
root.render(<ul>{list}</ul>);

// list of numbers to React
class NumberList extends React.Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
const numbersList = [1, 2, 3, 4, 5];
root.render(<NumberList numbers={numbersList} />);

//List persons to React
const persons = [
  {
    name: "Hunter",
    id: 1,
  },
  {
    name: "Jane",
    id: 2,
  },
  {
    name: "Lucy",
    id: 3,
  },
];
class PersonList extends React.Component {
  render() {
    const persons = this.props.person;
    const listItems = persons.map((person) => (
      <li key={person.id}>{person.name}</li>
    ));
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
root.render(<PersonList person={persons} />);

// greetings root or user
class RootUser extends React.Component {
  render() {
    return (
      <div>
        <h1>Привет администратор страницы</h1>
        <h1>Вам нужно сделать домашнюю работу!!!</h1>
      </div>
    );
  }
}
class SimpleUser extends React.Component {
  render() {
    return (
      <div>
        <h1>Привет обычный пользователь!!!</h1>
        <h1>Логин и пароль администратора это не Root и Root!</h1>
      </div>
    );
  }
}
class Greeting extends React.Component {
  render() {
    if (
      (this.props.checkLogin == "root") &
      (this.props.checkPassword == "root")
    ) {
      return <RootUser />;
    } else {
      return <SimpleUser />;
    }
  }
}
root.render(
  <Greeting
    checkLogin={prompt("Введите логин:")}
    checkPassword={prompt("Введите пароль:")}
  />
);

// Composition of areas
function Right() {
  return <div className="Right" />;
}
function Left() {
  return <div className="Left" />;
}
class Areas extends React.Component {
  render() {
    return (
      <div className="ColorArea">
        <div className="LeftArea">{this.props.left}</div>
        <div className="RightArea">{this.props.right}</div>
      </div>
    );
  }
}
function Colors() {
  return <Areas left={<Left />} right={<Right />} />;
}
root.render(<Colors />);

// Composition color
class Greeting extends React.Component {
  render() {
    return (
      <div className={"Colors-" + this.props.color}>{this.props.children}</div>
    );
  }
}
class HelloUser extends React.Component {
  render() {
    return (
      <Greeting color="gray">
        <h1>Welcome</h1>
        <p>Thank for your attention!</p>
      </Greeting>
    );
  }
}
root.render(<HelloUser />);
