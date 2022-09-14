import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
         <center><b><span><MDBIcon icon="users" className="me-2" />About us</span></b></center>
        </div>
                <div>
          <a href='https://es-es.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://gmail.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="info" className="me-3" />
                TM-BC
              </h6>
              <p>
                A continuación dejamos nuestros enlaces de contacto por linkedin y github!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' ><MDBIcon fas icon="external-link-square-alt" className="me-2"/>Rodolfo Garcia</h6>
              <p>
                <a href='https://github.com/RodolfoAGarciaN' className='text-reset'><MDBIcon fab icon="github" className="me-2"/>
                  Github
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com/in/rodolfo-garcia-nunez/' className='text-reset'><MDBIcon fab icon="linkedin" className="me-2" />
                  Linkedin
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'><MDBIcon fas icon="external-link-square-alt" className="me-2"/>Manuel López</h6>
            <p>
                <a href='https://github.com/ManuLG97' className='text-reset'><MDBIcon fab icon="github" className="me-2"/>
                  Github
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com/in/manuell%C3%B3pezgonz%C3%A1lez/' className='text-reset'><MDBIcon fab icon="linkedin" className="me-2" />
                  Linkedin
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'><MDBIcon fas icon="external-link-square-alt" className="me-2"/>Andy Sarmiento</h6>
            <p>
                <a href='https://github.com/gandyrst' className='text-reset'><MDBIcon fab icon="github" className="me-2"/>
                  Github
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com/in/andysarsan-developer/' className='text-reset'><MDBIcon fab icon="linkedin" className="me-2" />
                  Linkedin
                </a>
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright [Proyecto: TheMovieBat-Cave]
      </div>
    </MDBFooter>
  );
}