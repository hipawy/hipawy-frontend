import React, { Component } from "react";
import styled from "styled-components";
import { Jumbotron, Container } from "reactstrap";

const JumboStyle = styled(Jumbotron)`
  margin-bottom: 0rem;
`;

class PetCare extends Component {
  state = {};
  render() {
    return <div>
        <div>
          <JumboStyle fluid>
            <Container fluid>
              <h1>Tips for the First 30 Days of Dog Adoption</h1>
              <p>
                The first few days in your home are special and critical for
                a pet. Your new pet will be confused about where he is and
                what to expect from you. Setting up some clear structure
                with your family for your pet will be paramount in making as
                smooth a transition as possible.
              </p>
              <p>
              <p>Before You Bring Your Pet Home:</p>
                <ul>
                  <li>
                    Determine where your pet will be spending most of his
                    time. Because he will be under a lot of stress with the
                    change of environment (from shelter or foster home to
                    your house), he may forget any housebreaking (if any)
                    he’s learned. Often a kitchen will work best for easy
                    clean-up.
                  </li>
                  <li>
                    If you plan on crate training your pet, be sure to have
                    a crate set-up and ready to go for when you bring your
                    new pet home. Find out more about crate training your
                    pet.
                  </li>
                  <li>
                    Pet-proof the area where your pooch will spend most of
                    his time during the first few months. This may mean
                    taping loose electrical cords to baseboards; storing
                    household chemicals on high shelves; removing plants,
                    rugs, and breakables; setting up the crate, and
                    installing baby gates.
                  </li>
                  <li>
                    Training your pet will start the first moment you have
                    him. Take time to create a vocabulary list everyone will
                    use when giving your pet directions. This will help
                    prevent confusion and help your pet learn his commands
                    more quickly. Not sure which commands to use? Check out
                    How to Talk to Your Pet.
                  </li>
                  <li>
                    Bring an ID tag with your phone number on it with you
                    when you pick up your pet so that he has an extra
                    measure of safety for the ride home and the first few
                    uneasy days. If he is microchipped, be sure to register
                    your contact information with the chip’s company, if the
                    rescue or shelter did not already do so.
                  </li>
                </ul>
              </p>
              <p>
              <p clasName="strong">First day:</p>
                <ul>
                  <li>
                    We know moving is stressful — and your new pet feels the
                    same way! Give him time to acclimate to your home and
                    family before introducing him to strangers. Make sure
                    children know how to approach the pet without
                    overwhelming him. Go here for more on introducing pets
                    and children.
                  </li>
                  <li>
                    When you pick up your pet, remember to ask what and when
                    he was fed. Replicate that schedule for at least the
                    first few days to avoid gastric distress. If you wish to
                    switch to a different brand, do so over a period of
                    about a week by adding one part new food to three parts
                    of the old for several days; then switch to half new
                    food, half old, and then one part old to three parts
                    new. For more information about your dog’s diet, check
                    out our section on Dog Nutrition.
                  </li>
                  <li>
                    On the way home, your dog should be safely secured,
                    preferably in a crate. Some pets find car trips
                    stressful, so having him in a safe place will make the
                    trip home easier on him and you.
                  </li>
                  <li>
                    Once home, take him to his toileting area immediately
                    and spend a good amount of time with him so he will get
                    used to the area and relieve himself. Even if your pet
                    does relieve himself during this time, be prepared for
                    accidents. Coming into a new home with new people, new
                    smells and new sounds can throw even the most
                    housebroken dog off-track, so be ready just in case.
                    Need more housetraining tips? Check out our Pet
                    Housetraining section.
                  </li>
                  <li>
                    If you plan on crate training your pet, leave the crate
                    open so that he can go in whenever he feels like it in
                    case he gets overwhelmed. Also, be sure to check out the
                    do’s and don’ts of crate training your pet.
                  </li>
                  <li>
                    From there, start your schedule of feeding, toileting
                    and play/exercise. From Day One, your pet will need
                    family time and brief periods of solitary confinement.
                    Don’t give in and comfort him if he whines when left
                    alone. Instead, give him attention for good behavior,
                    such as chewing on a toy or resting quietly.
                  </li>
                </ul>
              </p>
            </Container>
          </JumboStyle>
        </div>
      </div>;
  }
}

export default PetCare;
