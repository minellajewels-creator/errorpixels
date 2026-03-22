// ─────────────────────────────────────────────────────────────
// Google Drive Configuration for Error Pixels Gallery
// ─────────────────────────────────────────────────────────────
//
// HOW TO SETUP:
// 1. Go to your Google Drive folder
// 2. Right-click → Share → Change to "Anyone with the link"
// 3. Copy the Folder ID from the URL:
//    https://drive.google.com/drive/folders/[FOLDER_ID_HERE]
// 4. Paste the Folder ID below for each category
//
// OPTION A: Embed entire folder (simple)
//   Just paste the folder ID — it will embed the Drive viewer
//
// OPTION B: List individual files (recommended for masonry grid)
//   Add each file to DRIVE_ITEMS[category] array
//   Get file ID from: drive.google.com/file/d/[FILE_ID]/view
//   Image URL format: https://drive.google.com/uc?export=view&id=FILE_ID
//   Video URL format: https://drive.google.com/file/d/FILE_ID/preview
//
// ─────────────────────────────────────────────────────────────

const DRIVE_FOLDERS = {
  wedding:    'YOUR_FOLDER_ID',   // Replace with actual Google Drive folder ID
  prewedding: 'YOUR_FOLDER_ID',
  arangetram: 'YOUR_FOLDER_ID',
  modelling:  'YOUR_FOLDER_ID',
  branding:   'YOUR_FOLDER_ID',
};

// ─────────────────────────────────────────────────────────────
// OPTIONAL: List individual files for masonry grid display
// Format: { type: 'image' | 'video', src: 'URL', alt: 'caption' }
//
// Example:
// const DRIVE_ITEMS = {
//   wedding: [
//     { type: 'image', src: 'https://drive.google.com/uc?export=view&id=FILE_ID', alt: 'Wedding 1' },
//     { type: 'video', src: 'https://drive.google.com/file/d/FILE_ID/preview', alt: 'Wedding Film' },
//   ],
//   prewedding: [
//     { type: 'image', src: 'https://drive.google.com/uc?export=view&id=FILE_ID', alt: 'Pre-Wedding 1' },
//   ],
// };
// ─────────────────────────────────────────────────────────────

const DRIVE_ITEMS = {
  wedding:    [],
  prewedding: [],
  arangetram: [],
  modelling:  [],
  branding:   [],
};
