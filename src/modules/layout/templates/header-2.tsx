import { cn } from '@/lib/util/cn'
import Medusa from '@/modules/common/icons/medusa'
import SiteLogo from '@/ui/site-logo'
import SideMenu from '../component-templates/sidemenu-framer-motion'
import NavAccount from '../component-templates/~sub-components/nav-account/svg'
import NavCart from '../component-templates/~sub-components/nav-cart'
import NavDropdown from '../component-templates/~sub-components/nav-dropdown'
import NavSearch from '../component-templates/~sub-components/nav-search/svg'
// import { StoreRegion } from '@medusajs/types'

export default async function Header({ className }: { className?: string }) {
  // const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <header
      className={cn(
        'group sticky inset-x-0 top-0 z-50',
        'mx-auto h-16 w-full duration-200',
        'border-b border-border bg-background',
        className
      )}
    >
      <section
        className={cn(
          'content-container relative',
          'grid h-full w-full gap-4',
          'grid-cols-[1fr,auto,1fr]',
          'nav:grid-cols-[max-content,auto,1fr]',
          'text-ui-fg-subtle text-small-regular txt-xsmall-plus'
        )}
      >
        <SiteLogo
          className="z-50"
          svgComponent={
            <Medusa
              className="*:fill-secondary-foreground/90 hover:*:fill-secondary-subtle *:duration-150 *:ease-linear"
              size="22"
            />
          }
        />

        <div
          data-testid="nav-actions"
          className={cn(
            'flex flex-1 basis-0 items-center justify-center gap-x-6 ',
            'w-max h-full',
            // 'bg-red-500',
            ''
          )}
        >
          <NavDropdown className="hidden nav:flex text-secondary-foreground/90 hover:*:text-secondary-subtle" />
        </div>

        <div
          data-testid="nav-menu"
          className="flex h-full flex-1 basis-0 items-center justify-end gap-5"
        >
          <div
            className={cn(
              'z-50',
              'flex h-full flex-1 basis-0 items-center justify-end gap-3 -mt-0.5'
            )}
          >
            <NavSearch />
            <NavAccount />
            <NavCart buttonVariant="svg" />
          </div>
          <SideMenu className="z-40" />
        </div>
      </section>
    </header>
  )
}
