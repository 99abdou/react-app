import React from 'react'

const Footer1 = () => {
  return (
    <section
    className="border-top p-4 border-bottom mx-auto d-flex flex-column gap-3 mt-5"
  >
    <div className="d-flex flex-wrap justify-content-between">
      <button className="rounded-pill border p-2 px-3">
        <select className="border-0 text-secondary bg-transparent outline-none border-0" name="" id="">
          <option value="Language English (Uk)" className="border-0">
            Language English (Uk)
          </option>
          <option value="Language English (Uk)" className="border-0">
            Language English (Uk)
          </option>
          <option value="Language English (Uk)" className="border-0">
            Language English (Uk)
          </option>
        </select>
      </button>
      <ul
        className="list-group list-group-horizontal pb-0 rounded-0 border-0 text-center"
      >
        <li className="list-group-item border-0 text-secondary">About</li>
        <li className="list-group-item border-0 text-secondary">Press</li>
        <li className="list-group-item border-0 text-secondary">Copyright</li>
        <li className="list-group-item border-0 text-secondary">Creators</li>
        <li className="list-group-item border-0 text-secondary">Adverdice</li>
        <li className="list-group-item border-0 text-secondary">Developers</li>
      </ul>
      <div>
      </div>
    </div>
    <div className="d-flex flex-wrap justify-content-between">
      <div className="rounded-pill border p-2 px-3 text-secondary">
        <select className="border-0 text-secondary" name="" id="">
          <option value="Location:England" className="border-0">
            Location:England
          </option>
          <option value="Location:England" className="border-0">
            Location:England
          </option>
        </select>
      </div>
      <ul
        className="list-group list-group-horizontal text-secondary pb-0 rounded-0 border-0 justify-content-center align-items-end d-flex"
      >
        <li className="list-group-item border-0 text-secondary">Team</li>
        <li className="list-group-item border-0 text-secondary">Privaty</li>
        <li className="list-group-item border-0 text-secondary">Policy & Safety</li>
        <li className="list-group-item border-0 text-secondary">Send FeekBack</li>
      </ul>
      <div>
      </div>
    </div>
  </section>
  )
}

export default Footer1
