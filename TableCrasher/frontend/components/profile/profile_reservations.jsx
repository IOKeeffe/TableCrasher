import React from 'react';

export default class ProfileReservations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserReservations();
  }

  render() {
    return (
      <div className="profile-page">
        <section className="reservations">

        </section>
      </div>
    )
  }
}
