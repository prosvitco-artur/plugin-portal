import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

const PortalHeader: React.FC = () => {
 const { firstName, lastName, email, profilePicture, loading, error } = useTypedSelector(state => state.account)
 return (
  <div className={`portal__user-info ${loading ? 'loading' : ''}`}>
    
   <div className='portal__user-avatar mb-24'>
    {!loading && <img src={profilePicture} alt={firstName + lastName} />}
    <a className="portal__user-edit">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.02526 12.5568L7.44727 16.9763L16.2481 8.17045L11.8261 3.75095L3.02526 12.5568Z" fill="#2D3134"></path>
          <path d="M19.6341 3.01762L16.9827 0.366211C16.7401 0.123594 16.4227 0.00160156 16.1051 0H16.0919C15.7743 0.00160156 15.4573 0.123594 15.2153 0.366211L13.4453 2.13383L17.8665 6.55262L19.6342 4.785C19.8768 4.54238 19.9988 4.22539 20.0004 3.90781V3.89461C19.9987 3.57719 19.8767 3.2602 19.6341 3.01762Z" fill="#2D3134"></path>
          <path d="M0 20L5.745 18.6738L1.32379 14.255L0 20Z" fill="#2D3134"></path>
      </svg>
    </a>
   </div>
   <h4 className='portal__user-name mb-6'>
    {firstName} {lastName} {loading && '...'}
   </h4>
   <p className='portal__user-email'>{email} {loading && '...'}</p>
  </div>
 )
}

export default PortalHeader
