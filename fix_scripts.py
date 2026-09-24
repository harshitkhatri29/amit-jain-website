import re
import os

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace <script>...</script> with dangerouslySetInnerHTML
    # Note: we need to handle the content containing backticks properly, but JS inside html rarely has unescaped backticks if it's simple.
    def replacer(match):
        script_content = match.group(1)
        # Escape backticks and ${}
        script_content = script_content.replace('`', '\\`').replace('${', '\\${')
        return f'<script dangerouslySetInnerHTML={{{{ __html: `{script_content}` }}}} />'

    content = re.sub(r'<script>(.*?)</script>', replacer, content, flags=re.DOTALL)
    
    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))
