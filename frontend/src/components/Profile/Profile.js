import React from "react"
import "./Profile.scss"
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBCardTitle,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit"
import { ButtonUnstyled } from "@mui/base"
import { useSelector, useDispatch } from "react-redux"
import CircularProgressIndicator from "../CircularProgressIndicator/CircularProgressIndicator"

export default function Profile() {
  const dispatch = useDispatch()
  const { loading, error, profileInfo } = useSelector((state) => state.profile)

  return loading ? (
    <CircularProgressIndicator />
  ) : profileInfo ? (
    <section style={{ backgroundColor: "rgb(230, 213, 210)" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{profileInfo.user_job}</p>
                <p className="text-muted-company mb-4">
                  {profileInfo.user_company}
                </p>

                <div className="d-flex justify-content-center mb-2">
                  <ButtonUnstyled className="btn--edit-profile">
                    Edit Profile
                  </ButtonUnstyled>
                  <ButtonUnstyled className="btn--more">More</ButtonUnstyled>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <a
                      href="https://jaswant-kondur.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MDBCardText>
                        https://jaswant-kondur.netlify.app/
                      </MDBCardText>
                    </a>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: "#333333" }}
                    />
                    <MDBCardText>voodoo-exe</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <MDBCardText>@iJaswant1</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="linkedin fa-lg"
                      style={{ color: "#2c6ec4" }}
                    />
                    <MDBCardText>niituniv</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    />
                    <MDBCardText>niituniv</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>
                      Full Name
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {`${profileInfo.first_name} ${profileInfo.last_name}`}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>
                      Batch
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {profileInfo.batch}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>
                      Email
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {profileInfo.email_address}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>
                      Mobile
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {profileInfo.mobile_number}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>
                      Job Profile
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {profileInfo.user_job}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>
                      Company
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {profileInfo.user_company}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>
                      Location
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {profileInfo.user_location}
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="25">
                    <MDBCardText className="text-muted">✏️</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              {/* <h2 className="featured">Featured</h2> */}
              <MDBCol md="6">
                <MDBCard height="auto">
                  <MDBCardTitle>Resume</MDBCardTitle>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      className="resume--image"
                      src="resume"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <ButtonUnstyled
                      className="btn--edit-profile"
                      style={{ fontWeight: "bold" }}
                    >
                      Update
                    </ButtonUnstyled>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  ) : (
    <p>ProfileInfo not loaded, please log in</p>
  )
}
