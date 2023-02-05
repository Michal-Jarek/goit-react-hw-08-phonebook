import scss from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={scss.section}>
    <h2 className={scss.header}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;