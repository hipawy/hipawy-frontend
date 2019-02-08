import React, { Component } from "react";
import styled from "styled-components";
import { Jumbotron, Container } from "reactstrap";

const JumboStyle = styled(Jumbotron)`
  margin-bottom: 0rem;
`;

const StyledStrong = styled.strong`
  font-weight: bold;
`;

class PrivacyPolicy extends Component {
  state = {};
  render() {
    return (
      <div>
        <JumboStyle fluid>
          <Container fluid>
            <div>
              <h1>
                <StyledStrong>
                  THIS PRIVACY POLICY APPLIES TO OUR SITES, APPS AND OFFLINE
                  ACTIVITIES.
                </StyledStrong>
              </h1>
              <p>
                This Policy describes the types of information we collect from
                and about you when you visit our IND websites (each a “site”).
                This policy also covers our mobile applications (each an “app”)
                and other interactions with us through other online and offline
                activities where this policy is provided to you. For example,
                this includes our brand websites like www.purina.com, as well as
                our mobile and social media applications. This policy describes
                how we use and treat such information. Our sites, apps, and
                activities are collectively referred to as the “Services.”
                Throughout this policy, the terms “we”, “us”, “our”, and
                “Purina” refer to Nestlé Purina PetCare Company, a IND
                corporation, and our subsidiaries. This includes Petfinder.com.
                “You” refers to any person accessing and/or using these
                Services.
              </p>
              <p>
                This policy applies to our consumer interactions. It does not
                apply to information collected throughout the application,
                hiring, or employment process. It does not apply to information
                collected by our parent company or affiliate companies.
              </p>
              <p>
                By using our Services you agree to this policy. You also agree
                to this policy if you otherwise give us your information. This
                website is subject to US laws, which may not afford the same
                level of privacy as those in other countries. If you do not
                agree, please do not use our Services or give us your
                information. This site is subject to U.S. laws which may not
                afford the same level of protection as those in other countries.
              </p>
              <h3>
                <StyledStrong>
                  WE COLLECT INFORMATION FROM AND ABOUT YOU
                </StyledStrong>
              </h3>

              <ul>
                <li>
                  <StyledStrong>CONTACT INFORMATION.</StyledStrong> The personal
                  information we collect may include your name, postal address,
                  telephone or mobile number, or email address. We may collect
                  this information from third parties.
                </li>
                <li>
                  <StyledStrong>ACCOUNT LOG-IN INFORMATION.</StyledStrong>You
                  may be required to provide information in order to set up an
                  account with us. We also collect information needed to give
                  you access to your account. This includes your login ID/email
                  address, screen name, and/or password.
                </li>
                <li>
                  <StyledStrong>
                    DEMOGRAPHICAND PROFILE INFORMATION.
                  </StyledStrong>
                  We may collect information like your gender, age and ethnicity
                  if you fill out an online form or survey. We may collect your
                  zip code. We may collect this information from third parties.
                  For example, we may collect interests you post on social
                  media.
                </li>
                <li>
                  <StyledStrong>
                    WE COLLECT INFORMATION ABOUT YOUR PET AND PET PREVERENCE
                  </StyledStrong>
                  . We may collect information when you inquire about adopting a
                  pet through a Petfinder member adoption organization. We may
                  also collect information when you create a saved pet search
                  alert. We may also collect this information when you purchase
                  pet care products from one of our online stores. For example,
                  we might ask what kind of pet you have or the type of pet food
                  you prefer. We collect pet photos you upload to our web sites.
                </li>
                <li>
                  <StyledStrong>
                    OTHER INFORMATION MAY YOU SHARE, SUBMIT OR POST.
                  </StyledStrong>
                  We may collect information that you post either publicly or on
                  a platform that we provide for sharing among users. We may
                  also collect information that you provide to us through a
                  survey, or otherwise share with us.
                </li>
                <li>
                  <StyledStrong>
                    WE COLLECT INFORMATION ABOUT YOUR BROWSING PREFERENCES, YOUR
                    COMPUTER OR DEVICE, AND YOUR INTERNET USAGE.
                  </StyledStrong>
                  For example, we may collect information about your online
                  behavior. We may also collect your browser or device type,
                  operating system, or unique device identifier. We may also
                  collect your software version, IP address, and domain name. We
                  may also collect the date and time you visited our site or
                  app. This may include the areas or pages that you visit and
                  the number and duration of visits. It may also include other
                  site usage data and emails that you open, forward, or
                  click-through. We might look at what site you came from, or
                  what site you visit when you leave us, what links you click
                  on, or what pages you view.
                </li>
              </ul>
            </div>
          </Container>
        </JumboStyle>
      </div>
    );
  }
}

export default PrivacyPolicy;
