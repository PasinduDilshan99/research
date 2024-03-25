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
    color: #e74c3c; /* Change color on hover if desired */
    cursor: pointer; /* Change cursor on hover */
  }
`;

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 50,
    behavior: "smooth",
  });

const Type2Diabetes = () => {
  const type2DiabetesRef = useRef(null);
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
        <NavigationLink onClick={() => scrollToRef(type2DiabetesRef)}>
          Type 2 Diabetes
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
          How Insulin Works
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

      <SectionTitle ref={type2DiabetesRef}>Type 2 Diabetes</SectionTitle>

      <Paragraph>
        Type 2 diabetes is a condition that happens because of a problem in the
        way the body regulates and uses sugar as a fuel. That sugar, also called
        glucose, results in too much sugar circulating in the blood, leading to
        disorders of the circulatory, nervous, and immune systems.
      </Paragraph>

      <Paragraph>
        In type 2 diabetes, there are primarily two problems. The pancreas does
        not produce enough insulin, a hormone that regulates the movement of
        sugar into the cells. Additionally, cells respond poorly to insulin and
        take in less sugar.
      </Paragraph>

      <SubSectionTitle ref={overviewRef}>Overview</SubSectionTitle>
      <Paragraph>
        Type 2 diabetes used to be known as adult-onset diabetes, but both type
        1 and type 2 diabetes can begin during childhood and adulthood. Type 2
        is more common in older adults, but the increase in the number of
        children with obesity has led to more cases of type 2 diabetes in
        younger people.
      </Paragraph>
      <Paragraph>
        There's no cure for type 2 diabetes. Losing weight, eating well, and
        exercising can help manage the disease. If diet and exercise aren't
        enough to control blood sugar, diabetes medications or insulin therapy
        may be recommended.
      </Paragraph>

      <SubSectionTitle ref={symptomsRef}>Symptoms</SubSectionTitle>
      <StyledList>
        <ListItem>Increased thirst.</ListItem>
        <ListItem>Frequent urination.</ListItem>
        <ListItem>Increased hunger.</ListItem>
        <ListItem>Unintended weight loss.</ListItem>
        <ListItem>Fatigue.</ListItem>
        <ListItem>Blurred vision.</ListItem>
        <ListItem>Slow-healing sores.</ListItem>
        <ListItem>Frequent infections.</ListItem>
        <ListItem>Numbness or tingling in the hands or feet.</ListItem>
        <ListItem>
          Areas of darkened skin, usually in the armpits and neck.
        </ListItem>
      </StyledList>

      <SubSectionTitle ref={doctorRef}>When to see a doctor</SubSectionTitle>
      <Paragraph>
        See your health care provider if you notice any symptoms of type 2
        diabetes.
      </Paragraph>

      <SubSectionTitle ref={causesRef}>Causes</SubSectionTitle>
      <Paragraph>
        Type 2 diabetes is mainly the result of two problems:
      </Paragraph>
      <StyledList>
        <ListItem>
          Cells in muscle, fat, and the liver become resistant to insulin. As a
          result, the cells don't take in enough sugar.
        </ListItem>
        <ListItem>
          The pancreas can't make enough insulin to keep blood sugar levels
          within a healthy range.
        </ListItem>
      </StyledList>
      <Paragraph>
        Exactly why this happens is not known. Being overweight and inactive are
        key contributing factors.
      </Paragraph>

      {/* How insulin works */}
      <SubSectionTitle ref={insulinRef}>How Insulin Works</SubSectionTitle>
      <Paragraph>
        Insulin is a hormone that comes from the pancreas — a gland located
        behind and below the stomach. Insulin controls how the body uses sugar
        in the following ways:
      </Paragraph>
      <StyledList>
        <ListItem>
          Sugar in the bloodstream triggers the pancreas to release insulin.
        </ListItem>
        <ListItem>
          Insulin circulates in the bloodstream, enabling sugar to enter the
          cells.
        </ListItem>
        <ListItem>The amount of sugar in the bloodstream drops.</ListItem>
        <ListItem>
          In response to this drop, the pancreas releases less insulin.
        </ListItem>
      </StyledList>

      {/* The role of glucose */}
      <SubSectionTitle ref={glucoseRef}>The Role of Glucose</SubSectionTitle>
      <Paragraph>
        Glucose — a sugar — is a main source of energy for the cells that make
        up muscles and other tissues. The use and regulation of glucose include
        the following:
      </Paragraph>
      <StyledList>
        <ListItem>
          Glucose comes from two major sources: food and the liver.
        </ListItem>
        <ListItem>
          Glucose is absorbed into the bloodstream, where it enters cells with
          the help of insulin.
        </ListItem>
        <ListItem>The liver stores and makes glucose.</ListItem>
        <ListItem>
          When glucose levels are low, the liver breaks down stored glycogen
          into glucose to keep the body's glucose level within a healthy range.
        </ListItem>
      </StyledList>

      {/* In type 2 diabetes */}
      <Paragraph>
        In type 2 diabetes, this process doesn't work well. Instead of moving
        into the cells, sugar builds up in the blood. As blood sugar levels
        rise, the pancreas releases more insulin. Eventually, the cells in the
        pancreas that make insulin become damaged and can't make enough insulin
        to meet the body's needs.
      </Paragraph>

      {/* Risk factors */}
      <SubSectionTitle ref={riskFactorsRef}>Risk Factors</SubSectionTitle>
      <StyledList>
        <ListItem>Weight. Being overweight or obese is a main risk.</ListItem>
        <ListItem>
          Fat distribution. Storing fat mainly in the abdomen — rather than the
          hips and thighs — indicates a greater risk. The risk of type 2
          diabetes is higher in men with a waist circumference above 40 inches
          (101.6 centimeters) and in women with a waist measurement above 35
          inches (88.9 centimeters).
        </ListItem>
        <ListItem>
          Inactivity. The less active a person is, the greater the risk.
          Physical activity helps control weight, uses up glucose as energy and
          makes cells more sensitive to insulin.
        </ListItem>
        <ListItem>
          Family history. An individual's risk of type 2 diabetes increases if a
          parent or sibling has type 2 diabetes.
        </ListItem>
        {/* Continue adding risk factors */}
      </StyledList>

      {/* Complications */}
      <SubSectionTitle ref={complicationsRef}>Complications</SubSectionTitle>
      <Paragraph>
        Type 2 diabetes affects many major organs, including the heart, blood
        vessels, nerves, eyes, and kidneys. Also, factors that increase the risk
        of diabetes are risk factors for other serious diseases. Managing
        diabetes and controlling blood sugar can lower the risk for these
        complications and other medical conditions, including:
      </Paragraph>
      <StyledList>
        <ListItem>
          Heart and blood vessel disease. Diabetes is associated with an
          increased risk of heart disease, stroke, high blood pressure, and
          narrowing of blood vessels, a condition called atherosclerosis.
        </ListItem>
        <ListItem>
          Nerve damage in limbs. This condition is called neuropathy. High blood
          sugar over time can damage or destroy nerves, resulting in tingling,
          numbness, burning, pain, or eventual loss of feeling.
        </ListItem>
        {/* Continue adding complications */}
      </StyledList>

      {/* Prevention */}
      <SubSectionTitle ref={preventionRef}>Prevention</SubSectionTitle>
      <Paragraph>
        Healthy lifestyle choices can help prevent type 2 diabetes. If you've
        received a diagnosis of prediabetes, lifestyle changes may slow or stop
        the progression to diabetes.
      </Paragraph>
      <StyledList>
        <ListItem>
          Eating healthy foods. Choose foods lower in fat and calories and
          higher in fiber. Focus on fruits, vegetables, and whole grains.
        </ListItem>
        <ListItem>
          Getting active. Aim for 150 or more minutes a week of moderate to
          vigorous aerobic activity, such as a brisk walk, bicycling, running,
          or swimming.
        </ListItem>
        <ListItem>
          Losing weight. If you are overweight, losing a modest amount of weight
          and keeping it off may delay the progression from prediabetes to type
          2 diabetes.
        </ListItem>
        <ListItem>
          Avoiding long stretches of inactivity. Sitting still for long periods
          of time can increase the risk of type 2 diabetes. Try to get up every
          30 minutes and move around for at least a few minutes.
        </ListItem>
        {/* Continue adding prevention strategies */}
      </StyledList>

      {/* Medication for prediabetes */}
      <Paragraph>
        For people with prediabetes, metformin (Fortamet, Glumetza, others), a
        diabetes medication, may be prescribed to reduce the risk of type 2
        diabetes. This is usually prescribed for older adults who are obese and
        unable to lower blood sugar levels with lifestyle changes.
      </Paragraph>
    </Wrapper>
  );
};

export default Type2Diabetes;
