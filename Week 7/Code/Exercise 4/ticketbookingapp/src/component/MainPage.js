import { Component } from 'react';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return (
        <div>
          <Greeting isLoggedIn={true} />
          <LogoutButton onClick={this.handleLogout} />
        </div>
      );
    } else {
      return (
        <div>
          <Greeting isLoggedIn={false} />
          <LoginButton onClick={this.handleLogin} />
        </div>
      );
    }
  }
}

export default MainPage;
