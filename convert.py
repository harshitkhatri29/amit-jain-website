import re
import os

def html_to_jsx(html):
    # Basic attribute replacements
    html = html.replace('class=', 'className=')
    html = html.replace('for=', 'htmlFor=')
    html = html.replace('stroke-width=', 'strokeWidth=')
    html = html.replace('stroke-linecap=', 'strokeLinecap=')
    html = html.replace('stroke-linejoin=', 'strokeLinejoin=')
    html = html.replace('fill-rule=', 'fillRule=')
    html = html.replace('clip-rule=', 'clipRule=')
    html = html.replace('stroke-miterlimit=', 'strokeMiterlimit=')
    html = html.replace('xml:space=', 'xmlSpace=')
    
    # Self-close unclosed tags
    for tag in ['img', 'input', 'br', 'hr']:
        html = re.sub(rf'<{tag}([^>]*?)(?<!/)>', rf'<{tag}\1 />', html)
    
    return html

def extract_and_convert(file_path):
    with open(file_path, 'r') as f:
        html = f.read()

    # Match main content inside body, excluding header and footer
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
    if not body_match:
        return
    body_html = body_match.group(1)

    # Extract Header
    header_match = re.search(r'<header[^>]*>.*?</header>', body_html, re.DOTALL)
    header_html = header_match.group(0) if header_match else ''
    
    # Extract Footer
    footer_match = re.search(r'<footer[^>]*>.*?</footer>', body_html, re.DOTALL)
    footer_html = footer_match.group(0) if footer_match else ''
    
    # Extract Main (everything else)
    main_html = body_html
    if header_html:
        main_html = main_html.replace(header_html, '')
    if footer_html:
        main_html = main_html.replace(footer_html, '')

    return html_to_jsx(header_html), html_to_jsx(main_html), html_to_jsx(footer_html)

# Process home page
header, main, footer = extract_and_convert('/Users/harshitkhatri/.gemini/antigravity-ide/brain/6a50c898-bf39-4f93-bcb6-97c620aadade/scratch/home.html')

with open('src/components/Header.tsx', 'w') as f:
    f.write('import Link from "next/link";\nexport default function Header() {\n  return (\n    ' + header + '\n  );\n}\n')

with open('src/components/Footer.tsx', 'w') as f:
    f.write('import Link from "next/link";\nexport default function Footer() {\n  return (\n    ' + footer + '\n  );\n}\n')

with open('src/app/page.tsx', 'w') as f:
    f.write('''import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      ''' + main + '''
      <Footer />
    </>
  );
}
''')

# Process Implants page
_, impl_main, _ = extract_and_convert('/Users/harshitkhatri/.gemini/antigravity-ide/brain/6a50c898-bf39-4f93-bcb6-97c620aadade/scratch/implants.html')
os.makedirs('src/app/treatments/dental-implants', exist_ok=True)
with open('src/app/treatments/dental-implants/page.tsx', 'w') as f:
    f.write('''import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DentalImplants() {
  return (
    <>
      <Header />
      ''' + impl_main + '''
      <Footer />
    </>
  );
}
''')

# Process RCT page
_, rct_main, _ = extract_and_convert('/Users/harshitkhatri/.gemini/antigravity-ide/brain/6a50c898-bf39-4f93-bcb6-97c620aadade/scratch/rct.html')
os.makedirs('src/app/treatments/root-canal', exist_ok=True)
with open('src/app/treatments/root-canal/page.tsx', 'w') as f:
    f.write('''import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootCanal() {
  return (
    <>
      <Header />
      ''' + rct_main + '''
      <Footer />
    </>
  );
}
''')

