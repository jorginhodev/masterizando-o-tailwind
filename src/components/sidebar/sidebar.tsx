import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import { Logo } from '@/components/logo'
import { InputRoot, InputPrefix, InputControl } from '@/components/input'

import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
