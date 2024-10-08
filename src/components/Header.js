// Header.js

import { Badge, Button } from 'react-bootstrap';

const Header = ({ cartItems, openCart }) => {
  return (
    <div className="header">
      <Button variant="primary" onClick={openCart}>
        Cart <Badge variant="light">{cartItems.length}</Badge>
      </Button>
    </div>
  );
};

export default Header;