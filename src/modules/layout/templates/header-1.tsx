import { cn } from '@/lib/util/cn'
import Medusa from '@/modules/common/icons/medusa'
import SiteLogo from '@/ui/site-logo'
import SideMenu from '../component-templates/sidemenu-framer-motion'
import NavAccount from '../component-templates/~sub-components/nav-account/textual'
import NavCart from '../component-templates/~sub-components/nav-cart'
import NavSearch from '../component-templates/~sub-components/nav-search/textual'
// import { StoreRegion } from '@medusajs/types'
// import { listRegions } from '@/lib/data/regions'

export default async function Header({ className }: { className?: string }) {
  // const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  const storeName = process.env.NEXT_PUBLIC_STORE_NAME || 'Medusa Store'

  return (
    <header
      className={cn(
        'group sticky inset-x-0 top-0 z-50',
        'mx-auto h-16 w-full duration-200',
        'border-b border-border bg-background',
        className
      )}
    >
      <nav className="content-container text-small-regular txt-xsmall-plus relative flex h-full w-full items-center justify-between text-ui-fg-subtle">
        <div
          data-testid="nav-menu"
          className="flex h-full flex-1 basis-0 items-center"
        >
          <SideMenu />
        </div>

        <SiteLogo
          text={storeName}
          textClassName="text-ui-fg-subtle"
          svgComponent={<Medusa color="var(--fg-subtle)" size="22" />}
        />

        <div
          data-testid="nav-actions"
          className="flex h-full flex-1 basis-0 items-center justify-end gap-x-6"
        >
          <NavSearch />

          <NavAccount />

          <NavCart buttonVariant="textual" />
        </div>
      </nav>
    </header>
  )
}
