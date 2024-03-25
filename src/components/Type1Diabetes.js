import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 80vh;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
`;

const SectionTitle = styled.h1`
  color: #3498db;
`;

const SubSectionTitle = styled.h2`
  color: #3498db;
`;

const Paragraph = styled.p`
  color: #555;
  margin-bottom: 15px;
`;

const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const NavigationLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
  margin: 5px;
  cursor: pointer;

  &:not(:last-child)::after {
    content: "|";
    margin: 0 5px;
    color: #ddd;
  }

  &:hover {
    color: #3498db; /* Change color on hover if desired */
    cursor: pointer; /* Change cursor on hover */
  }
`;

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 50,
    behavior: "smooth",
  });

function Type1Diabetes() {
  const type1DiabetesRef = useRef(null);
  const overviewRef = useRef(null);
  const symptomsRef = useRef(null);
  const doctorRef = useRef(null);
  const causesRef = useRef(null);
  const insulinRef = useRef(null);
  const glucoseRef = useRef(null);
  const riskFactorsRef = useRef(null);
  const complicationsRef = useRef(null);
  const preventionRef = useRef(null);

  return (
    <Wrapper>
      <NavigationLinks>
        <NavigationLink onClick={() => scrollToRef(type1DiabetesRef)}>
          Type 1 Diabetes
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(overviewRef)}>
          Overview
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(symptomsRef)}>
          Symptoms
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(doctorRef)}>
          When to see a doctor
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(causesRef)}>
          Causes
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(insulinRef)}>
          The Role of Insulin
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(glucoseRef)}>
          The Role of Glucose
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(riskFactorsRef)}>
          Risk Factors
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(complicationsRef)}>
          Complications
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(preventionRef)}>
          Prevention
        </NavigationLink>
      </NavigationLinks>
      <SectionTitle ref={type1DiabetesRef}>Type 1 Diabetes</SectionTitle>
      <Paragraph>
        Type 1 diabetes is an autoimmune disease characterized by the immune
        system attacking and destroying insulin-producing cells in the pancreas.
        It is usually diagnosed in children and young adults.
      </Paragraph>

      <SubSectionTitle ref={overviewRef}>Overview</SubSectionTitle>
      <Paragraph>
        <strong>What is type 1 diabetes?</strong> Type 1 diabetes, once known as
        juvenile diabetes or insulin-dependent diabetes, is a chronic condition.
        In this condition, the pancreas makes little or no insulin. Insulin is a
        hormone the body uses to allow sugar (glucose) to enter cells to produce
        energy.
      </Paragraph>

      <Paragraph>
        <strong>
          Different factors, such as genetics and some viruses, may cause type 1
          diabetes.
        </strong>{" "}
        Although type 1 diabetes usually appears during childhood or
        adolescence, it can develop in adults.
      </Paragraph>

      <Paragraph>
        Even after a lot of research, type 1 diabetes has no cure. Treatment is
        directed toward managing the amount of sugar in the blood using insulin,
        diet, and lifestyle to prevent complications.
      </Paragraph>

      <SubSectionTitle ref={symptomsRef}>Symptoms</SubSectionTitle>
      <Paragraph>
        <strong>
          Type 1 diabetes symptoms can appear suddenly and may include:
        </strong>
      </Paragraph>
      <StyledList>
        <ListItem>Feeling more thirsty than usual</ListItem>
        <ListItem>Urinating a lot</ListItem>
        <ListItem>
          Bed-wetting in children who have never wet the bed during the night
        </ListItem>
        <ListItem>Feeling very hungry</ListItem>
        <ListItem>Losing weight without trying</ListItem>
        <ListItem>Feeling irritable or having other mood changes</ListItem>
        <ListItem>Feeling tired and weak</ListItem>
        <ListItem>Having blurry vision</ListItem>
      </StyledList>

      <SubSectionTitle ref={doctorRef}>When to see a doctor</SubSectionTitle>
      <Paragraph>
        <strong>
          Talk to your health care provider if you notice any of the above
          symptoms in you or your child.
        </strong>
      </Paragraph>

      <SubSectionTitle ref={causesRef}>Causes</SubSectionTitle>
      <Paragraph>
        <strong>The exact cause of type 1 diabetes is unknown.</strong> Usually,
        the body's own immune system — which normally fights harmful bacteria
        and viruses — destroys the insulin-producing (islet) cells in the
        pancreas. Other possible causes include:
      </Paragraph>
      <StyledList>
        <ListItem>Genetics</ListItem>
        <ListItem>Exposure to viruses and other environmental factors</ListItem>
      </StyledList>

      <SubSectionTitle ref={insulinRef}>The Role of Insulin</SubSectionTitle>
      <Paragraph>
        <strong>
          Once a large number of islet cells are destroyed, the body will
          produce little or no insulin.
        </strong>{" "}
        Insulin is a hormone that comes from a gland behind and below the
        stomach (pancreas).
      </Paragraph>

      <Paragraph>
        <strong>The pancreas puts insulin into the bloodstream.</strong>
      </Paragraph>
      <StyledList>
        <ListItem>
          Insulin travels through the body, allowing sugar to enter the cells.
        </ListItem>
        <ListItem>
          Insulin lowers the amount of sugar in the bloodstream.
        </ListItem>
        <ListItem>
          As the blood sugar level drops, the pancreas puts less insulin into
          the bloodstream.
        </ListItem>
      </StyledList>

      <SubSectionTitle ref={glucoseRef}>The Role of Glucose</SubSectionTitle>
      <Paragraph>
        <strong>
          Glucose — a sugar — is a main source of energy for the cells that make
          up muscles and other tissues.
        </strong>
      </Paragraph>
      <StyledList>
        <ListItem>
          Glucose comes from two major sources: food and the liver.
        </ListItem>
        <ListItem>
          Sugar is absorbed into the bloodstream, where it enters cells with the
          help of insulin.
        </ListItem>
        <ListItem>The liver stores glucose in the form of glycogen.</ListItem>
        <ListItem>
          When glucose levels are low, such as when you haven't eaten in a
          while, the liver breaks down the stored glycogen into glucose. This
          keeps glucose levels within a typical range.
        </ListItem>
      </StyledList>

      <SubSectionTitle ref={riskFactorsRef}>Risk Factors</SubSectionTitle>
      <Paragraph>
        <strong>
          Some factors that can raise your risk for type 1 diabetes include:
        </strong>
      </Paragraph>
      <StyledList>
        <ListItem>
          Family history. Anyone with a parent or sibling with type 1 diabetes
          has a slightly higher risk of developing the condition.
        </ListItem>
        <ListItem>
          Genetics. Having certain genes increases the risk of developing type 1
          diabetes.
        </ListItem>
        <ListItem>
          Geography. The number of people who have type 1 diabetes tends to be
          higher as you travel away from the equator.
        </ListItem>
        <ListItem>
          Age. Type 1 diabetes can appear at any age, but it appears at two
          noticeable peaks. The first peak occurs in children between 4 and 7
          years old. The second is in children between 10 and 14 years old.
        </ListItem>
      </StyledList>

      <SubSectionTitle ref={complicationsRef}>Complications</SubSectionTitle>
      <Paragraph>
        <strong>
          Over time, type 1 diabetes complications can affect major organs in
          the body.
        </strong>{" "}
        These organs include the heart, blood vessels, nerves, eyes, and
        kidneys. Having a normal blood sugar level can lower the risk of many
        complications.
      </Paragraph>

      <Paragraph>
        <strong>
          Diabetes complications can lead to disabilities or even threaten your
          life.
        </strong>
      </Paragraph>

      <SubSectionTitle>Heart and Blood Vessel Disease</SubSectionTitle>
      <Paragraph>
        Diabetes increases the risk of some problems with the heart and blood
        vessels. These include coronary artery disease with chest pain (angina),
        heart attack, stroke, narrowing of the arteries (atherosclerosis), and
        high blood pressure.
      </Paragraph>

      <SubSectionTitle>Nerve Damage (Neuropathy)</SubSectionTitle>
      <Paragraph>
        Too much sugar in the blood can injure the walls of the tiny blood
        vessels (capillaries) that feed the nerves. This is especially true in
        the legs. This can cause tingling, numbness, burning, or pain. This
        usually begins at the tips of the toes or fingers and spreads upward.
        Poorly controlled blood sugar could cause you to lose all sense of
        feeling in the affected limbs over time.
      </Paragraph>

      <Paragraph>
        Damage to the nerves that affect the digestive system can cause problems
        with nausea, vomiting, diarrhea, or constipation. For men, erectile
        dysfunction may be an issue.
      </Paragraph>

      <SubSectionTitle>Kidney Damage (Nephropathy)</SubSectionTitle>
      <Paragraph>
        The kidneys have millions of tiny blood vessels that keep waste from
        entering the blood. Diabetes can damage this system. Severe damage can
        lead to kidney failure or end-stage kidney disease that can't be
        reversed. End-stage kidney disease needs to be treated with mechanical
        filtering of the kidneys (dialysis) or a kidney transplant.
      </Paragraph>

      <SubSectionTitle>Eye Damage</SubSectionTitle>
      <Paragraph>
        Diabetes can damage the blood vessels in the retina (part of the eye
        that senses light) (diabetic retinopathy). This could cause blindness.
        Diabetes also increases the risk of other serious vision conditions,
        such as cataracts and glaucoma.
      </Paragraph>

      <SubSectionTitle>Foot Damage</SubSectionTitle>
      <Paragraph>
        Nerve damage in the feet or poor blood flow to the feet increases the
        risk of some foot complications. Left untreated, cuts and blisters can
        become serious infections. These infections may need to be treated with
        toe, foot, or leg removal (amputation).
      </Paragraph>

      <SubSectionTitle>Skin and Mouth Conditions</SubSectionTitle>
      <Paragraph>
        Diabetes may leave you more prone to infections of the skin and mouth.
        These include bacterial and fungal infections. Gum disease and dry mouth
        also are more likely.
      </Paragraph>

      <SubSectionTitle>Pregnancy Complications</SubSectionTitle>
      <Paragraph>
        High blood sugar levels can be dangerous for both the parent and the
        baby. The risk of miscarriage, stillbirth, and birth defects increases
        when diabetes isn't well-controlled. For the parent, diabetes increases
        the risk of diabetic ketoacidosis, diabetic eye problems (retinopathy),
        pregnancy-induced high blood pressure, and preeclampsia.
      </Paragraph>

      <SubSectionTitle ref={preventionRef}>Prevention</SubSectionTitle>
      <Paragraph>
        <strong>There's no known way to prevent type 1 diabetes.</strong> But
        researchers are working on preventing the disease or further damage of
        the islet cells in people who are newly diagnosed.
      </Paragraph>

      <Paragraph>
        Ask your provider if you might be eligible for one of these clinical
        trials. It is important to carefully weigh the risks and benefits of any
        treatment available in a trial.
      </Paragraph>
    </Wrapper>
  );
}

export default Type1Diabetes;
