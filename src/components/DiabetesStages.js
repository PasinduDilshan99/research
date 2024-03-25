import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 80vh;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  color: #3498db;
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 15px;
`;

const StrongText = styled.strong`
  color: #3498db; /* Blue color for strong text */
  font-weight: 700;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;

function DiabetesStages() {
  return (
    <Container>
      <Title>Diabetes</Title>
      <Description>
        Diabetes is a chronic condition that affects how your body uses glucose
        (sugar). The three main stages of diabetes are pre-diabetes, diabetes,
        and advanced diabetes.
      </Description>

      <Description>
        <StrongText>Overview:</StrongText> Diabetes is a chronic disease that
        occurs either when the pancreas does not produce enough insulin or when
        the body cannot effectively use the insulin it produces. Hyperglycaemia,
        also called raised blood glucose or raised blood sugar, is a common
        effect of uncontrolled diabetes and over time leads to serious damage to
        many of the body's systems, especially the nerves and blood vessels. In
        2014, 8.5% of adults aged 18 years and older had diabetes. In 2019,
        diabetes was the direct cause of 1.5 million deaths and 48% of all
        deaths due to diabetes occurred before the age of 70 years. Another
        460,000 kidney disease deaths were caused by diabetes, and raised blood
        glucose causes around 20% of cardiovascular deaths...
      </Description>
      <Description>
        Between 2000 and 2019, there was a 3% increase in age-standardized
        mortality rates from diabetes. In lower-middle-income countries, the
        mortality rate due to diabetes increased 13%. By contrast, the
        probability of dying from any one of the four main noncommunicable
        diseases (cardiovascular diseases, cancer, chronic respiratory diseases
        or diabetes) between the ages of 30 and 70 decreased by 22% globally
        between 2000 and 2019.
      </Description>

      <Description>
        <StrongText>Symptoms:</StrongText> Symptoms of diabetes may occur
        suddenly. In type 2 diabetes, the symptoms can be mild and may take many
        years to be noticed.
      </Description>
      <Description>
        Symptoms of diabetes include:
        <ul>
          <li>Feeling very thirsty</li>
          <li>Needing to urinate more often than usual</li>
          <li>Blurred vision</li>
          <li>Feeling tired</li>
          <li>Losing weight unintentionally</li>
        </ul>
      </Description>
      <Description>
        Over time, diabetes can damage blood vessels in the heart, eyes,
        kidneys, and nerves. People with diabetes have a higher risk of health
        problems, including heart attack, stroke, and kidney failure.
      </Description>

      <Description>
        <StrongText>What are the types of diabetes:</StrongText> There are
        several types of diabetes. The most common forms include:
      </Description>
      <Description>
        <ul>
          <li>
            <Description>
              <StrongText>Type 2 diabetes:</StrongText> With this type, your
              body doesn’t make enough insulin and/or your body’s cells don’t
              respond normally to the insulin (insulin resistance). This is the
              most common type of diabetes. It mainly affects adults, but
              children can have it as well.{" "}
              <Link to="/type2-diabetes">More details</Link>
            </Description>
          </li>
          <li>
            <Description>
              <StrongText>PreDiabetes:</StrongText> This type is the stage
              before Type 2 diabetes. Your blood glucose levels are higher than
              normal but not high enough to be officially diagnosed with Type 2
              diabetes. <Link to="/pre-diabetes">More details</Link>
            </Description>
          </li>
          <li>
            <Description>
              <StrongText>Type 1 diabetes:</StrongText> This type is an
              autoimmune disease in which your immune system attacks and
              destroys insulin-producing cells in your pancreas for unknown
              reasons. Up to 10% of people who have diabetes have Type 1. It’s
              usually diagnosed in children and young adults, but it can develop
              at any age. <Link to="/type1-diabetes">More details</Link>
            </Description>
          </li>
          <li>
            <Description>
              <StrongText>Gestational diabetes:</StrongText> This type develops
              in some people during pregnancy. Gestational diabetes usually goes
              away after pregnancy. However, if you have gestational diabetes,
              you’re at a higher risk of developing Type 2 diabetes later in
              life. <Link to="/gestational-diabetes">More details</Link>
            </Description>
          </li>
          <li>
            <StrongText>Other types of diabetes include:</StrongText>
            <ul>
              <li>
                <StrongText>Type 3c diabetes:</StrongText> This form of diabetes
                happens when your pancreas experiences damage (other than
                autoimmune damage), which affects its ability to produce
                insulin. Pancreatitis, pancreatic cancer, cystic fibrosis, and
                hemochromatosis can all lead to pancreas damage that causes
                diabetes. Having your pancreas removed (pancreatectomy) also
                results in Type 3c.
              </li>
              <li>
                <StrongText>
                  Latent autoimmune diabetes in adults (LADA):
                </StrongText>{" "}
                Like Type 1 diabetes, LADA also results from an autoimmune
                reaction, but it develops much more slowly than Type 1. People
                diagnosed with LADA are usually over the age of 30.
              </li>
              <li>
                <StrongText>
                  Maturity-onset diabetes of the young (MODY):
                </StrongText>{" "}
                MODY, also called monogenic diabetes, happens due to an
                inherited genetic mutation that affects how your body makes and
                uses insulin. There are currently over 10 different types of
                MODY. It affects up to 5% of people with diabetes and commonly
                runs in families.
              </li>
              <li>
                <StrongText>Neonatal diabetes:</StrongText> This is a rare form
                of diabetes that occurs within the first six months of life.
                It’s also a form of monogenic diabetes. About 50% of babies with
                neonatal diabetes have the lifelong form called permanent
                neonatal diabetes mellitus. For the other half, the condition
                disappears within a few months from onset, but it can come back
                later in life. This is called transient neonatal diabetes
                mellitus.
              </li>
              <li>
                <StrongText>Brittle diabetes:</StrongText> Brittle diabetes is a
                form of Type 1 diabetes that’s marked by frequent and severe
                episodes of high and low blood sugar levels. This instability
                often leads to hospitalization. In rare cases, a pancreas
                transplant may be necessary to permanently treat brittle
                diabetes.
              </li>
              {/* Add the rest of the types */}
            </ul>
          </li>
        </ul>
      </Description>

      <Description>
        <StrongText>How common is diabetes?</StrongText> Diabetes is common.
        Approximately 37.3 million people in the United States have diabetes,
        which is about 11% of the population. Type 2 diabetes is the most common
        form, representing 90% to 95% of all diabetes cases.
      </Description>
      <Description>
        About 537 million adults across the world have diabetes. Experts predict
        this number will rise to 643 million by 2030 and 783 million by 2045.
      </Description>

      <Description>
        <StrongText>What causes diabetes?</StrongText> Too much glucose
        circulating in your bloodstream causes diabetes, regardless of the type.
        However, the reason why your blood glucose levels are high differs
        depending on the type of diabetes.
      </Description>
      <Description>
        Causes of diabetes include:
        <ul>
          <li>
            <StrongText>Insulin resistance:</StrongText> Type 2 diabetes mainly
            results from insulin resistance. Insulin resistance happens when
            cells in your muscles, fat, and liver don’t respond as they should
            to insulin. Several factors and conditions contribute to varying
            degrees of insulin resistance, including obesity, lack of physical
            activity, diet, hormonal imbalances, genetics, and certain
            medications.
          </li>
          <li>
            <StrongText>Autoimmune disease:</StrongText> Type 1 diabetes and
            LADA happen when your immune system attacks the insulin-producing
            cells in your pancreas.
          </li>
          <li>
            <StrongText>Hormonal imbalances:</StrongText> During pregnancy, the
            placenta releases hormones that cause insulin resistance. You may
            develop gestational diabetes if your pancreas can’t produce enough
            insulin to overcome the insulin resistance. Other hormone-related
            conditions like acromegaly and Cushing syndrome can also cause Type
            2 diabetes.
          </li>
          {/* Add the rest of the causes */}
        </ul>
      </Description>

      <Description>
        <StrongText>The role of glucose:</StrongText> Glucose — a sugar — is a
        source of energy for the cells that make up muscles and other tissues.
      </Description>
      <Description>
        Glucose comes from two major sources: food and the liver.
        <ul>
          <li>
            Sugar is absorbed into the bloodstream, where it enters cells with
            the help of insulin.
          </li>
          <li>The liver stores and makes glucose.</li>
          <li>
            When glucose levels are low, such as when you haven't eaten in a
            while, the liver breaks down stored glycogen into glucose. This
            keeps your glucose level within a typical range.
          </li>
        </ul>
      </Description>
      <Description>
        The exact cause of most types of diabetes is unknown. In all cases,
        sugar builds up in the bloodstream because the pancreas doesn't produce
        enough insulin. Both type 1 and type 2 diabetes may be caused by a
        combination of genetic or environmental factors. It is unclear what
        those factors may be.
      </Description>

      <Description>
        <StrongText>Complications of diabetes:</StrongText> Diabetes can lead to
        acute (sudden and severe) and long-term complications — mainly due to
        extreme or prolonged high blood sugar levels.
      </Description>
      <Description>
        <StrongText>Acute diabetes complications:</StrongText> Acute diabetes
        complications that can be life-threatening include:
        <ul>
          <li>
            <StrongText>Hyperosmolar hyperglycemic state (HHS):</StrongText>{" "}
            This complication mainly affects people with Type 2 diabetes. It
            happens when your blood sugar levels are very high (over 600
            milligrams per deciliter or mg/dL) for a long period, leading to
            severe dehydration and confusion. It requires immediate medical
            treatment.
          </li>
          <li>
            <StrongText>Diabetes-related ketoacidosis (DKA):</StrongText> This
            complication mainly affects people with Type 1 diabetes or
            undiagnosed T1D. It happens when your body doesn’t have enough
            insulin. If your body doesn’t have insulin, it can’t use glucose for
            energy, so it breaks down fat instead. This process eventually
            releases substances called ketones, which turn your blood acidic.
            This causes labored breathing, vomiting, and loss of consciousness.
            DKA requires immediate medical treatment.
          </li>
          {/* Add the rest of the acute complications */}
        </ul>
      </Description>

      <Description>
        <StrongText>Diagnosis and Tests:</StrongText> How is diabetes diagnosed?
        Healthcare providers diagnose diabetes by checking your glucose level in
        a blood test. Three tests can measure your blood glucose level:
      </Description>
      <Description>
        <ul>
          <li>
            <StrongText>Fasting blood glucose test:</StrongText> For this test,
            you don’t eat or drink anything except water (fast) for at least
            eight hours before the test. As food can greatly affect blood sugar,
            this test allows your provider to see your baseline blood sugar.
          </li>
          <li>
            <StrongText>Random blood glucose test:</StrongText> “Random” means
            that you can get this test at any time, regardless of if you’ve
            fasted.
          </li>
          <li>
            <StrongText>A1c:</StrongText> This test, also called HbA1C or
            glycated hemoglobin test, provides your average blood glucose level
            over the past two to three months.
          </li>
        </ul>
      </Description>
      <Description>
        To screen for and diagnose gestational diabetes, providers order an oral
        glucose tolerance test.
      </Description>
      <Description>
        The following test results typically indicate if you don’t have
        diabetes, have prediabetes, or have diabetes. These values may vary
        slightly. In addition, healthcare providers rely on more than one test
        to diagnose diabetes.
      </Description>
      {/* Add the table here */}

      <Description>
        <StrongText>Management and Treatment:</StrongText> How is diabetes
        managed? Diabetes is a complex condition, so its management involves
        several strategies. In addition, diabetes affects everyone differently,
        so management plans are highly individualized.
      </Description>
      <Description>
        The four main aspects of managing diabetes include:
        <ul>
          <li>
            <StrongText>Blood sugar monitoring:</StrongText> Monitoring your
            blood sugar (glucose) is key to determining how well your current
            treatment plan is working. It gives you information on how to manage
            your diabetes on a daily — and sometimes even hourly — basis. You
            can monitor your levels with frequent checks with a glucose meter
            and finger stick and/or with a continuous glucose monitor (CGM). You
            and your healthcare provider will determine the best blood sugar
            range for you.
          </li>
          {/* Add the rest of the management aspects */}
        </ul>
      </Description>

      <Description>
        <StrongText>Prevention:</StrongText> How can I prevent diabetes? You
        can’t prevent autoimmune and genetic forms of diabetes. But there are
        some steps you can take to lower your risk for developing prediabetes,
        Type 2 diabetes, and gestational diabetes, including:
      </Description>
      <Description>
        <ul>
          <li>Eat a healthy diet, such as the Mediterranean diet.</li>
          <li>
            Get physically active. Aim for 30 minutes a day at least five days a
            week.
          </li>
          <li>Work to achieve a weight that’s healthy for you.</li>
          {/* Add the rest of the prevention steps */}
        </ul>
      </Description>

      <Description>
        <StrongText>Outlook / Prognosis:</StrongText> What is the prognosis for
        diabetes? The prognosis (outlook) for diabetes varies greatly depending
        on several factors, including:
      </Description>
      <Description>
        <ul>
          <li>The type of diabetes.</li>
          <li>
            How well you manage the condition over time and your access to
            diabetes care.
          </li>
          {/* Add the rest of the prognosis factors */}
        </ul>
      </Description>

      <Description>
        Chronic high blood sugar can cause severe complications, which are
        usually irreversible. Several studies have shown that untreated chronic
        high blood sugar shortens your lifespan and worsens your quality of
        life.
      </Description>
      <Description>
        In the United States, diabetes is the eighth leading cause of death. A
        large number of people with diabetes will die from a heart attack or
        stroke.
      </Description>

      <Description>
        However, it’s important to know that you can live a healthy life with
        diabetes. The following are key to a better prognosis:
        <ul>
          <li>Lifestyle changes.</li>
          <li>Regular exercise.</li>
          <li>Dietary changes.</li>
          <li>Regular blood sugar monitoring.</li>
          {/* Add the rest of the living with aspects */}
        </ul>
      </Description>

      <Description>
        <StrongText>Living With:</StrongText> When should I see my healthcare
        provider? If you haven’t been diagnosed with diabetes, you should see a
        healthcare provider if you have any symptoms of diabetes, such as
        increased thirst and frequent urination.
      </Description>
      <Description>
        If you have diabetes, you should see your provider who helps you manage
        diabetes (such as an endocrinologist) regularly.
      </Description>
      <Description>
        Being diagnosed with diabetes is a life-changing event, but it doesn’t
        mean you can’t live a happy and healthy life. Managing diabetes involves
        consistent care and diligence. While it’ll likely be very overwhelming
        at first, over time you’ll get a better grasp on managing the condition
        and being in tune with your body.
      </Description>
      <Description>
        Be sure to see your healthcare provider(s) regularly. Managing diabetes
        involves a team effort — you’ll want medical professionals, friends, and
        family on your side. Don’t be afraid to reach out to them if you need
        help.
      </Description>

      {/* Add the rest of the sections (Causes, Glucose Role, Complications, Diagnosis, Management, Prevention, Outlook/Prognosis, Living With) following the same pattern */}

      {/* Link to additional sections */}
      <Link to="/additional-section">
        <Button>Additional Section</Button>
      </Link>
    </Container>
  );
}

export default DiabetesStages;
