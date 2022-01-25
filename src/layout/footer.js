import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Styled from 'styled-components';

const WeirdgoodFooterStyle = Styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    .menu {
      width: 100%;
      text-align: center;
      font-size: 24px;
      line-height: 32px;
    }
    .info {
      position: absolute;
      right: 50px;
      font-size: 22px;
      line-height: 30px;
    }
    .child-websites {
      .dropdown-toggle {
        color: #000;
        background-color: #fff;
        border-color: #fff;
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
      }
      .dropdown-item {
        font-size: 18px;
        line-height: 26px;
        font-weight: bold;
      }
    }
`

const Footer = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <WeirdgoodFooterStyle>
      <div className="menu">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="child-websites">
          <DropdownToggle caret>
            Projects
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="https://google.com">GFT Shoppe 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag="a" href="https://translate.google.com/">Special Projects - Coming 2022</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <label className="info">info@weirdgood.com</label>
    </WeirdgoodFooterStyle>
  );
}

export default Footer;