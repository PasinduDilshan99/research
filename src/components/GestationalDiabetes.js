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

const NavigationLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const NavigationLink = styled.span`
  color: #3498db;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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

const GestationalDiabetes = () => {
  const gestationalRef = useRef(null);
  const symptomsRef = useRef(null);
  const doctorRef = useRef(null);
  const causesRef = useRef(null);
  const riskFactorsRef = useRef(null);
  const complicationsRef = useRef(null);
  const preventionRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 20, behavior: "smooth" });
    }
  };

  return (
    <Wrapper>
      <NavigationLinks>
        <NavigationLink onClick={() => scrollToRef(gestationalRef)}>
          Gestational Diabetes
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(symptomsRef)}>
          Symptoms
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(doctorRef)}>
          When to See a Doctor
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
      <SectionTitle ref={gestationalRef}>Gestational Diabetes</SectionTitle>

      <Paragraph>
        Gestational diabetes is diabetes diagnosed for the first time during
        pregnancy (gestation). Like other types of diabetes, gestational
        diabetes affects how your cells use sugar (glucose). Gestational
        diabetes causes high blood sugar that can affect your pregnancy and your
        baby's health.
      </Paragraph>

      <Paragraph>
        While any pregnancy complication is concerning, there's good news.
        During pregnancy, you can help control gestational diabetes by eating
        healthy foods, exercising, and, if necessary, taking medication.
        Controlling blood sugar can keep you and your baby healthy and prevent a
        difficult delivery.
      </Paragraph>

      <Paragraph>
        If you have gestational diabetes during pregnancy, generally your blood
        sugar returns to its usual level soon after delivery. But if you've had
        gestational diabetes, you have a higher risk of getting type 2 diabetes.
        You'll need to be tested for changes in blood sugar more often.
      </Paragraph>

      {/* Symptoms */}
      <SubSectionTitle ref={symptomsRef}>Symptoms</SubSectionTitle>
      <Paragraph>
        Most of the time, gestational diabetes doesn't cause noticeable signs or
        symptoms. Increased thirst and more-frequent urination are possible
        symptoms.
      </Paragraph>

      {/* When to see a doctor */}
      <SubSectionTitle ref={doctorRef}>When to See a Doctor</SubSectionTitle>
      <Paragraph>
        If possible, seek health care early — when you first think about trying
        to get pregnant — so your health care provider can check your risk of
        gestational diabetes along with your overall wellness. Once you're
        pregnant, your health care provider will check you for gestational
        diabetes as part of your prenatal care.
      </Paragraph>
      <Paragraph>
        If you develop gestational diabetes, you may need checkups more often.
        These are most likely to occur during the last three months of
        pregnancy, when your health care provider will monitor your blood sugar
        level and your baby's health.
      </Paragraph>

      {/* Causes */}
      <SubSectionTitle ref={causesRef}>Causes</SubSectionTitle>
      <Paragraph>
        Researchers don't yet know why some women get gestational diabetes and
        others don't. Excess weight before pregnancy often plays a role.
      </Paragraph>
      <Paragraph>
        Usually, various hormones work to keep blood sugar levels in check. But
        during pregnancy, hormone levels change, making it harder for the body
        to process blood sugar efficiently. This makes blood sugar rise.
      </Paragraph>

      {/* Risk factors */}
      <SubSectionTitle ref={riskFactorsRef}>Risk Factors</SubSectionTitle>
      <StyledList>
        <ListItem>Being overweight or obese</ListItem>
        <ListItem>Not being physically active</ListItem>
        <ListItem>Having prediabetes</ListItem>
        <ListItem>
          Having had gestational diabetes during a previous pregnancy
        </ListItem>
        <ListItem>Having polycystic ovary syndrome</ListItem>
        <ListItem>Having an immediate family member with diabetes</ListItem>
        <ListItem>
          Having previously delivered a baby weighing more than 9 pounds (4.1
          kilograms)
        </ListItem>
        <ListItem>
          Being of a certain race or ethnicity, such as Black, Hispanic,
          American Indian, and Asian American
        </ListItem>
      </StyledList>

      {/* Complications */}
      <SubSectionTitle ref={complicationsRef}>Complications</SubSectionTitle>
      <Paragraph>
        Gestational diabetes that's not carefully managed can lead to high blood
        sugar levels. High blood sugar can cause problems for you and your baby,
        including an increased likelihood of needing a surgery to deliver
        (C-section).
      </Paragraph>

      {/* Complications affecting the baby */}
      <SubSectionTitle>Complications Affecting the Baby</SubSectionTitle>
      <StyledList>
        <ListItem>Excessive birth weight</ListItem>
        <ListItem>Early (preterm) birth</ListItem>
        <ListItem>Serious breathing difficulties</ListItem>
        <ListItem>Low blood sugar (hypoglycemia)</ListItem>
        <ListItem>Obesity and type 2 diabetes later in life</ListItem>
        <ListItem>Stillbirth</ListItem>
      </StyledList>

      {/* Complications affecting you */}
      <SubSectionTitle>Complications Affecting You</SubSectionTitle>
      <Paragraph>
        Gestational diabetes may also increase your risk of high blood pressure
        and preeclampsia, having a surgical delivery (C-section), and future
        diabetes.
      </Paragraph>

      {/* Prevention */}
      <SubSectionTitle ref={preventionRef}>Prevention</SubSectionTitle>
      <Paragraph>
        There are no guarantees when it comes to preventing gestational diabetes
        — but the more healthy habits you can adopt before pregnancy, the
        better. If you've had gestational diabetes, these healthy choices may
        also reduce your risk of having it again in future pregnancies or
        developing type 2 diabetes in the future.
      </Paragraph>
      <StyledList>
        <ListItem>Eat healthy foods</ListItem>
        <ListItem>Keep active</ListItem>
        <ListItem>Start pregnancy at a healthy weight</ListItem>
        <ListItem>Don't gain more weight than recommended</ListItem>
      </StyledList>
    </Wrapper>
  );
};
export default GestationalDiabetes;
