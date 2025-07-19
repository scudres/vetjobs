function guessCityFromOrganisation(organisation, title = '') {
  const text = ((organisation || '') + ' ' + (title || '')).toLowerCase();
  
  //UK
  if (/aura veterinary/.test(text)) return "Guildford";
  if (/beaumont sainsbury|royal veterinary college.*nw1/.test(text)) return "London";
  if (/bishopton veterinary|ripon/.test(text)) return "Ripon";
  if (/blaise veterinary.*birmingham|b45 9ua/.test(text)) return "Birmingham";
  if (/bristol vet specialists|central park, bristol|bs35 4er/.test(text)) return "Bristol";
  if (/chestergates.*chester/i.test(text)) return "Chester";
  if (/chine house.*loughborough|leicestershire/.test(text)) return "Loughborough";
  if (/chipping norton veterinary|oxfordshire|ox7 5sy/.test(text)) return "Chipping Norton";
  if (/donnington grove.*newbury|berkshire/.test(text)) return "Newbury";
  if (/dovecote.*delven lane|derby|de74 2lj/.test(text)) return "Derby";if (/straiton|stafford/i.test(text)) return "Stafford"; // E C Straiton & Partners Ltd, Staffordshire
  if (/fitzpatrick|godalming|halfway\s*lane/i.test(text)) return "Godalming"; // Fitzpatrick Referrals Ltd, Godalming, Surrey
  if (/frank\.?\s*pet\s*surgeons|leeds/i.test(text)) return "Leeds"; // frank. Pet Surgeons, Leeds
  if (/goddard|wanstead|new\s*wanstead|london\s*E11/i.test(text)) return "London"; // Goddard Veterinary Group, Wanstead, London
  if (/hale\s*veterinary|chippenham|wiltshire/i.test(text)) return "Chippenham"; // Hale Veterinary Hospital, Chippenham
  if (/hamilton\s*specialist|high\s*wycombe|halifax\s*road/i.test(text)) return "High Wycombe"; // Hamilton Specialist Referrals, High Wycombe
  if (/highcroft|whitchurch|bristol\s*BS14|MiNightVet/i.test(text)) return "Bristol"; // Highcroft Veterinary Group / MiNightVet Bristol
  if (/hillsborough|old\s*coach\s*road|co\s*down/i.test(text)) return "Hillsborough"; // Hillsborough Veterinary Referrals, Co Down
  if (/island\s*vetcare|ryde|isle\s*of\s*wight/i.test(text)) return "Ryde"; // Island VetCare, Ryde, Isle of Wight
  if (/langford|bristol\s*BS40|north\s*somerset/i.test(text)) return "Bristol"; // Langford Small Animal Referral Hospital, Bristol
  if (/anderson moores/.test(text)) return "Winchester";
  if (/cave veterinary/.test(text)) return "Wellington";
  if (/davies veterinary/.test(text)) return "Higham Gobion";
  if (/dick white referrals/.test(text)) return "Newmarket";
  if (/eastcott/.test(text)) return "Swindon";
  if (/kentdale/.test(text)) return "Milnthorpe";
  if (/north downs specialist/.test(text)) return "Bletchingley";
  if (/north west veterinary specialists/.test(text)) return "Sutton Weaver";
  if (/paragon veterinary/.test(text)) return "Wakefield";
  if (/southfields veterinary/.test(text)) return "Basildon";
  if (/veterinary specialists scotland|livingston|west lothian/i.test(text)) return "Livingston"; // Linnaeus Veterinary Specialists Scotland
  if (/wear referrals|stockton[-\s]?on[-\s]?tees|ts21 2es/i.test(text)) return "Stockton-on-Tees"; // Linnaeus Wear Referrals
  if (/willows veterinary services|willows.uk.net|solihull|highlands road|b90 4nh/i.test(text)) return "Solihull"; // Linnaeus Willows Veterinary Services Limited
  if (/lumbry park|lumbrypark|alton|selborne road|gu34 3hl/i.test(text)) return "Alton"; // Lumbry Park Veterinary Specialists
  if (/mandeville veterinary hospital|goddard.*mandeville|northolt|mandeville road|ub5 5hd/i.test(text)) return "Northolt"; // Mandeville Veterinary Hospital (Goddard)
  if (/new priory vets|brighton|bn1 8qr/i.test(text)) return "Brighton"; // New Priory Vets Brighton Limited
  if (/oakham veterinary hospital|ashwell road|oakham|rutland|le15 7qh/i.test(text)) return "Oakham"; // Oakham Veterinary Hospital
  if (/optivet referrals|optivet|havant|downley road|po9 2nj/i.test(text)) return "Havant"; // Optivet Referrals Ltd
  if (/pool house veterinary|lichfield|ws13 8jy/i.test(text)) return "Lichfield"; // Pool House Veterinary Hospital
  if (/queen mother hospital for small animals|royal veterinary college.*hatfield|al9 7ta/i.test(text)) return "Hatfield"; // Queen Mother Hospital for Small Animals (RVC)
  if (/rutland\s*veterinary|abbotsfield\s*road|st\s*helens|lancashire/i.test(text)) return "St Helens"; // Rutland Veterinary Hospital and Referral Centre, St Helens
  if (/scarsdale|pride\s*veterinary|derby\s*DE24|derbyshire/i.test(text)) return "Derby"; // Scarsdale Veterinary Group, Pride Veterinary Centre, Derby
  if (/south\s*devon|old\s*cider\s*works|newton\s*abbot|devon/i.test(text)) return "Newton Abbot"; // South Devon Veterinary Hospital, Newton Abbot
  if (/st\s*james|gower\s*road|swansea|west\s*glamorgan/i.test(text)) return "Swansea"; // St James Veterinary Group Ltd., Swansea
  if (/stone\s*lion|goddard|sw19/i.test(text)) return "London"; // Stone Lion Veterinary Hospital (Goddard), London SW19
  if (/swift\s*referrals|wetherby|west\s*yorkshire\s*ls23/i.test(text)) return "Wetherby"; // Swift Referrals, Wetherby
  if (/grove\s*veterinary|fakenham|norfolk\s*nr21/i.test(text)) return "Fakenham"; // The Grove Veterinary Hospital & Clinics, Fakenham
  if (/queen['’]s\s*veterinary|university\s*of\s*cambridge|cb3/i.test(text)) return "Cambridge"; // Queen's Veterinary School Small Animal Hospital, Cambridge
  if (/ralph\s*veterinary|fourth\s*avenue|marlow|buckinghamshire\s*sl7/i.test(text)) return "Marlow"; // The Ralph Veterinary Referral Centre, Marlow
  if (/university\s*of\s*edinburgh|easter\s*bush|roslin|midlothian/i.test(text)) return "Roslin"; // University of Edinburgh Hospital for Small Animals, Roslin
  if (/university\s*of\s*glasgow|small\s*animal\s*hospital|lanarkshire\s*g61|vet\.gla\.ac\.uk/i.test(text)) return "Glasgow"; // University of Glasgow Small Animal Hospital, Glasgow
  if (/university\s*of\s*liverpool|small\s*animal\s*teaching\s*hospital|neston|merseyside\s*ch64|liv\.ac\.uk/i.test(text)) return "Neston"; // University of Liverpool Small Animal Teaching Hospital, Neston
  if (/valley\s*veterinary|cardiff|glamorgan\s*cf15|valleyvets\.net/i.test(text)) return "Cardiff"; // Valley Veterinary Hospital, Cardiff
  if (/willows\s*veterinary|oakwood\s*veterinary|chester\s*road|northwich|cheshire\s*cw8|hartfordhospital@willowsvetgroup\.co\.uk/i.test(text)) return "Northwich"; // Willows Veterinary Hospital with Oakwood Veterinary referrals, Northwich

  //Europe
  if (/vienna/.test(text)) return "Vienna";
  if (/merelbeke|ghent/.test(text)) return "Merelbeke";
  if (/liege/.test(text)) return "Liège";
  if (/sofia/.test(text)) return "Sofia";
  if (/stara\s*zagora/.test(text)) return "Stara Zagora";
  if (/sarajevo/.test(text)) return "Sarajevo";
  if (/zagreb/.test(text)) return "Zagreb";
  if (/brno/.test(text)) return "Brno";
  if (/tartu/.test(text)) return "Tartu";
  if (/helsinki/.test(text)) return "Helsinki";
  if (/alfort|paris/.test(text)) return "Paris";
  if (/toulouse/.test(text)) return "Toulouse";
  if (/nantes/.test(text)) return "Nantes";
  if (/lyon/.test(text)) return "Lyon";
  if (/berlin/.test(text)) return "Berlin";
  if (/giessen/.test(text)) return "Giessen";
  if (/hannover/.test(text)) return "Hannover";
  if (/leipzig/.test(text)) return "Leipzig";
  if (/munich|münchen/.test(text)) return "Munich";
  if (/thessaloniki/.test(text)) return "Thessaloniki";
  if (/karditsa/.test(text)) return "Karditsa";
  if (/budapest/.test(text)) return "Budapest";
  if (/dublin/.test(text)) return "Dublin";
  if (/valenzano|bari/.test(text)) return "Valenzano";
  if (/ozzano/.test(text)) return "Ozzano Emilia";
  if (/matelica/.test(text)) return "Matelica";
  if (/messina/.test(text)) return "Messina";
  if (/lodi|milan/.test(text)) return "Lodi";
  if (/naples|napoli/.test(text)) return "Naples";
  if (/padua|legnaro/.test(text)) return "Legnaro";
  if (/parma/.test(text)) return "Parma";
  if (/perugia/.test(text)) return "Perugia";
  if (/pisa/.test(text)) return "Pisa";
  if (/sassari/.test(text)) return "Sassari";
  if (/teramo/.test(text)) return "Teramo";
  if (/turin|grugliasco/.test(text)) return "Grugliasco";
  if (/jelgava/.test(text)) return "Jelgava";
  if (/kaunas/.test(text)) return "Kaunas";
  if (/skopje/.test(text)) return "Skopje";
  if (/aas|ås/.test(text)) return "Ås";
  if (/kosice/.test(text)) return "Košice";
  if (/ljubljana/.test(text)) return "Ljubljana";
  if (/lisbon/.test(text)) return "Lisbon";
  if (/porto/.test(text)) return "Porto";
  if (/evora/.test(text)) return "Évora";
  if (/lusofona/.test(text)) return "Lisbon";
  if (/coimbra/.test(text)) return "Coimbra";
  if (/barcelona/.test(text)) return "Barcelona";
  if (/madrid/.test(text)) return "Madrid";
  if (/cordoba/.test(text)) return "Córdoba";
  if (/caceres/.test(text)) return "Cáceres";
  if (/las\s*palmas/.test(text)) return "Las Palmas";
  if (/leon/.test(text)) return "León";
  if (/santiago/.test(text)) return "Santiago de Compostela";
  if (/murcia/.test(text)) return "Murcia";
  if (/valencia/.test(text)) return "Valencia";
  if (/zaragoza/.test(text)) return "Zaragoza";
  if (/uppsala/.test(text)) return "Uppsala";
  if (/bern|berne/.test(text)) return "Bern";
  if (/zurich/.test(text)) return "Zurich";
  if (/london/.test(text)) return "London";
  if (/bristol/.test(text)) return "Bristol";
  if (/cambridge/.test(text)) return "Cambridge";
  if (/edinburgh/.test(text)) return "Edinburgh";
  if (/glasgow/.test(text)) return "Glasgow";
  if (/liverpool/.test(text)) return "Liverpool";
  if (/nottingham/.test(text)) return "Nottingham";
  if (/guildford|surrey/.test(text)) return "Guildford";
  if (/france/i.test(text) && /alfort|env[aà]/.test(text)) return "Maisons-Alfort";
  
  // CANADA
  if (/guelph/.test(text)) return "Guelph"; // Ontario Veterinary College
  if (/saskatoon/.test(text)) return "Saskatoon"; // Western College of Veterinary Medicine
  if (/calgary/.test(text)) return "Calgary"; // University of Calgary
  if (/montreal/.test(text)) return "Montreal"; // Université de Montréal (FMV)
  if (/prince\s*edward|charlottetown/.test(text)) return "Charlottetown"; // Atlantic Veterinary College
  if (/langley|british\s*columbia/.test(text)) return "Langley"; // University of British Columbia
    if (/17th\s*avenue\s*animal\s*hospital|17th\s*avenue\s*sw|calgary/i.test(text)) return "Calgary"; // 17th Avenue Animal Hospital, Calgary, AB
  if (/calgary\s*north\s*animal\s*hospital|4th\s*street\s*nw|calgary/i.test(text)) return "Calgary"; // Calgary North Animal Hospital, Calgary, AB
  if (/calgary\s*trail\s*animal\s*hospital|calgary\s*trail\s*northwest|edmonton/i.test(text)) return "Edmonton"; // Calgary Trail Animal Hospital, Edmonton, AB
  if (/calgary\s*west\s*animal\s*hospital|37\s*street\s*sw|calgary/i.test(text)) return "Calgary"; // Calgary West Animal Hospital, Calgary, AB
  if (/care\s*centre|12th\s*street\s*s\.?e\.?|calgary/i.test(text)) return "Calgary"; // CARE Centre, Calgary, AB
  if (/coach\s*hill\s*animal\s*hospital|old\s*banff\s*coach\s*road\s*sw|calgary/i.test(text)) return "Calgary"; // Coach Hill Animal Hospital, Calgary, AB
  if (/country\s*hills\s*animal\s*hospital|country\s*hills\s*blvd\.?\s*nw|calgary/i.test(text)) return "Calgary"; // Country Hills Animal Hospital, Calgary, AB
  if (/crowfoot\s*animal\s*hospital|crowfoot\s*cres\s*nw|calgary/i.test(text)) return "Calgary"; // Crowfoot Animal Hospital, Calgary, AB
  if (/dalhousie\s*varsity\s*animal\s*hospital|dalhousie\s*drive\s*nw|calgary/i.test(text)) return "Calgary"; // Dalhousie Varsity Animal Hospital, Calgary, AB
  if (/district\s*animal\s*hospital|urgent\s*care|11\s*st\s*ne|calgary/i.test(text)) return "Calgary"; // District Animal Hospital & Urgent Care, Calgary, AB
  if (/forest\s*lawn\s*animal\s*hospital|36\s*street\s*se|calgary/i.test(text)) return "Calgary"; // Forest Lawn Animal Hospital, Calgary, AB
  if (/green\s*acres\s*animal\s*hospital|24\s*avenue\s*s|lethbridge/i.test(text)) return "Lethbridge"; // Green Acres Animal Hospital, Lethbridge, AB
  if (/guardian\s*veterinary\s*centre|99\s*street|edmonton/i.test(text)) return "Edmonton"; // Guardian Veterinary Centre, Edmonton, AB
  if (/harvest\s*hills\s*animal\s*hospital|country\s*hills\s*blvd\.?\s*ne|calgary/i.test(text)) return "Calgary"; // Harvest Hills Animal Hospital, Calgary, AB
  if (/landing\s*animal\s*hospital|glenmore\s*landing|90\s*ave\s*sw|calgary/i.test(text)) return "Calgary"; // Landing Animal Hospital, Calgary, AB
  if (/marda\s*loop\s*animal\s*hospital|16\s*street\s*sw|calgary/i.test(text)) return "Calgary"; // Marda Loop Animal Hospital, Calgary, AB
  if (/marlborough\s*animal\s*hospital|52\s*st\s*ne|calgary/i.test(text)) return "Calgary"; // Marlborough Animal Hospital, Calgary, AB
  if (/mayfield\s*animal\s*hospital|106\s*avenue|edmonton/i.test(text)) return "Edmonton"; // Mayfield Animal Hospital, Edmonton, AB
  if (/mckenzie\s*towne\s*animal\s*hospital|mckenzie\s*towne\s*gate|calgary/i.test(text)) return "Calgary"; // McKenzie Towne Animal Hospital, Calgary, AB
  if (/mills\s*haven\s*animal\s*hospital|chippewa\s*road|sherwood\s*park/i.test(text)) return "Sherwood Park"; // Mills Haven Animal Hospital, Sherwood Park, AB
  if (/riverbend\s*animal\s*hospital\s*calgary|18\s*street\s*se|calgary/i.test(text)) return "Calgary"; // Riverbend Animal Hospital Calgary, AB
  if (/riverbend\s*veterinary\s*hospital\s*edmonton|riverbend\s*road|edmonton/i.test(text)) return "Edmonton"; // Riverbend Veterinary Hospital Edmonton, AB
  if (/royal\s*oak\s*animal\s*hospital|country\s*hills\s*blvd\.?\s*nw|calgary/i.test(text)) return "Calgary"; // Royal Oak Animal Hospital, Calgary, AB
  if (/shawnessy\s*south\s*animal\s*hospital|shawville\s*blvd\s*sw|calgary/i.test(text)) return "Calgary"; // Shawnessy South Animal Hospital, Calgary, AB
  if (/tuscany\s*animal\s*hospital|tuscany\s*blvd\s*nw|calgary/i.test(text)) return "Calgary"; // Tuscany Animal Hospital, Calgary, AB
  if (/vets\s*to\s*go|36\s*ave\s*ne|calgary|edmonton/i.test(text)) return "Calgary"; // Vets To Go (Calgary & Edmonton), AB
  if (/western\s*veterinary\s*specialist|emergency\s*centre|10\s*avenue\s*sw|calgary/i.test(text)) return "Calgary"; // Western Veterinary Specialist & Emergency Centre, Calgary, AB
  if (/applecross\s*animal\s*hospital|applecross\s*road|nanaimo/i.test(text)) return "Nanaimo"; // Applecross Animal Hospital, Nanaimo, BC
  if (/cats\s*only\s*animal\s*hospital|west\s*4th\s*avenue|vancouver/i.test(text)) return "Vancouver"; // Cats Only Animal Hospital, Vancouver, BC
  if (/central\s*saanich\s*animal\s*hospital|stelly('|’)s\s*x\s*road|saanichton/i.test(text)) return "Saanichton"; // Central Saanich Animal Hospital, Saanichton, BC
  if (/central\s*victoria\s*veterinary\s*hospital|roderick\s*street|victoria/i.test(text)) return "Victoria"; // Central Victoria Veterinary Hospital, Victoria, BC
  if (/como\s*lake\s*animal\s*hospital|como\s*lake\s*avenue|coquitlam/i.test(text)) return "Coquitlam"; // Como Lake Animal Hospital, Coquitlam, BC
  if (/feltham\s*animal\s*hospital|shelbourne\s*st|victoria/i.test(text)) return "Victoria"; // Feltham Animal Hospital, Victoria, BC
  if (/healing\s*paws\s*animal\s*hospital|klahanie\s*drive|port\s*moody/i.test(text)) return "Port Moody"; // Healing Paws Animal Hospital, Port Moody, BC
  if (/highlands\s*animal\s*hospital|highlands\s*boulevard|north\s*vancouver/i.test(text)) return "North Vancouver"; // Highlands Animal Hospital, North Vancouver, BC
  if (/island\s*animal\s*hospital|bowen\s*road|nanaimo/i.test(text)) return "Nanaimo"; // Island Animal Hospital, Nanaimo, BC
  if (/ladysmith\s*animal\s*hospital|first\s*avenue|ladysmith/i.test(text)) return "Ladysmith"; // Ladysmith Animal Hospital, Ladysmith, BC
  if (/lynn\s*valley\s*animal\s*hospital|lynn\s*valley\s*road|north\s*vancouver/i.test(text)) return "North Vancouver"; // Lynn Valley Animal Hospital, North Vancouver, BC
  if (/newton\s*animal\s*hospital|king\s*george\s*blvd|surrey/i.test(text)) return "Surrey"; // Newton Animal Hospital, Surrey, BC
  if (/north\s*shore\s*animal\s*hospital|mountain\s*highway|north\s*vancouver/i.test(text)) return "North Vancouver"; // North Shore Animal Hospital, North Vancouver, BC
  if (/ross\s*bay\s*animal\s*hospital|fairfield\s*road|victoria/i.test(text)) return "Victoria"; // Ross Bay Animal Hospital, Victoria, BC
  if (/shamrock\s*animal\s*hospital|guthrie\s*rd|comox/i.test(text)) return "Comox"; // Shamrock Animal Hospital, Comox, BC
  if (/tri\s*lake\s*animal\s*hospital|powley\s*court|winfield/i.test(text)) return "Winfield"; // Tri Lake Animal Hospital & Referral Centre, Winfield, BC
  if (/vancouver\s*animal\s*emergency\s*&?\s*referral\s*centre|alberta\s*street|vancouver/i.test(text)) return "Vancouver"; // Vancouver Animal Emergency & Referral Centre, Vancouver, BC
  if (/vancouver\s*animal\s*wellness\s*hospital|broadway|vancouver/i.test(text)) return "Vancouver"; // Vancouver Animal Wellness Hospital, Vancouver, BC
  if (/yaletown\s*animal\s*hospital|expo\s*blvd|vancouver/i.test(text)) return "Vancouver"; // Yaletown Animal Hospital, Vancouver, BC
  if (/404\s*veterinary\s*emergency.*newmarket|harry\s*walker\s*parkway/i.test(text)) return "Newmarket"; // 404 Veterinary Emergency and Referral Hospital, Newmarket
  if (/alta\s*vista\s*animal\s*hospital|bank\s*street|gloucester/i.test(text)) return "Gloucester"; // Alta Vista Animal Hospital, Gloucester
  if (/askey\s*animal\s*hospital|fairview\s*street|burlington/i.test(text)) return "Burlington"; // Askey Animal Hospital, Burlington
  if (/barrie\s*veterinary\s*hospital|bayfield\s*street|barrie/i.test(text)) return "Barrie"; // Barrie Veterinary Hospital, Barrie
  if (/bay\s*cities\s*animal\s*hospital|new\s*street|burlington/i.test(text)) return "Burlington"; // Bay Cities Animal Hospital, Burlington
  if (/bayview\s*animal\s*hospital|carling\s*ave|ottawa/i.test(text)) return "Ottawa"; // Bayview Animal Hospital, Ottawa
  if (/beardall\s*animal\s*hospital|bath\s*road|kingston/i.test(text)) return "Kingston"; // Beardall Animal Hospital, Kingston
  if (/bellbrae\s*animal\s*hospital|county\s*rd.*collingwood/i.test(text)) return "Collingwood"; // Bellbrae Animal Hospital, Collingwood
  if (/bells\s*corners\s*animal\s*hospital|robertson\s*road|nepean/i.test(text)) return "Nepean"; // Bells Corners Animal Hospital, Nepean
  if (/birchmount\s*animal\s*hospital|birchmount\s*road|scarborough/i.test(text)) return "Scarborough"; // Birchmount Animal Hospital, Scarborough
  if (/blair\s*animal\s*hospital|shefford\s*rd|gloucester/i.test(text)) return "Gloucester"; // Blair Animal Hospital, Gloucester
  if (/bloor\s*animal\s*hospital|bloor\s*st.*west|toronto/i.test(text)) return "Toronto"; // Bloor Animal Hospital, Toronto
  if (/blue\s*cross\s*animal\s*hospital|london\s*road|sarnia/i.test(text)) return "Sarnia"; // Blue Cross Animal Hospital, Sarnia
  if (/burgess\s*animal\s*hospital|glamis\s*road|cambridge/i.test(text)) return "Cambridge"; // Burgess Animal Hospital, Cambridge
  if (/burlington\s*animal\s*hospital|guelph\s*line|burlington/i.test(text)) return "Burlington"; // Burlington Animal Hospital, Burlington
  if (/burnham\s*mansion\s*animal\s*hospital|keene\s*road|peterborough/i.test(text)) return "Peterborough"; // Burnham Mansion Animal Hospital, Peterborough
  if (/cachet\s*village\s*animal\s*hospital|markland\s*street|markham/i.test(text)) return "Markham"; // Cachet Village Animal Hospital, Markham
  if (/credit\s*valley\s*animal\s*hospital|satellite\s*drive|mississauga/i.test(text)) return "Mississauga"; // Credit Valley Animal Hospital, Mississauga
  if (/don\s*mills\s*animal\s*hospital|scarsdale\s*road|north\s*york/i.test(text)) return "North York"; // Don Mills Animal Hospital, North York
  if (/downtown\s*animal\s*hospital|church\s*street|toronto/i.test(text)) return "Toronto"; // Downtown Animal Hospital, Toronto
  if (/eastside\s*animal\s*hospital|#8\s*highway|stoney\s*creek/i.test(text)) return "Stoney Creek"; // Eastside Animal Hospital, Stoney Creek
  if (/foster\s*park\s*animal\s*hospital|dundas\s*street\s*east|belleville/i.test(text)) return "Belleville"; // Foster Park Animal Hospital, Belleville
  if (/guelph\s*veterinary\s*surgery\s*services|gordon\s*street|guelph/i.test(text)) return "Guelph"; // Guelph Veterinary Surgery Services, Guelph
  if (/heritage\s*animal\s*hospital|king\s*street.*midland/i.test(text)) return "Midland"; // Heritage Animal Hospital, Midland
  if (/jackson\s*creek\s*animal\s*hospital|parkhill\s*road.*peterborough/i.test(text)) return "Peterborough"; // Jackson Creek Animal Hospital, Peterborough
  if (/kanata\s*animal\s*hospital|hazeldean\s*rd|kanata/i.test(text)) return "Kanata"; // Kanata Animal Hospital, Kanata
  if (/kew\s*beach\s*animal\s*hospital|queen\s*street\s*east|toronto/i.test(text)) return "Toronto"; // Kew Beach Animal Hospital, Toronto
  if (/kingsway\s*animal\s*hospital|king\s*street.*hamilton/i.test(text)) return "Hamilton"; // Kingsway Animal Hospital, Hamilton
  if (/kortright\s*animal\s*hospital|kortright\s*road|guelph/i.test(text)) return "Guelph"; // Kortright Animal Hospital, Guelph
  if (/lakeshore\s*animal\s*hospital|lakeshore\s*rd.*mississauga/i.test(text)) return "Mississauga"; // Lakeshore Animal Hospital, Mississauga
  if (/lawrence\s*veterinary\s*clinic|lawrence\s*avenue\s*west|toronto/i.test(text)) return "Toronto"; // Lawrence Veterinary Clinic, Toronto
  if (/lexington\s*rd\.?\s*animal\s*hospital|lexington\s*court|waterloo/i.test(text)) return "Waterloo"; // Lexington Rd. Animal Hospital, Waterloo
  if (/london\s*regional\s*veterinary\s*emergency.*referral\s*hospital|adelaide\s*st.*london/i.test(text)) return "London"; // London Regional Veterinary Emergency and Referral Hospital, London
  if (/masonville\s*animal\s*hospital|fanshawe\s*park.*london/i.test(text)) return "London"; // Masonville Animal Hospital, London
  if (/matthews\s*animal\s*hospital|southdale\s*road.*london/i.test(text)) return "London"; // Matthews Animal Hospital, London
  if (/mississauga\s*oakville\s*veterinary\s*emergency.*specialty\s*hospital|bristol\s*circle|oakville/i.test(text)) return "Oakville"; // Mississauga Oakville Veterinary Emergency and Specialty Hospital, Oakville
  if (/mt\.?\s*pleasant\s*[-–]?\s*davisville\s*animal\s*hospital|mount\s*pleasant\s*rd|toronto/i.test(text)) return "Toronto"; // Mt. Pleasant - Davisville Animal Hospital, Toronto
  if (/northdale\s*animal\s*hospital|adelaide\s*street\s*n.*london/i.test(text)) return "London"; // Northdale Animal Hospital, London
  if (/northumberland\s*animal\s*hospital|big\s*apple\s*dr|colborne/i.test(text)) return "Colborne"; // Northumberland Animal Hospital, Colborne
  if (/oshawa\s*animal\s*hospital|taunton\s*road\s*west|oshawa/i.test(text)) return "Oshawa"; // Oshawa Animal Hospital, Oshawa
  if (/o['’]sullivan\s*animal\s*hospital|leacock\s*dr|barrie/i.test(text)) return "Barrie"; // O'Sullivan Animal Hospital, Barrie
  if (/ottawa\s*veterinary\s*hospital|carling\s*avenue|ottawa/i.test(text)) return "Ottawa"; // Ottawa Veterinary Hospital, Ottawa
  if (/petrolia\s*veterinary\s*services|oil\s*heritage\s*road|petrolia/i.test(text)) return "Petrolia"; // Petrolia Veterinary Services, Petrolia
  if (/port\s*colborne\s*animal\s*hospital|elm\s*street|port\s*colborne/i.test(text)) return "Port Colborne"; // Port Colborne Animal Hospital, Port Colborne
  if (/pretoria\s*animal\s*hospital|pretoria\s*avenue|ottawa/i.test(text)) return "Ottawa"; // Pretoria Animal Hospital, Ottawa
  if (/richmond\s*hill\s*animal\s*hospital|centre\s*street\s*w|richmond\s*hill/i.test(text)) return "Richmond Hill"; // Richmond Hill Animal Hospital, Richmond Hill
  if (/rosedale\s*animal\s*hospital|yonge\s*st|toronto/i.test(text)) return "Toronto"; // Rosedale Animal Hospital, Toronto
  if (/scarborough\s*animal\s*hospital|kingston\s*road|toronto/i.test(text)) return "Toronto"; // Scarborough Animal Hospital, Toronto
  if (/secord\s*animal\s*hospital|yonge\s*st|toronto/i.test(text)) return "Toronto"; // Secord Animal Hospital, Toronto
  if (/toronto\s*veterinary\s*emergency\s*hospital|rolark\s*drive|scarborough/i.test(text)) return "Scarborough"; // Toronto Veterinary Emergency Hospital, Scarborough
  if (/westside\s*animal\s*hospital|dufferin\s*street|toronto/i.test(text)) return "Toronto"; // Westside Animal Hospital, Toronto
  if (/willowdale\s*animal\s*hospital|sheppard\s*avenue\s*west|toronto/i.test(text)) return "Toronto"; // Willowdale Animal Hospital, Toronto
  if (/centre\s*v[eé]t[eé]rinaire\s*laval|highway\s*440|laval/i.test(text)) return "Laval"; // Centre Vétérinaire Laval, Laval
  if (/centre\s*v[eé]t[eé]rinaire\s*rive-sud|taschereau\s*blvd|brossard/i.test(text)) return "Brossard"; // Centre Vétérinaire Rive-Sud, Brossard
  if (/clinique\s*vet.*sante\s*animale\s*de\s*montreal|sherbrooke.*montr[eé]al/i.test(text)) return "Montréal"; // Clinique vet. de Sante Animale de Montreal, Montréal
  if (/clinique\s*v[eé]t[eé]rinaire\s*cimon\s*loretteville|racine.*qu[eé]bec/i.test(text)) return "Québec"; // Clinique Vétérinaire Cimon Loretteville, Quebec
  if (/clinique\s*v[eé]t[eé]rinaire\s*cimon\s*st-?sacrement|sainte-?foy.*qu[eé]bec/i.test(text)) return "Québec"; // Clinique Vétérinaire Cimon St-Sacrement, Quebec
  if (/clinique\s*v[eé]t[eé]rinaire\s*cimon\s*vanier|wilfrid-hamel.*qu[eé]bec/i.test(text)) return "Québec"; // Clinique Vétérinaire Cimon Vanier, Quebec
  if (/clinique\s*v[eé]t[eé]rinaire\s*f[eé]line.*ste-?foy|route\s*de\s*L['’]Eglise.*qu[eé]bec/i.test(text)) return "Québec"; // Clinique veterinaire feline de Ste-Foy, Quebec
  if (/hopital\s*v[eé]t[eé]rinaire\s*blainville|cur[eé]-labelle.*blainville/i.test(text)) return "Blainville"; // Hopital Veterinaire Blainville, Blainville
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*centre-ville.*montr[eé]al|de\s*maisonneuve.*montr[eé]al/i.test(text)) return "Montréal"; // Hôpital Vétérinaire Centre-ville Montréal, Montréal
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*de\s*l['’]ormiere|boulevard\s*de\s*l['’]auvergne.*qu[eé]bec/i.test(text)) return "Québec"; // Hôpital Vétérinaire de l’Ormière, Quebec
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*de\s*la\s*laurentie|rue\s*de\s*la\s*visitation.*saint-?charles/i.test(text)) return "Saint-Charles-Borromée"; // Hôpital Vétérinaire de la Laurentie, Saint-Charles-Borromée
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*de\s*la\s*mont[eé]r[eé]gie|bellerive.*carignan/i.test(text)) return "Carignan"; // Hôpital Vétérinaire de la Montérégie, Carignan
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*de\s*repentigny|notre-dame.*repentigny/i.test(text)) return "Repentigny"; // Hôpital Vétérinaire de Repentigny, Repentigny
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*des\s*laurentides|henri-bourassa.*qu[eé]bec/i.test(text)) return "Québec"; // Hôpital Vétérinaire des Laurentides, Quebec
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*des\s*moulins|masson.*maschouche/i.test(text)) return "Maschouche"; // Hôpital Vétérinaire des Moulins, Maschouche
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*ste-?rose|cur[eé]-labelle.*laval/i.test(text)) return "Laval"; // Hôpital Vétérinaire Ste-Rose, Laval
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*ste-?th[eé]r[eè]se|cur[eé]-labelle.*ste-?th[eé]r[eè]se/i.test(text)) return "Ste-Thérèse"; // Hôpital Vétérinaire Ste-Thérèse, Ste-Thérèse
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*st-?eustache.*deux-montagnes|hector-lanthier.*st-?eustache/i.test(text)) return "St-Eustache"; // Hôpital Vétérinaire St-Eustache Deux-Montagnes, St-Eustache
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*trifluvien|rue\s*vachon.*trois-rivi[eè]res/i.test(text)) return "Trois-Rivières"; // Hôpital Vétérinaire Trifluvien, Trois-Rivières
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*victoria.*ste-?julie|montee\s*sainte-?julie.*sainte-?julie/i.test(text)) return "Sainte-Julie"; // Hôpital Vétérinaire Victoria - Ste-Julie Branch, Sainte-Julie
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*victoria.*st-?lambert|st-?denis.*st-?lambert/i.test(text)) return "St-Lambert"; // Hôpital Vétérinaire Victoria - St-Lambert Branch, St-Lambert
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*victoria.*verdun|[rue\s]*de\s*l['’]église.*verdun/i.test(text)) return "Verdun"; // Hôpital Vétérinaire Victoria - Verdun Branch, Verdun
  if (/h[oô]pital\s*v[eé]t[eé]rinaire\s*ville\s*st-?laurent|c[oô]te-vertu.*st-?laurent/i.test(text)) return "St-Laurent"; // Hôpital Vétérinaire Ville St-Laurent, St-Laurent
  if (/l['’]h[oô]pital\s*v[eé]t[eé]rinaire\s*victoria\s*[àa]\s*greenfield\s*park|lawrence\s*st.*greenfield\s*park/i.test(text)) return "Greenfield Park"; // L’Hôpital Vétérinaire Victoria à Greenfield Park, Greenfield Park
  if (/pierrefonds\s*animal\s*hospital|pierrefonds\s*blvd/i.test(text)) return "Pierrefonds"; // Pierrefonds Animal Hospital, Pierrefonds
  if (/all\s*west\s*animal\s*hospital|laurier\s*drive|saskatoon/i.test(text)) return "Saskatoon"; // All West Animal Hospital, Saskatoon, SK
  if (/central\s*animal\s*hospital|103\s*street\s*east|saskatoon/i.test(text)) return "Saskatoon"; // Central Animal Hospital, Saskatoon, SK
  if (/frontier\s*animal\s*hospital|alberta\s*ave|saskatoon/i.test(text)) return "Saskatoon"; // Frontier Animal Hospital, Saskatoon, SK
  if (/lakeview\s*animal\s*hospital|mckercher\s*drive|saskatoon/i.test(text)) return "Saskatoon"; // Lakeview Animal Hospital, Saskatoon, SK


  // USA
  if (/auburn/.test(text)) return "Auburn"; // Auburn University
  if (/tuskegee/.test(text)) return "Tuskegee"; // Tuskegee University
  if (/uc\s*davis|davis/.test(text)) return "Davis"; // UC Davis
  if (/western\s*university|pomona/.test(text)) return "Pomona"; // Western University of Health Sciences
  if (/fort\s*collins|colorado\s*state/.test(text)) return "Fort Collins"; // Colorado State University
  if (/storrs/.test(text)) return "Storrs"; // University of Connecticut (pre-vet, joint DVM program)
  if (/ithaca|cornell/.test(text)) return "Ithaca"; // Cornell University
  if (/gainesville/.test(text)) return "Gainesville"; // University of Florida
  if (/athens|georgia/.test(text)) return "Athens"; // University of Georgia
  if (/urbana|illinois/.test(text)) return "Urbana"; // University of Illinois Urbana-Champaign
  if (/ames|iowa\s*state/.test(text)) return "Ames"; // Iowa State University
  if (/manhattan|kansas\s*state/.test(text)) return "Manhattan"; // Kansas State University
  if (/lexington|kentucky/.test(text)) return "Lexington"; // University of Kentucky (joint with Auburn)
  if (/louisiana\s*state|baton\s*rouge/.test(text)) return "Baton Rouge"; // LSU
  if (/college\s*park/.test(text)) return "College Park"; // University of Maryland (joint with Virginia Tech)
  if (/ames/.test(text)) return "Ames"; // Iowa State
  if (/east\s*lansing|michigan\s*state/.test(text)) return "East Lansing"; // Michigan State University
  if (/minneapolis|st\s*paul/.test(text)) return "St. Paul"; // University of Minnesota
  if (/columbia\s*missouri|missouri\s*state/.test(text)) return "Columbia, Missouri"; // University of Missouri
  if (/starkville/.test(text)) return "Starkville"; // Mississippi State University
  if (/mississippi\s*state/.test(text)) return "Starkville"; // Mississippi State University
  if (/raleigh|north\s*carolina\s*state/.test(text)) return "Raleigh"; // North Carolina State University
  if (/corvallis|oregon\s*state/.test(text)) return "Corvallis"; // Oregon State University
  if (/philadelphia|penn\s*vet/.test(text)) return "Philadelphia"; // University of Pennsylvania
  if (/blacksburg|virginia\s*tech/.test(text)) return "Blacksburg"; // Virginia Tech (Virginia–Maryland College of Vet Med)
  if (/west\s*lafayette|purdue/.test(text)) return "West Lafayette"; // Purdue University
  if (/pullman|washington\s*state/.test(text)) return "Pullman"; // Washington State University
  if (/madison|wisconsin/.test(text)) return "Madison"; // University of Wisconsin–Madison
  if (/tuscon|arizona/.test(text)) return "Tucson"; // University of Arizona
  if (/stillwater|oklahoma\s*state/.test(text)) return "Stillwater"; // Oklahoma State University
  if (/columbus|ohio\s*state/.test(text)) return "Columbus"; // The Ohio State University
  if (/logan|utah\s*state/.test(text)) return "Logan"; // Utah State University (regional, joint with WSU)
  if (/amherst|massachusetts/.test(text)) return "Amherst"; // UMass (new DVM)
  if (/lynchburg|liberty/.test(text)) return "Lynchburg"; // Liberty University College of Veterinary Medicine
  if (/morgantown|west\s*virginia/.test(text)) return "Morgantown"; // West Virginia University (regional, joint)
  // AUSTRALIA
  if (/sydney/.test(text)) return "Sydney"; // University of Sydney
  if (/werribee|melbourne/.test(text)) return "Werribee"; // University of Melbourne
  if (/gatton|queensland/.test(text)) return "Gatton"; // University of Queensland
  if (/townsville|james\s*cook/.test(text)) return "Townsville"; // James Cook University
  if (/perth|murdoch/.test(text)) return "Perth"; // Murdoch University
  if (/adelaide/.test(text)) return "Adelaide"; // University of Adelaide
  if (/charles\s*sturt|wagga/.test(text)) return "Wagga Wagga"; // Charles Sturt University
  if (/perth\s*animal\s*eye\s*hospital/i.test(text)) return "Perth"; // Perth Animal Eye Hospital, Western Australia
  if (/brisbane\s*veterinary\s*specialists\s*centre/i.test(text)) return "Brisbane"; // Brisbane Veterinary Specialists Centre, Brisbane, Queensland
  if (/animal\s*orthopedic\s*specialists/i.test(text)) return "Sydney"; // Animal Orthopedic Specialists, New South Wales (Sydney or update city as needed)
  if (/north\s*shore\s*veterinary\s*specialists/i.test(text)) return "Sydney"; // North Shore Veterinary Specialists, New South Wales (Sydney)
  if (/sves/i.test(text)) return "Sydney"; // SVES, New South Wales (Sydney) [Sydney Veterinary Emergency & Specialists]
  if (/southpaws\s*malvern/i.test(text)) return "Malvern"; // Southpaws Malvern, Victoria
  if (/southpaws\s*moorabbin/i.test(text)) return "Moorabbin"; // Southpaws Moorabbin, Victoria
  if (/southpaws\s*mornington/i.test(text)) return "Mornington"; // Southpaws Mornington, Victoria
  if (/peninsula\s*vet\s*emergency\s*and\s*referral/i.test(text)) return "Mornington"; // Peninsula Vet Emergency and Referral Hospital, Mornington, Victoria


  // NEW ZEALAND
  if (/massey|palmerston/.test(text)) return "Palmerston North"; // Massey University

  // JAPAN
  if (/obihiro/.test(text)) return "Obihiro"; // Obihiro University of Agriculture & Veterinary Medicine
  if (/iwate/.test(text)) return "Morioka"; // Iwate University
  if (/rakuno|ebetsu/.test(text)) return "Ebetsu"; // Rakuno Gakuen University
  if (/nippon|kawasaki/.test(text)) return "Kawasaki"; // Nippon Veterinary and Life Science University
  if (/azabu|sagamihara/.test(text)) return "Sagamihara"; // Azabu University
  if (/osaka/.test(text)) return "Osaka"; // Osaka Prefecture University
  if (/yamaguchi/.test(text)) return "Yamaguchi"; // Yamaguchi University
  if (/kagoshima/.test(text)) return "Kagoshima"; // Kagoshima University
  if (/miyazaki/.test(text)) return "Miyazaki"; // University of Miyazaki
  if (/gifu/.test(text)) return "Gifu"; // Gifu University
  if (/kitasato|towada/.test(text)) return "Towada"; // Kitasato University

  // SOUTH KOREA
  if (/seoul/.test(text)) return "Seoul"; // Seoul National University
  if (/chuncheon|kangwon/.test(text)) return "Chuncheon"; // Kangwon National University
  if (/kyungpook|daegu/.test(text)) return "Daegu"; // Kyungpook National University
  if (/cheonbuk|jeonbuk|jeonju/.test(text)) return "Jeonju"; // Jeonbuk National University
  if (/chungbuk|cheongju/.test(text)) return "Cheongju"; // Chungbuk National University
  if (/chonnam|gwangju/.test(text)) return "Gwangju"; // Chonnam National University
  if (/chungnam|daejeon/.test(text)) return "Daejeon"; // Chungnam National University
  if (/jeju/.test(text)) return "Jeju"; // Jeju National University
  if (/gyeongsang|jinju/.test(text)) return "Jinju"; // Gyeongsang National University

  // CHINA (including Hong Kong, Taiwan)
  if (/beijing|china\s*agricultural/.test(text)) return "Beijing"; // China Agricultural University
  if (/nanjing/.test(text)) return "Nanjing"; // Nanjing Agricultural University
  if (/yangzhou/.test(text)) return "Yangzhou"; // Yangzhou University
  if (/xinjiang|urumqi/.test(text)) return "Urumqi"; // Xinjiang Agricultural University
  if (/guangzhou|south\s*china/.test(text)) return "Guangzhou"; // South China Agricultural University
  if (/harbin/.test(text)) return "Harbin"; // Northeast Agricultural University (Harbin)
  if (/hong\s*kong/.test(text)) return "Hong Kong"; // City University of Hong Kong (Jockey Club College)
  if (/taipei|taiwan/.test(text)) return "Taipei"; // National Taiwan University

  // THAILAND
  if (/bangkok|chulalongkorn/.test(text)) return "Bangkok"; // Chulalongkorn University
  if (/mae\s*jo/.test(text)) return "Chiang Mai"; // Maejo University (Faculty of Veterinary Medicine)
  if (/kasetsart/.test(text)) return "Bangkok"; // Kasetsart University
  if (/khon\s*kaen/.test(text)) return "Khon Kaen"; // Khon Kaen University
  if (/chiang\s*mai/.test(text)) return "Chiang Mai"; // Chiang Mai University
  if (/mahasarakham/.test(text)) return "Maha Sarakham"; // Mahasarakham University
  if (/prince\s*songkla/.test(text)) return "Hat Yai"; // Prince of Songkla University

  // MALAYSIA
  if (/universiti\s*putra|serdang/.test(text)) return "Serdang"; // Universiti Putra Malaysia

  // INDIA
  if (/madras|chennai/.test(text)) return "Chennai"; // Tamil Nadu Veterinary and Animal Sciences University
  if (/bangalore/.test(text)) return "Bangalore"; // Karnataka Veterinary, Animal and Fisheries Sciences University
  if (/mumbai|bombay/.test(text)) return "Mumbai"; // Bombay Veterinary College (Maharashtra Animal and Fishery Sciences University)
  if (/ludhiana/.test(text)) return "Ludhiana"; // Guru Angad Dev Veterinary and Animal Sciences University
  if (/karnal/.test(text)) return "Karnal"; // National Dairy Research Institute (has vet sciences)
  if (/guwahati/.test(text)) return "Guwahati"; // Assam Agricultural University (College of Veterinary Science)

  // PAKISTAN
  if (/lahore/.test(text)) return "Lahore"; // University of Veterinary and Animal Sciences
  if (/faisalabad/.test(text)) return "Faisalabad"; // University of Agriculture, Faisalabad

  // PHILIPPINES
  if (/los\s*banos/.test(text)) return "Los Baños"; // University of the Philippines Los Baños

  // INDONESIA
  if (/bogor/.test(text)) return "Bogor"; // IPB University (Institut Pertanian Bogor)

  // SINGAPORE
  if (/singapore/.test(text)) return "Singapore"; // NUS and joint veterinary programs

  // VIETNAM
  if (/hanoi/.test(text)) return "Hanoi"; // Vietnam National University of Agriculture
  if (/seoul/.test(text)) return "Seoul"; // Seoul National University
  if (/chuncheon|kangwon/.test(text)) return "Chuncheon"; // Kangwon National University
  if (/daegu|kyungpook/.test(text)) return "Daegu"; // Kyungpook National University
  if (/jeonju|jeonbuk|chonbuk/.test(text)) return "Jeonju"; // Jeonbuk National University
  if (/cheongju|chungbuk/.test(text)) return "Cheongju"; // Chungbuk National University
  if (/gwangju|chonnam/.test(text)) return "Gwangju"; // Chonnam National University
  if (/daejeon|chungnam/.test(text)) return "Daejeon"; // Chungnam National University
  if (/jeju/.test(text)) return "Jeju"; // Jeju National University
  if (/jinju|gyeongsang/.test(text)) return "Jinju"; // Gyeongsang National University

  //UK
  if (/ringwood|southern\s*counties/.test(text)) return "Ringwood"; // Southern Counties Veterinary Specialists (Hampshire, UK) :contentReference[oaicite:1]{index=1}
  if (/woking|davies\s*veterinary/.test(text)) return "Woking"; // Davies Veterinary Specialists (Woking, UK) :contentReference[oaicite:2]{index=2}
  if (/london.*davies/.test(text)) return "London"; // Davies London branch
  if (/alton|lumbry\s*park/.test(text)) return "Alton"; // Lumbry Park Veterinary Specialists (Alton, UK) :contentReference[oaicite:3]{index=3}
  if (/basildon|southfields/.test(text)) return "Basildon"; // Southfields Veterinary Specialists (Essex, UK) :contentReference[oaicite:4]{index=4}
  if (/newcastle|bridge\s*referrals/.test(text)) return "Newcastle upon Tyne"; // Bridge Referrals (NE England) :contentReference[oaicite:5]{index=5}
  if (/belfast|earlswood/.test(text)) return "Belfast"; // Earlswood Veterinary Referrals (Northern Ireland) :contentReference[oaicite:6]{index=6}
  if (/meath|summerhill|cork/.test(text)) return "Meath/Cork"; // Veterinary Specialists Ireland (Meath & Cork) :contentReference[oaicite:7]{index=7}
  if (/paris|fregis/.test(text)) return "Paris"; // Centre Hospitalier Vétérinaire Frégis (Paris, France) :contentReference[oaicite:8]{index=8}
  if (/hofheim|tierklinik\shofheim/.test(text)) return "Hofheim"; // Tierklinik Hofheim (Germany) :contentReference[oaicite:9]{index=9}
  if (/optivet/.test(text)) return "Various UK"; // Optivet Referrals (Hampshire, Devon, Glasgow, London, IoW) :contentReference[oaicite:10]{index=10}
  if (/fitzpatrick/.test(text)) return "Guildford"; // Fitzpatrick Referrals (Surrey, UK) :contentReference[oaicite:11]{index=11}
  if (/queen\s*mother\s*hospital/.test(text)) return "Hatfield"; // Queen Mother Hospital for Animals (RVC, Hatfield) :contentReference[oaicite:12]{index=12}
    
  // AniCura specialist/referral clinics (individual notable centres)
  if (/bah[ií]a\s*de\s*malaga|alhaur[ií]n/.test(text)) return "Málaga"; // AniCura Bahía de Málaga Referencia Veterinaria (Alhaurín de la Torre, Málaga) :contentReference[oaicite:1]{index=1}
  if (/alicante|aitana/.test(text)) return "Alicante"; // AniCura Aitana Veterinary Hospital :contentReference[oaicite:2]{index=2}
  if (/val[eé]ncia\s*sur/.test(text)) return "Valencia"; // AniCura Valencia Sur Veterinary Hospital :contentReference[oaicite:3]{index=3}
  if (/alicante|arago/.test(text)) return "Barcelona"; // AniCura Arago Veterinary Hospital :contentReference[oaicite:4]{index=4}
  if (/marina\s*alta/.test(text)) return "Marina Alta (Alicante region)"; // AniCura Marina Alta Veterinary Center :contentReference[oaicite:5]{index=5}
  if (/gl[oó]ries/.test(text)) return "Barcelona"; // AniCura Glòries Veterinary Hospital :contentReference[oaicite:6]{index=6}
  if (/marina\s*baixa/.test(text)) return "Marina Baixa (Alicante region)"; // AniCura Marina Baixa Veterinary Hospital :contentReference[oaicite:7]{index=7}
  if (/estoril/.test(text)) return "Estoril"; // AniCura Estoril Veterinary Hospital (Portugal) :contentReference[oaicite:8]{index=8}
  if (/lepa[nñ]to/.test(text)) return "Madrid"; // AniCura Lepanto Veterinary Reference :contentReference[oaicite:9]{index=9}
  if (/vet['’]?s\s*avinguda/.test(text)) return "Barcelona"; // AniCura Vet's Avinguda Veterinary Hospital :contentReference[oaicite:10]{index=10}
  if (/vetamic/.test(text)) return "Valencia region"; // AniCura Vetamic Veterinary Clinic :contentReference[oaicite:11]{index=11}
  if (/mediterrani/.test(text)) return "Barcelona"; // AniCura Mediterrani Veterinary Hospital :contentReference[oaicite:12]{index=12}

  // IVC Evidensia referral hospitals & specialist centres
  if (/tierklinik\shofheim/.test(text)) return "Hofheim"; // Tierklinik Hofheim, Germany :contentReference[oaicite:13]{index=13}
  if (/bom\s*jesus/.test(text)) return "Braga"; // Bom Jesus Veterinary Hospital (IVC Evidensia Portugal) :contentReference[oaicite:14]{index=14}
  if (/vetoeiras/.test(text)) return "Lisbon region"; // VetOeiras, Oeiras (Lisbon), Portugal :contentReference[oaicite:15]{index=15}
  if (/oslo.*evidensia|evidensia\s+oslo/.test(text)) return "Oslo"; // Evidensia Oslo Animal Hospital, Norway :contentReference[oaicite:16]{index=16}
  if (/birmingham|longbridge/.test(text)) return "Birmingham"; // Planned IVC Evidensia referral hospital, Longbridge, UK :contentReference[oaicite:17]{index=17}

  // U.S. Referral & Specialty Hospitals
  if (/friendship\s*hospital\s*for\s*animals/i.test(text)) return "Washington, DC"; // Friendship Hospital for Animals, DC :contentReference[oaicite:1]{index=1}
  if (/massachusetts\s*veterinary\s*referral\s*hospital/i.test(text)) return "Woburn, MA"; // Massachusetts Veterinary Referral Hospital :contentReference[oaicite:2]{index=2}
  if (/tufts\s*university\s*cummings\s*school/i.test(text)) return "North Grafton, MA"; // Tufts University Cummings School :contentReference[oaicite:3]{index=3}
  if (/long\s*island\s*veterinary\s*specialists/i.test(text)) return "Plainview, NY"; // Long Island Veterinary Specialists :contentReference[oaicite:4]{index=4}
  if (/bluepearl\s*specialty\s*and\s*emergency/i.test(text)) return "Multiple States"; // BluePearl Specialty & Emergency :contentReference[oaicite:5]{index=5}

  // Select Canadian Specialty / Emergency Centres
  if (/apexvets/i.test(text)) return "Silver Spring, MD"; // ApexVets (VSPA member) — note: MD but in VSPA :contentReference[oaicite:13]{index=13}
  if (/canada\s*west\s*veterinary\s*specialists/i.test(text)) return "Vancouver, BC"; // Canada West Veterinary Specialists :contentReference[oaicite:14]{index=14}
  if (/animal\s*emergency\s*&\s*referral\s*center\s*of\s*minnesota/i.test(text)) return "Oakdale, MN"; // Minnesota centre :contentReference[oaicite:15]{index=15}
  if (/capital\s*city\s*specialty\s*&\s*emergency\s*animal\s*hospital/i.test(text)) return "Kanata, ON"; // Ontario centre :contentReference[oaicite:16]{index=16}
  if (/four\s*seasons\s*veterinary\s*specialists/i.test(text)) return "Loveland, CO"; // Colorado centre :contentReference[oaicite:17]{index=17}
  if (/crown\s*veterinary\s*specialists/i.test(text)) return "Lebanon, NJ"; // NJ centre :contentReference[oaicite:18]{index=18}
  if (/upstate\s*veterinary\s*specialties/i.test(text)) return "Latham, NY"; // NY centre :contentReference[oaicite:19]{index=19}
  if (/sunstone\s*veterinary\s*specialists/i.test(text)) return "Portland, OR"; // Oregon centre :contentReference[oaicite:20]{index=20}
  if (/red\s*river\s*animal\s*emergency\s*hospital\s*and\s*referral\s*center/i.test(text)) return "Fargo, ND"; // North Dakota centre :contentReference[oaicite:21]{index=21}
  if (/veterinary\s*specialists\s*of\s*the\s*rockies/i.test(text)) return "Castle Rock, CO"; // Colorado centre :contentReference[oaicite:22]{index=22}
  if (/violet\s*crown\s*veterinary\s*specialists/i.test(text)) return "Bee Cave, TX"; // Texas centre :contentReference[oaicite:23]{index=23}
  if (/united\s*vision\s*pet\s*partners/i.test(text)) return "Newtown Square, PA"; // Pennsylvania centre :contentReference[oaicite:24]{index=24}
  if (/mountain\s*view\s*animal\s*emergency/i.test(text)) return "Hagerstown, MD"; // Maryland centre :contentReference[oaicite:25]{index=25}
  if (/canadian\s*specialty.+emergency/i.test(text)) return "Canada"; // National network
  if (/animal\s*emergency\s*clinic\s*of\s*the\s*fraser\s*valley/i.test(text)) return "Langley, BC"; // Fraser Valley centre :contentReference[oaicite:26]{index=26}
  if (/tri\s*lake\s*animal\s*hospital\s*&\s*referral\s*centre/i.test(text)) return "Winfield, BC"; // Tri Lake centre :contentReference[oaicite:27]{index=27}
  if (/vancouver\s*animal\s*emergency\s*&\s*referral\s*centre/i.test(text)) return "Vancouver, BC"; // Vancouver centre :contentReference[oaicite:28]{index=28}

    // --- China ---
  if (/puppytown.*beijing|dr pet beijing|loving care.*beijing/i.test(text)) return "Beijing";
  if (/xiehe.*chengdu|chengdu xiehe/i.test(text)) return "Chengdu";
  if (/zhejiang university.*hangzhou/i.test(text)) return "Hangzhou";
  if (/shenpu.*shanghai|dr pet animal hospital.*shanghai|naughty family.*shanghai|babara.*shanghai/i.test(text)) return "Shanghai";
  if (/shenzhen ivc|nanshan.*shenzhen/i.test(text)) return "Shenzhen";

  // --- Japan ---
  if (/daktari.*tokyo medical center|shirokanedai|minato-ku|hachiouji|shinagawa.*tokyo/i.test(text)) return "Tokyo";
  if (/all heart.*machida/i.test(text)) return "Tokyo";
  if (/moriyama.*nagoya/i.test(text)) return "Nagoya";
  if (/apple tree.*anjo/i.test(text)) return "Anjo";
  if (/mizuno.*kiyosu/i.test(text)) return "Kiyosu";
  if (/nihon university.*fujisawa/i.test(text)) return "Fujisawa";
  if (/jasmine.*yokohama/i.test(text)) return "Yokohama";
  if (/daktari.*kyoto/i.test(text)) return "Kyoto";
  if (/daktari.*kansai.*sakai/i.test(text)) return "Sakai";
  if (/hachioji/i.test(text)) return "Hachioji";
  if (/shinagawa.*tokyo/i.test(text)) return "Tokyo";

  // --- Korea ---
  if (/korea animal medical center.*cheongju/i.test(text)) return "Cheongju";
  if (/barun.*daegu/i.test(text)) return "Daegu";
  if (/mapo.*seoul/i.test(text)) return "Seoul";
  if (/gangdong.*seoul/i.test(text)) return "Seoul";
  if (/jungnang.*seoul/i.test(text)) return "Seoul";
  if (/anyang.*animal medical/i.test(text)) return "Anyang";
  if (/haemaru.*bundang.*seongnam/i.test(text)) return "Seongnam";
  if (/bundang leaders.*seongnam/i.test(text)) return "Seongnam";

  // --- West Indies ---
  if (/george.*grenada/i.test(text)) return "St. George's";
  if (/ross university.*st kitts|basseterre/i.test(text)) return "Basseterre";

  // --- Guam ---
  if (/wise owl.*guam|tamuning/i.test(text)) return "Tamuning";

  // ACVIM Medicine Residency Programs
    if (/anderson\s*moores/i.test(text)) return "Winchester"; // Anderson Moores Veterinary Specialists, Winchester, UK
  if (/angell\s*animal\s*medical\s*center/i.test(text)) return "Boston"; // Angell Animal Medical Center, Boston, MA
  if (/atlantic\s*veterinary\s*college/i.test(text)) return "Charlottetown"; // Atlantic Veterinary College, PEI, Canada
  if (/atlantic\s*veterinary\s*internal\s*medicine|avim|alyse\s*zacuto/i.test(text)) return "Annapolis Junction"; // Atlantic Veterinary Internal Medicine & Oncology, Annapolis Junction, MD
  if (/auburn\s*university/i.test(text)) return "Auburn"; // Auburn University, Auburn, AL
  if (/bluepearl.*arizona/i.test(text)) return "Phoenix"; // BluePearl - Arizona, Phoenix, AZ
  if (/bluepearl.*levittown/i.test(text)) return "Levittown"; // BluePearl Levittown, PA
  if (/bluepearl.*north\s*dallas/i.test(text)) return "Dallas"; // BluePearl North Dallas, TX
  if (/bluepearl.*tampa/i.test(text)) return "Tampa"; // BluePearl Veterinary Partners Tampa, FL
  if (/capital\s*city\s*specialty.*emergency/i.test(text)) return "Kanata"; // Capital City Specialty and Emergency Animal Hospital, Kanata, ON
  if (/centre\s*dmvet/i.test(text)) return "Saint-Hubert"; // Centre DMVet, Saint-Hubert, QC, Canada
  if (/university\s*of\s*zurich|vetsuisse.*zurich/i.test(text)) return "Zurich"; // Clinic for Small Animal Internal Medicine, University of Zurich, Switzerland
  if (/colorado\s*state\s*university/i.test(text)) return "Fort Collins"; // Colorado State University, Fort Collins, CO
  if (/cornell\s*university/i.test(text)) return "Ithaca"; // Cornell University College of Veterinary Medicine, Ithaca, NY
  if (/cummings\s*school.*tufts/i.test(text)) return "North Grafton"; // Cummings School of Veterinary Medicine, Tufts, North Grafton, MA
  if (/iowa\s*state\s*university/i.test(text)) return "Ames"; // Iowa State University, Ames, IA
  if (/kansas\s*state\s*university/i.test(text)) return "Manhattan"; // Kansas State University, Manhattan, KS
  if (/louisiana\s*state\s*university/i.test(text)) return "Baton Rouge"; // Louisiana State University, Baton Rouge, LA
  if (/marigin\s*tierklinik/i.test(text)) return "Feusisberg"; // Marigin Tierklinik, Feusisberg, Switzerland
  if (/medvet.*louisiana/i.test(text)) return "Mandeville"; // Medvet Louisiana, Mandeville, LA
  if (/medvet\s*medical.*cancer\s*center.*columbus|roger\s*hostutler/i.test(text)) return "Columbus"; // MedVet Medical & Cancer Center for Pets, Columbus, OH
  if (/medvet.*cincinnati/i.test(text)) return "Cincinnati"; // MedVet Medical & Cancer Center for Pets - Cincinnati, OH
  if (/michigan\s*state\s*univer/i.test(text)) return "East Lansing"; // Michigan State University, East Lansing, MI
  if (/mississauga.*oakville/i.test(text)) return "Mississauga"; // Mississauga-Oakville Veterinary Emergency Hospital, Mississauga, ON
  if (/mississippi\s*state\s*university/i.test(text)) return "Starkville"; // Mississippi State University, Starkville, MS
  if (/north\s*carolina\s*state\s*university/i.test(text)) return "Raleigh"; // North Carolina State University College of Veterinary Medicine, Raleigh, NC
  if (/ohio\s*state\s*university/i.test(text)) return "Columbus"; // Ohio State University, Columbus, OH
  if (/ontario\s*veterinary\s*college/i.test(text)) return "Guelph"; // Ontario Veterinary College, Guelph, ON
  if (/oregon\s*state\s*university/i.test(text)) return "Corvallis"; // Oregon State University, Corvallis, OR
  if (/purdue\s*university.*dublin/i.test(text)) return "Dublin"; // Purdue University and University College of Dublin, Dublin, Ireland
  if (/purdue\s*university/i.test(text)) return "West Lafayette"; // Purdue University, West Lafayette, IN
  if (/royal\s*veterinary\s*college/i.test(text)) return "London"; // Royal Veterinary College, London, UK
  if (/salt\s*river\s*veterinary\s*specialists/i.test(text)) return "Scottsdale"; // Salt River Veterinary Specialists, Scottsdale, AZ
  if (/small\s*animal\s*specialty\s*hospital/i.test(text)) return "Sydney"; // Small Animal Specialty Hospital, Sydney, Australia
  if (/sunstone\s*veterinary\s*specialists/i.test(text)) return "Portland"; // Sunstone Veterinary Specialists, Portland, OR
  if (/texas\s*a&m\s*university/i.test(text)) return "College Station"; // Texas A&M University, College Station, TX
  if (/schwarzman\s*animal\s*medical\s*center/i.test(text)) return "New York"; // Schwarzman Animal Medical Center, New York, NY
  if (/university\s*of\s*california.*davis/i.test(text)) return "Davis"; // University of California, Davis, CA
  if (/university\s*of\s*florida/i.test(text)) return "Gainesville"; // University of Florida, Gainesville, FL
  if (/university\s*of\s*georgia/i.test(text)) return "Athens"; // University of Georgia, Athens, GA
  if (/university\s*of\s*illinois/i.test(text)) return "Urbana"; // University of Illinois, Urbana, IL
  if (/university\s*of\s*minnesota/i.test(text)) return "St Paul"; // University of Minnesota, St Paul, MN
  if (/university\s*of\s*missouri/i.test(text)) return "Columbia"; // University of Missouri, Columbia, MO
  if (/university\s*of\s*montreal/i.test(text)) return "Montreal"; // University of Montreal, Montreal, QC
  if (/university\s*of\s*pennsylvania/i.test(text)) return "Philadelphia"; // University of Pennsylvania, Philadelphia, PA
  if (/university\s*of\s*saskatchewan|western\s*college\s*of\s*veterinary\s*medicine/i.test(text)) return "Saskatoon"; // University of Saskatchewan, Saskatoon, SK
  if (/university\s*of\s*tennessee/i.test(text)) return "Knoxville"; // University of Tennessee, Knoxville, TN
  if (/university\s*of\s*wisconsin/i.test(text)) return "Madison"; // University of Wisconsin-Madison, Madison, WI
  if (/vca\s*animal\s*referral.*arizona/i.test(text)) return "Mesa"; // VCA Animal Referral and Emergency Center of Arizona, Mesa, AZ
  if (/vca\s*animal\s*specialty.*emergency/i.test(text)) return "Los Angeles"; // VCA Animal Specialty & Emergency Center, Los Angeles, CA
  if (/vca\s*shoreline/i.test(text)) return "Shelton"; // VCA Shoreline Veterinary Referral and Emergency Center, Shelton, CT
  if (/veterinary\s*specialty\s*hospital\s*of\s*san\s*diego\s*and\s*north\s*county/i.test(text)) return "San Diego"; // Veterinary Specialty Hospital of San Diego and North County, San Diego, CA
  if (/veterinary\s*specialty\s*hospital\s*of\s*san\s*diego\s*sv/i.test(text)) return "San Marcos"; // Veterinary Specialty Hospital of San Diego SV, San Marcos, CA
  if (/vetsuisse\s*faculty\s*university\s*of\s*bern/i.test(text)) return "Bern"; // Vetsuisse Faculty University of Bern, Bern, Switzerland
  if (/virginia-maryland\s*college\s*of\s*veterinary\s*medicine/i.test(text)) return "Blacksburg"; // Virginia-Maryland College of Veterinary Medicine, Blacksburg, VA
  if (/washington\s*state\s*university/i.test(text)) return "Pullman"; // Washington State University, Pullman, WA

  //ACVIM Employers
  if (/access\s*specialty\s*animal\s*hospital.*palm\s*beach/i.test(text)) return "Palm Beach County"; // ACCESS Specialty Animal Hospital - Palm Beach County, FL
  if (/allied\s*veterinary\s*service/i.test(text)) return "Minneapolis"; // Allied Veterinary Service, Minneapolis, MN (HQ; multiple sites)
  if (/allied\s*veterinary\s*specialists/i.test(text)) return "Minneapolis"; // Allied Veterinary Specialists, Minneapolis, MN (network)
  if (/ally\s*veterinary\s*specialty\s*center/i.test(text)) return "Valley Stream"; // Ally Veterinary Specialty Center, Valley Stream, NY
  if (/animal\s*referral\s*and\s*emergency\s*centre/i.test(text)) return "Newcastle"; // Animal Referral and Emergency Centre, Newcastle, NSW, Australia
  if (/animal\s*specialty\s*&?\s*emergency\s*hospital/i.test(text)) return "Rockledge"; // Animal Specialty & Emergency Hospital, Rockledge, FL (or use city you need)
  if (/boundary\s*bay\s*veterinary\s*specialty/i.test(text)) return "Surrey"; // Boundary Bay Veterinary Specialty Hospital, Surrey, BC, Canada
  if (/bridger\s*veterinary\s*specialists/i.test(text)) return "Bozeman"; // Bridger Veterinary Specialists, Bozeman, MT
  if (/cape\s*cod\s*veterinary\s*specialists/i.test(text)) return "Buzzards Bay"; // Cape Cod Veterinary Specialists, Buzzards Bay & Dennis, MA
  if (/cerro\s*alto\s*veterinary\s*specialty.*emergency/i.test(text)) return "Paso Robles"; // Cerro Alto Veterinary Specialty and Emergency Hospital, Paso Robles, CA
  if (/coast\s*to\s*coast\s*cardiology/i.test(text)) return "Seattle"; // Coast to Coast Cardiology, Seattle, WA (network; check specific branch)
  if (/cornell.*department.*clinical\s*sciences/i.test(text)) return "Ithaca"; // Cornell University College of Veterinary Medicine - Dept. of Clinical Sciences, Ithaca, NY
  if (/cummings\s*school.*tufts/i.test(text)) return "North Grafton"; // Cummings School of Veterinary Medicine at Tufts University, North Grafton, MA
  if (/cvca.*cardiac\s*care\s*for\s*pets/i.test(text)) return "Baltimore"; // CVCA- Cardiac Care for Pets, Baltimore, MD (HQ; network in MD/VA/TX/KY)
  if (/dogwood\s*veterinary\s*specialty\s*and\s*emergency/i.test(text)) return "Marietta"; // Dogwood Veterinary Specialty and Emergency, Marietta, GA
  if (/bluepearl\s*pet\s*hospital.*tampa/i.test(text)) return "Tampa"; // Tampa, FL :contentReference[oaicite:1]{index=1}
  if (/bluepearl\s*pet\s*hospital.*mount\s*pleasant/i.test(text)) return "Mount Pleasant"; // Mount Pleasant, SC :contentReference[oaicite:2]{index=2}
  if (/bluepearl\s*pet\s*hospital.*philadelphia/i.test(text)) return "Philadelphia"; // Philadelphia, PA :contentReference[oaicite:3]{index=3}
  if (/bluepearl\s*pet\s*hospital.*downtown\s*nyc/i.test(text)) return "New York"; // Downtown NYC :contentReference[oaicite:4]{index=4}
  if (/bluepearl\s*pet\s*hospital.*brooklyn/i.test(text)) return "Brooklyn"; // Brooklyn, NY :contentReference[oaicite:5]{index=5}
  if (/bluepearl\s*pet\s*hospital.*pittsburgh\s*north/i.test(text)) return "Pittsburgh North"; // Pittsburgh North, PA :contentReference[oaicite:6]{index=6}
  if (/bluepearl\s*pet\s*hospital.*paramus/i.test(text)) return "Paramus"; // Paramus, NJ :contentReference[oaicite:7]{index=7}
  if (/bluepearl\s*pet\s*hospital.*waltham/i.test(text)) return "Waltham"; // Waltham, MA :contentReference[oaicite:8]{index=8}
  if (/hoover|galleria\s*circle/i.test(text)) return "Hoover"; // Hoover (Greater Birmingham), AL
  if (/avondale|rancho\s*santa\s*fe/i.test(text)) return "Avondale"; // Avondale, AZ
  if (/glendale|n\s*67th\s*ave|peoria/i.test(text)) return "Glendale"; // Peoria / Glendale, AZ
  if (/phoenix|indian\s*school/i.test(text)) return "Phoenix"; // Phoenix, AZ
  if (/scottsdale|scottsdale\s*rd/i.test(text)) return "Scottsdale"; // Scottsdale, AZ
  if (/del\s*rey\s*oaks|canyon\s*del\s*rey|monterey/i.test(text)) return "Del Rey Oaks"; // Del Rey Oaks (Monterey), CA
  if (/fresno|palm\s*bluffs/i.test(text)) return "Fresno"; // Fresno, CA
  if (/irvine|reynolds\s*ave/i.test(text)) return "Irvine"; // Irvine, CA
  if (/studio\s*city|ventura\s*blvd/i.test(text)) return "Studio City"; // Studio City (Los Angeles area), CA
  if (/lafayette|new\s*britain\s*road/i.test(text)) return "Lafayette"; // Lafayette, CO
  if (/christiana|geoffrey\s*drive|newark/i.test(text)) return "Newark"; // Christiana, Newark, DE
  if (/brandon|lumsden\s*professional/i.test(text)) return "Brandon"; // Brandon, FL
  if (/clearwater|ulmerton\s*rd/i.test(text)) return "Clearwater"; // Clearwater, FL
  if (/fort\s*lauderdale|10th\s*terr/i.test(text)) return "Fort Lauderdale"; // Fort Lauderdale, FL
  if (/fort\s*myers|marketplace\s*rd/i.test(text)) return "Fort Myers"; // Fort Myers, FL
  if (/jacksonville|southside\s*blvd/i.test(text)) return "Jacksonville"; // Jacksonville, FL
  if (/maitland|hwy\s*17-92|orlando/i.test(text)) return "Maitland"; // Maitland (Orlando), FL
  if (/sarasota|tamiami\s*trail/i.test(text)) return "Sarasota"; // Sarasota, FL
  if (/tampa|busch\s*lake/i.test(text)) return "Tampa"; // Tampa, FL
  if (/paula\s*dr|town\s*'?n'?[\s\-]*country/i.test(text)) return "Tampa"; // Town ’N’ Country (Tampa), FL
  if (/augusta|topgolf\s*way/i.test(text)) return "Augusta"; // Augusta, GA
  if (/johns\s*creek|mcginnis\s*ferry/i.test(text)) return "Johns Creek"; // Johns Creek, GA
  if (/lawrenceville|lawrenceville-suwanee/i.test(text)) return "Lawrenceville"; // Lawrenceville (Gwinnett County), GA
  if (/sandy\s*springs|abernathy\s*rd/i.test(text)) return "Sandy Springs"; // Sandy Springs, GA
  if (/roswell\s*rd/i.test(text)) return "Sandy Springs"; // Sandy Springs (Urgent Care), GA
  if (/howell\s*mill\s*rd|westside\s*atlanta/i.test(text)) return "Atlanta"; // Westside Atlanta, GA
  if (/northfield|frontage\s*rd/i.test(text)) return "Northfield"; // Northfield, IL
  if (/skokie|dempster\s*st/i.test(text)) return "Skokie"; // Skokie, IL
  if (/cedar\s*rapids|capital\s*dr/i.test(text)) return "Cedar Rapids"; // Cedar Rapids, IA
  if (/des\s*moines|merle\s*hay/i.test(text)) return "Des Moines"; // Des Moines, IA
  if (/overland\s*park|w\s*110th\s*st/i.test(text)) return "Overland Park"; // Overland Park, KS
  if (/louisville|bluegrass\s*parkway/i.test(text)) return "Louisville"; // Louisville, KY
  if (/lexington|richmond\s*road/i.test(text)) return "Lexington"; // Lexington, KY
  if (/rockville|taft\s*ct/i.test(text)) return "Rockville"; // Rockville, MD
  if (/charlestown|roland\s*st|boston/i.test(text)) return "Boston"; // Charlestown (Boston), MA
  if (/waltham|bear\s*hill\s*rd/i.test(text)) return "Waltham"; // Waltham, MA
  if (/canton|south\s*canton\s*center/i.test(text)) return "Canton"; // Canton (Plymouth area), MI
  if (/novi|w\s*10\s*mile/i.test(text)) return "Novi"; // Novi, MI
  if (/troy|rochester\s*rd/i.test(text)) return "Troy"; // Troy, MI
  if (/arden\s*hills|grey\s*fox\s*rd/i.test(text)) return "Arden Hills"; // Arden Hills, MN
  if (/blaine|aberdeen\s*st/i.test(text)) return "Blaine"; // Blaine, MN
  if (/duluth|michigan\s*st/i.test(text)) return "Duluth"; // Duluth, MN
  if (/golden\s*valley|boone\s*ave/i.test(text)) return "Golden Valley"; // Golden Valley, MN
  if (/st\.?\s*cloud|thielman\s*ln/i.test(text)) return "St. Cloud"; // St. Cloud, MN
  if (/lee['’]?\s*summit|ralph\s*powell/i.test(text)) return "Lee's Summit"; // Lee's Summit, MO
  if (/reno|morrill\s*ave/i.test(text)) return "Reno"; // Reno, NV
  if (/paramus|route\s*17/i.test(text)) return "Paramus"; // Paramus, NJ
  if (/cheektowaga|broadway/i.test(text)) return "Cheektowaga"; // Buffalo (Cheektowaga), NY
  if (/brooklyn|third\s*ave/i.test(text)) return "Brooklyn"; // Brooklyn, NY
  if (/downtown\s*manhattan|w\s*15th\s*st/i.test(text)) return "New York"; // Downtown Manhattan, NY
  if (/midtown\s*manhattan|w\s*55th\s*st/i.test(text)) return "New York"; // Midtown Manhattan, NY
  if (/queens|forest\s*hills/i.test(text)) return "Queens"; // Queens (Forest Hills), NY
  if (/cary|tryon\s*rd/i.test(text)) return "Cary"; // Cary, NC
  if (/durham|nc\s*hwy\s*751/i.test(text)) return "Durham"; // Durham, NC
  if (/raleigh|paragon\s*park/i.test(text)) return "Raleigh"; // Raleigh, NC
  if (/denver|nc-16\s*business/i.test(text)) return "Denver"; // Denver (Lake Norman), NC
  if (/oklahoma\s*city|w\s*memorial\s*rd/i.test(text)) return "Oklahoma City"; // Oklahoma City, OK
  if (/philadelphia|front\s*st/i.test(text)) return "Philadelphia"; // Philadelphia, PA
  if (/conshohocken|ridge\s*pike/i.test(text)) return "Conshohocken"; // Conshohocken, PA
  if (/levittown|veterans\s*hwy/i.test(text)) return "Levittown"; // Levittown, PA
  if (/malvern|three\s*tun\s*rd/i.test(text)) return "Malvern"; // Malvern, PA
  if (/pittsburgh\s*north|camp\s*horne/i.test(text)) return "Pittsburgh"; // Pittsburgh North, PA
  if (/pittsburgh\s*south|washington\s*rd/i.test(text)) return "Washington"; // Pittsburgh South, PA (Washington, PA)
  if (/summerville|3rd\s*n\s*st/i.test(text)) return "Summerville"; // Summerville, SC
  if (/mount\s*pleasant|johnnie\s*dodds/i.test(text)) return "Mount Pleasant"; // Mount Pleasant, SC
  if (/franklin|mallory\s*ln/i.test(text)) return "Franklin"; // Franklin, TN
  if (/21st\s*ave\s*s|nashville/i.test(text)) return "Nashville"; // Nashville, TN
  if (/virginia\s*beach|independence\s*blvd/i.test(text)) return "Virginia Beach"; // Virginia Beach, VA
  if (/richmond|w\s*broad\s*st/i.test(text)) return "Richmond"; // Richmond, VA
  if (/olympia|heritage\s*ct/i.test(text)) return "Olympia"; // Olympia, WA
  if (/renton|tukwila|baker\s*blvd/i.test(text)) return "Tukwila"; // Renton (Tukwila area), WA
  if (/tacoma|lakewood|84th\s*st/i.test(text)) return "Lakewood"; // Tacoma (Lakewood), WA
  if (/glendale|silver\s*spring\s*dr/i.test(text)) return "Glendale"; // Glendale, WI
  if (/oak\s*creek|27th\s*st/i.test(text)) return "Oak Creek"; // Oak Creek, WI
  if (/appleton|fox\s*valley|new\s*horzions/i.test(text)) return "Appleton"; // Appleton (Fox Valley), WI
  if (/dovelewis/i.test(text)) return "Portland"; // DoveLewis Veterinary Emergency & Specialty Hospital, Portland, OR
  if (/dr\.?\s*vetamin|ottawa/i.test(text)) return "Ottawa"; // Dr. Vetamin Primary and Urgent Care Veterinary Hospital, Ottawa, ON
  if (/ecovets/i.test(text)) return "Sandy Springs"; // ECoVets Veterinary Specialists and ER, Sandy Springs, GA (please update if incorrect)
  if (/epic\s*specialty\s*&?\s*emergency\s*pet\s*care/i.test(text)) return "South Carolina"; // Epic Specialty & Emergency Pet Care, SC (update with city if known)
  if (/ethos\s*veterinary\s*health/i.test(text)) return "Woburn"; // Ethos Veterinary Health (HQ: Woburn, MA, but multi-site network)
  if (/evg\s*specialty\s*network/i.test(text)) return "Multiple"; // EVG Specialty Network (multi-site, specify city as needed)
  if (/evolution\s*veterinary\s*specialists/i.test(text)) return "Lakewood"; // Evolution Veterinary Specialists, Lakewood, CO
  if (/facult[eé]\s*de\s*m[eé]decine\s*v[eé]t[eé]rinaire.*universit[eé]\s*de\s*montr[eé]al/i.test(text)) return "Montreal"; // Faculté de médecine vétérinaire - Université de Montréal, Montreal, QC
  if (/fairfield\s*equine\s*associates/i.test(text)) return "Newtown"; // Fairfield Equine Associates, Newtown, CT
  if (/fetch\s*specialty\s*&?\s*emergency\s*veterinary\s*centers/i.test(text)) return "Florida"; // Fetch Specialty & Emergency Veterinary Centers, FL & SC (please specify city if needed)
  if (/gulfstream\s*veterinary\s*specialty\s*services/i.test(text)) return "Palm Beach Gardens"; // Gulfstream Veterinary Specialty Services, Palm Beach Gardens, FL
  if (/heart\s*of\s*oregon\s*veterinary\s*cardiology/i.test(text)) return "Bend"; // Heart of Oregon Veterinary Cardiology, Bend, OR
  if (/humphrey\s*giacopuzzi\s*&?\s*associates\s*equine\s*hospital/i.test(text)) return "Somis"; // Humphrey Giacopuzzi & Associates Equine Hospital, Somis, CA
  if (/huntsville\s*veterinary\s*specialists\s*&?\s*emergency/i.test(text)) return "Huntsville"; // Huntsville Veterinary Specialists and Emergency, Huntsville, AL
  if (/innovetive\s*petcare/i.test(text)) return "Austin"; // Innovetive Petcare, HQ: Austin, TX (multi-site network; update with clinic city as needed)
  if (/iowa\s*state\s*university/i.test(text)) return "Ames"; // Iowa State University, Ames, IA
  if (/king\s*animal\s*hospital/i.test(text)) return "King City"; // King Animal Hospital, King City, ON
  if (/lakefield\s*veterinary\s*group/i.test(text)) return "Minneapolis"; // Lakefield Veterinary Group, HQ: Minneapolis, MN (network)
  if (/leader\s*animal\s*specialty\s*hospital/i.test(text)) return "Toronto"; // Leader Animal Specialty Hospital, Toronto, ON
  if (/louisiana\s*state\s*university|lsu.*school\s*of\s*veterinary\s*medicine/i.test(text)) return "Baton Rouge"; // Louisiana State University, Baton Rouge, LA
  if (/maple\s*veterinary\s*specialists/i.test(text)) return "White Plains"; // Maple Veterinary Specialists, White Plains, NY
  if (/medvet/i.test(text)) return "Columbus"; // MedVet, Columbus, OH (HQ & flagship; multi-site)
  if (/miami\s*veterinary\s*specialists/i.test(text)) return "Miami"; // Miami Veterinary Specialists, Miami, FL
  if (/nassau\s*veterinary\s*specialists/i.test(text)) return "Farmingdale"; // Nassau Veterinary Specialists, Farmingdale, NY
  if (/national\s*veterinary\s*associates|nva/i.test(text)) return "Agoura Hills"; // NVA - National Veterinary Associates, HQ: Agoura Hills, CA (network)
  if (/new\s*river\s*veterinary\s*specialists/i.test(text)) return "Hardeeville"; // New River Veterinary Specialists, Hardeeville, SC
  if (/north\s*carolina\s*state\s*university/i.test(text)) return "Raleigh"; // North Carolina State University, Raleigh, NC
  if (/northstar\s*vets/i.test(text)) return "Robbinsville"; // NorthStar VETS, Robbinsville, NJ
  if (/omega\s*veterinary\s*group/i.test(text)) return "Multiple"; // Omega Veterinary Group (multi-site; add specifics if known)
  if (/oncura\s*partners\s*diagnostics/i.test(text)) return "Dallas"; // Oncura Partners Diagnostics, Dallas, TX
  if (/ontario\s*veterinary\s*college/i.test(text)) return "Guelph"; // Ontario Veterinary College, Guelph, ON
  if (/partner\s*veterinary.*emergency.*specialty/i.test(text)) return "Fredericksburg"; // Partner Veterinary Emergency and Specialty Center, Fredericksburg, VA (also Richmond, VA)
  if (/pet\s*dermatology\s*of\s*south\s*florida/i.test(text)) return "Boca Raton"; // Pet Dermatology of South Florida, Boca Raton, FL
  if (/petvet\s*care\s*centers/i.test(text)) return "Norwalk"; // PetVet Care Centers, HQ: Norwalk, CT (network)
  if (/pieper\s*memorial\s*veterinary\s*center/i.test(text)) return "Middletown"; // Pieper Memorial Veterinary Center, Middletown, CT
  if (/pinnacle\s*veterinary\s*specialists/i.test(text)) return "Glen Mills"; // Pinnacle Veterinary Specialists, Glen Mills, PA
  if (/red\s*river\s*animal\s*emergency\s*hospital/i.test(text)) return "Fargo"; // Red River Animal Emergency Hospital and Referral Center, Fargo, ND
  if (/rise\s*pet\s*health/i.test(text)) return "Phoenix"; // Rise Pet Health, Phoenix, AZ
  if (/ross\s*university\s*school\s*of\s*veterinary\s*medicine/i.test(text)) return "Basseterre"; // Ross University, Basseterre, St. Kitts (Caribbean)
  if (/sage.*concord|meridian\s*park\s*blvd|concord,\s*ca/i.test(text)) return "Concord"; // SAGE Concord, Concord, CA
  if (/sage.*redwood\s*city|charter\s*st|redwood\s*city,\s*ca/i.test(text)) return "Redwood City"; // SAGE Redwood City, Redwood City, CA
  if (/sage.*campbell|dell\s*ave|campbell,\s*ca/i.test(text)) return "Campbell"; // SAGE Campbell, Campbell, CA
  if (/sage.*dublin|amador\s*plaza\s*rd|dublin,\s*ca/i.test(text)) return "Dublin"; // SAGE Dublin, Dublin, CA
  if (/sage.*san\s*francisco|alabama\s*street|san\s*francisco,\s*ca/i.test(text)) return "San Francisco"; // SAGE San Francisco, San Francisco, CA
  if (/small\s*animal\s*specialist\s*hospital/i.test(text)) return "Sydney"; // Small Animal Specialist Hospital, Sydney, Australia
  if (/southeast\s*veterinary\s*neurology/i.test(text)) return "Miami"; // Southeast Veterinary Neurology, Miami, FL (network: FL)
  if (/sterling\s*martin\s*associates/i.test(text)) return "Washington"; // Sterling Martin Associates, Washington, DC
  if (/schwarzman\s*animal\s*medical\s*center/i.test(text)) return "New York"; // Schwarzman Animal Medical Center, New York, NY
  if (/thrive\s*pet\s*healthcare/i.test(text)) return "Austin"; // Thrive Pet Healthcare, Austin, TX (network: US)
  if (/timberline\s*veterinary\s*emergency\s*and\s*specialty/i.test(text)) return "Lakewood"; // Timberline Veterinary Emergency and Specialty, Lakewood, CO
  if (/united\s*veterinary\s*care/i.test(text)) return "West Palm Beach"; // United Veterinary Care, West Palm Beach, FL (network: US)
  if (/university\s*of\s*florida/i.test(text)) return "Gainesville"; // University of Florida, Gainesville, FL
  if (/university\s*of\s*minnesota/i.test(text)) return "St Paul"; // University of Minnesota, St Paul, MN
  if (/universit[eé]\s*de\s*montr[eé]al/i.test(text)) return "Montreal"; // Université de Montréal, Montreal, QC
   if (/vca\s*carriage\s*hills\s*animal\s*hospital|3200\s*eastern\s*blvd|montgomery/i.test(text)) return "Montgomery"; // VCA Carriage Hills Animal Hospital, Montgomery, AL
  if (/vca\s*becker\s*animal\s*hospital|1901\s*27th\s*ave\s*s|homewood/i.test(text)) return "Homewood"; // VCA Becker Animal Hospital, Homewood, AL
  if (/vca\s*alaska\s*pet\s*care\s*animal\s*hospital|3900\s*lake\s*otis\s*pkwy|anchorage/i.test(text)) return "Anchorage"; // VCA Alaska Pet Care Animal Hospital, Anchorage, AK
  if (/vca\s*alpine\s*animal\s*hospital|12531\s*old\s*seward\s*hwy|anchorage/i.test(text)) return "Anchorage"; // VCA Alpine Animal Hospital, Anchorage, AK
  if (/vca\s*bering\s*sea\s*animal\s*hospital|1347\s*e\s*74th\s*ave|anchorage/i.test(text)) return "Anchorage"; // VCA Bering Sea Animal Hospital, Anchorage, AK
  if (/vca\s*east\s*anchorage\s*animal\s*hospital|2639\s*boniface\s*pkwy|anchorage/i.test(text)) return "Anchorage"; // VCA East Anchorage Animal Hospital, Anchorage, AK
  if (/vca\s*far\s*country\s*animal\s*hospital|2701\s*n\s*liahona\s*dr|palmer/i.test(text)) return "Palmer"; // VCA Far Country Animal Hospital, Palmer, AK
  if (/vca\s*animal\s*referral\s*&?\s*emergency\s*center\s*of\s*arizona|1648\s*n\s*country\s*club\s*dr|mesa/i.test(text)) return "Mesa"; // VCA Animal Referral & Emergency Center of Arizona, Mesa, AZ
  if (/vca\s*mountain\s*view\s*animal\s*hospital|9812\s*n\s*7th\s*st|phoenix/i.test(text)) return "Phoenix"; // VCA Mountain View Animal Hospital, Phoenix, AZ
  if (/vca\s*university\s*animal\s*hospital|2500\s*s\s*hardy\s*dr|tempe/i.test(text)) return "Tempe"; // VCA University Animal Hospital, Tempe, AZ
  if (/vca\s*valley\s*animal\s*hospital\s*&?\s*emergency\s*center|4984\s*e\s*22nd\s*st|tucson/i.test(text)) return "Tucson"; // VCA Valley Animal Hospital & Emergency Center, Tucson, AZ
  if (/vca\s*bay\s*area\s*animal\s*hospital|4501\s*shattuck\s*ave|oakland/i.test(text)) return "Oakland"; // VCA Bay Area Animal Hospital, Oakland, CA
  if (/vca\s*all\s*our\s*pets\s*animal\s*hospital|1413\s*60th\s*st|sacramento/i.test(text)) return "Sacramento"; // VCA All Our Pets Animal Hospital, Sacramento, CA
  if (/vca\s*west\s*los\s*angeles\s*animal\s*hospital|west\s*los\s*angeles/i.test(text)) return "West Los Angeles"; // VCA West Los Angeles Animal Hospital, CA
  if (/vca\s*aspenwood\s*animal\s*hospital|1290\s*s\s*colorado\s*blvd|denver/i.test(text)) return "Denver"; // VCA Aspenwood Animal Hospital, Denver, CO
  if (/vca\s*northwest\s*animal\s*hospital|4575\s*n\s*chestnut\s*st|colorado\s*springs/i.test(text)) return "Colorado Springs"; // VCA Northwest Animal Hospital, Colorado Springs, CO
  if (/vca\s*north\s*academy\s*animal\s*hospital|5875\s*n\s*academy\s*blvd|colorado\s*springs/i.test(text)) return "Colorado Springs"; // VCA North Academy Animal Hospital, Colorado Springs, CO
  if (/vca\s*dublin\s*animal\s*hospital|888\s*dublin\s*blvd|colorado\s*springs/i.test(text)) return "Colorado Springs"; // VCA Dublin Animal Hospital, Colorado Springs, CO
  if (/vca\s*cheshire\s*animal\s*hospital|cheshire/i.test(text)) return "Cheshire"; // VCA Cheshire Animal Hospital, Cheshire, CT
  if (/vca\s*animal\s*hospital\s*of\s*east\s*hartford|334\s*silver\s*lane|east\s*hartford/i.test(text)) return "East Hartford"; // VCA Animal Hospital of East Hartford, CT
  if (/vca\s*plainfield\s*animal\s*hospital|plainfield/i.test(text)) return "Plainfield"; // VCA Plainfield Animal Hospital, Plainfield, CT
  if (/vca\s*new\s*london\s*animal\s*hospital|122\s*cross\s*road|waterford/i.test(text)) return "New London"; // VCA New London Animal Hospital, Waterford, CT
  if (/vca\s*all\s*animal\s*hospital\s*of\s*orange\s*park|760\s*blanding\s*blvd|orange\s*park/i.test(text)) return "Orange Park"; // VCA All Animal Hospital of Orange Park, FL
  if (/vca\s*knowles\s*central\s*animal\s*hospital|1000\s*nw\s*27th\s*ave|miami/i.test(text)) return "Miami"; // VCA Knowles Central Animal Hospital, Miami, FL
  if (/vca\s*hollywood\s*animal\s*hospital|2864\s*hollywood\s*blvd|hollywood/i.test(text)) return "Hollywood"; // VCA Hollywood Animal Hospital, Hollywood, FL
  if (/vca\s*san\s*francis\s*animal\s*hospital|16901\s*shady\s*hills\s*rd|spring\s*hill/i.test(text)) return "Spring Hill"; // VCA San Francis Animal Hospital, Spring Hill, FL
  if (/vca\s*florida\s*veterinary\s*league|1360\s*us-1|vero\s*beach/i.test(text)) return "Vero Beach"; // VCA Florida Veterinary League, Vero Beach, FL
  if (/vca\s*midtown\s*animal\s*hospital|1510\s*piedmont\s*ave\s*ne|atlanta/i.test(text)) return "Atlanta"; // VCA Midtown Animal Hospital, Atlanta, GA
  if (/vca\s*briarcliff\s*animal\s*hospital|1850\s*johnson\s*rd\s*ne|atlanta/i.test(text)) return "Atlanta"; // VCA Briarcliff Animal Hospital, Atlanta, GA
  if (/vca\s*dahlonega\s*animal\s*hospital|16\s*westbrook\s*rd|dahlonega/i.test(text)) return "Dahlonega"; // VCA Dahlonega Animal Hospital, Dahlonega, GA
  if (/vca\s*greater\s*savannah\s*animal\s*hospital|1350\s*e\s*derenne\s*ave|savannah/i.test(text)) return "Savannah"; // VCA Greater Savannah Animal Hospital, Savannah, GA
  if (/vca\s*falcon\s*village\s*animal\s*hospital|2030\s*lawrenceville-suwanee\s*rd|suwanee/i.test(text)) return "Suwanee"; // VCA Falcon Village Animal Hospital, Suwanee, GA
  if (/vca\s*north\s*idaho\s*animal\s*hospital|320\s*s\.?\s*ella|sandpoint/i.test(text)) return "Sandpoint"; // VCA North Idaho Animal Hospital, Sandpoint, ID
  if (/vca\s*kootenai\s*animal\s*hospital|1704\s*e\.?\s*seltice\s*way|post\s*falls/i.test(text)) return "Post Falls"; // VCA Kootenai Animal Hospital, Post Falls, ID
  if (/vca\s*animal\s*care\s*center\s*of\s*chicago|1248\s*w\s*washington\s*blvd|chicago/i.test(text)) return "Chicago"; // VCA Animal Care Center of Chicago, Chicago, IL
  if (/vca\s*chicago\s*north\s*animal\s*hospital|3631\s*n\s*elston\s*ave|chicago/i.test(text)) return "Chicago"; // VCA Chicago North Animal Hospital, Chicago, IL
  if (/vca\s*naper\s*ridge\s*animal\s*hospital|987\s*maplefield\s*rd|naperville/i.test(text)) return "Naperville"; // VCA Naper Ridge Animal Hospital, Naperville, IL
  if (/vca\s*forest\s*south\s*animal\s*hospital|21000\s*olympian\s*way|olympia\s*fields/i.test(text)) return "Olympia Fields"; // VCA Forest South Animal Hospital, Olympia Fields, IL
  if (/vca\s*worth\s*animal\s*hospital|7727\s*w\s*111th\s*st|palos\s*hills/i.test(text)) return "Palos Hills"; // VCA Worth Animal Hospital, Palos Hills, IL
  if (/vca\s*schaumburg\s*animal\s*hospital|1614\s*w\s*wise\s*rd|schaumburg/i.test(text)) return "Schaumburg"; // VCA Schaumburg Animal Hospital, Schaumburg, IL
  if (/vca\s*beech\s*grove\s*animal\s*hospital|4902\s*s\s*emerson\s*ave|indianapolis/i.test(text)) return "Beech Grove"; // VCA Beech Grove Animal Hospital, Indianapolis, IN
  if (/vca\s*companion\s*animal\s*medical\s*center|1455\s*s\s*rangeline\s*rd|carmel/i.test(text)) return "Carmel"; // VCA Companion Animal Medical Center, Carmel, IN
  if (/vca\s*advanced\s*veterinary\s*care\s*center|7712\s*crosspoint\s*commons|fishers/i.test(text)) return "Fishers"; // VCA Advanced Veterinary Care Center, Fishers, IN
  if (/vca\s*animal\s*hospital|3532\s*south\s*st|lafayette/i.test(text)) return "Lafayette"; // VCA Animal Hospital, Lafayette, IN
  if (/vca\s*animal\s*hospital\s*of\s*plainfield|2324\s*e\s*main\s*st|plainfield/i.test(text)) return "Plainfield"; // VCA Animal Hospital of Plainfield, Plainfield, IN
  if (/vca\s*stoney\s*creek\s*animal\s*hospital|14660\s*herriman\s*blvd.*noblesville/i.test(text)) return "Noblesville"; // VCA Stoney Creek Animal Hospital, Noblesville, IN
  if (/vca\s*parkdale\s*animal\s*hospital|10188\s*state\s*rd\s*662\s*w|newburgh/i.test(text)) return "Newburgh"; // VCA Parkdale Animal Hospital, Newburgh, IN
  if (/vca\s*west\s*86th\s*st\s*animal\s*hospital|4030\s*w\s*86th\s*st|indianapolis/i.test(text)) return "Indianapolis"; // VCA West 86th St. Animal Hospital, Indianapolis, IN
  if (/vca\s*fairleigh\s*animal\s*hospital|1212\s*bardstown\s*road|louisville/i.test(text)) return "Louisville"; // VCA Fairleigh Animal Hospital, Louisville, KY
  if (/vca\s*shelden\s*animal\s*hospital|6017\s*bardstown\s*road|louisville/i.test(text)) return "Louisville"; // VCA Shelden Animal Hospital, Louisville, KY
  if (/vca\s*woodford\s*animal\s*hospital|1325\s*lexington\s*road|versailles/i.test(text)) return "Versailles"; // VCA Woodford Animal Hospital, Versailles, KY
  if (/vca\s*algiers\s*animal\s*hospital|3807\s*general\s*degaulle\s*drive|new\s*orleans/i.test(text)) return "New Orleans"; // VCA Algiers Animal Hospital, New Orleans, LA
  if (/vca\s*all\s*pets\s*animal\s*hospital|9308\s*perkins\s*road|baton\s*rouge/i.test(text)) return "Baton Rouge"; // VCA All Pets Animal Hospital, Baton Rouge, LA
  if (/vca\s*causeway\s*animal\s*hospital|1315\s*n\.?\s*causeway\s*blvd|metairie/i.test(text)) return "Metairie"; // VCA Causeway Animal Hospital, Metairie, LA
  if (/vca\s*bath\s*animal\s*hospital|15\s*congress\s*avenue|bath/i.test(text)) return "Bath"; // VCA Bath Animal Hospital, Bath, ME
  if (/vca\s*lewiston\s*animal\s*hospital|75\s*stetson\s*road|lewiston/i.test(text)) return "Lewiston"; // VCA Lewiston Animal Hospital, Lewiston, ME
  if (/vca\s*standish\s*animal\s*hospital|22\s*rose\s*lane|standish/i.test(text)) return "Standish"; // VCA Standish Animal Hospital, Standish, ME
  if (/vca\s*bal-coeur\s*animal\s*hospital|550\s*north\s*new\s*ballas\s*rd|creve\s*coeur/i.test(text)) return "Creve Coeur"; // VCA Bal-Coeur Animal Hospital, Creve Coeur, MO
  if (/vca\s*all\s*creatures[–-]cloud\s*animal\s*hospital|2205\s*highway\s*k|o'?fallon/i.test(text)) return "O'Fallon"; // VCA All Creatures–Cloud Animal Hospital, O'Fallon, MO
  if (/vca\s*parkcrest\s*animal\s*hospital.*pet\s*lodge|700\s*west\s*republic\s*rd|springfield/i.test(text)) return "Springfield"; // VCA Parkcrest Animal Hospital & Pet Lodge, Springfield, MO
  if (/vca\s*advanced\s*animal\s*hospital|8915\s*highway\s*36|hannibal/i.test(text)) return "Hannibal"; // VCA Advanced Animal Hospital, Hannibal, MO
  if (/vca\s*baring\s*boulevard\s*animal\s*hospital|700\s*baring\s*blvd|sparks/i.test(text)) return "Sparks"; // VCA Baring Boulevard Animal Hospital, Sparks, NV
  if (/vca\s*a\s*plus\s*animal\s*hospital|7450\s*longley\s*lane|reno/i.test(text)) return "Reno"; // VCA A Plus Animal Hospital, Reno, NV
  if (/vca\s*spring\s*mountain\s*animal\s*hospital|5590\s*w\s*spring\s*mountain\s*rd|las\s*vegas/i.test(text)) return "Las Vegas"; // VCA Spring Mountain Animal Hospital, Las Vegas, NV
  if (/vca\s*nellis\s*animal\s*hospital|20\s*n\s*nellis\s*blvd|las\s*vegas/i.test(text)) return "Las Vegas"; // VCA Nellis Animal Hospital, Las Vegas, NV
  if (/vca\s*hualapai\s*animal\s*hospital|1165\s*s\s*hualapai\s*way|las\s*vegas/i.test(text)) return "Las Vegas"; // VCA Hualapai Animal Hospital, Las Vegas, NV
  if (/vca\s*mountain\s*vista\s*animal\s*hospital|las\s*vegas/i.test(text)) return "Las Vegas"; // VCA Mountain Vista Animal Hospital, Las Vegas, NV (address on site)
  if (/vca\s*blue\s*cross\s*animal\s*hospital|summerlin|las\s*vegas/i.test(text)) return "Las Vegas"; // VCA Blue Cross Animal Hospital, Las Vegas, NV (address on site)

  if (/vca\s*animal\s*medical\s*center|1550\s*woodbury\s*ave|portsmouth/i.test(text)) return "Portsmouth"; // VCA Animal Medical Center, Portsmouth, NH
  if (/vca\s*daniel\s*webster\s*animal\s*hospital|3\s*hawthorne\s*dr|bedford/i.test(text)) return "Bedford"; // VCA Daniel Webster Animal Hospital, Bedford, NH
  if (/vca\s*laconia\s*animal\s*hospital|3\s*maple\s*st|gilford|laconia/i.test(text)) return "Gilford/Laconia"; // VCA Laconia Animal Hospital, Gilford/Laconia, NH
  if (/vca\s*lakes\s*region\s*veterinary\s*hospital|1266\s*union\s*ave|laconia/i.test(text)) return "Laconia"; // VCA Lakes Region Veterinary Hospital, Laconia, NH
  if (/vca\s*riverside\s*animal\s*hospital|201\s*n\s*main\s*st|boscawen/i.test(text)) return "Boscawen"; // VCA Riverside Animal Hospital, Boscawen, NH
  if (/vca\s*russell\s*animal\s*hospital|286b\s*pleasant\s*st|concord/i.test(text)) return "Concord"; // VCA Russell Animal Hospital, Concord, NH

  if (/vca\s*garden\s*state\s*animal\s*hospital|628\s*haddonfield\s*rd|cherry\s*hill/i.test(text)) return "Cherry Hill"; // VCA Garden State Animal Hospital, Cherry Hill, NJ
  if (/vca\s*iselin\s*animal\s*hospital|450\s*route\s*27|iselin/i.test(text)) return "Iselin"; // VCA Iselin Animal Hospital, Iselin, NJ
  if (/vca\s*county\s*veterinary\s*hospital|4222\s*route\s*27|princeton/i.test(text)) return "Princeton"; // VCA County Veterinary Hospital, Princeton, NJ
  if (/vca\s*fischer\s*animal\s*hospital|877\s*fischer\s*blvd|toms\s*river/i.test(text)) return "Toms River"; // VCA Fischer Animal Hospital, Toms River, NJ
  if (/vca\s*blairstown\s*animal\s*hospital|29\s*cedar\s*lake\s*rd|blairstown/i.test(text)) return "Blairstown"; // VCA Blairstown Animal Hospital, Blairstown, NJ
  if (/vca\s*closter\s*animal\s*hospital|137\s*piermont\s*rd|closter/i.test(text)) return "Closter"; // VCA Closter Animal Hospital, Closter, NJ
  if (/vca\s*edgebrook\s*animal\s*hospital|777\s*helmetta\s*blvd|east\s*brunswick/i.test(text)) return "East Brunswick"; // VCA Edgebrook Animal Hospital, East Brunswick, NJ
  if (/vca\s*freehold\s*animal\s*hospital|3700\s*us-9|freehold/i.test(text)) return "Freehold"; // VCA Freehold Animal Hospital, Freehold, NJ
  if (/vca\s*alameda\s*animal\s*hospital|7001\s*alameda\s*blvd\s*ne|albuquerque/i.test(text)) return "Albuquerque"; // VCA Alameda Animal Hospital, Albuquerque, NM
  if (/vca\s*rio\s*rancho\s*animal\s*hospital|1801\s*southern\s*blvd\s*se|rio\s*rancho/i.test(text)) return "Rio Rancho"; // VCA Rio Rancho Animal Hospital, Rio Rancho, NM
  if (/vca\s*santa\s*fe\s*animal\s*hospital|2914\s*rodeo\s*rd|santa\s*fe/i.test(text)) return "Santa Fe"; // VCA Santa Fe Animal Hospital, Santa Fe, NM

  if (/vca\s*park\s*east\s*animal\s*hospital|1390\s*second\s*ave|new\s*york/i.test(text)) return "Manhattan"; // VCA Park East Animal Hospital, Manhattan, NY
  if (/manhattan\s*veterinary\s*group\s*\(vca\)|240\s*east\s*80th\s*st|new\s*york/i.test(text)) return "Manhattan"; // Manhattan Veterinary Group (VCA), Manhattan, NY
  if (/vca\s*colonial\s*animal\s*hospital|ithaca|cornell/i.test(text)) return "Ithaca"; // VCA Colonial Animal Hospital, Ithaca, NY
  if (/vca\s*shaker\s*animal\s*hospital|223\s*maxwell\s*rd|latham/i.test(text)) return "Latham"; // VCA Shaker Animal Hospital, Latham, NY
  if (/vca\s*sheridan\s*animal\s*hospital|2288\s*sheridan\s*dr|buffalo/i.test(text)) return "Cheektowaga"; // VCA Sheridan Animal Hospital, Cheektowaga, NY
  if (/vca\s*southern\s*tier\s*animal\s*hospital|205\s*front\s*st|vestal/i.test(text)) return "Vestal"; // VCA Southern Tier Animal Hospital, Vestal, NY
  if (/vca\s*pine\s*bush\s*animal\s*hospital|1\s*hardenburgh\s*rd|pine\s*bush/i.test(text)) return "Pine Bush"; // VCA Pine Bush Animal Hospital, Pine Bush, NY
  if (/vca\s*village\s*animal\s*hospital|6\s*weaver\s*st|larchmont/i.test(text)) return "Larchmont"; // VCA Village Animal Hospital, Larchmont, NY

  if (/vca\s*apex\s*animal\s*hospital|1600\s*e\s*williams\s*st|apex/i.test(text)) return "Apex"; // VCA Apex Animal Hospital, Apex, NC
  if (/vca\s*broad\s*street\s*animal\s*hospital|2200\s*n\s*grassland\s*dr|fuquay-varina/i.test(text)) return "Fuquay-Varina"; // VCA Broad Street Animal Hospital, Fuquay-Varina, NC
  if (/vca\s*cornerstone\s*animal\s*hospital|2111\s*high\s*house\s*rd|cary/i.test(text)) return "Cary"; // VCA Cornerstone Animal Hospital, Cary, NC
  if (/vca\s*durant\s*road\s*animal\s*hospital|10220\s*durant\s*rd|raleigh/i.test(text)) return "Raleigh"; // VCA Durant Road Animal Hospital, Raleigh, NC
  if (/vca\s*legion\s*road\s*animal\s*hospital|1703\s*legion\s*rd|chapel\s*hill/i.test(text)) return "Chapel Hill"; // VCA Legion Road Animal Hospital, Chapel Hill, NC
  if (/vca\s*timberlyne\s*animal\s*hospital|110\s*banks\s*dr|chapel\s*hill/i.test(text)) return "Chapel Hill"; // VCA Timberlyne Animal Hospital, Chapel Hill, NC
  if (/vca\s*triangle\s*tower\s*animal\s*hospital|1300\s*corporation\s*pkwy|raleigh/i.test(text)) return "Raleigh"; // VCA Triangle Tower Animal Hospital, Raleigh, NC
  if (/vca\s*stoney\s*creek\s*animal\s*hospital|626\s*w\s*mallard\s*creek\s*church\s*rd|charlotte/i.test(text)) return "Charlotte"; // VCA Stoney Creek Animal Hospital, Charlotte, NC
  if (/vca\s*wrightsville\s*beach\s*animal\s*hospital|6324\s*oleander\s*dr|wrightsville\s*beach/i.test(text)) return "Wilmington"; // VCA Wrightsville Beach Animal Hospital, Wilmington, NC
  if (/vca\s*seaside\s*animal\s*hospital|9256\s*beach\s*dr|calabash/i.test(text)) return "Calabash"; // VCA Seaside Animal Hospital, Calabash, NC
  if (/vca\s*beavercreek\s*animal\s*hospital|3609\s*dayton-?xenia\s*rd|beavercreek/i.test(text)) return "Beavercreek"; // VCA Beavercreek Animal Hospital, Beavercreek, OH
  if (/vca\s*burton\s*animal\s*hospital|13625\s*w\s*center\s*st|burton/i.test(text)) return "Burton"; // VCA Burton Animal Hospital, Burton, OH
  if (/vca\s*college\s*hill\s*animal\s*hospital|957\s*w\s*north\s*bend\s*rd|cincinnati/i.test(text)) return "Cincinnati"; // VCA College Hill Animal Hospital, Cincinnati, OH
  if (/vca\s*dog\s*and\s*cat\s*hospital\s*of\s*tiffin|2822\s*s\s*state\s*route\s*100|tiffin/i.test(text)) return "Tiffin"; // VCA Dog and Cat Hospital of Tiffin, Tiffin, OH
  if (/vca\s*fairfield\s*animal\s*hospital|1983\s*east\s*main\s*st|lancaster/i.test(text)) return "Lancaster"; // VCA Fairfield Animal Hospital, Lancaster, OH
  if (/vca\s*morris\s*animal\s*hospital|1610\s*sheridan\s*dr|lancaster/i.test(text)) return "Lancaster"; // VCA Morris Animal Hospital, Lancaster, OH
  if (/vca\s*findlay\s*animal\s*care\s*center|1614\s*w\s*main\s*cross\s*st|findlay/i.test(text)) return "Findlay"; // VCA Findlay Animal Care Center, Findlay, OH
  if (/vca\s*findlay\s*animal\s*hospital|2141\s*bright\s*rd|findlay/i.test(text)) return "Findlay"; // VCA Findlay Animal Hospital, Findlay, OH
  if (/vca\s*great\s*lakes\s*veterinary\s*specialists|4760\s*richmond\s*rd|warrensville\s*heights/i.test(text)) return "Warrensville Heights"; // VCA Great Lakes Veterinary Specialists, Warrensville Heights, OH
  if (/vca\s*green\s*animal\s*hospital|1620\s*corporate\s*woods\s*cir|uniontown/i.test(text)) return "Uniontown"; // VCA Green Animal Hospital, Uniontown, OH
  if (/vca\s*holly\s*farms\s*animal\s*hospital|6705\s*w\s*bancroft\s*st|toledo/i.test(text)) return "Toledo"; // VCA Holly Farms Animal Hospital, Toledo, OH
  if (/vca\s*lakewood\s*animal\s*hospital|14587\s*madison\s*ave|lakewood/i.test(text)) return "Lakewood"; // VCA Lakewood Animal Hospital, Lakewood, OH
  if (/vca\s*midpark\s*animal\s*hospital|6611\s*smith\s*rd|middleburg\s*heights/i.test(text)) return "Middleburg Heights"; // VCA Midpark Animal Hospital, Middleburg Heights, OH
  if (/vca\s*mill\s*run\s*animal\s*hospital|3660\s*ridge\s*mill\s*dr|hilliard/i.test(text)) return "Hilliard"; // VCA Mill Run Animal Hospital, Hilliard, OH
  if (/vca\s*york\s*royalton\s*animal\s*hospital|8029\s*york\s*rd|north\s*royalton/i.test(text)) return "North Royalton"; // VCA York Royalton Animal Hospital, North Royalton, OH
  if (/vca\s*northwood\s*animal\s*hospital|3681\s*middle\s*urbana\s*rd|springfield/i.test(text)) return "Springfield"; // VCA Northwood Animal Hospital, Springfield, OH
  if (/vca\s*sawmill\s*animal\s*hospital|6868\s*caine\s*rd|columbus/i.test(text)) return "Columbus"; // VCA Sawmill Animal Hospital, Columbus, OH
  if (/vca\s*westerville\s*east\s*animal\s*hospital|6283\s*s\s*sunbury\s*rd|westerville/i.test(text)) return "Westerville"; // VCA Westerville East Animal Hospital, Westerville, OH

  if (/vca\s*collinsville\s*animal\s*hospital|2425\s*w\s*broadway\s*st|collinsville/i.test(text)) return "Collinsville"; // VCA Collinsville Animal Hospital, Collinsville, OK
  if (/vca\s*kickingbird\s*animal\s*hospital|421\s*n\s*bryant\s*ave|edmond/i.test(text)) return "Edmond"; // VCA Kickingbird Animal Hospital, Edmond, OK
  if (/vca\s*owasso\s*animal\s*medical\s*center|8811\s*n\s*owasso\s*expy|owasso/i.test(text)) return "Owasso"; // VCA Owasso Animal Medical Center, Owasso, OK
  if (/vca\s*woodland\s*broken\s*arrow\s*animal\s*hospital|2106\s*w\s*detroit\s*st|broken\s*arrow/i.test(text)) return "Broken Arrow"; // VCA Woodland Broken Arrow Animal Hospital, Broken Arrow, OK
  if (/vca\s*woodland\s*central\s*animal\s*hospital|5326\s*e\s*skelly\s*dr|tulsa/i.test(text)) return "Tulsa"; // VCA Woodland Central Animal Hospital, Tulsa, OK
  if (/vca\s*woodland\s*east\s*animal\s*hospital|9509\s*e\s*61st\s*st|tulsa/i.test(text)) return "Tulsa"; // VCA Woodland East Animal Hospital, Tulsa, OK
  if (/vca\s*woodland\s*south\s*animal\s*hospital|9340\s*s\s*memorial\s*dr|tulsa/i.test(text)) return "Tulsa"; // VCA Woodland South Animal Hospital, Tulsa, OK

  if (/vca\s*12-mile\s*animal\s*hospital|21920\s*se\s*stark\s*st|gresham/i.test(text)) return "Gresham"; // VCA 12-Mile Animal Hospital, Gresham, OR
  if (/vca\s*delta\s*oaks\s*animal\s*hospital|1020\s*green\s*acres\s*rd\s*#5|eugene/i.test(text)) return "Eugene"; // VCA Delta Oaks Animal Hospital, Eugene, OR
  if (/vca\s*westmoreland\s*animal\s*hospital|3880\s*w\s*11th\s*ave|eugene/i.test(text)) return "Eugene"; // VCA Westmoreland Animal Hospital, Eugene, OR
  if (/vca\s*hood\s*view\s*animal\s*hospital|16317\s*se\s*82nd\s*dr|clackamas/i.test(text)) return "Clackamas"; // VCA Hood View Animal Hospital, Clackamas, OR
  if (/vca\s*northwest\s*veterinary\s*specialists|16756\s*se\s*82nd\s*dr|clackamas/i.test(text)) return "Clackamas"; // VCA Northwest Veterinary Specialists, Clackamas, OR
  if (/vca\s*laurelhurst\s*animal\s*hospital|2945\s*ne\s*sandy\s*blvd|portland/i.test(text)) return "Portland"; // VCA Laurelhurst Animal Hospital, Portland, OR
  if (/vca\s*north\s*portland\s*veterinary\s*hospital|3000\s*n\s*lombard\s*st|portland/i.test(text)) return "Portland"; // VCA North Portland Veterinary Hospital, Portland, OR
  if (/vca\s*raleigh\s*hills\s*animal\s*hospital|4905\s*sw\s*77th\s*ave|portland/i.test(text)) return "Portland"; // VCA Raleigh Hills Animal Hospital, Portland, OR
  if (/vca\s*jackson\s*animal\s*hospital|902\s*e\s*jackson\s*st|medford/i.test(text)) return "Medford"; // VCA Jackson Animal Hospital, Medford, OR
  if (/vca\s*mckenzie\s*animal\s*hospital|5303\s*main\s*st|springfield/i.test(text)) return "Springfield"; // VCA McKenzie Animal Hospital, Springfield, OR
  if (/vca\s*keizer\s*veterinary\s*hospital|4815\s*river\s*rd\s*n|keizer/i.test(text)) return "Keizer"; // VCA Keizer Veterinary Hospital, Keizer, OR
  if (/vca\s*rock\s*creek\s*animal\s*hospital|1445\s*nw\s*185th\s*ave|aloha/i.test(text)) return "Aloha"; // VCA Rock Creek Animal Hospital, Aloha, OR
  if (/vca\s*salem\s*animal\s*hospital|4053\s*commercial\s*st\s*se|salem/i.test(text)) return "Salem"; // VCA Salem Animal Hospital, Salem, OR
  if (/vca\s*vitality\s*animal\s*hospital|4580\s*commercial\s*st\s*se|salem/i.test(text)) return "Salem"; // VCA Vitality Animal Hospital, Salem, OR
  if (/vca\s*murrayhill\s*veterinary\s*hospital|14831\s*sw\s*teal\s*blvd|beaverton/i.test(text)) return "Beaverton"; // VCA Murrayhill Veterinary Hospital, Beaverton, OR
  if (/vca\s*west\s*linn\s*animal\s*hospital|19343\s*willamette\s*dr|west\s*linn/i.test(text)) return "West Linn"; // VCA West Linn Animal Hospital, West Linn, OR
  if (/vca\s*river\s*road\s*animal\s*clinic|4975\s*river\s*rd\s*n|keizer/i.test(text)) return "Keizer"; // VCA River Road Animal Clinic, Keizer, OR
  if (/vca\s*animal\s*healing\s*center|183-?b\s*bristol\s*oxford\s*valley\s*rd|langhorne/i.test(text)) return "Langhorne"; // VCA Animal Healing Center, Langhorne, PA
  if (/vca\s*east\s*penn\s*animal\s*hospital|1020\s*chestnut\s*st|emmaus/i.test(text)) return "Emmaus"; // VCA East Penn Animal Hospital, Emmaus, PA
  if (/vca\s*white\s*rose\s*animal\s*hospital|york/i.test(text)) return "York"; // VCA White Rose Animal Hospital, York, PA
  if (/vca\s*five\s*points\s*animal\s*hospital|2057\s*brodhead\s*rd|aliquippa/i.test(text)) return "Aliquippa"; // VCA Five Points Animal Hospital, Aliquippa, PA
  if (/vca\s*gwynedd\s*animal\s*hospital|1615\s*w\s*point\s*pike|lansdale/i.test(text)) return "Lansdale"; // VCA Gwynedd Animal Hospital, Lansdale, PA

  if (/vca\s*indian\s*land\s*animal\s*hospital|124\s*fort\s*mill\s*hwy|fort\s*mill/i.test(text)) return "Fort Mill"; // VCA Indian Land Animal Hospital, Fort Mill, SC
  if (/vca\s*blue\s*ridge\s*animal\s*hospital|224\s*w\s*wade\s*hampton\s*blvd|greer/i.test(text)) return "Greer"; // VCA Blue Ridge Animal Hospital, Greer, SC
  if (/vca\s*westbury\s*animal\s*hospital|1497\s*w\s*5th\s*north\s*st|summerville/i.test(text)) return "Summerville"; // VCA Westbury Animal Hospital, Summerville, SC
  if (/vca\s*palmetto\s*animal\s*hospital|myrtle\s*beach/i.test(text)) return "Myrtle Beach"; // VCA Palmetto Animal Hospital, Myrtle Beach, SC (promo)

  if (/vca\s*creekside\s*animal\s*hospital|1062\s*middle\s*tennessee\s*blvd|murfreesboro/i.test(text)) return "Murfreesboro"; // VCA Creekside Animal Hospital, Murfreesboro, TN
  if (/vca\s*petmed\s*animal\s*hospital|nashville/i.test(text)) return "Nashville"; // VCA PetMed Animal Hospital, Nashville, TN
  if (/vca\s*murphy\s*road\s*animal\s*hospital|murphy\s*rd|nashville/i.test(text)) return "Nashville"; // VCA Murphy Road Animal Hospital, Nashville, TN
  if (/vca\s*amor\s*animal\s*hospital|8576\s*s\s*redwood\s*road\s*tomball\s*tx\s*77375/i.test(text)) return "Tomball"; // VCA Amor Animal Hospital, Tomball
  if (/vca\s*veterinary\s*hospital\s*of\s*leon\s*springs|19633\s*ih\s*10\s*west\s*san\s*antonio\s*tx\s*78257/i.test(text)) return "San Antonio"; // VCA Veterinary Hospital of Leon Springs, San Antonio
  if (/vca\s*victoria\s*animal\s*hospital|2706\s*sam\s*houston\s*drive\s*victoria\s*tx\s*77904/i.test(text)) return "Victoria"; // VCA Victoria Animal Hospital, Victoria
  if (/vca\s*westcreek\s*animal\s*hospital|3313\s*park\s*lake\s*drive\s*fort\s*worth\s*tx\s*76133/i.test(text)) return "Fort Worth"; // VCA Westcreek Animal Hospital, Fort Worth
  if (/vca\s*westside\s*animal\s*hospital|6034\s*broadway\s*st\s*pearland\s*tx\s*77581/i.test(text)) return "Pearland"; // VCA Westside Animal Hospital, Pearland
  if (/vca\s*woodlands\s*animal\s*hospital|428\s*rayford\s*road\s*spring\s*tx\s*77386/i.test(text)) return "Spring"; // VCA Woodlands Animal Hospital, Spring
  if (/vca\s*central\s*expressway\s*animal\s*hospital|11680\s*forest\s*central\s*dr\s*dallas\s*tx\s*75243/i.test(text)) return "Dallas"; // VCA Central Expressway Animal Hospital, Dallas
  if (/vca\s*mainland\s*animal\s*hospital|7232\s*medical\s*center\s*dr\s*texas\s*city\s*tx\s*77591/i.test(text)) return "Texas City"; // VCA Mainland Animal Hospital, Texas City
  if (/vca\s*desoto\s*animal\s*hospital|200\s*n\s*hampton\s*rd\s*desoto\s*tx\s*75115/i.test(text)) return "DeSoto"; // VCA DeSoto Animal Hospital, DeSoto
  if (/vca\s*all\s*pet\s*animal\s*hospital|2530\s*w\s*4700\s*s\s*suite\s*b-1\s*taylorsville\s*ut\s*84129/i.test(text)) return "Taylorsville"; // VCA All Pet Animal Hospital, Taylorsville
  if (/vca\s*amor\s*animal\s*hospital|8576\s*s\s*redwood\s*rd\s*west\s*jordan\s*ut\s*84088/i.test(text)) return "West Jordan"; // VCA Amor Animal Hospital, West Jordan
  if (/vca\s*animal\s*hospitals\s*urgent\s*care\s*[-–]?\s*sugar\s*house|729\s*e\s*2100\s*s\s*salt\s*lake\s*city\s*ut\s*84115/i.test(text)) return "Salt Lake City"; // VCA Animal Hospitals Urgent Care – Sugar House, Salt Lake City
  if (/vca\s*cottonwood\s*animal\s*hospital|6360\s*highland\s*drive\s*salt\s*lake\s*city\s*ut\s*84121/i.test(text)) return "Salt Lake City"; // VCA Cottonwood Animal Hospital, Salt Lake City
  if (/vca\s*mountain\s*view\s*animal\s*hospital|9414\s*s\s*indian\s*ridge\s*drive\s*sandy\s*ut\s*84092/i.test(text)) return "Sandy"; // VCA Mountain View Animal Hospital, Sandy
  if (/vca\s*oquirrh\s*hills\s*animal\s*hospital|5714\s*w\s*13400\s*s\s*herriman\s*ut\s*84096/i.test(text)) return "Herriman"; // VCA Oquirrh Hills Animal Hospital, Herriman
  if (/vca\s*lakeview\s*animal\s*hospital|1975\s*s\s*orchard\s*drive\s*bountiful\s*ut\s*84010/i.test(text)) return "Bountiful"; // VCA Lakeview Animal Hospital, Bountiful
  if (/vca\s*timpanogos\s*animal\s*hospital|815\s*s\s*main\s*st\s*pleasant\s*grove\s*ut\s*84062/i.test(text)) return "Pleasant Grove"; // VCA Timpanogos Animal Hospital, Pleasant Grove
  if (/vca\s*jordan\s*river\s*animal\s*hospital|1519\s*w\s*9000\s*s\s*west\s*jordan\s*ut\s*84088/i.test(text)) return "West Jordan"; // VCA Jordan River Animal Hospital, West Jordan
  if (/vca\s*airline\s*boulevard\s*animal\s*hospital|615\s*airline\s*blvd\s*portsmouth\s*va\s*23707/i.test(text)) return "Portsmouth"; // VCA Airline Boulevard Animal Hospital, Portsmouth
  if (/vca\s*albemarle\s*veterinary\s*health\s*care\s*center|445\s*westfield\s*rd\s*charlottesville\s*va\s*22901/i.test(text)) return "Charlottesville"; // VCA Albemarle Veterinary Health Care Center, Charlottesville
  if (/vca\s*alexandria\s*animal\s*hospital|2660\s*duke\s*st\s*alexandria\s*va\s*22314/i.test(text)) return "Alexandria"; // VCA Alexandria Animal Hospital, Alexandria
  if (/vca\s*amherst\s*animal\s*hospital|3327\s*s\s*amherst\s*hwy\s*monroe\s*va\s*24574/i.test(text)) return "Monroe"; // VCA Amherst Animal Hospital, Monroe
  if (/vca\s*snohomish\s*animal\s*hospital|1109\s*13th\s*st\s*snohomish\s*wa\s*98290/i.test(text)) return "Snohomish"; // VCA Snohomish Animal Hospital, Snohomish
  if (/vca\s*bellevue\s*veterinary\s*hospital|bellevue\s*wa.*moved.*kirkland/i.test(text)) return "Bellevue"; // VCA Bellevue Veterinary Hospital, Bellevue (moved to Kirkland)
  if (/vca\s*pine\s*lake\s*animal\s*hospital|2834\s*228th\s*ave\s*se\s*sammamish\s*wa\s*98075/i.test(text)) return "Sammamish"; // VCA Pine Lake Animal Hospital, Sammamish
  if (/vca\s*olympic\s*animal\s*hospital|3422\s*nw\s*byron\s*st\s*silverdale\s*wa\s*98383/i.test(text)) return "Silverdale"; // VCA Olympic Animal Hospital, Silverdale
  if (/vca\s*companion\s*care\s*animal\s*hospital|1501\s*n\s*6th\s*st\s*wausau\s*wi\s*54403/i.test(text)) return "Wausau"; // VCA Companion Care Animal Hospital, Wausau
  if (/vca\s*saukville\s*animal\s*hospital|303\s*w\s*dekora\s*st\s*saukville\s*wi\s*53080/i.test(text)) return "Saukville"; // VCA Saukville Animal Hospital, Saukville
  if (/vca\s*milwaukee\s*emergency\s*center\s*for\s*animals|3670\s*s\s*108th\s*st\s*greenfield\s*wi\s*53228/i.test(text)) return "Greenfield"; // VCA Milwaukee Emergency Center for Animals, Greenfield

  if (/veritas\s*veterinary\s*partners/i.test(text)) return "Denver"; // Veritas Veterinary Partners, Denver, CO (network: CA, NV, CO, NJ, NY)
  if (/veterinary\s*specialists\s*of\s*hanover/i.test(text)) return "Hanover"; // Veterinary Specialists of Hanover, Hanover, PA
  if (/vetpartners/i.test(text)) return "York"; // VetPartners, York, UK (HQ; network: UK/AU)
  if (/violet\s*crown\s*veterinary\s*specialist/i.test(text)) return "Austin"; // Violet Crown Veterinary Specialist, Austin, TX
  if (/virginia\s*tech/i.test(text)) return "Blacksburg"; // Virginia Tech, Blacksburg, VA
  if (/western\s*college\s*of\s*veterinary\s*medicine|university\s*of\s*saskatchewan/i.test(text)) return "Saskatoon"; // Western College of Veterinary Medicine, University of Saskatchewan, Saskatoon, SK
  if (/allison\s*lane\s*animal\s*hospital|jeffersonville|allison\s*lane/i.test(text)) return "Jeffersonville"; // Allison Lane Animal Hospital, IN
  if (/alton\s*main\s*animal\s*hospital|s\s*main\s*st|santa\s*ana/i.test(text)) return "Santa Ana"; // Alton Main Animal Hospital, CA
  if (/andover\s*animal\s*hospital|lowell\s*street|andover/i.test(text)) return "Andover"; // Andover Animal Hospital, MA
  if (/androscoggin\s*animal\s*hospital|foreside\s*road|topsham/i.test(text)) return "Topsham"; // Androscoggin Animal Hospital, ME
  if (/animal\s*clinic\s*downtown|e\s*23rd\s*st|chattanooga/i.test(text)) return "Chattanooga"; // Animal Clinic Downtown, TN
  if (/animal\s*clinic\s*east|gunbarrel\s*rd|chattanooga/i.test(text)) return "Chattanooga"; // Animal Clinic East, TN
  if (/animal\s*doctors|taylorsville\s*road|louisville/i.test(text)) return "Louisville"; // Animal Doctors, KY
  if (/animal\s*farm\s*pet\s*hospital|mission\s*st|san\s*francisco/i.test(text)) return "San Francisco"; // Animal Farm Pet Hospital, CA
  if (/animal\s*hospital\s*biscoe|north\s*main\s*st|biscoe/i.test(text)) return "Biscoe"; // Animal Hospital Biscoe, NC
  if (/animal\s*hospital\s*randolph|zoo\s*parkway|asheboro/i.test(text)) return "Asheboro"; // Animal Hospital Randolph, NC
  if (/animal\s*infirmary\s*of\s*hoboken|adams\s*street|hoboken/i.test(text)) return "Hoboken"; // Animal Infirmary of Hoboken, NJ
  if (/bay\s*state\s*veterinary.*emergency.*specialty|swansea\s*mall\s*dr|swansea/i.test(text)) return "Swansea"; // Bay State Veterinary Emergency & Specialty Services, MA
  if (/bayonne\s*animal\s*hospital|john\s*f\s*kennedy|bayonne/i.test(text)) return "Bayonne"; // Bayonne Animal Hospital, NJ
  if (/blue\s*springs\s*animal\s*hospital|us\s*40\s*highway|blue\s*springs/i.test(text)) return "Blue Springs"; // Blue Springs Animal Hospital, MO
  if (/bluegrass\s*animal\s*hospital|ebenezer\s*rd|knoxville/i.test(text)) return "Knoxville"; // Bluegrass Animal Hospital, TN
  if (/boca\s*park\s*animal\s*hospital|rampart\s*blvd|las\s*vegas/i.test(text)) return "Las Vegas"; // Boca Park Animal Hospital, NV
  if (/bonita\s*veterinary\s*hospital|bonita\s*beach\s*road|bonita\s*springs/i.test(text)) return "Bonita Springs"; // Bonita Veterinary Hospital, FL
  if (/boston\s*veterinary\s*specialists|bridge\s*street|dedham/i.test(text)) return "Dedham"; // Boston Veterinary Specialists, MA
  if (/buzzards\s*bay\s*veterinary\s*associates|main\s*st|buzzards\s*bay/i.test(text)) return "Buzzards Bay"; // Buzzards Bay Veterinary Associates, MA
  if (/california\s*veterinary\s*hospital|victoria\s*st|gardena/i.test(text)) return "Gardena"; // California Veterinary Hospital, CA
  if (/cape\s*cod\s*veterinary\s*specialists|bourne\s*bridge/i.test(text)) return "Buzzards Bay"; // Cape Cod Veterinary Specialists, MA
  if (/cape\s*cod\s*veterinary\s*specialists.*dennis|theophilus\s*smith|south\s*dennis/i.test(text)) return "South Dennis"; // Cape Cod Veterinary Specialists Dennis, MA
  if (/carroll\s*gardens\s*veterinary|court\s*street|brooklyn/i.test(text)) return "Brooklyn"; // Carroll Gardens Veterinary Group, NY
  if (/central\s*boulevard\s*veterinary|central\s*blvd|brentwood/i.test(text)) return "Brentwood"; // Central Boulevard Veterinary Hospital, CA
  if (/central\s*texas\s*veterinary.*round\s*rock|chisholm\s*trail|round\s*rock/i.test(text)) return "Round Rock"; // Central Texas Veterinary Specialty and Emergency Hospital- Round Rock, TX
  if (/central\s*texas\s*veterinary.*frontier\s*trail|austin/i.test(text)) return "Austin"; // Central Texas Veterinary Specialty and Emergency Hospital- South, TX
  if (/clark\s*road\s*animal\s*clinic|clark\s*rd|sarasota/i.test(text)) return "Sarasota"; // Clark Road Animal Clinic, FL
  if (/colchester\s*veterinary\s*hospital|old\s*hartford|colchester/i.test(text)) return "Colchester"; // Colchester Veterinary Hospital, CT
  if (/colorado\s*canine\s*orthopedics.*rehab|nevada\s*avenue|colorado\s*springs/i.test(text)) return "Colorado Springs"; // Colorado Canine Orthopedics & Rehab, CO
  if (/combs\s*veterinary\s*clinic|state\s*road\s*45|bloomington/i.test(text)) return "Bloomington"; // Combs Veterinary Clinic, IN
  if (/country\s*animal\s*clinic|riverside\s*drive|chino/i.test(text)) return "Chino"; // Country Animal Clinic, CA
  if (/crestwood\s*animal\s*hospital|w\s*hwy\s*146|crestwood/i.test(text)) return "Crestwood"; // Crestwood Animal Hospital, KY
  if (/critter\s*clinic|main\s*street|gallatin/i.test(text)) return "Gallatin"; // Critter Clinic, TN
  if (/crossroads\s*animal\s*hospital|carl\s*jones|moody/i.test(text)) return "Moody"; // Crossroads Animal Hospital, AL
  if (/crystal\s*springs\s*pet\s*hospital|de\s*anza\s*blvd|san\s*mateo/i.test(text)) return "San Mateo"; // Crystal Springs Pet Hospital, CA
  if (/curry\s*ford\s*animal\s*hospital|curry\s*ford\s*road|orlando/i.test(text)) return "Orlando"; // Curry Ford Animal Hospital, FL
  if (/day\s*creek\s*animal\s*hospital|day\s*creek\s*blvd|rancho\s*cucamonga/i.test(text)) return "Rancho Cucamonga"; // Day Creek Animal Hospital, CA
  if (/dedham\s*veterinary\s*associates|bridge\s*street|dedham/i.test(text)) return "Dedham"; // Dedham Veterinary Associates, MA
  if (/demanes\s*animal\s*hospital|wisconsin\s*ave|peoria/i.test(text)) return "Peoria"; // Demanes Animal Hospital, IL
  if (/denver\s*cat\s*hospital|evans\s*avenue|denver/i.test(text)) return "Denver"; // Denver Cat Hospital, CO
  if (/downtown\s*veterinary\s*associates|first\s*st|jersey\s*city/i.test(text)) return "Jersey City"; // Downtown Veterinary Associates, NJ
  if (/east\s*el\s*paso\s*animal\s*hospital|wedgewood\s*drive|el\s*paso/i.test(text)) return "El Paso"; // East El Paso Animal Hospital, TX
  if (/east\s*louisville\s*animal\s*hospital|westport\s*road|louisville/i.test(text)) return "Louisville"; // East Louisville Animal Hospital, KY
  if (/econ\s*river\s*animal\s*hospital|e\s*colonial\s*dr|orlando/i.test(text)) return "Orlando"; // Econ River Animal Hospital, FL
  if (/edgewater\s*animal\s*hospital|edgewater\s*dr|orlando/i.test(text)) return "Orlando"; // Edgewater Animal Hospital, FL
  if (/emerald\s*hills\s*animal\s*hospital|sheridan\s*st|hollywood/i.test(text)) return "Hollywood"; // Emerald Hills Animal Hospital, FL
  if (/epperson\s*veterinary\s*services|highway\s*41\s*north|evansville/i.test(text)) return "Evansville"; // Epperson Veterinary Services, IN
  if (/evans\s*east\s*animal\s*hospital|evans\s*ave|denver/i.test(text)) return "Denver"; // Evans East Animal Hospital, CO
  if (/firehouse\s*animal\s*health.*leander|lakeline\s*blvd|leander/i.test(text)) return "Leander"; // Firehouse Animal Health Center Leander, TX
  if (/firehouse\s*animal\s*health.*westlake|capital\s*of\s*texas\s*hwy|austin/i.test(text)) return "Austin"; // Firehouse Animal Health Center Westlake, TX
  if (/four\s*paws\s*veterinary\s*center|dublin\s*blvd|dublin/i.test(text)) return "Dublin"; // Four Paws Veterinary Center, CA
  if (/gailor\s*animal\s*hospital|3rd\s*street\s*road|louisville/i.test(text)) return "Louisville"; // Gailor Animal Hospital, KY
  if (/gentle\s*care\s*veterinary\s*hospital|grand\s*st|hayward/i.test(text)) return "Hayward"; // Gentle Care Veterinary Hospital, CA
  if (/goshen\s*animal\s*clinic|us\s*hwy\s*42|prospect/i.test(text)) return "Prospect"; // Goshen Animal Clinic, KY
  if (/hamburg\s*veterinary\s*clinic|vernon\s*ave|hamburg/i.test(text)) return "Hamburg"; // Hamburg Veterinary Clinic, NJ
  if (/heights\s*veterinary\s*associates|kennedy\s*blvd|jersey\s*city/i.test(text)) return "Jersey City"; // Heights Veterinary Associates, NJ
  if (/helping\s*hands\s*veterinary.*florida|alafaya\s*trail|orlando/i.test(text)) return "Orlando"; // Helping Hands Veterinary Surgery and Dentistry of Florida, FL
  if (/helping\s*hands\s*veterinary.*virginia|rhoadmiller\s*st|richmond/i.test(text)) return "Richmond"; // Helping Hands Veterinary Surgery and Dentistry of Virginia, VA
  if (/housepaws\s*mobile.*atco|jackson\s*rd|atco/i.test(text)) return "Atco"; // HousePaws Mobile Veterinary Service Atco, NJ
  if (/housepaws\s*mobile.*morrisville|n\s*pennsylvania\s*ave|morrisville/i.test(text)) return "Morrisville"; // HousePaws Mobile Veterinary Service Morrisville, PA
  if (/housepaws\s*mobile.*mount\s*laurel|centerton\s*road|mount\s*laurel/i.test(text)) return "Mount Laurel"; // HousePaws Mobile Veterinary Service Mount Laurel, NJ
  if (/long\s*island\s*animal\s*hospital|old\s*country\s*road|westbury/i.test(text)) return "Westbury"; // Long Island Animal Hospital, NY
  if (/longwood\s*veterinary\s*clinic|w\s*state\s*rd|longwood/i.test(text)) return "Longwood"; // Longwood Veterinary Clinic, FL
  if (/main\s*street\s*small\s*animal\s*hospital|south\s*main\s*st|templeton/i.test(text)) return "Templeton"; // Main Street Small Animal Hospital, CA
  if (/merrimac\s*valley\s*animal\s*hospital|haverhill\s*rd|amesbury/i.test(text)) return "Amesbury"; // Merrimac Valley Animal Hospital, MA
  if (/mid\s*island\s*animal\s*hospital|old\s*country\s*road|hicksville/i.test(text)) return "Hicksville"; // Mid Island Animal Hospital, NY
  if (/muddy\s*creek\s*animal\s*hospital|muddy\s*creek\s*road|west\s*river/i.test(text)) return "West River"; // Muddy Creek Animal Hospital, MD
  if (/new\s*hope\s*veterinary\s*hospital|sugan\s*road|new\s*hope/i.test(text)) return "New Hope"; // New Hope Veterinary Hospital, PA
  if (/newport\s*animal\s*hospital|bernwood\s*drive|bonita\s*springs/i.test(text)) return "Bonita Springs"; // Newport Animal Hospital, FL
  if (/north\s*pen\s*veterinary|amphlett\s*blvd|san\s*mateo/i.test(text)) return "San Mateo"; // North Pen Veterinary, CA
  if (/north\s*port\s*animal\s*hospital|tamiami\s*trail|north\s*port/i.test(text)) return "North Port"; // North Port Animal Hospital, FL
  if (/ocean\s*state\s*veterinary\s*specialists|county\s*trail|east\s*greenwich/i.test(text)) return "East Greenwich"; // Ocean State Veterinary Specialists, RI
  if (/orange\s*veterinary\s*hospital|boston\s*post\s*road|orange/i.test(text)) return "Orange"; // Orange Veterinary Hospital, CT
  if (/owings\s*mills\s*veterinary\s*center|reisterstown\s*road|owings\s*mills/i.test(text)) return "Owings Mills"; // Owings Mills Veterinary Center, MD
  if (/peachtree\s*hills\s*animal\s*hospital|early\s*st\s*nw|atlanta/i.test(text)) return "Atlanta"; // Peachtree Hills Animal Hospital, GA
  if (/peoria\s*area\s*veterinary.*chillicothe|truitt\s*avenue|chillicothe/i.test(text)) return "Chillicothe"; // Peoria Area Veterinary Group of Chillicothe, IL
  if (/peoria\s*area\s*veterinary.*dunlap|cedar\s*hills|dunlap/i.test(text)) return "Dunlap"; // Peoria Area Veterinary Group of Dunlap, IL
  if (/peoria\s*area\s*veterinary.*peoria|townline\s*rd|peoria/i.test(text)) return "Peoria"; // Peoria Area Veterinary Group of Peoria, IL
  if (/pets\s*and\s*vets\s*as\s*partners|montgomery\s*street|west\s*lafayette/i.test(text)) return "West Lafayette"; // Pets and Vets as Partners, IN
  if (/pets\s*referral\s*center|university\s*avenue|berkeley/i.test(text)) return "Berkeley"; // PETS Referral Center, CA
  if (/pico\s*veterinary\s*hospital|avenida\s*pico|san\s*clemente/i.test(text)) return "San Clemente"; // Pico Veterinary Hospital of San Clemente, CA
  if (/piscataqua\s*animal\s*hospital|state\s*rd|kittery/i.test(text)) return "Kittery"; // Piscataqua Animal Hospital, ME
  if (/quarry\s*ridge\s*animal\s*hospital|old\s*quarry\s*road|ridgefield/i.test(text)) return "Ridgefield"; // Quarry Ridge Animal Hospital, CT
  if (/sagamore\s*animal\s*hospital|sagamore\s*road|rye/i.test(text)) return "Rye"; // Sagamore Animal Hospital, NH
  if (/san\s*dimas\s*pet\s*clinic|arrow\s*hwy|san\s*dimas/i.test(text)) return "San Dimas"; // San Dimas Pet Clinic, CA
  if (/seneca\s*animal\s*hospital|taylorsville\s*road|louisville/i.test(text)) return "Louisville"; // Seneca Animal Hospital, KY
  if (/seven\s*hills\s*veterinary\s*hospital|diamond\s*heights|san\s*francisco/i.test(text)) return "San Francisco"; // Seven Hills Veterinary Hospital, CA
  if (/shadow\s*creek\s*veterinary\s*clinic|shadow\s*creek\s*pkwy|pearland/i.test(text)) return "Pearland"; // Shadow Creek Veterinary Clinic, TX
  if (/shore\s*haven\s*veterinary\s*hospital|frontage\s*rd|east\s*haven/i.test(text)) return "East Haven"; // Shore Haven Veterinary Hospital, CT
  if (/solano-napa\s*pet\s*er\s*clinic|central\s*pl|fairfield/i.test(text)) return "Fairfield"; // Solano-Napa Pet ER Clinic, CA
  if (/springhurst\s*animal\s*hospital|brownsboro\s*road|louisville/i.test(text)) return "Louisville"; // Springhurst Animal Hospital, KY
  if (/st\.*\s*matthews\s*animal\s*clinic|fairfax\s*avenue|louisville/i.test(text)) return "Louisville"; // St. Matthews Animal Clinic, KY
  if (/stamford\s*veterinary\s*center|hope\s*st|stamford/i.test(text)) return "Stamford"; // Stamford Veterinary Center, CT
  if (/standiford\s*veterinary\s*center|standiford\s*avenue|modesto/i.test(text)) return "Modesto"; // Standiford Veterinary Center, CA
  if (/suncoast\s*veterinary\s*emergency\s*&?\s*specialty\s*center|tamiami\s*trail|sarasota/i.test(text)) return "Sarasota"; // Suncoast Veterinary Emergency & Specialty Center, FL
  if (/sylvan\s*veterinary\s*hospital|roselle\s*ave|modesto/i.test(text)) return "Modesto"; // Sylvan Veterinary hospital, CA
  if (/terra\s*vista\s*animal\s*hospital|milliken\s*ave|rancho\s*cucamonga/i.test(text)) return "Rancho Cucamonga"; // Terra Vista Animal Hospital, CA
  if (/animal\s*hospital\s*of\s*smithson\s*valley|singing\s*oaks|spring\s*branch/i.test(text)) return "Spring Branch"; // The Animal Hospital of Smithson Valley, TX
  if (/drake\s*center\s*for\s*veterinary\s*care|el\s*camino\s*real|encinitas/i.test(text)) return "Encinitas"; // The Drake Center for Veterinary Care, CA
  if (/oncology\s*service.*leesburg|fort\s*evans\s*rd|leesburg/i.test(text)) return "Leesburg"; // The Oncology Service - Leesburg, VA
  if (/oncology\s*service.*richmond|staples\s*mill\s*road|richmond/i.test(text)) return "Richmond"; // The Oncology Service - Richmond, VA
  if (/oncology\s*services.*springfield|backlick\s*road|springfield/i.test(text)) return "Springfield"; // The Oncology Services - Springfield, VA
  if (/veterinary\s*emergency\s*clinic|murdock\s*circle|port\s*charlotte/i.test(text)) return "Port Charlotte"; // Veterinary Emergency Clinic, FL
  if (/village\s*veterinary|us\s*highway\s*1|jupiter/i.test(text)) return "Jupiter"; // Village Veterinary, FL
  if (/vitality\s*veterinary\s*of\s*swansea|gar\s*highway|swansea/i.test(text)) return "Swansea"; // Vitality Veterinary of Swansea, MA
  if (/winter\s*springs\s*veterinary\s*clinic|w\s*state\s*road\s*434|winter\s*springs/i.test(text)) return "Winter Springs"; // Winter Springs Veterinary Clinic, FL


  // Add more mappings as needed
  return null;
}
module.exports = guessCityFromOrganisation;
