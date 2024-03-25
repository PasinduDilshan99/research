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

const Diabetes = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 50);

  const diabetesRef = useRef(null);
  const symptomsRef = useRef(null);
  const stagesRef = useRef(null);
  const type1StagesRef = useRef(null);
  const type2StagesRef = useRef(null);
  const endStageRef = useRef(null);
  const manageDiabetesRef = useRef(null);
  const causesRef = useRef(null);
  const riskFactorsRef = useRef(null);
  const complicationsRef = useRef(null);
  const preventionRef = useRef(null);

  return (
    <Wrapper>
      <NavigationLinks>
        <NavigationLink onClick={() => scrollToRef(diabetesRef)}>
          Diabetes
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(symptomsRef)}>
          Symptoms
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(stagesRef)}>
          What Are the Stages of Diabetes?
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(type1StagesRef)}>
          Stages of Type 1 Diabetes
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(type2StagesRef)}>
          Stages of Type 2 Diabetes
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(endStageRef)}>
          End-Stage Diabetes and Complications
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(manageDiabetesRef)}>
          Managing Diabetes
        </NavigationLink>
        <NavigationLink onClick={() => scrollToRef(causesRef)}>
          Causes of Diabetes
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

      <SectionTitle ref={diabetesRef}>Diabetes</SectionTitle>

      <Paragraph>
        Diabetes mellitus refers to a group of diseases that affect how the body
        uses blood sugar (glucose). Glucose is an important source of energy for
        the cells that make up the muscles and tissues. It's also the brain's
        main source of fuel.
      </Paragraph>

      <Paragraph>
        The main cause of diabetes varies by type. But no matter what type of
        diabetes you have, it can lead to excess sugar in the blood. Too much
        sugar in the blood can lead to serious health problems.
      </Paragraph>

      <Paragraph>
        Chronic diabetes conditions include type 1 diabetes and type 2 diabetes.
        Potentially reversible diabetes conditions include prediabetes and
        gestational diabetes. Prediabetes happens when blood sugar levels are
        higher than normal. But the blood sugar levels aren't high enough to be
        called diabetes. And prediabetes can lead to diabetes unless steps are
        taken to prevent it. Gestational diabetes happens during pregnancy. But
        it may go away after the baby is born.
      </Paragraph>

      <SectionTitle ref={symptomsRef}>Symptoms</SectionTitle>

      <Paragraph>
        Diabetes symptoms depend on how high your blood sugar is. Some people,
        especially if they have prediabetes, gestational diabetes, or type 2
        diabetes, may not have symptoms. In type 1 diabetes, symptoms tend to
        come on quickly and be more severe.
      </Paragraph>

      <Paragraph>
        Some of the symptoms of type 1 diabetes and type 2 diabetes are:
      </Paragraph>

      <ul>
        <li>Feeling more thirsty than usual.</li>
        <li>Urinating often.</li>
        <li>Losing weight without trying.</li>
        <li>
          Presence of ketones in the urine. Ketones are a byproduct of the
          breakdown of muscle and fat that happens when there's not enough
          available insulin.
        </li>
        <li>Feeling tired and weak.</li>
        <li>Feeling irritable or having other mood changes.</li>
        <li>Having blurry vision.</li>
        <li>Having slow-healing sores.</li>
        <li>
          Getting a lot of infections, such as gum, skin, and vaginal
          infections.
        </li>
      </ul>

      <Paragraph>
        Type 1 diabetes can start at any age. But it often starts during
        childhood or teen years. Type 2 diabetes, the more common type, can
        develop at any age. Type 2 diabetes is more common in people older than
        40. But type 2 diabetes in children is increasing.
      </Paragraph>

      <SectionTitle ref={stagesRef}>
        What Are the Stages of Diabetes?
      </SectionTitle>

      <Paragraph>
        Diabetes is an umbrella term for three primary conditions: type 1
        diabetes, type 2 diabetes, and gestational diabetes. According to
        guidelines established by experts in the field, there are multiple
        stages of diabetes, each of which is defined by physiological changes
        within the body.
      </Paragraph>

      <SectionTitle ref={type1StagesRef}>
        Stages of Type 1 Diabetes
      </SectionTitle>

      <Paragraph>
        In 2015, the ADA released a joint statement with the JDRF and Endocrine
        Society outlining the various stages of type 1 diabetes. Using the
        guideline below, clinicians can more easily diagnose this condition at
        an earlier stage, even when symptoms might not be present.
      </Paragraph>

      <SubSectionTitle>Pre-Stage 1</SubSectionTitle>

      <Paragraph>
        In this stage, genetic analysis can help identify underlying genotypes
        that are commonly associated with type 1 diabetes. According to the
        research, a specific region on chromosome six – called the HLA region –
        is associated with up to 50% of the risk for developing this condition.
        Other factors, like having a sibling or close relative with type 1
        diabetes, can also increase disease risk.
      </Paragraph>

      <SubSectionTitle>Stage 1</SubSectionTitle>

      <Paragraph>
        In this stage, at least one diabetes-related autoantibody is present in
        the blood. At this point, these autoantibodies have already begun to
        attack the beta cells in the pancreas. But blood sugar levels still
        remain within the normal range, and no symptoms are present.
      </Paragraph>

      <SubSectionTitle>Stage 2</SubSectionTitle>

      <Paragraph>
        In this stage, at least two or more diabetes-related autoantibodies are
        present in the blood. As the beta cells continue to be destroyed by the
        immune system, a lack of insulin leads to rising blood sugar levels due
        to glucose intolerance. Although beta cell dysfunction is more serious
        at this stage, there are still no symptoms yet.
      </Paragraph>

      <SubSectionTitle>Stage 3</SubSectionTitle>

      <Paragraph>
        In this stage, there’s a significant loss of beta cells due to
        autoimmunity, and symptoms are present, resulting in a type 1 diabetes
        diagnosis. During this stage, the symptoms of type 1 diabetes may
        include excessive hunger or thirst, blurry vision, severe fatigue,
        frequent urination, and unexplained weight loss.
      </Paragraph>

      <SectionTitle ref={type2StagesRef}>
        Stages of Type 2 Diabetes
      </SectionTitle>

      <Paragraph>
        In 2018, the AACE created the dysglycemia-based chronic disease (DBCD)
        multimorbidity care model. Much like the previous guidelines above from
        2015, the DBCD care model helps clinicians take preventative steps to
        reduce type 2 diabetes complications.
      </Paragraph>

      <SubSectionTitle>Stage 1</SubSectionTitle>

      <Paragraph>
        This stage, defined as insulin resistance, is where muscle, fat, and
        liver cells become resistant to insulin and have trouble bringing
        glucose into the cell. But the pancreas compensates for this by
        producing more insulin, which helps keep blood sugar levels within the
        normal range.
      </Paragraph>

      <SubSectionTitle>Stage 2</SubSectionTitle>

      <Paragraph>
        In this stage, also known as prediabetes, cells become so insulin
        resistant that the extra insulin isn’t enough to lower blood sugar
        levels back to normal. In some cases, beta cell dysfunction may also be
        present. During this stage, blood glucose levels remain higher than
        normal, but not high enough to be classified as diabetes.
      </Paragraph>

      <SubSectionTitle>Stage 3</SubSectionTitle>

      <Paragraph>
        In this stage, blood sugar levels remain abnormally high, leading to a
        diagnosis of type 2 diabetes. Both insulin resistance and beta cell
        dysfunction can lead to high blood sugar levels in type 2 diabetes.
        Without treatment, these elevated levels can cause long-term damage to
        the body.
      </Paragraph>

      <SubSectionTitle>Stage 4</SubSectionTitle>

      <Paragraph>
        In this stage, vascular complications can occur as a result of high
        blood sugar. As blood sugar levels remain high, damage can occur within
        the vascular system, leading to potential complications like
        albuminuria, chronic kidney disease, coronary artery disease, heart
        failure, peripheral neuropathy, and stroke.
      </Paragraph>

      <SectionTitle ref={endStageRef}>
        End-Stage Diabetes and Complications
      </SectionTitle>

      <Paragraph>
        While the term "end-stage diabetes" isn’t commonly used, diabetes can
        lead to advanced complications known as end-stage diabetic
        complications. These complications, such as end-stage renal disease,
        typically occur after many years of living with diabetes.
      </Paragraph>

      <Paragraph>
        A 2019 studyTrusted Source found that micro vascular complications from
        diabetes, including nephropathy, can increase the risk of cardiovascular
        events and death in individuals with type 1 diabetes.
      </Paragraph>

      <SectionTitle ref={manageDiabetesRef}>Managing Diabetes</SectionTitle>

      <Paragraph>
        Diabetes, while not curable, can be effectively managed through various
        treatments, including medications, dietary changes, and lifestyle
        interventions.
      </Paragraph>

      <SubSectionTitle>Medications</SubSectionTitle>

      <Paragraph>
        Medications for diabetes play a crucial role in maintaining stable blood
        sugar levels. This may involve insulin injections, amylinomimetic drugs,
        alpha-glucosidase inhibitors, and other medications. Additionally,
        medications for managing high cholesterol, high blood pressure, and
        heart health are often prescribed to reduce the risk of complications.
      </Paragraph>

      <SubSectionTitle>Dietary Changes</SubSectionTitle>

      <Paragraph>
        Dietary changes are essential for managing diabetes and balancing blood
        sugar, blood pressure, and cholesterol levels. Focus on a diet rich in
        whole foods such as fruits, vegetables, whole grains, and lean protein.
        Limit the intake of foods high in sugar, salt, saturated fat, and trans
        fat.
      </Paragraph>

      <SubSectionTitle>Lifestyle Interventions</SubSectionTitle>

      <Paragraph>
        Lifestyle interventions are a key aspect of diabetes management.
        Regularly checking blood glucose, blood pressure, and cholesterol levels
        is crucial. Aim for at least 30 minutes of physical activity per day,
        and consider reducing or eliminating smoking and excessive alcohol
        consumption.
      </Paragraph>

      <Paragraph>
        Managing a chronic health condition like diabetes can be overwhelming,
        but your healthcare team is there to help you create a personalized
        diabetes treatment plan that works best for your needs.
      </Paragraph>

      <SectionTitle ref={causesRef}>Causes of Diabetes</SectionTitle>

      <Paragraph>
        To understand diabetes, it's crucial to comprehend how the body
        typically utilizes glucose.
      </Paragraph>

      <SubSectionTitle>How Insulin Works</SubSectionTitle>

      <Paragraph>
        Insulin, a hormone produced by the pancreas, plays a key role in glucose
        regulation:
      </Paragraph>

      <ul>
        <li>The pancreas releases insulin into the bloodstream.</li>
        <li>Insulin circulates, allowing sugar to enter cells.</li>
        <li>Insulin lowers the amount of sugar in the bloodstream.</li>
        <li>
          As blood sugar drops, insulin secretion from the pancreas decreases.
        </li>
      </ul>

      <SubSectionTitle>The Role of Glucose</SubSectionTitle>

      <Paragraph>
        Glucose, a sugar and energy source for cells, comes from food and the
        liver:
      </Paragraph>

      <ul>
        <li>
          Sugar is absorbed into the bloodstream with the help of insulin.
        </li>
        <li>The liver stores and produces glucose.</li>
        <li>
          During low glucose levels, the liver breaks down stored glycogen into
          glucose, maintaining a typical range.
        </li>
      </ul>

      <Paragraph>
        The exact cause of most types of diabetes is unknown. Sugar builds up in
        the bloodstream due to insufficient insulin production by the pancreas.
        Both type 1 and type 2 diabetes may result from a combination of genetic
        and environmental factors, though the specific factors are unclear.
      </Paragraph>

      <SectionTitle ref={riskFactorsRef}>Risk Factors</SectionTitle>

      <Paragraph>
        Diabetes risk factors depend on the type. Family history plays a part in
        all types, and environmental factors and geography may contribute to
        type 1 diabetes risk. Factors include:
      </Paragraph>

      <ul>
        <li>
          Family history and presence of diabetes immune system cells
          (autoantibodies) in type 1 diabetes.
        </li>
        <li>Race or ethnicity, with higher risk for certain groups.</li>
        <li>
          Overweight or obesity increases the risk of prediabetes, type 2
          diabetes, and gestational diabetes.
        </li>
      </ul>

      <SectionTitle ref={complicationsRef}>Complications</SectionTitle>

      <Paragraph>
        Long-term complications of diabetes develop gradually, becoming more
        severe with uncontrolled blood sugar. Possible complications include:
      </Paragraph>

      <ul>
        <li>
          <strong>Heart and blood vessel disease:</strong> Increased risk of
          heart problems, chest pain, heart attack, stroke, and atherosclerosis.
        </li>
        <li>
          <strong>Nerve damage (diabetic neuropathy):</strong> Tingling,
          numbness, burning, or pain, especially in the legs, with potential
          digestive and erectile dysfunction issues.
        </li>
        <li>
          <strong>Kidney damage (diabetic nephropathy):</strong> Damage to the
          filtering system of the kidneys.
        </li>
        <li>
          <strong>Eye damage (diabetic retinopathy):</strong> Blood vessel
          damage leading to potential blindness.
        </li>
        <li>
          <strong>Foot damage:</strong> Increased risk of complications due to
          nerve damage or poor blood flow.
        </li>
        <li>
          <strong>Skin and mouth conditions:</strong> Higher susceptibility to
          bacterial and fungal infections.
        </li>
        <li>
          <strong>Hearing impairment:</strong> Increased prevalence in people
          with diabetes.
        </li>
        <li>
          <strong>Alzheimer's disease:</strong> Type 2 diabetes may elevate the
          risk of dementia.
        </li>
        <li>
          <strong>Depression related to diabetes:</strong> Common in people with
          type 1 and type 2 diabetes.
        </li>
      </ul>
      <SectionTitle ref={preventionRef}>Prevention</SectionTitle>

      <Paragraph>
        Type 1 diabetes can't be prevented. However, adopting healthy lifestyle
        choices is crucial for preventing and managing prediabetes, type 2
        diabetes, and gestational diabetes.
      </Paragraph>

      <SubSectionTitle>Eat Healthy Foods</SubSectionTitle>

      <Paragraph>
        Choose foods that are lower in fat and calories while being higher in
        fiber. Focus on a variety of fruits, vegetables, and whole grains to
        ensure a balanced and nutritious diet.
      </Paragraph>

      <SubSectionTitle>Get More Physical Activity</SubSectionTitle>

      <Paragraph>
        Aim for about 30 minutes of moderate aerobic activity on most days of
        the week. Alternatively, you can strive for at least 150 minutes of
        moderate aerobic activity per week. Examples include taking a brisk
        daily walk. If a long workout is challenging, break it into smaller
        sessions throughout the day.
      </Paragraph>

      <SubSectionTitle>Lose Excess Pounds</SubSectionTitle>

      <Paragraph>
        If you're overweight, even losing 7% of your body weight can
        significantly lower the risk of diabetes. For instance, if you weigh 200
        pounds (90.7 kilograms), losing 14 pounds (6.4 kilograms) can reduce the
        risk of diabetes. However, it's important not to attempt weight loss
        during pregnancy. Consult your healthcare provider to determine a
        healthy weight gain plan during pregnancy.
      </Paragraph>

      <Paragraph>
        To maintain a healthy weight, focus on making long-term changes to your
        eating and exercise habits. Consider the overall benefits of weight
        loss, including a healthier heart, increased energy, and improved
        self-esteem.
      </Paragraph>

      <Paragraph>
        In some cases, medications may be an option. Oral diabetes drugs like
        metformin (Glumetza, Fortamet, others) may help lower the risk of type 2
        diabetes. However, healthy lifestyle choices remain essential. If you
        have prediabetes, ensure your blood sugar is checked at least once a
        year to monitor for the development of type 2 diabetes.
      </Paragraph>
    </Wrapper>
  );
};

export default Diabetes;
