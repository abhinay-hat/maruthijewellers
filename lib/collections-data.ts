export interface Product {
  image: string;
  description: string;
}

export interface Category {
  title: string;
  products: Product[];
}

export interface CollectionData {
  title: string;
  accent: string;
  categories: Category[];
}

export const goldCollection: CollectionData = {
  title: "Gold Jewellery Collections",
  accent: "#D4AF37",
  categories: [
    {
      title: "Gold Rings",
      products: [
        {
          image: "https://tiimg.tistatic.com/fp/0/270/fancy-gold-finger-rings-528.jpg",
          description: "Elegant handcrafted gold ring with a timeless finish, perfect for daily and festive wear.",
        },
        {
          image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021200899_437Wx649H_202402160539101.jpeg",
          description: "Classic premium gold ring designed for modern elegance and long-lasting shine.",
        },
        {
          image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021200959_437Wx649H_202402160541111.jpeg",
          description: "Minimalist gold ring with refined craftsmanship, suitable for all occasions.",
        },
        {
          image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021200964_437Wx649H_202402160541081.jpeg",
          description: "Premium polished gold ring offering a luxurious and graceful appearance.",
        },
      ],
    },
    {
      title: "Gold Chains",
      products: [
        {
          image: "https://img.tatacliq.com/images/i24//437Wx649H/MP000000026739192_437Wx649H_202505251346435.jpeg",
          description: "Stylish gold chain crafted with precision for a bold and elegant look.",
        },
        {
          image: "https://img.tatacliq.com/images/i24//437Wx649H/MP000000026739093_437Wx649H_202505251246265.jpeg",
          description: "Lightweight gold chain perfect for daily wear and special occasions.",
        },
        {
          image: "https://i.pinimg.com/1200x/d6/58/8e/d6588eef563cd7f37a292b0d25403cbf.jpg",
          description: "Premium gold chain with pendant featuring elegant traditional craftsmanship.",
        },
        {
          image: "https://img.tatacliq.com/images/i22//437Wx649H/MP000000025546323_437Wx649H_202503012216281.jpeg",
          description: "Luxurious gold chain with intricate detailing and polished finish.",
        },
      ],
    },
    {
      title: "Gold Bracelets",
      products: [
        {
          image: "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019588104_437Wx649H_202310091306591.jpeg",
          description: "Modern gold bracelet designed for comfort and premium appearance.",
        },
        {
          image: "https://img.tatacliq.com/images/i24//437Wx649H/MP000000026770432_437Wx649H_202505282201086.jpeg",
          description: "Elegant gold bracelet suitable for festive and daily wear.",
        },
        {
          image: "https://img.tatacliq.com/images/i14/1348Wx2000H/MP000000019587681_1348Wx2000H_202310091255191.jpeg",
          description: "Premium designer gold bracelet with refined craftsmanship.",
        },
        {
          image: "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019572935_437Wx649H_202310081752061.jpeg",
          description: "Classic gold bracelet offering timeless elegance.",
        },
      ],
    },
    {
      title: "Gold Necklaces",
      products: [
        {
          image: "https://img.tatacliq.com/images/i21//437Wx649H/MP000000024744987_437Wx649H_202412180334566.jpeg",
          description: "Traditional gold necklace with exquisite detailing and premium finish.",
        },
        {
          image: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018383312_437Wx649H_202307192117401.jpeg",
          description: "Elegant gold necklace crafted for weddings and special occasions.",
        },
        {
          image: "https://jazzandsizzle.com/cdn/shop/files/nl-js23-40331_1.jpg?v=1700224872",
          description: "Designer gold necklace blending modern and traditional aesthetics.",
        },
        {
          image: "https://img.tatacliq.com/images/i21//437Wx649H/MP000000024744981_437Wx649H_202412180334461.jpeg",
          description: "Premium gold necklace with luxurious craftsmanship.",
        },
      ],
    },
  ],
};

export const silverCollection: CollectionData = {
  title: "Silver Jewellery Collections",
  accent: "#C0C0C0",
  categories: [
    {
      title: "Silver Rings",
      products: [
        {
          image: "https://img.tatacliq.com/images/i22//437Wx649H/MP000000025296825_437Wx649H_202502070920031.jpeg",
          description: "Elegant silver ring with a smooth polished finish, perfect for everyday wear.",
        },
        {
          image: "https://img.tatacliq.com/images/i20//437Wx649H/MP000000023940090_437Wx649H_202410030243521.jpeg",
          description: "Classic sterling silver ring crafted for timeless beauty.",
        },
        {
          image: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000014868356_437Wx649H_202309280038021.jpeg",
          description: "Minimal silver ring design offering elegance and comfort.",
        },
        {
          image: "https://img.tatacliq.com/images/i27//437Wx649H/MP000000028732384_437Wx649H_202510102302521.jpeg",
          description: "Premium silver ring with refined craftsmanship and shine.",
        },
      ],
    },
    {
      title: "Silver Pooja Items",
      products: [
        {
          image: "https://5.imimg.com/data5/ECOM/Default/2023/1/VL/YE/KI/12783550/86-3baa1963-6d11-4e85-ac6e-482cca0d9dd8-500x500.jpg",
          description: "Upgrade your pooja room with our handcrafted silver diyas. Double the glow, double the grace.",
        },
        {
          image: "https://5.imimg.com/data5/ECOM/Default/2023/8/333951698/OQ/WW/ET/12783550/55-1b8c0ece-9abb-423d-8f6d-f31a04433727-500x500.jpg",
          description: "Intricate embossing, pure silver, and a soul of tradition. Elevate your home temple today.",
        },
        {
          image: "https://nobilityshoppe.in/cdn/shop/files/02_b1ed38d5-ebc5-41e2-a064-d1f469d702a3_800x.jpg?v=1722526278",
          description: "A perfect blend of utility and spirituality. Our 8-inch silver plate features beautifully engraved auspicious symbols like the Om, Swastika, and Kalash to bring positive energy to your daily prayers.",
        },
        {
          image: "https://rukminim2.flixcart.com/image/480/640/xif0q/bowl/h/w/t/1-ad0-17-astro-d-original-imahf7q9mesbpveq.jpeg?q=90",
          description: "Serve with grace or offer with devotion. This silver bowl features exquisite floral embossing, making it a sophisticated choice for ceremonial use or luxury home decor.",
        },
      ],
    },
    {
      title: "Silver Bracelets",
      products: [
        {
          image: "https://trishhna.com/cdn/shop/files/Royal_Silver_Bracelet_For_Men.jpg?v=1756643198",
          description: "Modern silver bracelet designed for a premium look.",
        },
        {
          image: "https://m.media-amazon.com/images/I/91J5mZ1qpzL._UY300_.jpg",
          description: "Elegant silver bracelet suitable for all age groups.",
        },
        {
          image: "https://i.ebayimg.com/images/g/9eUAAOSwqT1hDSAO/s-l1200.jpg",
          description: "Designer silver bracelet with fine detailing.",
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROSj44keXLd1ugAPNzK4FcZ_Ukdu8fvMbkw&s",
          description: "Classic silver bracelet offering timeless elegance.",
        },
      ],
    },
    {
      title: "Silver Idols",
      products: [
        {
          image: "https://www.theamethyststore.com/cdn/shop/products/AMS-115-0010-_3_1800x1800_46fd107c-e2d2-42a6-90c7-e92813f63511.jpg?v=1663658639&width=1080",
          description: "Invite wisdom and success into your workspace or home with this stunningly detailed Ganesha idol. A perfect centerpiece for new beginnings.",
        },
        {
          image: "https://shop.swarna.com/wp-content/uploads/2022/08/OQ3126_1.jpg",
          description: "Celebrate the patron of knowledge and music. Our Saraswati idol captures the grace of the Goddess with exceptional detail, making it an inspiring addition to any study or creative space.",
        },
        {
          image: "https://www.theamethyststore.com/cdn/shop/products/AMS-115-0011_1800x1800_0c4ee5c1-7848-4ed6-8988-2eb7b90eb1a9.jpg?v=1663661105&width=1080",
          description: "Bring home the Goddess of Wealth. This silver Lakshmi idol, seated gracefully on a lotus, is designed to radiate peace and prosperity throughout your home.",
        },
        {
          image: "https://cdn.exoticindia.com/images/products/original/homeandliving/ddl509-6inch.jpg",
          description: "Make a bold statement with this magnificent silver elephant. Adorned with traditional royal motifs, it's a powerful symbol of luck and stability for your home or office.",
        },
      ],
    },
  ],
};

export const diamondCollection: CollectionData = {
  title: "Diamond Jewellery Collections",
  accent: "#B9F2FF",
  categories: [
    {
      title: "Diamond Rings",
      products: [
        {
          image: "https://thumbs.dreamstime.com/b/female-engagement-wedding-rings-diamonds-black-background-female-wedding-diamonds-rings-black-background-silver-169388130.jpg",
          description: "Elegant diamond ring crafted with precision, perfect for engagements and special moments.",
        },
        {
          image: "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
          description: "Classic diamond ring with a timeless design and brilliant sparkle.",
        },
        {
          image: "https://img.pikbest.com/ai/illus_our/20230529/bb4e584674275cfbb246f36b8c22590e.jpg!w700wp",
          description: "Premium diamond ring designed for luxury and everyday elegance.",
        },
        {
          image: "https://media.istockphoto.com/id/157378194/photo/close-up-of-a-diamond-engagement-ring.jpg?s=612x612&w=0&k=20&c=IpFU-dX5-EO0oH4U7cwafdusLUYzqiVbuGhQWSkAsrQ=",
          description: "Beautiful diamond ring with refined craftsmanship and shine.",
        },
      ],
    },
    {
      title: "Diamond Chains",
      products: [
        {
          image: "https://earthlyjewels.co/cdn/shop/files/NL1066_01.jpg?v=1760169119&width=1200",
          description: "Stylish diamond chain with a premium pendant design.",
        },
        {
          image: "https://media.istockphoto.com/id/163122066/photo/round-diamonds-necklace.jpg?s=612x612&w=0&k=20&c=WGZd7NPAX1FyYPrjjnIM-c8jinMHT-GAIF4BLMYjtD4=",
          description: "Elegant diamond chain suitable for festive and wedding occasions.",
        },
        {
          image: "https://t4.ftcdn.net/jpg/16/43/03/25/360_F_1643032565_OZqnm8Nsq1W8SDlPpRZeaQD5sV3KPneV.jpg",
          description: "Luxury diamond chain crafted for a sophisticated look.",
        },
        {
          image: "https://i.pinimg.com/474x/79/24/4e/79244e6525ea144f260a9e5db58e69c1.jpg",
          description: "Designer diamond chain blending elegance and brilliance.",
        },
      ],
    },
    {
      title: "Diamond Bracelets",
      products: [
        {
          image: "https://www.rhinestonejewelry.com/cdn/shop/products/bracelets-17274-cz-tennis-bracelet-7-25-4mm-stones-silver-38299584135393_1024x1024.jpg?v=1663684283",
          description: "Modern diamond bracelet with premium craftsmanship.",
        },
        {
          image: "https://www.elyta.in/cdn/shop/files/BT02921S7.jpg?v=1748084982",
          description: "Elegant diamond bracelet suitable for special occasions.",
        },
        {
          image: "https://img.freepik.com/premium-photo/silver-bracelet-with-diamonds-black-background_760021-103.jpg",
          description: "Designer diamond bracelet with fine detailing and shine.",
        },
        {
          image: "https://images.squarespace-cdn.com/content/v1/5e7ce3984198850553d5e4b2/1704238671078-PUTWAL8R08OXENWTM8K8/ADB199SLV.jpg",
          description: "Luxury diamond bracelet offering timeless elegance.",
        },
      ],
    },
    {
      title: "Diamond Necklaces",
      products: [
        {
          image: "https://www.voylla.com/cdn/shop/files/SVCCU20018_CS_77fb4074-b49b-4640-b06e-7828c08ee21a.jpg?v=1724846198",
          description: "Traditional diamond necklace crafted for grand occasions.",
        },
        {
          image: "https://www.darjewellery.com/product_image/s400__aHR0cHM6Ly9tZWRpYS5kYXJqZXdlbGxlcnkuaW4vcHJvZHVjdF9pbWFnZXMvczEyMDBfXzE3MzU4OTA4MDIzNjQuanBn",
          description: "Premium diamond necklace with elegant finishing.",
        },
        {
          image: "https://i.pinimg.com/736x/be/0d/ed/be0ded51654ebbe03ee3bfd7fb770d85.jpg",
          description: "Designer diamond necklace combining luxury and style.",
        },
        {
          image: "https://www.darjewellery.com/product_image/s1200__aHR0cHM6Ly9tZWRpYS5kYXJqZXdlbGxlcnkuaW4vcHJvZHVjdF9pbWFnZXMvczEyMDBfXzE3MTYwMTkwNTIwMzMuanBn",
          description: "Exclusive diamond necklace with premium sparkle.",
        },
      ],
    },
  ],
};
