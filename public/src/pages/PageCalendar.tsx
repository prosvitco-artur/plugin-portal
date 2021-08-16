import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/auseActions'
import { CircularProgress, Theme, makeStyles, Modal, Fade, Backdrop } from '@material-ui/core'
import { ModalEvent } from '../types/calendarpage'

const useStyles = makeStyles((theme: Theme) => ({
 progress: {
  position: 'absolute',
  top: 'calc(50% - 20px)',
  left: 'calc(50% - 20px)',
  zIndex: 10,
 },
}))

const PageCalendar: React.FC = () => {
 const { loading, events } = useTypedSelector(state => state.calendarPage)
 const { fetchCalendarPage } = useActions()
 const classes = useStyles()
 const [showModal, setShowModal] = useState(false)
 const [event, setEvent] = useState<ModalEvent>({ title: '', description: '' })

 const eventClick = ({ event }: any) => {
  setEvent({
   title: event.title,
   description: event.extendedProps.description,
  })
  setShowModal(true)
 }

 const closeModal = () => {
  setShowModal(false)
 }

 useEffect(() => {
  fetchCalendarPage()
 }, [])

 return (
  <div className={`portal__page`}>
   {loading && <CircularProgress className={classes.progress} />}
   <div className={loading ? 'portal__calendar-loading portal__calendar maincontainer' : 'portal__calendar maincontainer'}>
    <FullCalendar
     plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
     initialView='dayGridMonth'
     height='auto'
     headerToolbar={{
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek',
     }}
     events={events}
     eventClick={eventClick}
    />
   </div>
   <Modal
    aria-labelledby='transition-modal-title'
    aria-describedby='transition-modal-description'
    open={showModal}
    className='portal__modal'
    onClose={closeModal}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
     timeout: 500,
    }}
   >
    <Fade in={showModal}>
     <div className='portal__modal--box'>
      <button className='portal__modal--close' onClick={closeModal}/>
      <header className='portal__modal--header'>
       <h2 className='portal__modal--title'>{event.title}</h2>
      </header>
      <div className='portal__modal--body'>
       <p>{event.description}</p>
      </div>
     </div>
    </Fade>
   </Modal>
  </div>
 )
}

export default PageCalendar
