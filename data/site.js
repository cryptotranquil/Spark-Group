// All website content lives here. Edit text, lists and contacts in this file; no HTML needed.
const t = (title, d) => ({ t: title, d });

module.exports = {
  name: 'Spark Holdings Pty Limited',
  brand: { src: '/img/brand/spark_holdings_logo_HQ_transparent.webp', alt: 'Spark Holdings Pty Limited' },
  email: 'info@sparkholdingsmw.com',
  domain: 'sparkholdingsmw.com',
  description:
    'Spark Holdings runs Spark Security Solutions, Spark Cleaning Solutions and a general supplies business from offices in Lilongwe and Blantyre, Malawi.',
  phones: [
    { label: 'Tel', display: '+265 (0) 891 000 529', tel: '+265891000529' },
    { label: 'Cell', display: '+265 (0) 888 646 567', tel: '+265888646567' },
  ],
  offices: [
    { city: 'Lilongwe', lines: ['Area 49, Sparrows Street', 'House No. 49/2/303', 'P.O. Box X289'] },
    { city: 'Blantyre', lines: ['Kameza Gulliver', 'P.O. Box 3217'] },
  ],
  nav: [
    { href: '/', label: 'Home' },
    { href: '/security', label: 'Security' },
    { href: '/cleaning', label: 'Cleaning' },
    { href: '/supplies', label: 'Supplies' },
  ],

  about: {
    title: 'One company, three ways we work for you',
    paras: [
      'Spark Holdings Pty Limited is registered under the Companies Act 2013. Its core business is investment and general supply. Spark Security Solutions and Spark Cleaning Solutions trade as its subsidiaries.',
      'We build long relationships with companies by meeting their specific needs, including customised products, and by backing the product with service and competitive pricing.',
    ],
  },

  // Client references (contact names only; phone numbers and emails are deliberately not published)
  references: [
    { client: 'Leopard Match 2018 Ltd', service: 'Casual workers', person: 'Rafik Osman' },
    { client: 'OG Match Company Ltd', service: 'Stationery and toners', person: 'Mohmed Shakih' },
    { client: 'George Robinson Associates Business Consultants Limited', service: 'Stationery and computers', person: 'Patrick' },
    { client: 'CEAR, Limbe', service: 'Casual workers', person: 'Dumisani Kumwenda' },
    { client: 'Salima Sugar Limited', service: 'Fertiliser, agri-chemicals, PPE, laboratory equipment and chemicals', person: 'Clara Salaniponi and Charles Thupi' },
  ],

  divisions: [
    // ---------------------------------------------------------------- SECURITY
    {
      slug: 'security',
      name: 'Spark Security Solutions',
      brand: { src: '/img/brand/spark_logo_full.webp', alt: 'Spark Security Solutions Pty Limited' },
      short: 'Security',
      panel: { img: '/img/security/lineup.jpg', pos: '50% 30%', text: 'Guards, technical systems and security advice.' },
      hero: { src: '/img/security/hero.jpg', alt: 'Two Spark Security guards in black uniform, one facing the camera' },
      headline: 'Security guards you can check on, report to and rely on',
      lead: 'Spark Security Solutions provides guarding, technical systems and security advice across Malawi, and reports to clients on how the service is performing.',
      metaDescription: 'Security guards, VIP protection, CCTV, alarms, electric fencing, consultancy and private investigations in Malawi from Spark Security Solutions.',
      intro: {
        title: 'Why we started',
        paras: [
          'Malawi’s private security industry has grown quickly, and not every new provider puts service quality first. That leaves clients exposed.',
          'Spark Security Solutions was set up to bring professional policies, better service delivery and high performance standards to the sector. We work alongside the police, not in competition with them, to reduce risk and protect lives and property.',
        ],
        image: { src: '/img/security/lineup.jpg', alt: 'Seven Spark Security guards standing in a line' },
      },
      vision: 'To be recognised and respected as the security service provider of choice, for both customers and employees.',
      mission: 'To provide exceptional security services by combining the latest technology with expert guarding, protecting people, property and assets.',
      groupsTitle: 'What we provide',
      groups: [
        {
          id: 'manpower', title: 'Manpower', image: { src: '/img/security/profile.jpg', alt: 'A Spark Security guard in profile' },
          intro: 'Guarding has been the backbone of Spark Security since the start.',
          items: [t('Standard guards'), t('Commissionaires'), t('Dog handlers'), t('Hotel security detectives'), t('VIP protection and bodyguarding'), t('Crowd control management'), t('Neighbourhood watch services')],
        },
        {
          id: 'technical', title: 'Technical services', intro: 'Equipment supplied and installed to suit the site.',
          items: [t('Access control systems'), t('Vehicle tracking'), t('CCTV installation'), t('Alarm system installation'), t('Beam sensors'), t('Electric fencing')],
        },
        {
          id: 'advisory', title: 'Advice, investigation and training', intro: 'For businesses and individuals who want to improve their own security.',
          items: [
            t('Security consultancy', 'Risk assessment, threat analysis and security strategy.'),
            t('Private investigations', 'Background checks, surveillance, fraud detection, forensic analysis, system audits, and legal and prosecution support in criminal and civil cases.'),
            t('Security management training', 'Crisis management, emergency response, risk mitigation and leadership in security operations.'),
          ],
        },
      ],
      howTitle: 'How we run the service',
      how: [
        { h: 'Recruitment', p: 'Applicants meet written and oral requirements. Employment is confirmed only after police or close-relative clearance, and recruits must meet standards for health, hygiene, fitness and appearance.' },
        { h: 'Training', p: 'Officers are trained for their specific tasks, evaluated constantly by management, and given refresher training regularly so standards do not slip.' },
        { h: 'Cover', p: 'Guards are posted to one site, and a dedicated reserve team covers absences so the service is not interrupted.' },
        { h: 'Reporting', p: 'Daily shift reports and incident logging, timely client updates, monthly security reviews and monthly appraisal meetings with the client.' },
        { h: 'Discipline', p: 'Guards are smartly dressed and equipped, fit, sober and alert. There is zero tolerance for alcohol or drugs, and shift changes are completed within 30 minutes.' },
        { h: 'Oversight', p: 'Head office supervisors are the last tier of quality control, backed by a management team and the shareholders.' },
      ],
      valuesTitle: 'How we treat our people',
      values: [
        { h: 'Ethics and integrity', p: 'We hold ourselves to the highest standards in how we work.' },
        { h: 'Reward and growth', p: 'Staff are helped to reach their potential through performance and rewards, and are promoted from within on merit.' },
        { h: 'Fair treatment', p: 'Diversity, equal opportunity and open communication are part of our HR policy, and we support local employment.' },
      ],
    },

    // ---------------------------------------------------------------- CLEANING
    {
      slug: 'cleaning',
      name: 'Spark Cleaning Solutions',
      brand: { src: '/img/brand/spark_cleaning_logo_HQ_transparent.webp', alt: 'Spark Cleaning Solutions Pty Limited' },
      short: 'Cleaning',
      panel: { img: '/img/cleaning/team.jpg', pos: '50% 40%', text: 'Cleaning, pest control, landscaping and hygiene.' },
      hero: { src: '/img/cleaning/team.jpg', alt: 'Spark Cleaning team in hard hats and high-visibility vests' },
      headline: 'Clean offices, homes and grounds, on a schedule you agree',
      lead: 'Spark Cleaning Solutions cleans offices and homes for companies and individuals across Malawi, and also handles pest control, landscaping, maintenance, waste and hygiene services.',
      metaDescription: 'Office and home cleaning, pest control, landscaping, property maintenance, waste management and hygiene services in Malawi from Spark Cleaning Solutions.',
      intro: {
        title: 'Who we are',
        paras: [
          'Spark Cleaning Solutions Pty Limited is a private limited company incorporated under the Companies Act 2013 of Malawi.',
          'Our staff have experience in office and domestic cleaning for companies and individuals, and we aim for three things: the best cleaning service, a tidy work environment, and cleaning products supplied with a guarantee.',
        ],
        image: { src: '/img/cleaning/sprayers.jpg', alt: 'Spark Cleaning staff carrying sprayers outside a brick building' },
      },
      vision: 'To be a leading cleaning services provider with high standards of sanitation and better work and residential environments across the country.',
      mission: 'To create real value for clients with quality, effective and guaranteed services that are efficient and economical, so clients stay with us.',
      groupsTitle: 'Our services',
      groups: [
        {
          id: 'cleaning', title: 'Cleaning', image: { src: '/img/cleaning/mop.jpg', alt: 'A Spark Cleaning worker mopping with a bucket' },
          intro: 'Contract cleaning for offices and one-off cleaning for homes and vehicles.',
          items: [t('Daily staff sanitation cleaning on site'), t('Daily, weekly and monthly office cleaning on contract'), t('Office and home carpet cleaning'), t('Office chair, boardroom chair and sofa cleaning'), t('Car interior and exterior cleaning'), t('Wall cleaning'), t('Cleaning products: machines such as vacuum cleaners and polishers, mops, brushes, cloths, toilet rolls, hand towels, refuse sacks, soap and detergents')],
        },
        {
          id: 'pest-control', title: 'Pest control', image: { src: '/img/cleaning/pest.jpg', alt: 'Technician in protective suit spraying a floor edge' },
          intro: 'We use chemicals approved by the Government of Malawi and follow the laid-down procedure so they do not harm people or pets.',
          items: [t('Fumigation of offices, homes, warehouses and factories', 'Rats, bed bugs, cockroaches, mosquitoes, termites and more.'), t('Pest control on produce', 'Maize, rice, beans, soya and more.')],
        },
        {
          id: 'landscaping', title: 'Landscaping', image: { src: '/img/cleaning/lawn.jpg', alt: 'A hand holding a turf of healthy grass' },
          intro: 'Tailored landscaping for gated communities, corporate institutions and schools.',
          items: [t('Hard landscaping', 'Designing and creating a garden from scratch.'), t('Soft landscaping', 'Improving an existing garden with soil, organic manure and replacement plants.'), t('Gardening', 'Maintaining a garden with fertiliser, insecticide and weeding.')],
        },
        {
          id: 'maintenance', title: 'Property maintenance and facilities',
          intro: 'Repairs and upkeep for buildings.',
          items: [t('Lighting repairs'), t('Plumbing and flooding issues'), t('Fence, ceiling and roof repairs'), t('Painting'), t('Replacing doors'), t('Tub repairs')],
        },
        {
          id: 'waste', title: 'Refuse and waste management',
          intro: 'Collection and disposal handled for you.',
          items: [t('Pick-up and incineration of biohazard waste'), t('Recycling options')],
        },
        {
          id: 'hygiene', title: 'Hygiene services',
          intro: 'Supplied, installed and refilled on an agreed schedule.',
          items: [t('Sanitary bins', 'Supply and service, cleaning and sanitising on schedule, and transport and incineration of the waste as the law requires.'), t('Automatic air freshener dispensers', 'Supply, installation, and replacement of canisters and batteries.'), t('Toilet seat sanitisers', 'Supply, installation and replacement of sachets.'), t('Hand driers', 'Supply and installation at a one-time cost.')],
        },
        {
          id: 'staff', title: 'Maid and staff services', image: { src: '/img/cleaning/maid.jpg', alt: 'A Spark Cleaning worker cleaning a washroom' },
          intro: 'Vetted, trained people for homes and offices.',
          items: [t('Maid service', 'Housekeeping weekly or twice a month by trained, vetted maids.'), t('Messenger service'), t('Tea service', 'Preparing tea and simple meals in the office kitchen and serving visitors.'), t('Training', 'We train clients’ own employees to clean homes and offices to a good standard.')],
        },
      ],
      howTitle: 'Why clients engage us',
      how: [
        { h: 'On time', p: 'Assignments are carried out when agreed.' },
        { h: 'Always improving', p: 'We keep working on how the service is delivered.' },
        { h: 'Value for money', p: 'Economical services that stay worth the cost.' },
        { h: 'Confidential and honest', p: 'High business confidentiality, and honest dealing at every level.' },
      ],
      valuesTitle: 'Our values',
      values: [
        { h: 'Quality', p: 'Quality services that help our clients’ companies grow.' },
        { h: 'Effectiveness', p: 'Delivery that is effective and in the client’s best interest.' },
        { h: 'Honesty', p: 'We work and provide services honestly at all levels.' },
        { h: 'Integrity', p: 'Staff of high integrity who are well trained for quality office services.' },
      ],
    },

    // ---------------------------------------------------------------- SUPPLIES
    {
      slug: 'supplies',
      name: 'Spark Holdings Supplies',
      short: 'Supplies',
      panel: { img: '/img/supplies/hardhat.jpg', pos: '50% 25%', text: 'Hardware, stationery, computers, safety gear and casual workers.' },
      hero: { src: '/img/supplies/tools.jpg', alt: 'Work gloves, boots, hard hat, hammer, cable and a drill laid out on a dark table' },
      headline: 'Everything a site and an office run on, supplied with no minimum order',
      lead: 'Spark Holdings supplies hardware, office stationery, computers, safety gear, security wear and casual workers to businesses in Malawi, and will customise products to a client’s requirements.',
      metaDescription: 'Hardware, office stationery, computers, industrial safety gear, tactical security uniforms and casual workers supplied across Malawi by Spark Holdings, with no minimum order.',
      intro: {
        title: 'Supply is our core business',
        paras: [
          'Alongside investments, general supply is the core of Spark Holdings. We source from reliable manufacturers so that products meet international standards, and we aim to be one of the trusted general suppliers in Malawi.',
        ],
        image: { src: '/img/supplies/hardhat.jpg', alt: 'A worker in a red hard hat and orange vest' },
      },
      vision: 'To become a reputable company in the supply chain industry, and to improve the quality of cleaning and security services.',
      mission: 'To supply high quality products at affordable rates to individuals and organisations.',
      groupsTitle: 'What we supply',
      groups: [
        {
          id: 'products', title: 'Products and people', image: { src: '/img/supplies/stationery.jpg', alt: 'Stationery including pencils, scissors, notebooks and a stapler' },
          intro: 'A broad range, including customised products that meet a client’s requirements.',
          items: [t('Hardware', 'Building materials, electrical and plumbing equipment.'), t('Office stationery and equipment'), t('Computers and accessories', 'Printers, servers and backup power.'), t('Industrial safety gear and equipment'), t('Tactical security uniforms and equipment'), t('General casual workers and related services')],
        },
      ],
      howTitle: 'Why buy from Spark Holdings',
      how: [
        { h: 'No minimum order', p: 'Order what you need, in the quantity you need.' },
        { h: 'Proven quality', p: 'Quality-proven products from reliable manufacturers.' },
        { h: 'Reach', p: 'A wide distribution network, with logistics support for timely deliveries.' },
        { h: 'Pricing', p: 'Competitive prices and customer service that follows through.' },
      ],
      valuesTitle: 'What we hold ourselves to',
      values: [
        { h: 'Quality assurance', p: 'Quality is a pledge, not a notion. We go to great lengths to supply products that meet international standards.' },
        { h: 'Customer satisfaction', p: 'An ethical approach, with respect and dignity for the individual and concern for society.' },
        { h: 'Valued clients', p: 'Relationships built on respect, transparency and mutual benefit.' },
      ],
      showReferences: true,
    },
  ],
};
