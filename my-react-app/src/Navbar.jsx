import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// Link change all <a> to Link and any href into to
// our path = window.location.pathname does not work anymore for our active path
// instead we are going to have to use useMatch and useResolvedPath
function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        Home
      </Link>
      <ul>
        <CustomLink to='/profile'>Profile</CustomLink>
      </ul>
    </nav>
  );
}
function CustomLink({ to, children, ...props }) {
  //const path = window.location.pathname;
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
