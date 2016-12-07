import React from 'react';
import axios from 'axios';

class CreatePuppyForm extends React.Component {
  constructor () {
    super();
    this.state = {
      name: '',
      photo: '',
      message: ''
    };
  }
  componentDidMount () {
    // do something when it mounts?
  }
  render () {
    return (
      <div>
        <div>
          <span>Name:</span>
          <input
            type='text'
            value={this.state.name}
            onChange={evt => {
              this.setState({
                name: evt.target.value
              });
            }} />
        </div>
        <div>
          <span>Profile photo:</span>
          <input
            type='text'
            value={this.state.photo}
            onChange={evt => {
              this.setState({
                photo: evt.target.value
              });
            }} />
        </div>
        <div>
          <button onClick={evt => {
            axios
            .post('/api/puppies', {
              name: this.state.name,
              image: this.state.photo
            })
            .then(() => {
              this.setState({
                name: '',
                message: `${this.state.name} has been created!`,
                photo: ''
              });
              setTimeout(() => {
                this.setState({
                  message: ''
                });
              }, 2000);
            })
            .catch(() => {});
          }}>Woof!</button>
          <span>{this.state.message}</span>
        </div>
      </div>
    );
  }
}

export default CreatePuppyForm;
