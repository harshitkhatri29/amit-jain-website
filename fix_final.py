import re
import os

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Fix the background image split issue
    content = re.sub(r'backgroundImage: "url\(&quot", https: "(//[^"]+)&quot"', r'backgroundImage: "url(\'https:\1\')"', content)
    
    # Fix onfocus
    content = content.replace('onfocus="this.showPicker()"', 'onFocus={(e) => (e.target as any).showPicker()}')
    content = content.replace('onfocus="', 'onFocus="')

    # Fix some boolean attributes that might still be strings
    # like aria-hidden="true" -> aria-hidden={true}
    content = re.sub(r'(aria-hidden)="true"', r'\1={true}', content)
    content = re.sub(r'(aria-hidden)="false"', r'\1={false}', content)
    content = re.sub(r'(required)=""', r'\1', content)
    content = re.sub(r'(disabled)=""', r'\1', content)

    # Some numbers in react props like rows="4" -> rows={4}
    content = re.sub(r'rows="(\d+)"', r'rows={\1}', content)
    
    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))
