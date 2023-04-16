// ** React Import
import { useEffect, useRef } from 'react'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Layout Components
import VerticalLayout from './components/vertical/VerticalLayout'
import HorizontalLayout from './components/horizontal/HorizontalLayout'
import BlankLayout from './BlankLayout'

const Layout = (props: LayoutProps) => {
  // ** Props
  const { hidden, children, settings, saveSettings } = props

  // ** Ref
  const isCollapsed = useRef(settings.navCollapsed)

  useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: 'vertical' })
        isCollapsed.current = true
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({ ...settings, navCollapsed: true, layout: settings.lastLayout })
        isCollapsed.current = false
      } else {
        if (settings.lastLayout !== settings.layout) {
          saveSettings({ ...settings, layout: settings.lastLayout })
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden])

  if (settings.layout === 'horizontal' && props.horizontalLayoutProps) {
    return <HorizontalLayout {...props}>{children}</HorizontalLayout>
  }
  if (props?.verticalLayoutProps) return <VerticalLayout {...props}>{children}</VerticalLayout>

  return <BlankLayout>{children}</BlankLayout>
}

export default Layout
