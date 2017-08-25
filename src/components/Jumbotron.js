import React, {Component} from 'react'

export default class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
    <section className='jumbotron'>
      <div> Star Wars! </div>
      <br />
      <div> Vehicles of Star Wars </div>
    </section>
  )
  }
}
