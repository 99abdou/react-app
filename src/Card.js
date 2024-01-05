/* eslint-disable react/style-prop-object */
import React from 'react'
import profile from './gallery/images/pp-1.jpg' 

const Card = () => {
    let Sty = {
        width: '100%',
        height: '180px',
    }

    let Sty1 = {
        maxWidth: '50px', 
        borderRadius: '70%'
    }
  return (
    <>
         <main className="mt-5 pt-3">
      <div className="container-fluid">
        <div className="row">

        </div>
        <div className="row">
          <div className="col-md-12">
          <div className="card border mb-3">
            <img src={profile} className="card-img-top" alt="..." style={Sty}/>
            <div className="views text-light d-flex justify-content-center gap-2">
              <div className="person">
              <p ><i className="fa-solid fa-users me-3"></i>1,702,435</p>
              </div>
              <div className="vue">
                <p><i className="fa-solid fa-eye me-3"></i>1,702,435</p>
              </div>
              <div className="ajour">
                <p><i className="fa-brands fa-font-awesome me-3"></i>Sep 21,2011</p>
              </div> 
              <div className="video">
                <p><i className="fa-brands fa-youtube me-3"></i>232 Videos</p>
              </div>
            </div>
            <div className="card-body d-flex justify-content-between">
              <div className="image-photo d-flex gap-4">
                <img src={profile} alt="" style={Sty1} />
                <p className="mt-3">Phoebe Allison</p>
                
              </div>
              <div className="info-user d-flex gap-3 mt-2">
                <p>Main</p>
                <p>Videos</p>
                <p>Playlist</p>
                <p>About</p>
                </div>  
                <div className="btnn">
                  <button type="button" className="btn btn-light fs-6 rounded">987,145</button>
                  <button type="button" className="btn btn-light fs-6">Follow</button>                </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="row">
      <div className="trending d-flex justify-content-around mt-4">
        <div className="see-vue">
          <p>See what's trending</p>
        </div>
        <div className="btnn">
          <button type="button" className="btn btn-light rounded">987,145</button>
          <button type="button" className="btn btn-light">Follow</button>               
        </div>
        <div className="btne">
          <button type="button" className="btn btn-light">Follow</button>   
        </div>
      </div>
      </div>
      
      <div className="row row-cols-1 row-cols-md-3 mt-4">
        <div className="col-lg-3 col-md-4 pb-5 shadow rounded-3 bg-light">
          <div className="row px-2">
              <div className="col ratio ratio-16x9">
                  <iframe width="600" height="315" src="https://www.youtube.com/embed/MaKMfHGpxT4" title="YouTube video player" 
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
          </div>
          <div className="row px-2">
            <div className="col-10">
                <h4 className="p-0 m-0 fs-6 mt-4">Qu'est-ce que le State avec React/Next ?</h4>
            </div>
          </div>
          <div className="row px-2">
            <div className="col-2 mt-4">
                <img className="rounded-circle" width="150%"
                    src="https://yt3.ggpht.com/lH25pgLsxNJgC8n649-hs7RR9p1wOhXZa_alpIQ79nt5a_nCE2fAkmDoG3OEsNep4Nm31crASjc=s88-c-k-c0x00ffffff-no-rj"
                    alt="" />
  
            </div>
            <div className="col-10 mt-4 d-flex fs-6">
                <span className="p-0 m-0">École du Web</span>
                <span className="p-0 m-0">47,1 k abonnés</span>
            </div>
              <div className="col-2">
              </div>
          </div>
      </div>
      
      <div className="col-lg-3 col-md-4 col-sm-6 pb-5 shadow rounded-3 bg-light">
        <div className="row px-1">
            <div className="col ratio ratio-16x9">
                <iframe width="600" height="315" src="https://www.youtube.com/embed/MaKMfHGpxT4" title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
        <div className="row px-2">
          <div className="col-10">
              <h4 className="p-0 m-0 fs-6 mt-4">Qu'est-ce que le State avec React/Next ?</h4>
          </div>
        </div>
        <div className="row px-2">
          <div className="col-2 mt-4">
              <img className="rounded-circle" width="150%"
                  src="https://yt3.ggpht.com/lH25pgLsxNJgC8n649-hs7RR9p1wOhXZa_alpIQ79nt5a_nCE2fAkmDoG3OEsNep4Nm31crASjc=s88-c-k-c0x00ffffff-no-rj"
                  alt="" />

          </div>
          <div className="col-10 mt-4 d-flex fs-6">
              <span className="p-0 m-0">École du Web</span>
              <span className="p-0 m-0">47,1 k abonnés</span>
          </div>
            <div className="col-2">
            </div>
        </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-5 shadow rounded-3 bg-light">
      <div className="row px-1">
          <div className="col ratio ratio-16x9">
              <iframe width="600" height="315" src="https://www.youtube.com/embed/MaKMfHGpxT4" title="YouTube video player" 
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
      </div>
      <div className="row px-2">
        <div className="col-10">
            <h4 className="p-0 m-0 fs-6 mt-4">Qu'est-ce que le State avec React/Next ?</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-2 mt-4">
            <img className="rounded-circle" width="150%"
                src="https://yt3.ggpht.com/lH25pgLsxNJgC8n649-hs7RR9p1wOhXZa_alpIQ79nt5a_nCE2fAkmDoG3OEsNep4Nm31crASjc=s88-c-k-c0x00ffffff-no-rj"
                alt="" />

        </div>
        <div className="col-10 mt-4 d-flex fs-6">
            <span className="p-0 m-0">École du Web</span>
            <span className="p-0 m-0">47,1 k abonnés</span>
        </div>
          <div className="col-2">
          </div>
      </div>
  </div>
  <div className="col-lg-3 col-md-4 col-sm-6 pb-5 shadow rounded-3 bg-light">
    <div className="row px-1">
        <div className="col ratio ratio-16x9">
            <iframe width="600" height="315" src="https://www.youtube.com/embed/MaKMfHGpxT4" title="YouTube video player" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </div>
    <div className="row px-2">
      <div className="col-10">
          <h4 className="p-0 m-0 fs-6 mt-4">Qu'est-ce que le State avec React/Next ?</h4>
      </div>
    </div>
    <div className="row px-2">
      <div className="col-2 mt-4">
          <img className="rounded-circle" width="150%"
              src="https://yt3.ggpht.com/lH25pgLsxNJgC8n649-hs7RR9p1wOhXZa_alpIQ79nt5a_nCE2fAkmDoG3OEsNep4Nm31crASjc=s88-c-k-c0x00ffffff-no-rj"
              alt="" />

      </div>
      <div className="col-10 mt-4 d-flex fs-6">
          <span className="p-0 m-0">École du Web</span>
          <span className="p-0 m-0">47,1 k abonnés</span>
      </div>
        <div className="col-2">
        </div>
    </div>
</div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mt-4">
        <div className="col-lg-3 col-md-4 pb-5 shadow rounded-3 bg-light">
          <div className="row px-2">
              <div className="col ratio ratio-16x9">
                  <iframe width="600" height="315" src="https://www.youtube.com/embed/MaKMfHGpxT4" title="YouTube video player" 
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
          </div>
          <div className="row px-2">
            <div className="col-10">
                <h4 className="p-0 m-0 fs-6 mt-4">Qu'est-ce que le State avec React/Next ?</h4>
            </div>
          </div>
          <div className="row px-2">
            <div className="col-2 mt-4">
                <img className="rounded-circle" width="150%"
                    src="https://yt3.ggpht.com/lH25pgLsxNJgC8n649-hs7RR9p1wOhXZa_alpIQ79nt5a_nCE2fAkmDoG3OEsNep4Nm31crASjc=s88-c-k-c0x00ffffff-no-rj"
                    alt="" />
  
            </div>
            <div className="col-10 mt-4 d-flex fs-6">
                <span className="p-0 m-0">École du Web</span>
                <span className="p-0 m-0">47,1 k abonnés</span>
            </div>
              <div className="col-2">
              </div>
          </div>
      </div>
      
      <div className="col-lg-3 col-md-4 col-sm-6 pb-5 shadow rounded-3 bg-light">
        <div className="row px-1">
            <div className="col ratio ratio-16x9">
                <iframe width="600" height="315" src="https://www.youtube.com/embed/MaKMfHGpxT4" title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
        <div className="row px-2">
          <div className="col-10">
              <h4 className="p-0 m-0 fs-6 mt-4">Qu'est-ce que le State avec React/Next ?</h4>
          </div>
        </div>
        <div className="row px-2">
          <div className="col-2 mt-4">
              <img className="rounded-circle" width="150%"
                  src="https://yt3.ggpht.com/lH25pgLsxNJgC8n649-hs7RR9p1wOhXZa_alpIQ79nt5a_nCE2fAkmDoG3OEsNep4Nm31crASjc=s88-c-k-c0x00ffffff-no-rj"
                  alt="" />

          </div>
          <div className="col-10 mt-4 d-flex fs-6">
              <span className="p-0 m-0">École du Web</span>
              <span className="p-0 m-0">47,1 k abonnés</span>
          </div>
            <div className="col-2">
            </div>
        </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-5 shadow rounded-3 bg-light">
      <div className="row px-1">
          <div className="col ratio ratio-16x9">
              <iframe width="600" height="315" src="https://www.youtube.com/embed/MaKMfHGpxT4" title="YouTube video player" 
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
      </div>
      <div className="row px-2">
        <div className="col-10">
            <h4 className="p-0 m-0 fs-6 mt-4">Qu'est-ce que le State avec React/Next ?</h4>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-2 mt-4">
            <img className="rounded-circle" width="150%"
                src="https://yt3.ggpht.com/lH25pgLsxNJgC8n649-hs7RR9p1wOhXZa_alpIQ79nt5a_nCE2fAkmDoG3OEsNep4Nm31crASjc=s88-c-k-c0x00ffffff-no-rj"
                alt="" />

        </div>
        <div className="col-10 mt-4 d-flex fs-6">
            <span className="p-0 m-0">École du Web</span>
            <span className="p-0 m-0">47,1 k abonnés</span>
        </div>
          <div className="col-2">
          </div>
      </div>
  </div>
  <div className="col-lg-3 col-md-4 col-sm-6 pb-5 shadow rounded-3 bg-light">
    <div className="row px-1">
        <div className="col ratio ratio-16x9">
            <iframe width="600" height="315" src="https://www.youtube.com/embed/MaKMfHGpxT4" title="YouTube video player" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </div>
    <div className="row px-2">
      <div className="col-10">
          <h4 className="p-0 m-0 fs-6 mt-4">Qu'est-ce que le State avec React/Next ?</h4>
      </div>
    </div>
    <div className="row px-2">
      <div className="col-2 mt-4">
          <img className="rounded-circle" width="150%"
              src="https://yt3.ggpht.com/lH25pgLsxNJgC8n649-hs7RR9p1wOhXZa_alpIQ79nt5a_nCE2fAkmDoG3OEsNep4Nm31crASjc=s88-c-k-c0x00ffffff-no-rj"
              alt="" />

      </div>
      <div className="col-10 mt-4 d-flex fs-6">
          <span className="p-0 m-0">École du Web</span>
          <span className="p-0 m-0">47,1 k abonnés</span>
      </div>
        <div className="col-2">
        </div>
    </div>
</div>
      </div>
          </div>
          
    </main>
    </>
  )
}

export default Card;
