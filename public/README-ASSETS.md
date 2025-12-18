# Landing Page Assets Guide

This document describes the assets needed for the landing page design.

## Required Assets

### 1. Branch Decoration SVG
**Filename**: `branch-v1.svg`  
**Location**: `/public/branch-v1.svg`  
**Dimensions**: 506.796px × 562.866px  
**Rotation**: 48.764deg  
**Usage**: Decorative branch graphic overlaying the video section  
**Color**: Green/natural tones (#B7CF4F)

### 2. Cloud Shape SVG
**Filename**: `union-cloud.svg`  
**Location**: `/public/union-cloud.svg`  
**Dimensions**: 658px × 339px  
**Usage**: Decorative cloud shape in the blog post section  
**Color**: Blue tones (#608AD9)

### 3. Video File
**Filename**: `wellness-video.mp4` (or any video format)  
**Location**: `/public/videos/wellness-video.mp4`  
**Dimensions**: 335px × 596px (portrait)  
**Duration**: Variable  
**Properties**: 
- Autoplay enabled
- Loop enabled
- Controls disabled (nodownload)
- Muted for autoplay compatibility
**Content**: "Erdung für Weihnachtsstress" (Grounding for Christmas stress)

## How to Add Assets

1. **Download assets from Figma**:
   - Open the Figma design
   - Select each asset
   - Export as SVG (for graphics) or appropriate video format
   - Use the exact dimensions specified above

2. **Place files in correct locations**:
   ```
   public/
   ├── branch-v1.svg
   ├── union-cloud.svg
   └── videos/
       └── wellness-video.mp4
   ```

3. **Update the code**:
   - In `app/page.tsx`, uncomment the asset usage lines
   - Remove placeholder elements
   - Test that all assets load correctly

## Asset Placeholder Locations in Code

Search for `TODO:` comments in `app/page.tsx` to find where assets need to be added:

- Line ~60: Cloud graphic placeholder
- Line ~145: Video player placeholder  
- Line ~160: Branch decoration placeholder

## Export Settings from Figma

### For SVG exports:
- Format: SVG
- Include: "id" attribute
- Outline: Stroke
- Simplify stroke: Yes (optional)

### For video:
- Format: MP4 (H.264 codec recommended)
- Resolution: 335×596px
- Framerate: 30fps recommended
- Compression: Medium to high for web delivery

## Notes

- All SVG assets should be optimized for web (remove unnecessary metadata)
- Video file should be compressed for faster loading
- Consider providing multiple video formats (mp4, webm) for browser compatibility
- Test on multiple devices to ensure proper rendering
