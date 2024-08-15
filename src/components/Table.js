import React from 'react'
import '../components/static/table.css'

const Table = () => {
  return (
    <>
      <div className="col-10 container-fluid text-center">
          <div className='row row-class'>
            <p className='col-12 table-text'>I work in complex technical domains to enable users and unlock product growth</p>
          </div>
          <div className='row'>
            <p className='col-3 table-text'>by</p>
            <p className='col-9 table-text'>Understanding user needs and designing for behaviors that lead to success</p>
          </div>
          <div className='row'>
            <p className='col-2 table-text'>and</p>
            <p className='col-8 table-text'>Collaborating with engineers to ship scalable systems</p>
            <p className='col-2 table-text'>&</p>
          </div>
      </div>
    </>
  )
}

export default Table