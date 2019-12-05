import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { name, value } = event.target;
    //meta programação
    this.setState({ 
      [name]: value,
    })
  }

  submitForm = () => {
    if (this.state.name==='' || this.state.value==='') {
      return;
    }else {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <h4>Formulário</h4>
        <hr></hr>
        
        <label>Nome:</label>
        <div className="form-group">
          <div className="input-group">
            <input name="name"
                className="form-control"
                value={name}
                onChange={this.handleChange}></input>
          </div>
          <label>Job:</label>
          <div className="input-group">
            <input name="job"
                  className="form-control"
                  value={job}
                  onChange={this.handleChange}></input>
          </div>
        </div>
        <input type="button"
               className="btn btn-primary"
               value="Enviar"
               onClick={this.submitForm}/>
      </form>
    )
  }
}

export default Form;