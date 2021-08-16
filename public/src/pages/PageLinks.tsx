import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core'
import { LinksPageActionTypes } from '../types/linkspage'
import { useActions } from '../hooks/auseActions'

const PageLinks: React.FC = () => {
 const { links, error, loading } = useTypedSelector(state => state.linksPage)
 const dispatch = useDispatch()
 const { fetchLinksPage } = useActions()
 useEffect(() => {
  fetchLinksPage()

  return () => {
   dispatch({ type: LinksPageActionTypes.UNMOUNT_LINKS_PAGE })
  }
 }, [])
 return (
  <div className={`portal__page ${loading ? 'loading' : ''}`}>
   {loading && (
    <>
     <div className='lat' />
     <div className='lat' />
     <div className='lat' />
    </>
   )}
   <Table className={`portal__links-table ${loading && 'hidden'}`} size='small' aria-label='Links Table'>
    <TableHead>
     <TableRow>
      <TableCell />
      <TableCell>Description</TableCell>
      <TableCell>Link</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {links.map((row, index) => (
      <TableRow key={index}>
       <TableCell component='th' scope='row'>
        <img src={row.img} alt={row.url} />
       </TableCell>
       <TableCell component='th' scope='row'>
        {row.description}
       </TableCell>
       <TableCell component='th' scope='row'>
        <Button
         variant='contained'
         size='small'
         onClick={e => {
          e.preventDefault()
          window.open(row.url, '_blank')
         }}
        >
         Visit
        </Button>
       </TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </div>
 )
}

export default PageLinks
