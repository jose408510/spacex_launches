import React from 'react'
import className from 'classnames'

function LaunchItem({ launch: {
    flight_number , mission_name , launch_date_local, launch_sucess }}) 
    {
  return (
    <div className="card card-body mb-3">
      <div className="row"> 
        <div className="col-md-9">
            <h4> Mission: <span className={classNames({
                'text-sucess' : launch_sucess,
                'text-danger': !launch_sucess
            })}
            >{ mission_name } </span> </h4>
            <p>Date: { launch_date_local }</p>
        </div>
        <div className="col-md-3">
            <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  )
}


export default LaunchItem
