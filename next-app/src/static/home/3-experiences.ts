type IndividualExperience = {
  title: string;
  job: string;
  date: string;
  contents: string[];
};

export type Experience = {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  experienceBody: IndividualExperience[];
};

export const EXPERIENCES: Experience = {
  sectionEyebrow: "Real-world Engagements",
  sectionTitle: "My Experiences",
  sectionDescription:
    "Analytics consulting, data engineering, and academic milestones that shape my journey.",
  experienceBody: [
    {
      title: "Data Science & Analytics Consultant",
      job: "Yonge Street Mission",
      date: "Jan 2025 - Apr 2025",
      contents: [
        "Conducted exploratory analyses across demographics, service delivery, and assessment datasets to uncover participant trends and program impact.",
        "Engineered and cleaned a consolidated dataset by merging initiation, service usage, and TIMES assessment records with custom Python-based imputation logic.",
        "Built XGBoost and Gradient Boosting models achieving roughly 0.57 R^2 to forecast participant outcomes from historical engagement and demographic signals.",
        "Produced interactive Power BI dashboards covering journey flows, demographics, KPIs, and service impact to inform leadership decisions.",
        "Designed and deployed an end-to-end Google Cloud Platform pipeline leveraging Cloud Storage, Compute Engine, and a scalable path to Looker Studio.",
        "Applied R and Python for statistical validation, highlighting high-value indicators such as Sense of Power and Self-Awareness for strategic planning.",
      ],
    },
    {
      title: "Digital Analytics Consultant",
      job: "RCIScience",
      date: "Apr 2024 - Jul 2024",
      contents: [
        "Led the migration from Universal Analytics to Google Analytics 4, preserving historical comparability and aligning tracking with refreshed KPIs.",
        "Configured custom GA4 events and conversions to capture nuanced engagement goals across the institute's digital properties.",
        "Built Looker Studio dashboards surfacing behavior, engagement, and conversion trends for real-time stakeholder insight.",
        "Analyzed historical UA data using R and Python to guide GA4 implementation choices and surface emerging audience trends.",
        "Improved data quality by refining tagging, data layers, and reporting workflows for more reliable analytics.",
        "Delivered documentation and walkthroughs enabling internal teams to operate GA4 and Looker Studio independently.",
      ],
    },
    {
      title: "Master of Professional Studies, Analytics with Applied Machine Learning",
      job: "Northeastern University",
      date: "Sep 2023 - Apr 2025",
      contents: [
        "Pursued advanced coursework in analytics, applied machine learning, and statistical modeling while maintaining a 3.95 GPA.",
        "Led hands-on projects connecting machine learning pipelines to business problem statements and measurable outcomes.",
        "Expanded expertise across Python, R, cloud tooling, and data storytelling to drive evidence-based decisions.",
      ],
    },
    {
      title: "Data Engineer",
      job: "Tata Consultancy Services",
      date: "Jan 2021 - Oct 2023",
      contents: [
        "Developed hybrid ETL pipelines in Azure Data Factory to move data between HDFS/Hive platforms and Azure cloud stores.",
        "Implemented batch and streaming workflows with Apache Spark, Python, Scala, and Kafka to power real-time analytics.",
        "Prototyped large-scale transformations in Azure Databricks to accelerate experimentation and delivery timelines.",
        "Automated validation and reporting scripts in Python, improving ETL accuracy and reducing manual effort.",
        "Designed warehousing solutions on Azure Synapse and Azure SQL, including complex stored procedures and business logic.",
        "Built interactive Power BI dashboards with dynamic KPIs and hierarchies enabling self-service analytics.",
        "Established Jenkins-based CI/CD pipelines and provided L1/L2 support to keep critical data flows reliable.",
      ],
    },
    {
      title: "Bachelor of Technology, Computer Science",
      job: "Anurag Group of Institutions",
      date: "Aug 2016 - Aug 2020",
      contents: [
        "Completed core computer science curriculum spanning algorithms, data structures, operating systems, and networks.",
        "Delivered team-based capstone projects that applied software engineering best practices to real-world requirements.",
        "Maintained a 9.39 GPA while contributing to research and extracurricular initiatives across the department.",
      ],
    },
  ],
};
