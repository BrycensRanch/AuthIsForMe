import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};


// @see https://jasonwatmore.com/post/2021/06/01/next-js-navlink-component-example-with-active-css-class
// eslint-disable-next-line unicorn/prevent-abbreviations
function NavLink({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return (
        <Link href={href} {...props} legacyBehavior>

                {children}

            </Link>
    );
}


export default NavLink;