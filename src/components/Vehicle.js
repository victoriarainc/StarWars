import React, {Component} from 'react';

export default class VehicleList extends Component {
  constructor(props) {
    super(props);
  }
  render () {

    let vehicles = this.props.vehicles.map((vehicle) => {
      return (
        <article className="vehicle_card">
          {vehicle.name}
        </article>
      )
    })

    return (
      <section className="vehicle_list">
        {vehicles}
      </section>
    )
  }
}
