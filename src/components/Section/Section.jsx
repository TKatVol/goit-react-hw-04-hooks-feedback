import PropTypes from 'prop-types';

import s from '../Section/Section.module.css';

export function Section({title, children}) {
    return (
        <section>
            <h2 className={s.title}>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}