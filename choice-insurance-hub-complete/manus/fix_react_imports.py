#!/usr/bin/env python3
"""
Script to fix React import issues in TypeScript/JavaScript files
This script adds the default React import to files that use named imports from React
"""

import os
import re
import glob

def fix_react_imports(content):
    """
    Fix React imports by adding default React import when needed
    """
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Check if this line imports from 'react' but doesn't include default import
        if re.match(r"^import\s+\{[^}]+\}\s+from\s+['\"]react['\"];?\s*$", line):
            # Extract the named imports
            match = re.match(r"^import\s+\{([^}]+)\}\s+from\s+['\"]react['\"];?\s*$", line)
            if match:
                named_imports = match.group(1).strip()
                # Add React default import
                fixed_line = f"import React, {{ {named_imports} }} from 'react';"
                fixed_lines.append(fixed_line)
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def process_file(filepath):
    """Process a single file to fix React imports"""
    print(f"Processing: {filepath}")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file needs React import fixes
        if "from 'react'" in content and not re.search(r"import\s+React", content):
            # Create backup
            backup_path = filepath + '.import_backup'
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Fix imports
            fixed_content = fix_react_imports(content)
            
            # Write fixed content
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
                
            print(f"  ✓ Fixed React imports and backed up to {backup_path}")
        else:
            print(f"  - No React import fixes needed")
        
    except Exception as e:
        print(f"  ✗ Error processing {filepath}: {e}")

def main():
    """Main function to process all React files"""
    print("Starting systematic fix of React imports...")
    
    # Find all React files
    patterns = ['src/**/*.tsx', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.js']
    files = []
    
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    # Filter to only files that likely use React
    react_files = []
    for filepath in files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                if "from 'react'" in content:
                    react_files.append(filepath)
        except:
            continue
    
    print(f"Found {len(react_files)} files with React imports to process")
    
    for filepath in react_files:
        process_file(filepath)
    
    print("Completed processing all React files.")

if __name__ == "__main__":
    main()

