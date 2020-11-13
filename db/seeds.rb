# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Stock.destroy_all

  stock = {
    '1' => {
      'name' => 'Amazon.com, Inc.',
      'symbol' => 'AMZN',
      'stock_desc' => 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally. The company operates through three segments: North America, International, and Amazon Web Services (AWS). It sells merchandise and content purchased for resale from third-party sellers through physical and online stores. The company also manufactures and sells electronic devices, including Kindle, Fire tablets, Fire TVs, Rings, and Echo and other devices; provides Kindle Direct Publishing, an online service that allows independent authors and publishers to make their books available in the Kindle Store; and develops and produces media content. In addition, it offers programs that enable sellers to sell their products on its Websites, as well as its stores; and programs that allow authors, musicians, filmmakers, skill and app developers, and others to publish and sell content. Further, the company provides compute, storage, database, and other AWS services, as well as fulfillment, advertising, publishing, and digital content subscriptions. Additionally, it offers Amazon Prime, a membership program, which provides free shipping of various items; access to streaming of movies and TV episodes; and other services. The company also operates in the food delivery business in Bengaluru, India. It serves consumers, sellers, developers, enterprises, and content creators. The company also has utility-scale solar projects in China, Australia, and the United States. Amazon.com, Inc. was founded in 1994 and is headquartered in Seattle, Washington.',
    },
    '2' => {
      'name' => 'Apple Inc.',
      'symbol' => 'AAPL',
      'stock_desc' => 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch, and other Apple-branded and third-party accessories. It also provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store, that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It sells and delivers third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1977 and is headquartered in Cupertino, California.',
    },
    '3' => {
      'name' => 'Walmart Inc.',
      'symbol' => 'WMT',
      'stock_desc' => 'Walmart Inc. engages in the retail and wholesale operations in various formats worldwide. The company operates in three segments: Walmart U.S., Walmart International, and Sam\'s Club. It operates supercenters, supermarkets, hypermarkets, warehouse clubs, cash and carry stores, discount stores, drugstores, and convenience stores; membership-only warehouse clubs; ecommerce websites, such as walmart.com, walmart.com.mx, asda.com, walmart.ca, flipkart.com, and samsclub.com; and mobile commerce applications. The company offers grocery products, including meat, produce, natural and organics, deli and bakery, dairy, frozen foods, alcoholic and nonalcoholic beverages, and floral and dry grocery, as well as consumables, such as health and beauty aids, baby products, household chemicals, paper goods, and pet supplies; and health and wellness products. It also provides electronics, cameras and supplies, photo processing services, wireless, movies, music, video games, and books; stationery, automotive, hardware and paint, sporting goods, and outdoor living and horticulture; apparel for women, girls, men, boys, and infants, as well as shoes, jewelry, and accessories; and home furnishings, housewares and small appliances, bedding, home decor, toys, fabrics, crafts, and seasonal merchandise, as well as brand name merchandise. In addition, the company offers fuel and financial services and related products, including money orders, prepaid cards, money transfers, check cashing, and bill payment. It operates approximately 11,500 stores and various e-commerce Websites under the 56 banners in 27 countries. The company was formerly known as Wal-Mart Stores, Inc. and changed its name to Walmart Inc. in February 2018. Walmart Inc. was founded in 1945 and is based in Bentonville, Arkansas.',
    },
    '4' => {
      'name' => 'Berkshire Hathaway Inc.',
      'symbol' => 'BRK-B',
      'stock_desc' => 'Berkshire Hathaway Inc., through its subsidiaries, engages in insurance, freight rail transportation, and utility businesses. It provides property, casualty, life, accident, and health insurance and reinsurance; and operates railroad systems in North America. The company also generates, transmits, stores, and distributes electricity from natural gas, coal, wind, solar, hydro, nuclear, and geothermal sources; operates natural gas distribution and storage facilities, interstate pipelines, and compressor and meter stations; and holds interest in coal mining assets. In addition, it offers real estate brokerage services; and leases transportation equipment and furniture. Further, the company manufactures boxed chocolates and other confectionery products; specialty chemicals, metal cutting tools, and components for aerospace and power generation applications; flooring, insulation, roofing and engineered, building and engineered components, paints and coatings, and bricks and masonry products, as well as offers homebuilding and manufactured housing finance; and recreational vehicles, apparel products, jewelry, and custom picture framing products, and alkaline batteries. Additionally, it manufactures castings, forgings, fasteners/fastener systems, and aerostructures; and seamless pipes, fittings, downhole casing and tubing, and various mill forms. The company distributes newspapers, televisions, and information; franchises and services quick service restaurants; distributes electronic components; and offers logistics services, grocery and foodservice distribution services, and professional aviation training and fractional aircraft ownership programs. It also retails automobiles; furniture, bedding, and accessories; household appliances, electronics, and computers; jewelry, watches, crystal, china, stemware, flatware, gifts, and collectibles; kitchenware; and motorcycle accessories. The company was incorporated in 1998 and is headquartered in Omaha, Nebraska.',
    },
    '5' => {
      'name' => 'Facebook, Inc.',
      'symbol' => 'FB',
      'stock_desc' => 'Facebook, Inc. develops products that enable people to connect and share with friends and family through mobile devices, personal computers, virtual reality headsets, and in-home devices worldwide. The company\'s products include Facebook that enables people to connect, share, discover, and communicate with each other on mobile devices and personal computers; Instagram, a community for sharing photos, videos, and private messages; Messenger, a messaging application for people to connect with friends, family, groups, and businesses across platforms and devices; and WhatsApp, a messaging application that is used by people and businesses to communicate in a private way. It also provides Oculus, a hardware, software, and developer ecosystem, which allows people to come together and connect with each other through its Oculus virtual reality products. Facebook, Inc. was founded in 2004 and is headquartered in Menlo Park, California.',
    },
  }

  stock = stock.map do |num, info|
    info['image_url'] = "assets/logos/#{num}.svg"
    info
  end

  Stock.create!(stock)
  
end
