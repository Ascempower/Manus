#!/usr/bin/env python3
"""
Script to fix unescaped entities in JSX files
This script intelligently replaces unescaped apostrophes and quotes with proper HTML entities
while preserving JSX attribute syntax.
"""

import os
import re
import glob

def fix_unescaped_entities(content):
    """
    Fix unescaped entities in JSX content while preserving JSX syntax
    """
    # Split content into lines for easier processing
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Skip lines that are primarily JSX attributes (contain = signs)
        if '=' in line and ('className=' in line or 'href=' in line or 'src=' in line):
            # This is likely a JSX attribute line, be more careful
            # Only fix apostrophes in text content, not in attribute values
            # Look for text content between > and <
            line = re.sub(r'(>[^<]*?)\'([^<]*?<)', r'\1&apos;\2', line)
        else:
            # This is likely text content, safe to replace apostrophes
            # Replace standalone apostrophes that are not part of HTML entities
            line = re.sub(r'(?<!&)\'(?![a-z]+;)', '&apos;', line)
            
            # Replace quotes in text content but not in JSX attributes
            # Look for quotes that are not part of JSX attribute syntax
            if not re.search(r'(className|href|src|id|alt|type|placeholder|value|name)\s*=\s*"', line):
                line = re.sub(r'(?<!&)"(?![a-z]+;)(?![^<]*>)', '&quot;', line)
    
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def process_file(filepath):
    """Process a single file to fix unescaped entities"""
    print(f"Processing: {filepath}")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Create backup
        backup_path = filepath + '.backup'
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Fix entities
        fixed_content = fix_unescaped_entities(content)
        
        # Write fixed content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
            
        print(f"  ✓ Fixed and backed up to {backup_path}")
        
    except Exception as e:
        print(f"  ✗ Error processing {filepath}: {e}")

def main():
    """Main function to process all JSX/TSX files"""
    print("Starting systematic fix of unescaped entities in JSX files...")
    
    # Find all React files
    patterns = ['src/**/*.tsx', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.js']
    files = []
    
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files)} files to process")
    
    for filepath in files:
        process_file(filepath)
    
    print("Completed processing all files.")
    print("Backup files created with .backup extension.")

if __name__ == "__main__":
    main()

