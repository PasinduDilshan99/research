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
  color: #e74c3c;
`;

const SubSectionTitle = styled.h2`
  color: #e74c3c;
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
  justify-content: center;
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
    color: #e74c3c; /* Change color on hover if desired */
    cursor: pointer; /* Change cursor on hover */
  }
`;

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 50,
    behavior: "smooth",
  });

function Prediabetes() {
  const prediabetesRef = useRef(null);
  const symptomsRef = useRef(null);
  const doctorRef = useRef(null);
  const causesRef = useRef(null);
  const riskFactorsRef = useRef(null);
  const complicationsRef = useRef(null);
  const preventionRef = useRef(null);

  return (
    <Wrapper>
      <NavigationLinks>
        <NavigationLink onClick={() => scrollToRef(prediabetesRef)}>
          Prediabetes
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
      <SectionTitle ref={prediabetesRef}>Prediabetes</SectionTitle>

      <Paragraph>
        What is insulin resistance? Prediabetes means you have a higher than
        normal blood sugar level. It's not high enough to be considered type 2
        diabetes yet. But without lifestyle changes, adults and children with
        prediabetes are at high risk to develop type 2 diabetes.
      </Paragraph>

      <Paragraph>
        If you have prediabetes, the long-term damage of diabetes — especially
        to your heart, blood vessels, and kidneys — may already be starting.
        There's good news, however. Progression from prediabetes to type 2
        diabetes isn't inevitable.
      </Paragraph>

      <Paragraph>
        Eating healthy foods, making physical activity part of your daily
        routine, and staying at a healthy weight can help bring your blood sugar
        level back to normal. The same lifestyle changes that can help prevent
        type 2 diabetes in adults might also help bring children's blood sugar
        levels back to normal.
      </Paragraph>

      <SubSectionTitle ref={symptomsRef}>Symptoms</SubSectionTitle>
      <Paragraph>
        Prediabetes doesn't usually have any signs or symptoms. One possible
        sign of prediabetes is darkened skin on certain parts of the body.
        Affected areas can include the neck, armpits, and groin.
      </Paragraph>

      <Paragraph>
        Classic signs and symptoms that suggest you've moved from prediabetes to
        type 2 diabetes include:
      </Paragraph>
      <StyledList>
        <ListItem>Increased thirst</ListItem>
        <ListItem>Frequent urination</ListItem>
        <ListItem>Increased hunger</ListItem>
        <ListItem>Fatigue</ListItem>
        <ListItem>Blurred vision</ListItem>
        <ListItem>Numbness or tingling in the feet or hands</ListItem>
        <ListItem>Frequent infections</ListItem>
        <ListItem>Slow-healing sores</ListItem>
        <ListItem>Unintended weight loss</ListItem>
      </StyledList>

      <SubSectionTitle ref={doctorRef}>When to see a doctor</SubSectionTitle>
      <Paragraph>
        See your health care provider if you're concerned about diabetes or if
        you notice any type 2 diabetes signs or symptoms. Ask your health care
        provider about blood sugar screening if you have any risk factors for
        diabetes.
      </Paragraph>

      <SubSectionTitle ref={causesRef}>Causes</SubSectionTitle>
      <Paragraph>
        The exact cause of prediabetes is unknown. But family history and
        genetics appear to play an important role. What is clear is that people
        with prediabetes don't process sugar (glucose) properly anymore.
      </Paragraph>

      <Paragraph>
        Most of the glucose in your body comes from the food you eat. When food
        is digested, sugar enters your bloodstream. Insulin allows sugar to
        enter your cells — and lowers the amount of sugar in your blood.
      </Paragraph>

      <Paragraph>
        Insulin is produced by a gland located behind the stomach called the
        pancreas. Your pancreas sends insulin to your blood when you eat. When
        your blood sugar level starts to drop, the pancreas slows down the
        secretion of insulin into the blood.
      </Paragraph>

      <Paragraph>
        When you have prediabetes, this process doesn't work as well. As a
        result, instead of fueling your cells, sugar builds up in your
        bloodstream. This can happen because:
      </Paragraph>
      <StyledList>
        <ListItem>Your pancreas may not make enough insulin</ListItem>
        <ListItem>
          Your cells become resistant to insulin and don't allow as much sugar
          in
        </ListItem>
      </StyledList>

      <SubSectionTitle ref={riskFactorsRef}>Risk Factors</SubSectionTitle>
      <Paragraph>
        The same factors that increase the odds of getting type 2 diabetes also
        increase the risk of prediabetes. These factors include:
      </Paragraph>
      <StyledList>
        <ListItem>
          Weight. Being overweight is a primary risk factor for prediabetes. The
          more fatty tissue you have — especially inside and between the muscle
          and skin around your abdomen — the more resistant your cells become to
          insulin.
        </ListItem>
        <ListItem>
          Waist size. A large waist size can indicate insulin resistance. The
          risk of insulin resistance goes up for men with waists larger than 40
          inches and for women with waists larger than 35 inches.
        </ListItem>
        <ListItem>
          Diet. Eating red meat and processed meat, and drinking sugar-sweetened
          beverages, is associated with a higher risk of prediabetes.
        </ListItem>
        <ListItem>
          Inactivity. The less active you are, the greater your risk of
          prediabetes.
        </ListItem>
        <ListItem>
          Age. Although diabetes can develop at any age, the risk of prediabetes
          increases after age 35.
        </ListItem>
        <ListItem>
          Family history. Your risk of prediabetes increases if you have a
          parent or sibling with type 2 diabetes.
        </ListItem>
        <ListItem>
          Race or ethnicity. Although it's unclear why, certain people —
          including Black, Hispanic, American Indian and Asian American people —
          are more likely to develop prediabetes.
        </ListItem>
        <ListItem>
          Gestational diabetes. If you had diabetes while pregnant (gestational
          diabetes), you and your child are at higher risk of developing
          prediabetes.
        </ListItem>
        <ListItem>
          Polycystic ovary syndrome. Women with this common condition —
          characterized by irregular menstrual periods, excess hair growth, and
          obesity — have a higher risk of prediabetes.
        </ListItem>
        <ListItem>
          Sleep. People with obstructive sleep apnea — a condition that disrupts
          sleep repeatedly — have an increased risk of insulin resistance.
          People who are overweight or obese have a higher risk of developing
          obstructive sleep apnea.
        </ListItem>
        <ListItem>
          Tobacco smoke. Smoking may increase insulin resistance and can
          increase the risk of type 2 diabetes in people with prediabetes.
          Smoking also increases your risk of complications from diabetes.
        </ListItem>
      </StyledList>

      <SubSectionTitle ref={complicationsRef}>Complications</SubSectionTitle>
      <Paragraph>
        Prediabetes has been linked with long-term damage, including to your
        heart, blood vessels, and kidneys, even if you haven't progressed to
        type 2 diabetes. Prediabetes is also linked to unrecognized (silent)
        heart attacks.
      </Paragraph>

      <Paragraph>
        Prediabetes can progress to type 2 diabetes, which can lead to:
      </Paragraph>
      <StyledList>
        <ListItem>High blood pressure</ListItem>
        <ListItem>High cholesterol</ListItem>
        <ListItem>Heart disease</ListItem>
        <ListItem>Stroke</ListItem>
        <ListItem>Kidney disease</ListItem>
        <ListItem>Nerve damage</ListItem>
        <ListItem>Fatty liver disease</ListItem>
        <ListItem>Eye damage, including loss of vision</ListItem>
        <ListItem>Amputations</ListItem>
      </StyledList>

      <SubSectionTitle ref={preventionRef}>Prevention</SubSectionTitle>
      <Paragraph>
        Healthy lifestyle choices can help you prevent prediabetes and its
        progression to type 2 diabetes — even if diabetes runs in your family.
        These include:
      </Paragraph>
      <StyledList>
        <ListItem>Eating healthy foods</ListItem>
        <ListItem>Getting active</ListItem>
        <ListItem>Losing excess weight</ListItem>
        <ListItem>Controlling your blood pressure and cholesterol</ListItem>
        <ListItem>Not smoking</ListItem>
      </StyledList>
    </Wrapper>
  );
}
export default Prediabetes;
