import React, { Component } from "react";
import styled from "styled-components";
import { Jumbotron, Container } from "reactstrap";
import UserProfile from "../components/UserSetting/UserProfile";

const JumboStyle = styled(Jumbotron)`
  margin-bottom: 0rem;
`;

class About extends Component {
  state = {};
  render() {
    console.log(process.env);
    return (
      <div>
        <div>
          <JumboStyle fluid>
            <Container fluid>
              <h1>About HiPawy!</h1>
              <p className="lead">
                HiPawy is an online, searchable database of animals who need
                homes. It is also a directory of nearly animal adoption
                organizations across the Jabodetabek. Organizations maintain
                their own home pages and available-pet databases.
              </p>

              <h2>Our mission</h2>
              <p>
                To use Internet technology and the resources it can generate to:
                <ol>
                  <li>
                    Increase public awareness of the availability of
                    high-quality adoptable pets
                  </li>
                  <li>
                    Increase the overall effectiveness of pet adoption programs
                    across North America to the extent that the euthanasia of
                    adoptable pets is eliminated
                  </li>
                  <li>Elevate the status of pets to that of family member</li>
                </ol>
              </p>
              <p>
                From the comfort of their personal computers, pet lovers can
                search for a pet that best matches their needs. They can then
                reference a shelter’s web page and discover what services it
                offers. Petfinder also includes discussion forums, a pet-care
                resource directory and a library of free pet-care articles to
                help keep pets in their homes.
              </p>
              <p>Petfinder is updated DAILY.</p>
              <p>
                Organizations wishing to participate should register. A contact
                person should be responsible for direct communications with
                Petfinder. Only nonprofit organizations will be included (but
                Federal 501(c)(3) status is not necessary)
              </p>
              <p>
                Petfinder is made up of animal-care professionals and regular
                people volunteering for their local animal welfare organizations
                all working together to maintain active and accurate homeless
                pet lists. Most animal welfare volunteers have “real jobs” by
                day. The success and the magnitude of this project is largely
                due to their tireless efforts to make a difference. If you would
                like to help, let us know! You can find us at
                https://www.HiPawy.com/. Email: hello@hipawy.com
              </p>
              <p>
                If you have a Website and would like to help us promote shelter
                pets as the #1 choice for a new pet, you may use our free
                widgets and graphics to add Petfinder to your website. You may
                also want to check out our Featured Pet Module which allows you
                to show Petfinder pets from your community on your own home
                page.
              </p>
              <h3>Disclaimer</h3>
              <p>
                Petfinder is only a directory of homeless pets and pet adoption
                organizations. No information in Petfinder is guaranteed.
                Although the information on Petfinder is updated frequently, it
                is always best to call the facility or organization that lists
                the pet to insure it is still available and to insure the
                information listed in Petfinder is accurate. It is crucial that
                any pet found through an adoption service be thoroughly examined
                by a veterinarian immediately upon adoption. Any pets found,
                adopted through, or listed in Petfinder are the sole
                responsibility of the adoption organizations and/or the adopting
                party.
              </p>
              <p>
                Petfinder accepts no responsiblity for any liability or for any
                injury or damages to any person or property caused by any listed
                animal, as well as any cause of action, claims, suits or demands
                whatsoever that may arise as a result of such injury or damage.
              </p>
            </Container>
          </JumboStyle>
        </div>
        <UserProfile />
      </div>
    );
  }
}

export default About;
