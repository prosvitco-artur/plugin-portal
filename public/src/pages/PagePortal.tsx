import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect } from 'react'
import { useActions } from '../hooks/auseActions'

const useStyles = makeStyles((theme?: any) => ({
 h1: {
  fontSize: 40,
  fontWeight: 700,
  marginBottom: 16,
  textAlign: 'center',
 },
 h5: {
  textAlign: 'center',
  marginBottom: 10,
 },
 p: {
  textAlign: 'center',
  marginBottom: 10,
 },
}))

const PagePortal: React.FC = () => {
 const classes = useStyles()
 const { title, subtitle, loading, error, textArray } = useTypedSelector(state => state.mainPage)
 const { fetchMainPage } = useActions()
 useEffect(() => {
  fetchMainPage()
 }, [])
 return (
  <div className={`portal__page ${loading ? 'loading' : ''}`}>
   <h1 className={`${classes.h1} ${loading && 'la'}`}>{loading ? '...' : title}</h1>
   <h5 className={`${classes.h5} ${loading && 'la'}`}>{loading ? '...' : subtitle}</h5>
   {textArray.map((textLine, index) => (
    <p className={classes.h5} key={index}>
     {textLine}
    </p>
   ))}
  </div>
 )
}

export default PagePortal
