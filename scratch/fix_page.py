import re

with open("src/app/page.tsx", "r") as f:
    content = f.read()

# 1. Add useState import
if 'import { useState }' not in content:
    content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { useState } from "react";')

# 2. Add state to Home
if 'const [activeTreatment' not in content:
    state_code = """
  const [activeTreatment, setActiveTreatment] = useState({
    id: '01',
    title: "Root Canal Treatment",
    desc: "Save deeply infected teeth in single painless sessions using rotary nickel-titanium instrumentation and 3D warm vertical compaction under magnification.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwklfb1rj9-_Nhwiv1PZEfNWYiCPf5KGellWwrv4FvvWVULeT64oE2S-FeBb_v1ljpGAunIJrC-y-yJxvuXYDk3Tt-Wa_gHk7Ct1BTJ8LG73sXsh8nNvzW-BMxHWXmkgnR2WmGnRLuoKqhovCboWgmhg-Qi6vD3OMRsatg6sSqrbLQKm6cJXsNggtdg0y19dIQCKU9CbYOsisER0SDBkyzLeQTAGSuUEgB-aS2tJJMVz6sAk1aihDovg"
  });

  const handleHover = (id, title, desc, img) => {
    setActiveTreatment({ id, title, desc, img });
  };
"""
    content = content.replace('export default function Home() {', 'export default function Home() {' + state_code)

# 3. Modify the Links to include onMouseEnter and dynamic classes.
# We will use regex to find each Link inside the treatments-list.
# The structure is <Link href="..." className="..." data-desc="..." data-img="..." data-title="...">
# We also have to handle 01 and 02 differently if they lack data-attributes.

# Let's extract the list section
list_start_idx = content.find('<div className="lg:col-span-7 flex flex-col border-b border-[#DCE3E1]" id="treatments-list">')
list_end_idx = content.find('{/* Right Column: Vertical Photo Preview Container */}', list_start_idx)

list_section = content[list_start_idx:list_end_idx]

# For each Link block, we want to extract id, title, desc, img and update the class
def process_link(match):
    block = match.group(0)
    # Extract ID from the span (e.g. 01, 02)
    id_match = re.search(r'>(\d{2})</span>', block)
    item_id = id_match.group(1) if id_match else "01"
    
    # Extract title, desc, img
    title_match = re.search(r'data-title="([^"]+)"', block)
    desc_match = re.search(r'data-desc="([^"]+)"', block)
    img_match = re.search(r'data-fallback-img="([^"]+)"', block)
    if not img_match:
        img_match = re.search(r'data-img="([^"]+)"', block)
        
    title = title_match.group(1) if title_match else ""
    desc = desc_match.group(1) if desc_match else ""
    img = img_match.group(1) if img_match else ""
    
    if item_id == "01":
        title = "Root Canal Treatment"
        desc = "Save deeply infected teeth in single painless sessions using rotary nickel-titanium instrumentation and 3D warm vertical compaction under magnification."
        img = "https://lh3.googleusercontent.com/aida-public/AB6AXuAwklfb1rj9-_Nhwiv1PZEfNWYiCPf5KGellWwrv4FvvWVULeT64oE2S-FeBb_v1ljpGAunIJrC-y-yJxvuXYDk3Tt-Wa_gHk7Ct1BTJ8LG73sXsh8nNvzW-BMxHWXmkgnR2WmGnRLuoKqhovCboWgmhg-Qi6vD3OMRsatg6sSqrbLQKm6cJXsNggtdg0y19dIQCKU9CbYOsisER0SDBkyzLeQTAGSuUEgB-aS2tJJMVz6sAk1aihDovg"
    elif item_id == "02":
        title = "Dental Implants"
        desc = "YOUR EXISTING DATA DESC"
        img = "YOUR EXISTING DATA IMG"

    # Now replace className
    # Original class: className="treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 bg-[#EAEFEA]"
    # Or without bg-[#EAEFEA]
    
    # We remove the static bg-[#EAEFEA] if present
    block = block.replace(' bg-[#EAEFEA]', '')
    
    # Replace the class string
    class_pattern = r'className="treatment-item([^"]+)"'
    # We will replace it with: className={`treatment-item$1 ${activeTreatment.id === '01' ? 'bg-[#EAEFEA] active' : ''}`}
    def class_repl(m):
        return f'className={{`treatment-item{m.group(1)} ${{activeTreatment.id === \'{item_id}\' ? \'bg-[#EAEFEA] active\' : \'\'}}`}} onMouseEnter={{() => handleHover(\'{item_id}\', "{title}", "{desc}", "{img}")}}'
        
    block = re.sub(class_pattern, class_repl, block)
    
    # Replace arrow class
    arrow_pattern = r'<span className="([^"]+) transition-transform'
    def arrow_repl(m):
        base_classes = m.group(1).replace('text-[#172124]/70 group-hover:text-primary', '').replace('text-[#172124] font-bold', 'text-lg').strip()
        # We ensure it's text-lg
        return f'<span className={{`text-lg transition-transform group-hover:translate-x-1 duration-200 ${{activeTreatment.id === \'{item_id}\' ? \'text-[#172124] font-bold\' : \'text-[#172124]/70 group-hover:text-primary\'}}`}}'
        
    # Find the last span that is the arrow
    arrow_match = re.search(r'<span className="[^"]+ transition-transform[^"]+">→</span>', block)
    if arrow_match:
        old_arrow = arrow_match.group(0)
        # Construct new arrow
        new_arrow = f'<span className={{`text-lg transition-transform group-hover:translate-x-1 duration-200 ${{activeTreatment.id === \'{item_id}\' ? \'text-[#172124] font-bold\' : \'text-[#172124]/70 group-hover:text-primary\'}}`}}>→</span>'
        block = block.replace(old_arrow, new_arrow)

    return block

new_list_section = re.sub(r'<Link.*?</Link>', process_link, list_section, flags=re.DOTALL)

content = content[:list_start_idx] + new_list_section + content[list_end_idx:]

# 4. Update the preview block
preview_block_start = content.find('<div className="lg:col-span-5 sticky top-28">')
preview_block_end = content.find('</div>\n            </div>\n          </div>\n          <script', preview_block_start)

preview_block = content[preview_block_start:preview_block_end]
preview_block = preview_block.replace('src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwklfb1rj9-_Nhwiv1PZEfNWYiCPf5KGellWwrv4FvvWVULeT64oE2S-FeBb_v1ljpGAunIJrC-y-yJxvuXYDk3Tt-Wa_gHk7Ct1BTJ8LG73sXsh8nNvzW-BMxHWXmkgnR2WmGnRLuoKqhovCboWgmhg-Qi6vD3OMRsatg6sSqrbLQKm6cJXsNggtdg0y19dIQCKU9CbYOsisER0SDBkyzLeQTAGSuUEgB-aS2tJJMVz6sAk1aihDovg"', 'src={activeTreatment.img}')
preview_block = preview_block.replace('>Root Canal Treatment</span>', '>{activeTreatment.title}</span>')
preview_block = preview_block.replace('>Save deeply infected teeth in single painless sessions using rotary nickel-titanium instrumentation and 3D warm vertical compaction under magnification.</p>', '>{activeTreatment.desc}</p>')

content = content[:preview_block_start] + preview_block + content[preview_block_end:]

# 5. Remove the script tag entirely
script_start = content.find('<script dangerouslySetInnerHTML={{')
script_end = content.find('</script>', script_start)
if script_start != -1 and script_end != -1:
    # Also remove the wrapper </div> if it's part of the script? No, script is a sibling.
    # We should remove up to `  \` }} />` instead of `</script>` because it uses dangerouslySetInnerHTML
    tag_end = content.find('}} />', script_start) + 5
    content = content[:script_start] + content[tag_end:]

with open("src/app/page.tsx", "w") as f:
    f.write(content)
print("page.tsx updated")
