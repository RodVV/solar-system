import React from 'react';
import Title from './Title';
import MissionCards from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missao) => (<MissionCards
          key={ missao.name }
          name={ missao.name }
          year={ missao.year }
          country={ missao.country }
          destination={ missao.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
