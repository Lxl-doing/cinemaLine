import React from 'react'
import styles from './index.module.css'
import PropTypes from 'prop-types'
import Footer from '../Footer'

Layout.defaultProps = {
    footer: <Footer />
}
export default function Layout(props) {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                {props.header}
            </header>
            <div className={styles.banner}>
                {props.banner}
            </div>
            <div className={styles.content}>
                <div className={styles.main}>
                    {props.children}
                </div>
                {props.right ? <div className={styles.right}>{props.right}</div> : null}
            </div>
            <footer className={styles.footer}>
                {props.footer}
            </footer>
        </div>
    )
}

Layout.propTypes = {
    header: PropTypes.element.isRequired,
    banner: PropTypes.element,
    children: PropTypes.node.isRequired,
    right: PropTypes.element,
    footer: PropTypes.element.isRequired
}