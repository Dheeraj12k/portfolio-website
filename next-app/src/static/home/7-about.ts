import bookImage from "@/assets/images/bookCover.png";
import mapImage from "@/assets/images/torontoMap.png";
import smileMemoji from "@/assets/images/smileFace.png";
import PythonIcon from "@/assets/icons/python-icon.svg";
import AzureDataFactoryIcon from "@/assets/icons/data-factory.svg";
import AzureSynapseIcon from "@/assets/icons/Azure-Synapse-Analytics.svg";
import DatabricksIcon from "@/assets/icons/Databricks.svg";
import SQLIcon from "@/assets/icons/SQL.svg";
import GitIcon from "@/assets/icons/git.svg";
import ApacheSparkIcon from "@/assets/icons/apache_spark.svg";
import DeltaLakeIcon from "@/assets/icons/delta-lake.svg";

const hobbyList = [
  {
    title: "Reading",
    emoji: "📚",
    left: "15%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Dancing",
    emoji: "💃",
    left: "35%",
    top: "40%",
  },
  {
    title: "Journaling",
    emoji: "📓",
    left: "5%",
    top: "35%",
  },
  {
    title: "Walking",
    emoji: "🥾",
    left: "70%",
    top: "45%",
  },

  {
    title: "Meditating",
    emoji: "🧘",
    left: "15%",
    top: "65%",
  },
  {
    title: " Story Writing",
    emoji: "✍️",
    left: "45%",
    top: "70%",
  },
];

const toolboxItems = [
  {
    title: "Azure Data Factory",
    iconType: AzureDataFactoryIcon,
  },
  {
    title: "Azure Synapse Analytics",
    iconType: AzureSynapseIcon,
  },
  {
    title: "Databricks",
    iconType: DatabricksIcon,
  },
  {
    title: "Apache Spark",
    iconType: ApacheSparkIcon,
  },
  {
    title: "Delta Lake",
    iconType: DeltaLakeIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "SQL",
    iconType: SQLIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
];

export const ABOUT = {
    sectionHeader: {
    eyebrow: "About Me",
    title: "Behind the Code",
    description: "Get to know the person beyond the pipelines — what I do, what drives me, and what keeps me curious.",
    },
    bookSection: {
      title: "Books That Inspire Me",
      description: "A look at the reads that have influenced my thinking and approach to data, tech, and life.",
    },
    bookImage: bookImage,
    toolboxSection: {
      title: "Tech Stack & Tools",
      description: "A curated list of platforms, frameworks, and tools I rely on to build efficient and scalable data solutions.",
    },
    toolboxItems: toolboxItems,
    hobbySection: {
      title: "Life Outside Data",
      description: "From hobbies to creative outlets — here’s how I recharge and stay inspired beyond the tech world.",
    },
    hobbyList: hobbyList,
    locationMap: mapImage,
    mapMemojiIcon: smileMemoji
}
