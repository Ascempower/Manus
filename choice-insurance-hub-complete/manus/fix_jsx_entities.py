#!/usr/bin/env python3
"""
Script to fix unescaped entities in JSX text content only
This script carefully targets only text content within JSX elements
"""

import os
import re
import glob

def fix_jsx_text_entities(content):
    """
    Fix unescaped entities in JSX text content while preserving all other syntax
    """
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Skip lines that are imports, exports, or metadata
        if any(keyword in line for keyword in ['import ', 'export ', 'title:', 'description:', 'keywords:']):
            fixed_lines.append(line)
            continue
            
        # Skip lines that are primarily JSX attributes or JavaScript code
        if any(pattern in line for pattern in ['className=', 'href=', 'src=', 'const ', 'let ', 'var ', 'function']):
            fixed_lines.append(line)
            continue
            
        # Only process lines that look like JSX text content
        # Look for text between > and < or within JSX elements
        if '>' in line and '<' in line:
            # This might be JSX text content, carefully replace entities
            # Replace apostrophes that are clearly in text content
            line = re.sub(r'(>[^<]*?)\'([^<]*?<)', r'\1&apos;\2', line)
            # Replace standalone apostrophes in text
            line = re.sub(r'(\s)\'(\w)', r'\1&apos;\2', line)
            line = re.sub(r'(\w)\'(\s)', r'\1&apos;\2', line)
            line = re.sub(r'(\w)\'(\w)', r'\1&apos;\2', line)
            
        # Also handle simple text lines that contain apostrophes
        elif not any(char in line for char in ['=', '{', '}', '(', ')', '[', ']']) and "'" in line:
            # This looks like simple text content
            line = line.replace("'", "&apos;")
            
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def process_file(filepath):
    """Process a single file to fix JSX text entities"""
    print(f"Processing: {filepath}")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Create backup
        backup_path = filepath + '.entity_backup'
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Fix entities
        fixed_content = fix_jsx_text_entities(content)
        
        # Only write if content changed
        if fixed_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"  ✓ Fixed JSX text entities and backed up to {backup_path}")
        else:
            # Remove backup if no changes
            os.remove(backup_path)
            print(f"  - No changes needed")
        
    except Exception as e:
        print(f"  ✗ Error processing {filepath}: {e}")

def main():
    """Main function to process JSX/TSX files with unescaped entities"""
    print("Starting targeted fix of JSX text entities...")
    
    # Focus on the files we know have issues
    problem_files = [
        'src/app/blog/posts/[slug]/page.tsx',
        'src/app/blog/posts/march-2025-medicare-advantage-vs-supplement.tsx',
        'src/app/blog/posts/may-2025-health-insurance-changes.tsx',
        'src/app/faq/page.tsx',
        'src/components/forms/ContactForm.tsx',
        'src/components/pages/ContactPage.jsx',
        'src/components/pages/HomePage.jsx'
    ]
    
    # Add any other TSX/JSX files that might have issues
    all_files = glob.glob('src/**/*.tsx', recursive=True) + glob.glob('src/**/*.jsx', recursive=True)
    
    files_to_process = list(set(problem_files + all_files))
    
    print(f"Found {len(files_to_process)} files to check")
    
    for filepath in files_to_process:
        if os.path.exists(filepath):
            process_file(filepath)
    
    print("Completed processing all files.")

if __name__ == "__main__":
    main()

