import fs from 'fs';
import path from 'path';

export async function fetchJobPosts() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/jobPosts.json');
    console.log('File Path:', filePath); // Log the file path for debugging
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading or parsing job posts:', error);
    return [];
  }
}
