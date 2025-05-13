import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from './button'
import Typography from './Typography'
import { typography } from '@/data/typography'


const Header = () => {
  return (
    <div className='max-w-7xl w-full mx-auto py-4'>
      <div className='flex flex-row justify-between text-accent-foreground'>
        <div className=''>
        <Typography size={typography.fontSize['2xl']} weight={typography.weight.bold}>
        <h1>Googlex</h1>
          </Typography>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList className='flex space-x-4'>
              <NavigationMenuItem>
                <NavigationMenuLink>About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>Privacy</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className='cursor-pointer'>
                  Try it Free
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

        </div>
      </div>
    </div>
  )
}

export default Header