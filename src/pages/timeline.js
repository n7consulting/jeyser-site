import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const colors = {
  Major: '#000fff',
  Minor: '#62e6ff',
  Patch: '#a39ecb',
};

const Event = ({ title, text, color, size }) => (
  <div className={['event', size]}>
    <span className="point">
      <span className="point-1" style={{ backgroundColor: color }} />
      <span className="point-2" style={{ backgroundColor: color }} />&nbsp;
    </span>
    <strong>{title}</strong>
    <small>{text}</small>
  </div>

);

Event.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Event.defaultProps = {
  color: colors.Patch,
};

const TimelinePage = () => (
  <div className="timeline">
    <Helmet title="Timeline" />
    <Event title="19/11/2017: v2.3.1" color={colors.Patch} size={5} />
    <Event title="30/10/2017: Jeyser Sodium released - v2.3.0" color={colors.Minor} size={5} />
    <Event title="19/10/2017: Jeyser Neon released - v2.2.0" color={colors.Minor} size={5} />
    <Event title="27/08/2017: v2.1.2" color={colors.Patch} size={5} />
    <Event title="09/07/2017: v2.1.1" color={colors.Patch} size={5} />
    <Event title="17/06/2017: Jeyser Fluor released - v2.1.0" color={colors.Minor} size={5} />
    <Event
      title="10/06/2017: Jeyser Oxygen released - v2.0.0"
      color={colors.Major}
      size={15}
      text="After months of work and refactor, Jeyser 2.0.0, with a lot of new features is released"
    />

    <Event
      title="04/02/2017: Docker installation"
      color={colors.Major}
      size={15}
      text={'The Docker installation is the starting point of a larger adoption by other Junior-Entreprises.' +
               ' It drastically reduces the installation complexity and provides a secure way to install and run Jeyser'}
    />

    <Event
      title="22/01/2017: Very first pre-release of Jeyser Oxygen"
      color={colors.Minor}
      size={15}
      text="Jeyser catches back current Symfony version (at the time,Symfony 3)"
    />


    <Event title="12/10/2015: First commit from N7 Consulting" color={colors.Major} size={15} text="" />

    <Event
      title="08/11/2014: Incipio is licensed under the AGPLv3 licence"
      color={colors.Major}
      size={15}
      text=""
    />

    <Event title="07/12/2012: First commit - Incipio is created" color={colors.Major} size={15} text="" />
  </div>
);

export default TimelinePage;
