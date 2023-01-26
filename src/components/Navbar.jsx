import {Link} from 'react-router-dom';
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';

const Navbar=()=>{  

  return (    
    <nav id='navbar'>
      <h1>
        <Link to='/'><BiCameraMovie/><p>Filmepédia</p></Link>
      </h1>
      <form>
        <input type="text" placeholder='Busque um filme'/>
        <button type='submit'><BiSearchAlt2/></button>
      </form>      
    </nav>
  );
};

export default Navbar;

