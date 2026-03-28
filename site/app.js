// ======================== PRODUCT DATA ========================
const products = [
  {
    id: 1, name: "The Ellwood Lounge", price: 3450, category: "living", material: "walnut",
    desc: "Sculpted American Walnut meets hand-stitched grain leather for unparalleled repose.",
    materialLabel: "American Walnut & Leather",
    featured: true,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=90&auto=format",
    variants: ["Natural Walnut", "Dark Walnut", "Ebony"]
  },
  {
    id: 2, name: "Gilded Arc Lamp", price: 820, category: "lighting", material: "brass",
    desc: "A sculptural lighting piece that casts warm, ambient shadows across any room. Hand-polished brushed brass with a linen-lined shade.",
    materialLabel: "Brushed Brass",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1920&q=90&auto=format",
    variants: ["Polished Brass", "Antique Brass", "Matte Black"]
  },
  {
    id: 3, name: "Soleil Velvet Chair", price: 1250, category: "living", material: "velvet",
    desc: "Deep-tufted forest velvet over a kiln-dried hardwood frame. A statement piece that invites conversation and comfort.",
    materialLabel: "Forest Velvet",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=90&auto=format",
    variants: ["Forest Green", "Midnight Blue", "Terracotta"]
  },
  {
    id: 4, name: "Moderna Sectional", price: 4200, category: "living", material: "linen",
    desc: "A low-profile modular sectional upholstered in Italian stone-washed linen. Configurable to any living space architecture.",
    materialLabel: "Italian Linen",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1920&q=90&auto=format",
    variants: ["Stone", "Natural", "Charcoal"]
  },
  {
    id: 5, name: "Petal Oak Table", price: 2100, category: "dining", material: "oak",
    desc: "Solid oak dining table with organic rounded edges and a minimalist pedestal base. Seats six comfortably.",
    materialLabel: "Solid Oak",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&q=90&auto=format",
    variants: ["Natural Oak", "Smoked Oak", "White Oak"]
  },
  {
    id: 6, name: "Helix Floor Lamp", price: 680, category: "lighting", material: "brass",
    desc: "A sinuous brass floor lamp with an adjustable arm. Casts a focused warm glow perfect for reading nooks.",
    materialLabel: "Brushed Brass & Marble",
    img: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=1920&q=90&auto=format",
    variants: ["Brass", "Nickel"]
  },
  {
    id: 7, name: "Arden Bed Frame", price: 2800, category: "bedroom", material: "walnut",
    desc: "A platform bed frame in solid American Walnut with an integrated floating nightstand. Minimalist geometry meets warmth.",
    materialLabel: "American Walnut",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&q=90&auto=format",
    variants: ["Natural", "Dark Walnut"]
  },
  {
    id: 8, name: "Tidal Linen Sofa", price: 3100, category: "living", material: "linen",
    desc: "Cloud-soft cushions wrapped in enzyme-washed Belgian linen. Deep seated for languid weekend afternoons.",
    materialLabel: "Belgian Linen",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1920&q=90&auto=format",
    variants: ["Oatmeal", "Stone", "Fog"]
  },
  {
    id: 9, name: "Vesper Dining Chair", price: 750, category: "dining", material: "velvet",
    desc: "Teal velvet dining chair with gold-finished slim legs. Elegant posture support meets visual drama.",
    materialLabel: "Teal Velvet & Gold Brass",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1920&q=90&auto=format",
    variants: ["Teal", "Emerald", "Blush"]
  },
  {
    id: 10, name: "Nocturne Nightstand", price: 580, category: "bedroom", material: "walnut",
    desc: "A floating-style walnut nightstand with a single soft-close drawer and open shelf. Refined simplicity.",
    materialLabel: "Walnut",
    img: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=1920&q=90&auto=format",
    variants: ["Natural", "Dark"]
  },
  {
    id: 11, name: "Veil Leather Armchair", price: 1890, category: "living", material: "leather",
    desc: "Full-grain Italian leather draped over a sculptural steel frame. Develops a rich patina over time.",
    materialLabel: "Italian Leather",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1920&q=90&auto=format",
    variants: ["Cognac", "Black", "Saddle"]
  },
  {
    id: 12, name: "Oak Console Table", price: 1350, category: "living", material: "oak",
    desc: "A slender console in white oak with tapered legs and a floating shelf. Perfect for entryways and hallways.",
    materialLabel: "White Oak",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=90&auto=format",
    variants: ["Natural Oak", "Bleached"]
  },
  // ======================== LOUNGE SERIES ========================
  {
    id: 13, name: "Emerald Velvet Sofa", price: 3200, category: "lounge", material: "velvet",
    desc: "A deep emerald green velvet sofa with brass-capped legs. Rich color meets sculptural silhouette for a dramatic living room centerpiece.",
    materialLabel: "Emerald Velvet & Brass",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=90&auto=format",
    variants: ["Emerald", "Sapphire", "Ruby"]
  },
  {
    id: 14, name: "Cognac Leather Daybed", price: 4100, category: "lounge", material: "leather",
    desc: "Full-grain cognac leather stretched over a blackened steel frame. A modern reinterpretation of the classic chaise longue.",
    materialLabel: "Full-Grain Cognac Leather",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1920&q=90&auto=format",
    variants: ["Cognac", "Saddle", "Espresso"]
  },
  {
    id: 15, name: "Midnight Club Chair", price: 1850, category: "lounge", material: "velvet",
    desc: "A deeply tufted club chair in midnight blue velvet. Channel stitching creates architectural lines that catch the light beautifully.",
    materialLabel: "Midnight Blue Velvet",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=90&auto=format",
    variants: ["Midnight Blue", "Charcoal", "Forest"]
  },
  {
    id: 16, name: "Blush Boucle Lounger", price: 2650, category: "lounge", material: "linen",
    desc: "Soft blush pink boucle upholstery on a curved, cocoon-like frame. Organic form meets gentle warmth for intimate reading corners.",
    materialLabel: "Blush Boucle",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1920&q=90&auto=format",
    variants: ["Blush", "Cream", "Peach"]
  },
  {
    id: 17, name: "Ivory Cloud Sectional", price: 4900, category: "lounge", material: "linen",
    desc: "An oversized modular sectional in ivory Belgian linen. Five configurable pieces that float like clouds in your living space.",
    materialLabel: "Ivory Belgian Linen",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1920&q=90&auto=format",
    variants: ["Ivory", "Sand", "Pearl"]
  },
  {
    id: 18, name: "Rust Accent Chair", price: 1450, category: "lounge", material: "velvet",
    desc: "A compact accent chair in burnt rust velvet with walnut dowel legs. A warm, earthy punctuation mark for minimalist interiors.",
    materialLabel: "Rust Velvet & Walnut",
    img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=1920&q=90&auto=format",
    variants: ["Rust", "Terracotta", "Ochre"]
  },
  {
    id: 19, name: "Sage Linen Chaise", price: 2900, category: "lounge", material: "linen",
    desc: "A graceful chaise longue in sage green stonewashed linen. Sloped armrest and deep seat invite hours of languid repose.",
    materialLabel: "Sage Stonewashed Linen",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1920&q=90&auto=format",
    variants: ["Sage", "Olive", "Moss"]
  },
  {
    id: 20, name: "Charcoal Lounge Suite", price: 4800, category: "lounge", material: "linen",
    desc: "A three-piece lounge suite in deep charcoal brushed cotton. Low profile, clean lines, and removable slipcovers for effortless living.",
    materialLabel: "Charcoal Brushed Cotton",
    img: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=1920&q=90&auto=format",
    variants: ["Charcoal", "Slate", "Graphite"]
  },
  {
    id: 21, name: "Cream Wingback", price: 1950, category: "lounge", material: "linen",
    desc: "A modern wingback chair in natural cream linen. Exaggerated wings create a sheltering silhouette that commands quiet authority.",
    materialLabel: "Natural Cream Linen",
    img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1920&q=90&auto=format",
    variants: ["Cream", "Linen", "Oat"]
  },
  {
    id: 22, name: "Burgundy Velvet Settee", price: 2350, category: "lounge", material: "velvet",
    desc: "A compact two-seater settee in deep burgundy velvet with gold-brushed legs. Old-world drama meets modern proportion.",
    materialLabel: "Burgundy Velvet & Gold",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1920&q=90&auto=format",
    variants: ["Burgundy", "Wine", "Plum"]
  },
  // ======================== HANGING SWING COLLECTION ========================
  {
    id: 23, name: "Pergola Rope Swing", price: 1250, category: "swing", material: "walnut",
    desc: "A wooden plank swing on thick jute ropes hung from a rustic timber pergola. Lantern lights and lush greenery create an enchanting garden retreat at dusk.",
    materialLabel: "Teak Wood & Jute Rope",
    img: "images/swings/swing-03.jfif",
    variants: ["Teak", "Walnut", "White Oak"]
  },
  {
    id: 24, name: "Garden Hammock Lounge", price: 1480, category: "swing", material: "linen",
    desc: "A fringed macrame hammock slung between old trees with fairy lights and lanterns. Golden cushions and sunflowers set the scene for magical summer evenings.",
    materialLabel: "Hand-woven Cotton & Fringe",
    img: "images/swings/swing-01.jfif",
    variants: ["Ivory", "Sand", "Sage"]
  },
  {
    id: 25, name: "A-Frame Twin Egg Swing", price: 3200, category: "swing", material: "rattan",
    desc: "A pair of rattan teardrop swings suspended inside a white A-frame garden pavilion. String lights and flower boxes create a dreamy backyard sanctuary.",
    materialLabel: "Natural Rattan & Pine Frame",
    img: "images/swings/swing-02.jfif",
    variants: ["Natural", "White Wash", "Dark"]
  },
  {
    id: 26, name: "Modern Deck Triple Swing", price: 4500, category: "swing", material: "rattan",
    desc: "Three rattan hanging chairs suspended from a sleek modern timber canopy on a lit deck. Candles and greenery create an intimate outdoor lounge.",
    materialLabel: "Rattan & Engineered Timber",
    img: "images/swings/swing-05.jfif",
    variants: ["Natural Rattan", "Grey", "Black"]
  },
  {
    id: 27, name: "Rustic Globe Swing Set", price: 3800, category: "swing", material: "walnut",
    desc: "Two oversized globe egg chairs hung from a dark wood pergola with glass pendant lights. A circular teak deck with a fire table completes this garden centerpiece.",
    materialLabel: "Slatted Walnut & Iron Chain",
    img: "images/swings/swing-06.jfif",
    variants: ["Dark Walnut", "Honey", "Ebony"]
  },
  {
    id: 28, name: "Romantic Garden Swing Bed", price: 2100, category: "swing", material: "linen",
    desc: "A wide porch swing daybed with plush cushions and a cozy throw, surrounded by potted plants and warm ambient lanterns.",
    materialLabel: "Cedar Wood & Linen Cushion",
    img: "images/swings/swing-10.jfif",
    variants: ["Natural", "White", "Grey"]
  },
  {
    id: 29, name: "Balcony Egg Chair with Stand", price: 1650, category: "swing", material: "rattan",
    desc: "A modern rattan egg chair on a freestanding black steel C-stand. Thick cream cushions and a compact footprint make it perfect for apartment balconies.",
    materialLabel: "PE Rattan & Steel Stand",
    img: "images/swings/swing-04.jfif",
    variants: ["Brown", "Black", "White"]
  },
  {
    id: 30, name: "Cozy Fall Nest Swing", price: 980, category: "swing", material: "rattan",
    desc: "A compact egg nest swing with autumn-toned cushions and a knitted throw. Warm fairy lights wrap around the frame for a cozy reading corner.",
    materialLabel: "Wicker & Cotton Cushion",
    img: "images/swings/swing-07.jfif",
    variants: ["Autumn", "Cream", "Rust"]
  },
  {
    id: 64, name: "Twilight Canopy Swing", price: 2800, category: "swing", material: "rattan",
    desc: "A double rattan swing suspended under a timbered garden canopy at twilight. Ambient lanterns cast a warm glow for evening gatherings.",
    materialLabel: "Rattan & Hardwood Canopy",
    img: "images/swings/swing-08.jfif",
    variants: ["Natural", "Dark Wood", "White"]
  },
  {
    id: 65, name: "Enchanted Garden Pod", price: 1350, category: "swing", material: "wicker",
    desc: "A woven pod swing nestled in a flower garden with cascading vines and soft lighting. The enclosed shape creates a private floating sanctuary.",
    materialLabel: "Wicker & Steel Frame",
    img: "images/swings/swing-09.jfif",
    variants: ["Honey", "Charcoal", "Moss"]
  },
  // ======================== BEDROOM (6 new) ========================
  {
    id: 31, name: "Linen Canopy Bed", price: 3800, category: "bedroom", material: "linen",
    desc: "A four-poster canopy bed in whitewashed oak with cascading linen drapes. Transform your bedroom into a serene retreat.",
    materialLabel: "Whitewashed Oak & Linen",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=90&auto=format",
    variants: ["White Oak", "Natural Oak", "Walnut"]
  },
  {
    id: 32, name: "Velvet Storage Ottoman", price: 650, category: "bedroom", material: "velvet",
    desc: "A plush velvet ottoman with hidden storage and brass feet. Sits at the foot of the bed for blankets, pillows, or morning coffee.",
    materialLabel: "Sage Velvet & Brass",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&q=90&auto=format",
    variants: ["Sage", "Blush", "Navy"]
  },
  {
    id: 33, name: "Japandi Platform Bed", price: 2600, category: "bedroom", material: "oak",
    desc: "A low-profile platform bed blending Japanese minimalism with Scandinavian warmth. Slatted headboard in natural white oak.",
    materialLabel: "White Oak",
    img: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=1920&q=90&auto=format",
    variants: ["Natural", "Smoked", "Black"]
  },
  {
    id: 34, name: "Woven Cane Dresser", price: 1950, category: "bedroom", material: "oak",
    desc: "A six-drawer dresser with handwoven cane panel fronts and solid oak frame. Tropical elegance meets practical storage.",
    materialLabel: "Oak & Natural Cane",
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1920&q=90&auto=format",
    variants: ["Natural Oak", "Walnut", "Black"]
  },
  {
    id: 35, name: "Boucle Accent Bench", price: 890, category: "bedroom", material: "linen",
    desc: "A curved bench in cream boucle fabric with brass hairpin legs. Perfect at the foot of the bed or in a dressing area.",
    materialLabel: "Cream Boucle & Brass",
    img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1920&q=90&auto=format",
    variants: ["Cream", "Taupe", "Charcoal"]
  },
  {
    id: 36, name: "Floating Shelf Headboard", price: 1200, category: "bedroom", material: "walnut",
    desc: "A wall-mounted walnut headboard with integrated floating shelves and hidden LED lighting. Modern geometry meets bedside utility.",
    materialLabel: "Solid Walnut",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&q=90&auto=format",
    variants: ["Natural Walnut", "Dark Walnut", "Oak"]
  },
  // ======================== DINING (6 new) ========================
  {
    id: 37, name: "Marble Round Table", price: 3200, category: "dining", material: "brass",
    desc: "A statement round dining table with a Calacatta marble top and brushed brass pedestal base. Seats four in sculptural elegance.",
    materialLabel: "Calacatta Marble & Brass",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&q=90&auto=format",
    variants: ["White Marble", "Green Marble", "Black Marble"]
  },
  {
    id: 38, name: "Woven Dining Chair Set", price: 1600, category: "dining", material: "rattan",
    desc: "A set of two dining chairs with handwoven rattan backs and linen seat cushions. Organic texture meets everyday comfort.",
    materialLabel: "Rattan & Linen",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1920&q=90&auto=format",
    variants: ["Natural", "Black", "Honey"]
  },
  {
    id: 39, name: "Live Edge Dining Table", price: 4500, category: "dining", material: "walnut",
    desc: "A live-edge walnut slab dining table on blackened steel legs. Each piece is unique — nature's own design, preserved and polished.",
    materialLabel: "Live Edge Walnut & Steel",
    img: "https://images.unsplash.com/photo-1604074131665-7a4b13870ab3?w=1920&q=90&auto=format",
    variants: ["Walnut", "Maple", "Cherry"]
  },
  {
    id: 40, name: "Velvet Dining Bench", price: 980, category: "dining", material: "velvet",
    desc: "A long upholstered bench in forest green velvet with tapered walnut legs. A modern alternative to chairs for communal dining.",
    materialLabel: "Forest Green Velvet",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=90&auto=format",
    variants: ["Forest Green", "Midnight", "Terracotta"]
  },
  {
    id: 41, name: "Ceramic Sideboard", price: 2800, category: "dining", material: "oak",
    desc: "A low oak sideboard with handmade ceramic tile doors in a geometric pattern. Artisan craftsmanship for dining room storage.",
    materialLabel: "Oak & Ceramic Tile",
    img: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=1920&q=90&auto=format",
    variants: ["Blue Tile", "Green Tile", "Neutral"]
  },
  {
    id: 42, name: "Bistro Chair Pair", price: 750, category: "dining", material: "rattan",
    desc: "A pair of classic French bistro chairs in black rattan with natural cane seats. Cafe culture charm for your dining nook.",
    materialLabel: "Black Rattan & Cane",
    img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=1920&q=90&auto=format",
    variants: ["Black", "Natural", "Navy"]
  },
  // ======================== LIGHTING (6 new) ========================
  {
    id: 43, name: "Sculptural Pendant Light", price: 920, category: "lighting", material: "brass",
    desc: "A large organic-form pendant in hammered brass. Casts warm dappled light patterns on walls and ceilings like afternoon sun through leaves.",
    materialLabel: "Hammered Brass",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1920&q=90&auto=format",
    variants: ["Brass", "Copper", "Black"]
  },
  {
    id: 44, name: "Rattan Globe Pendant", price: 480, category: "lighting", material: "rattan",
    desc: "A woven rattan globe pendant that casts intricate shadow patterns. Lightweight and airy, perfect over dining tables or in entryways.",
    materialLabel: "Natural Rattan",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1920&q=90&auto=format",
    variants: ["Natural", "White", "Black"]
  },
  {
    id: 45, name: "Marble Table Lamp", price: 380, category: "lighting", material: "brass",
    desc: "A cylindrical marble base with a linen drum shade. The weight of stone meets the warmth of soft light for bedside elegance.",
    materialLabel: "Carrara Marble & Linen",
    img: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=1920&q=90&auto=format",
    variants: ["White Marble", "Black Marble", "Green Marble"]
  },
  {
    id: 46, name: "Linear Chandelier", price: 2200, category: "lighting", material: "brass",
    desc: "A horizontal linear chandelier in antiqued brass with frosted glass globes. Dramatic scale for dining tables and kitchen islands.",
    materialLabel: "Antiqued Brass & Glass",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=1920&q=90&auto=format",
    variants: ["Antiqued Brass", "Polished Nickel", "Matte Black"]
  },
  {
    id: 47, name: "Paper Lantern Floor Lamp", price: 550, category: "lighting", material: "linen",
    desc: "A Japanese-inspired floor lamp with a rice paper shade on a slim black steel stem. Diffused ambient glow for meditative spaces.",
    materialLabel: "Rice Paper & Steel",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1920&q=90&auto=format",
    variants: ["White", "Warm White", "Ivory"]
  },
  {
    id: 48, name: "Articulated Wall Sconce", price: 420, category: "lighting", material: "brass",
    desc: "An adjustable wall-mounted sconce in brushed brass with a conical shade. Swing arm extends for focused reading light.",
    materialLabel: "Brushed Brass",
    img: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=1920&q=90&auto=format",
    variants: ["Brass", "Black", "White"]
  },
  // ======================== ARMCHAIRS (15) ========================
  {
    id: 49, name: "Coral Shell Chair", price: 1350, category: "armchair", material: "velvet",
    desc: "A scalloped shell-back armchair in vibrant coral velvet with gold legs. A bold pop of warmth that anchors any corner.",
    materialLabel: "Coral Velvet & Gold",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=90&auto=format",
    variants: ["Coral", "Mustard", "Teal"]
  },
  {
    id: 50, name: "Mustard Wingback", price: 1680, category: "armchair", material: "linen",
    desc: "A contemporary wingback in mustard yellow linen with a deep seat and flared arms. Sunshine captured in sculptural form.",
    materialLabel: "Mustard Linen",
    img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1920&q=90&auto=format",
    variants: ["Mustard", "Ochre", "Honey"]
  },
  {
    id: 51, name: "Emerald Barrel Chair", price: 1490, category: "armchair", material: "velvet",
    desc: "A curved barrel-back chair in rich emerald velvet. The enveloping silhouette creates a private world within any room.",
    materialLabel: "Emerald Velvet",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=90&auto=format",
    variants: ["Emerald", "Sapphire", "Amethyst"]
  },
  {
    id: 52, name: "Blush Scandi Armchair", price: 1150, category: "armchair", material: "linen",
    desc: "A minimalist Scandinavian armchair in soft blush pink with tapered oak legs. Clean lines meet gentle color.",
    materialLabel: "Blush Linen & Oak",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1920&q=90&auto=format",
    variants: ["Blush", "Lavender", "Mint"]
  },
  {
    id: 53, name: "Cognac Leather Club", price: 2200, category: "armchair", material: "leather",
    desc: "A classic club chair in distressed cognac leather with brass nail-head trim. Develops character with every year of use.",
    materialLabel: "Distressed Cognac Leather",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1920&q=90&auto=format",
    variants: ["Cognac", "Black", "Tan"]
  },
  {
    id: 54, name: "Indigo Lounge Chair", price: 1320, category: "armchair", material: "velvet",
    desc: "A low-slung lounge chair in deep indigo velvet with matte black steel legs. Moody elegance for late-night reading.",
    materialLabel: "Indigo Velvet & Steel",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1920&q=90&auto=format",
    variants: ["Indigo", "Navy", "Charcoal"]
  },
  {
    id: 55, name: "Terracotta Accent Chair", price: 980, category: "armchair", material: "linen",
    desc: "A compact accent chair in warm terracotta linen with walnut dowel legs. Earth-toned warmth for modern boho spaces.",
    materialLabel: "Terracotta Linen & Walnut",
    img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=1920&q=90&auto=format",
    variants: ["Terracotta", "Rust", "Sienna"]
  },
  {
    id: 56, name: "Olive Bouclé Armchair", price: 1560, category: "armchair", material: "linen",
    desc: "A chunky bouclé armchair in muted olive green. Textured fabric and oversized proportions invite you to curl up and stay.",
    materialLabel: "Olive Bouclé",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1920&q=90&auto=format",
    variants: ["Olive", "Sage", "Moss"]
  },
  {
    id: 57, name: "Ivory Sculptural Chair", price: 1890, category: "armchair", material: "linen",
    desc: "An asymmetric sculptural chair in ivory wool. One arm rises like a wave — art and seating fused into a single gesture.",
    materialLabel: "Ivory Wool Blend",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1920&q=90&auto=format",
    variants: ["Ivory", "Cloud", "Pearl"]
  },
  {
    id: 58, name: "Plum Velvet Slipper", price: 850, category: "armchair", material: "velvet",
    desc: "An armless slipper chair in deep plum velvet. Compact profile fits anywhere — bedrooms, hallways, or beside a fireplace.",
    materialLabel: "Plum Velvet",
    img: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=1920&q=90&auto=format",
    variants: ["Plum", "Burgundy", "Mauve"]
  },
  {
    id: 59, name: "Sky Blue Mid-Century", price: 1420, category: "armchair", material: "linen",
    desc: "A mid-century modern armchair in sky blue linen with solid walnut arms and legs. Retro charm in a calming hue.",
    materialLabel: "Sky Blue Linen & Walnut",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=90&auto=format",
    variants: ["Sky Blue", "Powder Blue", "Denim"]
  },
  {
    id: 60, name: "Charcoal Swivel Chair", price: 1750, category: "armchair", material: "leather",
    desc: "A modern swivel armchair in charcoal leather on a polished steel base. 360-degree rotation for open-plan living.",
    materialLabel: "Charcoal Leather & Chrome",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1920&q=90&auto=format",
    variants: ["Charcoal", "Black", "Slate"]
  },
  {
    id: 61, name: "Sunshine Yellow Accent", price: 1050, category: "armchair", material: "velvet",
    desc: "A bold accent chair in sunshine yellow velvet with brass cap feet. Instant energy and joy for neutral interiors.",
    materialLabel: "Sunshine Yellow Velvet",
    img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1920&q=90&auto=format",
    variants: ["Sunshine", "Lemon", "Gold"]
  },
  {
    id: 62, name: "Forest Rattan Armchair", price: 890, category: "armchair", material: "rattan",
    desc: "A woven rattan armchair with forest green cushions. Natural texture meets rich color for tropical-modern appeal.",
    materialLabel: "Rattan & Forest Green Cotton",
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1920&q=90&auto=format",
    variants: ["Forest", "Natural", "Black"]
  },
  {
    id: 63, name: "Rose Quartz Lounge", price: 1680, category: "armchair", material: "velvet",
    desc: "A generously proportioned lounge chair in rose quartz pink velvet. Soft curves and a deep seat for total relaxation.",
    materialLabel: "Rose Quartz Velvet & Brass",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1920&q=90&auto=format",
    variants: ["Rose Quartz", "Blush", "Petal"]
  }
];

// ======================== STATE ========================
let cart = [];
let currentPage = 'home';
let activeCategory = 'all';
let activeMaterial = 'all';
let maxPrice = 5000;
let sortBy = 'featured';
let visibleProducts = 9;

// ======================== INIT ========================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initStickyNav();
  initSearch();
  initCart();
  initFilters();
  renderProducts();
  initProductModal();
  initCheckout();
});

// ======================== NAVIGATION ========================
function initNavigation() {
  // All nav links
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      const filter = link.dataset.filter || null;
      navigateTo(page, filter);
    });
  });

  // Mobile menu
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-menu-close');

  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    requestAnimationFrame(() => mobileMenu.style.opacity = '1');
  });

  mobileClose.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-nav-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
      closeMobileMenu();
    });
  });

  function closeMobileMenu() {
    mobileMenu.style.opacity = '0';
    setTimeout(() => mobileMenu.classList.add('hidden'), 300);
  }
}

function navigateTo(page, categoryFilter) {
  if (page === currentPage && page !== 'collections' && !categoryFilter) return;

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.add('active');
    currentPage = page;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Apply category filter if provided
    if (page === 'collections' && categoryFilter) {
      activeCategory = categoryFilter;
      activeMaterial = 'all';
      visibleProducts = 12;
      // Update filter UI
      document.querySelectorAll('.filter-cat').forEach(b => {
        b.classList.remove('active', 'text-secondary', 'font-medium');
        b.classList.add('text-on-surface-variant');
        if (b.dataset.category === categoryFilter) {
          b.classList.add('active', 'text-secondary', 'font-medium');
          b.classList.remove('text-on-surface-variant');
        }
      });
      document.querySelectorAll('.filter-mat').forEach(b => b.classList.remove('active'));
    }

    // Re-trigger animations
    setTimeout(() => {
      initScrollAnimations();
      if (page === 'collections') renderProducts();
      if (page === 'checkout') renderCheckout();
    }, 100);

    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.dataset.page === page) item.classList.add('active');
    });
  }
}

// ======================== STICKY NAV ========================
function initStickyNav() {
  const nav = document.getElementById('main-nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });
}

// ======================== SCROLL ANIMATIONS ========================
function initScrollAnimations() {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => {
    if (!el.classList.contains('revealed')) {
      observer.observe(el);
    }
  });
}

// ======================== SEARCH ========================
function initSearch() {
  const toggle = document.getElementById('search-toggle');
  const overlay = document.getElementById('search-overlay');
  const close = document.getElementById('search-close');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  toggle.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => overlay.style.opacity = '1');
    setTimeout(() => input.focus(), 300);
  });

  close.addEventListener('click', closeSearch);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  function closeSearch() {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.classList.add('hidden');
      input.value = '';
      results.innerHTML = '';
    }, 300);
  }

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    if (query.length < 2) { results.innerHTML = ''; return; }

    const matches = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.material.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );

    results.innerHTML = matches.length === 0
      ? '<p class="text-on-surface-variant">No results found</p>'
      : matches.map(p => `
        <div class="flex items-center gap-4 p-4 bg-surface-container-low rounded cursor-pointer hover:bg-surface-container transition-colors search-result" data-id="${p.id}">
          <img src="${p.img}" alt="${p.name}" class="w-16 h-16 object-cover rounded"/>
          <div class="flex-1">
            <h4 class="font-headline text-primary">${p.name}</h4>
            <p class="text-xs text-on-surface-variant">${p.materialLabel}</p>
          </div>
          <span class="text-secondary font-medium">$${p.price.toLocaleString()}</span>
        </div>
      `).join('');

    results.querySelectorAll('.search-result').forEach(el => {
      el.addEventListener('click', () => {
        const product = products.find(p => p.id === parseInt(el.dataset.id));
        closeSearch();
        navigateTo('collections');
        setTimeout(() => openProductModal(product), 400);
      });
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeSearch();
  });
}

// ======================== CART ========================
function initCart() {
  const toggle = document.getElementById('cart-toggle');
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  const close = document.getElementById('cart-close');

  toggle.addEventListener('click', openCart);
  close.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);
}

function openCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    sidebar.style.transform = 'translateX(0)';
  });
  renderCart();
}

function closeCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.style.transform = 'translateX(100%)';
  overlay.style.opacity = '0';
  setTimeout(() => overlay.classList.add('hidden'), 300);
}

function addToCart(productId, variant) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(c => c.id === productId && c.variant === variant);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, variant: variant || product.variants[0], qty: 1 });
  }
  updateCartBadge();
  showToast(`${product.name} added to bag`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartBadge();
  renderCart();
}

function updateCartQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  if (total > 0) {
    badge.textContent = total;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = products.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  const empty = document.getElementById('cart-empty');
  const totalEl = document.getElementById('cart-total');

  if (cart.length === 0) {
    container.innerHTML = '';
    footer.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');
  footer.classList.remove('hidden');
  totalEl.textContent = `$${getCartTotal().toLocaleString()}`;

  container.innerHTML = cart.map((item, i) => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item flex gap-4">
        <img src="${p.img}" alt="${p.name}" class="w-20 h-20 object-cover rounded"/>
        <div class="flex-1">
          <h4 class="font-headline text-sm text-primary">${p.name}</h4>
          <p class="text-xs text-on-surface-variant mb-1">${item.variant}</p>
          <p class="text-secondary text-sm font-medium">$${(p.price * item.qty).toLocaleString()}</p>
          <div class="flex items-center gap-3 mt-2">
            <button class="cart-qty-btn text-on-surface-variant hover:text-primary text-sm" data-index="${i}" data-delta="-1">-</button>
            <span class="text-sm">${item.qty}</span>
            <button class="cart-qty-btn text-on-surface-variant hover:text-primary text-sm" data-index="${i}" data-delta="1">+</button>
            <button class="cart-remove-btn ml-auto text-on-surface-variant hover:text-error text-xs" data-index="${i}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => updateCartQty(parseInt(btn.dataset.index), parseInt(btn.dataset.delta)));
  });

  container.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.index)));
  });
}

// ======================== FILTERS ========================
function initFilters() {
  // Category filters
  document.querySelectorAll('.filter-cat').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-cat').forEach(b => {
        b.classList.remove('active', 'text-secondary', 'font-medium');
        b.classList.add('text-on-surface-variant');
      });
      btn.classList.add('active', 'text-secondary', 'font-medium');
      btn.classList.remove('text-on-surface-variant');
      activeCategory = btn.dataset.category;
      visibleProducts = 9;
      renderProducts();
    });
  });

  // Material filters
  document.querySelectorAll('.filter-mat').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-mat').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeMaterial = btn.dataset.material;
      visibleProducts = 9;
      renderProducts();
    });
  });

  // Sort
  document.getElementById('sort-select').addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProducts();
  });

  // Price range
  const priceRange = document.getElementById('price-range');
  const priceLabel = document.getElementById('price-label');
  priceRange.addEventListener('input', () => {
    maxPrice = parseInt(priceRange.value);
    priceLabel.textContent = maxPrice >= 5000 ? '$5,000+' : `$${maxPrice.toLocaleString()}`;
    renderProducts();
  });

  // Load more
  document.getElementById('load-more-btn').addEventListener('click', () => {
    visibleProducts += 6;
    renderProducts();
  });
}

function getFilteredProducts() {
  let filtered = [...products];

  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  if (activeMaterial !== 'all') {
    filtered = filtered.filter(p => p.material === activeMaterial);
  }
  filtered = filtered.filter(p => p.price <= maxPrice);

  // Sort
  switch (sortBy) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
  }

  return filtered;
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const filtered = getFilteredProducts();
  const visible = filtered.slice(0, visibleProducts);

  // Load more button
  const loadMore = document.getElementById('load-more-btn');
  loadMore.style.display = visibleProducts >= filtered.length ? 'none' : 'flex';

  if (visible.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center py-20"><p class="font-headline text-xl text-primary mb-2">No pieces found</p><p class="text-on-surface-variant">Try adjusting your filters</p></div>';
    return;
  }

  grid.innerHTML = visible.map((p, i) => {
    if (p.featured && i === 0 && activeCategory === 'all' && sortBy === 'featured') {
      return `
        <div class="md:col-span-2 featured-card group relative overflow-hidden bg-surface-container-low rounded-lg h-[520px] flex flex-col justify-end product-card cursor-pointer" data-id="${p.id}" style="animation-delay: ${i * 0.08}s">
          <img alt="${p.name}" class="featured-bg absolute inset-0 w-full h-full object-cover" loading="lazy" src="${p.img}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#fcf9f4] via-[#fcf9f4]/60 to-transparent"></div>
          <div class="relative z-10 p-8 space-y-2">
            <span class="text-secondary font-label text-xs tracking-widest uppercase">Masterpiece Series</span>
            <h2 class="text-3xl font-headline text-primary font-bold">${p.name}</h2>
            <p class="text-on-surface-variant max-w-sm font-light text-sm">${p.desc}</p>
            <div class="pt-4 flex items-center justify-between">
              <span class="text-xl font-headline text-primary">$${p.price.toLocaleString()}</span>
              <button class="bg-primary text-on-primary px-8 py-3 rounded-md text-sm font-label hover:-translate-y-0.5 transition-transform view-detail-btn" data-id="${p.id}">View Details</button>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="product-card group flex flex-col cursor-pointer" data-id="${p.id}" style="animation-delay: ${i * 0.08}s">
        <div class="card-image aspect-[4/5] bg-surface-container rounded-lg mb-6 relative">
          <img alt="${p.name}" class="w-full h-full object-cover rounded-lg" loading="lazy" src="${p.img}"/>
          <button class="quick-add absolute bottom-4 right-4 bg-surface/80 backdrop-blur-md p-3 rounded-full add-cart-btn" data-id="${p.id}">
            <span class="material-symbols-outlined text-primary">add_shopping_cart</span>
          </button>
        </div>
        <div class="flex justify-between items-start">
          <div class="space-y-1">
            <h3 class="font-headline text-primary text-lg">${p.name}</h3>
            <p class="text-xs text-on-surface-variant font-label">Material: ${p.materialLabel}</p>
          </div>
          <span class="text-secondary font-medium">$${p.price.toLocaleString()}</span>
        </div>
      </div>
    `;
  }).join('');

  // Bind click events
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.add-cart-btn') || e.target.closest('.view-detail-btn')) return;
      const product = products.find(p => p.id === parseInt(card.dataset.id));
      openProductModal(product);
    });
  });

  grid.querySelectorAll('.view-detail-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = products.find(p => p.id === parseInt(btn.dataset.id));
      openProductModal(product);
    });
  });

  grid.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });
}

// ======================== PRODUCT MODAL ========================
function initProductModal() {
  const modal = document.getElementById('product-modal');
  const bg = document.getElementById('modal-bg');
  const close = document.getElementById('modal-close');

  close.addEventListener('click', closeProductModal);
  bg.addEventListener('click', closeProductModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeProductModal();
  });
}

function openProductModal(product) {
  const modal = document.getElementById('product-modal');
  const body = document.getElementById('modal-body');

  body.innerHTML = `
    <div class="bg-surface-container-low p-8 md:p-0 flex items-center justify-center">
      <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover max-h-[80vh]"/>
    </div>
    <div class="p-8 md:p-12 flex flex-col justify-center">
      <span class="text-secondary font-label text-xs tracking-widest uppercase mb-4">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
      <h2 class="font-headline text-3xl md:text-4xl text-primary font-bold mb-4">${product.name}</h2>
      <p class="text-on-surface-variant leading-relaxed mb-6">${product.desc}</p>
      <div class="mb-6">
        <span class="text-xs uppercase tracking-widest text-on-surface-variant block mb-2">Material</span>
        <span class="text-sm text-primary">${product.materialLabel}</span>
      </div>
      <div class="mb-8">
        <span class="text-xs uppercase tracking-widest text-on-surface-variant block mb-3">Variant</span>
        <div class="flex flex-wrap gap-2" id="modal-variants">
          ${product.variants.map((v, i) => `
            <button class="modal-variant px-4 py-2 text-xs font-label rounded transition-colors ${i === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container hover:bg-surface-container-highest text-on-surface-variant'}" data-variant="${v}">${v}</button>
          `).join('')}
        </div>
      </div>
      <div class="flex items-center justify-between mb-8">
        <span class="text-2xl font-headline text-primary">$${product.price.toLocaleString()}</span>
      </div>
      <button class="modal-add-btn bg-primary text-on-primary py-4 uppercase tracking-widest text-xs font-semibold hover:bg-primary-container transition-all w-full" data-id="${product.id}">
        Add to Bag
      </button>
      <div class="mt-8 pt-8 border-t border-outline-variant/20 grid grid-cols-2 gap-6 text-sm">
        <div class="flex items-center gap-2 text-on-surface-variant">
          <span class="material-symbols-outlined text-lg">local_shipping</span> Free Shipping
        </div>
        <div class="flex items-center gap-2 text-on-surface-variant">
          <span class="material-symbols-outlined text-lg">verified_user</span> Lifetime Warranty
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Variant selection
  let selectedVariant = product.variants[0];
  body.querySelectorAll('.modal-variant').forEach(btn => {
    btn.addEventListener('click', () => {
      body.querySelectorAll('.modal-variant').forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary');
        b.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      btn.classList.add('bg-primary', 'text-on-primary');
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant');
      selectedVariant = btn.dataset.variant;
    });
  });

  // Add to cart
  body.querySelector('.modal-add-btn').addEventListener('click', () => {
    addToCart(product.id, selectedVariant);
    closeProductModal();
  });
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// ======================== CHECKOUT ========================
function initCheckout() {
  document.getElementById('checkout-btn').addEventListener('click', () => {
    closeCart();
    navigateTo('checkout');
  });

  document.getElementById('place-order-btn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your bag is empty');
      return;
    }
    cart = [];
    updateCartBadge();
    showToast('Order placed successfully! (Demo)');
    setTimeout(() => navigateTo('home'), 1500);
  });
}

function renderCheckout() {
  const items = document.getElementById('checkout-items');
  const subtotal = document.getElementById('checkout-subtotal');
  const total = document.getElementById('checkout-total');
  const t = getCartTotal();

  subtotal.textContent = `$${t.toLocaleString()}`;
  total.textContent = `$${t.toLocaleString()}`;

  items.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="flex gap-3">
        <img src="${p.img}" alt="${p.name}" class="w-12 h-12 object-cover rounded"/>
        <div class="flex-1">
          <p class="text-sm text-primary font-medium">${p.name}</p>
          <p class="text-xs text-on-surface-variant">${item.variant} x ${item.qty}</p>
        </div>
        <span class="text-sm text-secondary">$${(p.price * item.qty).toLocaleString()}</span>
      </div>
    `;
  }).join('');
}

// ======================== TOAST ========================
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('toast-visible');
  setTimeout(() => toast.classList.remove('toast-visible'), 2500);
}

// ======================== PARALLAX ========================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.parallax-bg').forEach(el => {
    el.style.transform = `translateY(${scrollY * 0.15}px)`;
  });
}, { passive: true });

// ======================== CONTACT FORM ========================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('hidden');
      document.getElementById('contact-success').classList.remove('hidden');
      showToast('Message sent successfully!');
    });
  }
});
