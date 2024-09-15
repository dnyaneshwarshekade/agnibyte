// types/team.ts
export interface TeamType {
  id: number;
  name: string;
  designation: string;
  image: string;
  facebookLink?: string; // Making these optional as not all members might have these links
  instagramLink?: string;
  websiteLink?: string; // Added for personal or professional website links
  githubLink?: string; // Added for GitHub profiles
}
