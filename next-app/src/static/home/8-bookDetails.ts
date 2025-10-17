export const BOOK_DETAILS = {
  sectionHeader: "My Reads",
  sectionDescription:
    "Reading helps me see the nuances of the world. Check back soon for a curated list of books that are shaping my thinking.",
  placeholder:
    "Reading list coming soon—I'm curating a mix of analytics, leadership, and creative titles to share here.",
  currentlyReading: [] as {
    title: string;
    author: string;
    cover: string;
  }[],
  earlierReads: [] as {
    title: string;
    author: string;
    cover: string;
  }[],
};
