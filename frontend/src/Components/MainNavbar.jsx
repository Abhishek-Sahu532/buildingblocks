import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from '@material-tailwind/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Bars4Icon, GlobeAmericasIcon, PhoneIcon, SunIcon, TagIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

const navListMenuItems = [
  {
    title: 'About Us',
    description: 'Meet and learn about our dedication',
    icon: UserGroupIcon,
    to: '/about-us'
  },
  {
    title: 'Blog',
    description: 'Find the perfect solution for your needs.',
    icon: Bars4Icon,
    to: '/blog'
  },
  {
    title: 'Services',
    description: 'Learn how we can help you achieve your goals.',
    icon: SunIcon,
    to: '/services'
  },
  {
    title: 'Support',
    description: 'Reach out to us for assistance or inquiries',
    icon: GlobeAmericasIcon,
    to: '/support'
  },
  {
    title: 'Contact',
    description: 'Find the perfect solution for your needs.',
    icon: PhoneIcon,
    to: '/contact-us'
  },

  {
    title: 'Special Offers',
    description: 'Explore limited-time deals and bundles',
    icon: TagIcon,
    to: '/special-offers'
  }
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ icon, title, description, to }, key) => (
    <Link to={to} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          {' '}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: 'h-6 text-gray-900 w-6'
          })}
        </div>
        <div>
          <Typography variant="h6" color="blue-gray" className="flex items-center text-sm font-bold">
            {title}
          </Typography>
          <Typography variant="paragraph" className="text-xs !font-medium text-blue-gray-500">
            {description}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
        <MenuHandler>
          <ListItem
            className="flex items-center gap-2 py-2 pr-4 text-base font-semibold "
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            More
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? 'rotate-180' : ''}`}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            />
          </ListItem>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 shadow-none lg:mb-0 lg:flex-row lg:p-1">
      <Link to="/" className="text-base font-semibold hover:shadow-none gap-2 py-2 pr-4">
        <ListItem className="hover:shadow-none">Home</ListItem>
      </Link>

      <Link to="/listing" className="text-base font-semibold hover:shadow-none gap-2 py-2 pr-4">
        <ListItem className="hover:shadow-none">Listing</ListItem>
      </Link>
      <Link to="/agents" className="text-base font-semibold hover:shadow-none gap-2 py-2 pr-4">
        <ListItem className="hover:shadow-none">Agents</ListItem>
      </Link>
      <Link to="/property" className="text-base font-semibold hover:shadow-none gap-2 py-2 pr-4">
        <ListItem className="hover:shadow-none">Property</ListItem>
      </Link>
      <NavListMenu />
    </List>
  );
}

export default function MainNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="mx-auto max-w px-4 py-2 sticky top-0">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="/" variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          {/* will place the logo here */}
          <Typography variant="h3" className="mt-[5px] !text-orange-A700 !font-markoone">
            BuildingBlocks
          </Typography>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {/* SIGN IN POPUP */}
          <SignIn />
          <Menu placement="bottom-start" allowHover="true">
            <MenuHandler>
              <Button className="bg-transparent shadow-none hover:shadow-none text-indigo-200">Sign up</Button>
            </MenuHandler>
            <MenuList>
              <Link to="/agent-signup">
                <MenuItem>Agent SignUp</MenuItem>
              </Link>
              <Link to="/owner-signup">
                <MenuItem>Owner SignUp</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
        <IconButton variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <SignIn />
          <Menu placement="bottom-start" allowHover="true">
            <MenuHandler>
              <Button className="bg-transparent shadow-none hover:shadow-none text-indigo-200">Sign up</Button>
            </MenuHandler>
            <MenuList>
              <Link to="/agent-signup">
                <MenuItem>Agent SignUp</MenuItem>
              </Link>
              <Link to="/owner-signup">
                <MenuItem>Owner SignUp</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      </Collapse>
    </Navbar>
  );
}
