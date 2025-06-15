#!/usr/bin/env python3
"""
Script to replace "Choice Insurance Agency" with "Choice Insurance Hub" throughout the site
"""

import os
import glob

def replace_in_file(filepath):
    """Replace Choice Insurance Agency with Choice Insurance Hub in a file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file contains the text to replace
        if "Choice Insurance Agency" in content:
            # Create backup
            backup_path = filepath + '.branding_backup'
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Replace the text
            updated_content = content.replace("Choice Insurance Agency", "Choice Insurance Hub")
            
            # Write updated content
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(updated_content)
                
            print(f"✓ Updated: {filepath}")
            return True
        else:
            print(f"- No changes needed: {filepath}")
            return False
        
    except Exception as e:
        print(f"✗ Error processing {filepath}: {e}")
        return False

def main():
    """Main function to update branding throughout the site"""
    print("Starting site-wide branding update: Choice Insurance Agency → Choice Insurance Hub")
    
    # Find all relevant files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.jsx', 
        'src/**/*.ts',
        'src/**/*.js',
        'src/**/*.md',
        '*.md',
        '*.json'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates and sort
    files_to_process = sorted(list(set(files_to_process)))
    
    print(f"Found {len(files_to_process)} files to check")
    
    updated_count = 0
    for filepath in files_to_process:
        if replace_in_file(filepath):
            updated_count += 1
    
    print(f"\nCompleted branding update!")
    print(f"Updated {updated_count} files")
    print("All instances of 'Choice Insurance Agency' have been replaced with 'Choice Insurance Hub'")

if __name__ == "__main__":
    main()

