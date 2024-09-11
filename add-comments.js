const fs = require('fs');
const path = require('path');

// Define the comment to add
const comment = `// Date: ${new Date().toISOString().split('T')[0]}\n// Description: Added touch event handling for mobile devices.\n\n`;

// Function to add comments to files
const addCommentsToFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    if (!data.startsWith('// Date:')) { // Check if the comment already exists
      fs.writeFileSync(filePath, comment + data, 'utf8');
      console.log(`Added comments to: ${filePath}`);
    } else {
      console.log(`Comments already exist in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
  }
};

// Function to traverse directories and files
const traverseDirectory = (dirPath) => {
  try {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        traverseDirectory(fullPath);
      } else if (stat.isFile() && /\.(tsx|ts)$/.test(file)) { // Adjust file extensions as needed
        console.log(`Processing file: ${fullPath}`);
        addCommentsToFile(fullPath);
      }
    });
  } catch (error) {
    console.error(`Error traversing directory ${dirPath}:`, error.message);
  }
};

// Start from the current directory
traverseDirectory(path.join(__dirname, 'src')); // Adjust the directory as needed
