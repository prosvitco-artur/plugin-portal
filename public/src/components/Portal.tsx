import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Tabs, Tab, Button } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import LinkIcon from '@material-ui/icons/Link'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import ExtensionIcon from '@material-ui/icons/Extension'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { TabPanelProps } from '../types/tabs'
import { useDispatch } from 'react-redux'
import { PageActionTypes } from '../types/page'
import PagePortal from '../pages/PagePortal'
import PageLinks from '../pages/PageLinks'
import PageMyAccount from '../pages/PageMyAccount'
import PageCalendar from '../pages/PageCalendar'
import PageDocuments from '../pages/PageDocuments'

const TabPanel = (props: TabPanelProps) => {
 const { children, value, index, ...other } = props

 return (
  <div role='tabpanel' hidden={value !== index} id={`page-${index}`} aria-labelledby={`page-${index}`} {...other}>
   {value === index && <div>{children}</div>}
  </div>
 )
}

const a11yProps = (index: any) => {
 return {
  id: `page-tab-${index}`,
  'aria-controls': `page-tab-${index}`,
 }
}

const Portal: React.FC = () => {
 const dispatch = useDispatch()
 const { pageNumber } = useTypedSelector(state => state.page)
 const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  dispatch({ type: PageActionTypes.SWITCH_TAB, payload: newValue })
 }
 return (
  <div className='portal__main-container'>
   <div className='portal__tabs-nav'>
    <Tabs
     orientation='vertical'
     onChange={handleChange}
     value={pageNumber}
     TabIndicatorProps={{
      style: {
       display: 'none',
      },
     }}
    >
     <Tab
      className='portal__nav-button'
      label={
       <div className='portal__nav-button--inner'>
        <DashboardIcon /> My Account
       </div>
      }
      {...a11yProps(0)}
     />
     <Tab
      className='portal__nav-button'
      label={
       <div className='portal__nav-button--inner'>
        <CalendarTodayIcon /> Calendar
       </div>
      }
      {...a11yProps(1)}
     />
     <Tab
      className='portal__nav-button'
      label={
       <div className='portal__nav-button--inner'>
        <LinkIcon /> Links
       </div>
      }
      {...a11yProps(2)}
     />
     <Tab
      className='portal__nav-button'
      label={
       <div className='portal__nav-button--inner'>
        <ExtensionIcon /> Documents
       </div>
      }
      {...a11yProps(3)}
     />
     <Tab className='portal__nav-button hidden' {...a11yProps(4)} />
    </Tabs>
    <button className='MuiButtonBase-root MuiTab-root MuiTab-textColorInherit portal__nav-button'>
     <span className='MuiTab-wrapper'>
      <div className='portal__nav-button--inner'>
       <ExitToAppIcon /> Log Out
      </div>
     </span>
     <span className='MuiTouchRipple-root' />
    </button>
   </div>
   <div className='portal__tabs-panels'>
    <TabPanel value={pageNumber} index={0}>
     <PageMyAccount />
    </TabPanel>
    <TabPanel value={pageNumber} index={1}>
     <PageCalendar />
    </TabPanel>
    <TabPanel value={pageNumber} index={2}>
     <PageLinks />
    </TabPanel>
    <TabPanel value={pageNumber} index={3}>
     <PageDocuments />
    </TabPanel>
    <TabPanel value={pageNumber} index={4}>
     <PagePortal />
    </TabPanel>
   </div>
  </div>
 )
}

export default Portal
