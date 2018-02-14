import React, { Component } from 'react';

import { Header, Content, Switch } from './components';

import './App.css';
import 'normalize.css';

class App extends Component {
  state = {
    selected: 'english',
  };

  componentDidMount() {
    document.title = '히히';
  }

  english() {
    return (
      <Content style={{...styles.cardStyle, ...styles.contentStyle}}>
        <p style={{ marginTop: '0' }}><strong>Happy birthday Mum!</strong></p>

        <p>Content REDACTED for privacy.</p>

      </Content>
    );
  }

  korean() {
    return (
      <Content style={{...styles.cardStyle, ...styles.contentStyle, ...{ fontSize: '18px' } }}>
        <h4 style={{ marginTop: '0', marginBottom: '0' }}>시</h4>
        <p>
          바닷가에 바람이 불고 <br />
          공기에 짭짤한 냄새 <br />
          나는 울고있는 아이 <br />
          엄마가 안고있다 <br />
        </p>

        <p style={{ marginBottom: '0' }}>
          바닷가에 바람이 없음 <br />
          공기에 냄새가 없다 <br />
          엄마는 주무시고 <br />
          나의 등에 업혀 가다 <br />
        </p>
      </Content>
    );
  }

  handleEngButton(e) {
    this.setState({
      selected: 'english',
    });
  }

  handleKorButton(e) {
    this.setState({
      selected: 'korean',
    });
  }

  isActive(button) {
    return 'button ' + ((button === this.state.selected) ? 'active' : 'default');
  }

  render() {
    return (
      <div>
        <Header style={{...styles.headerStyle, ...styles.cardStyle}} />
        <Switch style={{...styles.cardStyle, ...styles.switchStyle}}>
          <div className={this.isActive('english')} onClick={() => this.handleEngButton()}>
            English
          </div>
          <div className={this.isActive('korean')} onClick={() => this.handleKorButton()}>
            Korean
          </div>
        </Switch>
        {this.state.selected === 'english' ? this.english() : this.korean()}
      </div>
    );
  }
}

const styles = {
  headerStyle: {
    paddingTop: '30px',
    paddingBottom: '30px',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: '0',
    marginBottom: '20px',
  },

  contentStyle: {
    padding: '30px 30px',
    fontSize: '16px',
  },

  cardStyle: {
    borderRadius: 8,
    boxShadow: '0 1px 5px rgba(0,0,0,0.2)',
    backgroundColor: '#fff',
  },

  switchStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '20px',
  }
}

export default App;
