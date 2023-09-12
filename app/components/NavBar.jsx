import NavItem from './NavItem'

const navItems = [
  {
    label: 'Why Cypress?',
    path: '/',
    dataTest: 'nav-why-cypress',
  },
  {
    label: 'Overview',
    path: '/overview',
    dataTest: 'nav-why-cypress',
  },
  {
    label: 'Fundamentals',
    path: '/fundamentals',
    dataTest: 'nav-why-cypress',
  },
  {
    label: 'Forms',
    path: '/forms',
    dataTest: 'nav-why-cypress',
  },
  {
    label: 'Examples',
    path: '/examples',
    dataTest: 'nav-why-cypress',
  },
  {
    label: 'Component',
    path: '/component',
    dataTest: 'nav-why-cypress',
  },
  {
    label: 'Best Practices',
    path: '/best-practices',
    dataTest: 'nav-why-cypress',
  },
]

export default function NavBar() {
  return (
    <ul className='nav-bar'>
      {navItems.map((item) => (
        <NavItem key={item.label} label={item.label} path={item.path} />
      ))}
    </ul>
  )
}
