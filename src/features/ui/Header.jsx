import { Link } from 'react-router-dom';
import SearchOrder from '../order/SearchOrder';
import Username from '../user/Username';

function Header() {
  return (
    <header className={`
      flex justify-between border-b-4 border-stone-500 bg-yellow-500 px-4 uppercase
      sm:px-6
    `}>
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
