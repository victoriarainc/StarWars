import React, {Component} from 'react';

export default class VehicleList extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let vehicles = this.props.vehicles.map((vehicle) => {
      return (
          <div className="col-md-4">
            <div className="card">
              <div className="card-block">
                <div className="card col-md-5">
                  <article className="vehicle_card">
                    {vehicle.name}
                  </article>
                </div>
              </div>
            </div>
          </div>
      )
    })

    return (
      <section className="vehicle_list">
        <div className="row">
          {vehicles}
        </div>
      </section>
    )
  }
}
