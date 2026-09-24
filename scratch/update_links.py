import re

with open("src/app/page.tsx", "r") as f:
    content = f.read()

# For each treatment, we need to find the <div className="treatment-item... starting with the specific comment
# and replace the <div with <Link href="..." and the matching </div> with </Link>

treatments = [
    ("03 Braces & Aligners", "braces-and-aligners"),
    ("04 Crowns & Bridges", "crowns-and-bridges"),
    ("05 Teeth Cleaning & Scaling", "teeth-cleaning-and-scaling"),
    ("06 Teeth Whitening", "teeth-whitening"),
    ("07 Veneers", "veneers"),
    ("08 Wisdom Tooth Removal", "wisdom-tooth-removal"),
    ("09 Pediatric & Kids Dentistry", "pediatric-and-kids-dentistry"),
]

for label, slug in treatments:
    # Find the block: {/* label */} ... <div className="treatment-item ... </div>
    # Because there are nested divs, we can just replace the first <div after the comment,
    # and the last </div> before the next comment or end of parent div.
    # A simpler way: just replace `<div className="treatment-item` with `<Link href="/treatments/{slug}" className="treatment-item`
    # BUT ONLY for the blocks that match the label.
    
    # We can split the content by the comment
    parts = content.split(f"{{/* {label}")
    if len(parts) == 2:
        before = parts[0]
        after = parts[1]
        
        # In 'after', replace the first '<div className="treatment-item' with '<Link href="/treatments/{slug}" className="treatment-item'
        after = after.replace('<div className="treatment-item', f'<Link href="/treatments/{slug}" className="treatment-item', 1)
        
        # Now we need to replace the corresponding </div> with </Link>.
        # We know each treatment item ends with:
        # </span>
        #                 </div>
        # And then the next comment starts.
        # We can just replace the first `                </div>\n                {/*` with `                </Link>\n                {/*`
        
        after = after.replace('                </div>\n                {/*', '                </Link>\n                {/*', 1)
        
        # For the last one (09), the next thing is not a comment, but the end of the parent div
        if label == "09 Pediatric & Kids Dentistry":
            after = after.replace('                </div>\n              </div>\n              {/* Right Column', '                </Link>\n              </div>\n              {/* Right Column', 1)
            
        content = before + f"{{/* {label}" + after

with open("src/app/page.tsx", "w") as f:
    f.write(content)

print("Links updated")
