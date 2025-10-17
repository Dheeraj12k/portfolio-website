import type { ComponentType, SVGProps } from "react";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/python-icon.svg";
import JavaIcon from "@/assets/icons/javaIcon.svg";
import SQLIcon from "@/assets/icons/sqlIcon.svg";
import DockerIcon from "@/assets/icons/dockerIcon.svg";
import GithubActionIcon from "@/assets/icons/githubActionsIcon.svg";
import VSCodeIcon from "@/assets/icons/vsCodeIcon.svg";
import ScalaIcon from "@/assets/icons/scala.svg";
import RIcon from "@/assets/icons/r-project.svg";
import PandasIcon from "@/assets/icons/pandas.svg";
import NumpyIcon from "@/assets/icons/numpy.svg";
import SKlearnIcon from "@/assets/icons/Scikit_learn.svg";
import XGIcon from "@/assets/icons/xgboost.svg";
import MPlibIcon from "@/assets/icons/Matplotlib_icon.svg";
import JnotebookIcon from "@/assets/icons/jupyter.svg";
import JiraIcon from "@/assets/icons/Jira.svg";
import ConfluenceIcon from "@/assets/icons/Confluence.svg";
import PowerBIIcon from "@/assets/icons/power-bi.svg";
import LookerIcon from "@/assets/icons/looker-icon.svg";
import GA4Icon from "@/assets/icons/google-analytics.svg";
import GTMIcon from "@/assets/icons/google-tag-manager.svg";
import GCPIcon from "@/assets/icons/gcp.svg";
import GCSIcon from "@/assets/icons/google storage.svg";
import GCEIcon from "@/assets/icons/Compute Engine.svg";
import DatabricksIcon from "@/assets/icons/Databricks.svg";
import ADFIcon from "@/assets/icons/data-factory.svg";
import SynapseIcon from "@/assets/icons/Azure-Synapse-Analytics.svg";
import SparkIcon from "@/assets/icons/apache_spark.svg";
import KafkaIcon from "@/assets/icons/apache_kafka-icon.svg";
import JenkinsIcon from "@/assets/icons/jenkins-icon.svg";


type ToolDisplay = {
  title: string;
  iconType?: ComponentType<SVGProps<SVGSVGElement>>;
};

const programmingLanguages: ToolDisplay[] = [
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "SQL",
    iconType: SQLIcon,
  },
  {
    title: "Scala",
    iconType: ScalaIcon,
  },
  {
    title: "R",
    iconType: RIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
];

const dataScienceStack: ToolDisplay[] = [
  { title: "Pandas", iconType: PandasIcon },
  { title: "NumPy", iconType: NumpyIcon },
  { title: "scikit-learn", iconType: SKlearnIcon},
  { title: "XGBoost", iconType: XGIcon},
  { title: "Matplotlib", iconType: MPlibIcon},
  { title: "Jupyter Notebooks", iconType: JnotebookIcon},
];

const analyticsAndBI: ToolDisplay[] = [
  { title: "Power BI", iconType: PowerBIIcon},
  { title: "Looker Studio", iconType: LookerIcon},
  { title: "Google Analytics 4", iconType: GA4Icon},
  { title: "Google Tag Manager", iconType: GTMIcon},
];

const cloudAndDataPlatforms: ToolDisplay[] = [
  { title: "Google Cloud Platform", iconType: GCPIcon},
  { title: "Google Cloud Storage", iconType:GCSIcon },
  { title: "Google Compute Engine", iconType: GCEIcon},
  { title: "Azure Data Factory", iconType: ADFIcon},
  { title: "Azure Databricks", iconType: DatabricksIcon},
  { title: "Azure Synapse", iconType: SynapseIcon},
];

const dataEngineeringOps: ToolDisplay[] = [
  { title: "Apache Spark", iconType: SparkIcon},
  { title: "Apache Kafka", iconType: KafkaIcon},
  { title: "Docker", iconType: DockerIcon },
  { title: "Jenkins", iconType: JenkinsIcon},
  { title: "GitHub Actions", iconType: GithubActionIcon },
];

const collaborationTools: ToolDisplay[] = [
  { title: "GitHub", iconType: GithubIcon },
  { title: "Visual Studio Code", iconType: VSCodeIcon },
  { title: "Confluence", iconType: ConfluenceIcon},
  { title: "Jira", iconType: JiraIcon},
];

export const TOOLBOX_DETAIL = {
  sectionHeader: "My Toolbox",
  sectionDescription:
    "Technologies and platforms I rely on to deliver analytics products, machine learning workflows, and data engineering solutions.",
  mainSection: {
    sectionHeading: "Major Focus Areas",
    sectionDescription:
      "Where I invest most of my learning time: shipping data products, improving analytics strategy, and scaling cloud-native pipelines.",
    sectionItems: [
      "Applied Machine Learning",
      "Analytics Engineering",
      "Marketing & Product Analytics",
      "Cloud Data Architecture",
    ],
  },

  subsections: [
    {
      sectionHeading: "Programming & Querying",
      sectionDescription:
        "Languages I use for data wrangling, model development, and production services.",
      sectionItems: programmingLanguages,
    },
    {
      sectionHeading: "Data Science Stack",
      sectionDescription:
        "Libraries and tools that power my exploratory analysis and modeling workflow.",
      sectionItems: dataScienceStack,
    },
    {
      sectionHeading: "Analytics & Experimentation",
      sectionDescription:
        "Insights, measurement, and experimentation platforms I configure for stakeholders.",
      sectionItems: analyticsAndBI,
    },
    {
      sectionHeading: "Cloud & Data Platforms",
      sectionDescription:
        "Managed services I use to orchestrate data pipelines and serve analytics workloads.",
      sectionItems: cloudAndDataPlatforms,
    },
    {
      sectionHeading: "Data Engineering & Ops",
      sectionDescription:
        "Tooling that keeps pipelines resilient, automated, and ready for production.",
      sectionItems: dataEngineeringOps,
    },
    {
      sectionHeading: "Collaboration",
      sectionDescription:
        "Daily drivers for documentation, code review, and project coordination.",
      sectionItems: collaborationTools,
    },
  ],
};
