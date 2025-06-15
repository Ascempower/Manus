#!/bin/bash

# Script to fix unescaped entities in JSX files
# This script replaces unescaped apostrophes and quotes with proper HTML entities

echo "Starting systematic fix of unescaped entities in JSX files..."

# Find all TypeScript and JavaScript React files
find src -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" | while read file; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Replace unescaped apostrophes with &apos; but avoid already escaped ones
    # This regex looks for apostrophes that are not already part of HTML entities
    sed -i "s/\([^&]\)'/\1\&apos;/g" "$file"
    sed -i "s/^'/\&apos;/g" "$file"
    
    # Replace unescaped quotes with &quot; but avoid already escaped ones
    # This is more complex as we need to avoid breaking JSX attributes
    # We'll focus on quotes within text content
    sed -i 's/\([^=][^"]*\)"\([^>]*\)/\1\&quot;\2/g' "$file"
    
    # Fix cases where the replacement might have been too aggressive
    # Restore proper JSX attribute quotes
    sed -i 's/className=\&quot;/className="/g' "$file"
    sed -i 's/href=\&quot;/href="/g' "$file"
    sed -i 's/id=\&quot;/id="/g' "$file"
    sed -i 's/src=\&quot;/src="/g' "$file"
    sed -i 's/alt=\&quot;/alt="/g' "$file"
    sed -i 's/type=\&quot;/type="/g' "$file"
    sed -i 's/placeholder=\&quot;/placeholder="/g' "$file"
    sed -i 's/value=\&quot;/value="/g' "$file"
    sed -i 's/name=\&quot;/name="/g' "$file"
    
done

echo "Completed processing all JSX files."
echo "Backup files created with .backup extension."

