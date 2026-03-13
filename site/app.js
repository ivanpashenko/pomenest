import './components/site-shell.js';
import './components/site-header.js';
import './components/hero-section.js';
import './components/text-section.js';
import './components/split-section.js';
import './components/capabilities-section.js';
import './components/markets-section.js';
import './components/ventures-section.js';
import './components/pricing-section.js';
import './components/cta-section.js';
import './components/site-footer.js';

const content = {
  brand: 'POME Nest',
  nav: [
    { 
      label: 'Services', 
      items: [
        { label: 'Early Market Validation', href: '#/service/early-market-validation' },
        { label: 'Immersive Strategic Sessions', href: '#/service/immersive-strategic-sessions' },
        { label: 'Key Partner Meetings', href: '#/service/key-partner-meetings' }
      ]
    },
    { label: 'For whom', href: '#for-whom' },
    { label: 'Cases', href: '#ventures' },
    { 
      label: 'Pricing', 
      items: [
        { label: 'Early Market Validation', href: '#/service/early-market-validation#pricing' },
        { label: 'Immersive Strategic Sessions', href: '#/service/immersive-strategic-sessions#pricing' },
        { label: 'Key Partner Meetings', href: '#/service/key-partner-meetings#pricing' }
      ]
    },
    { label: 'Venture Studio', href: '#venture-studio' }
  ],
  hero: {
    eyebrow: 'Southeast Asia Market Entry',
    title: 'Enter Southeast Asia with structure and less guesswork',
    body: 'POME Nest helps companies take their first market-entry steps in Southeast Asia: key partner meetings, early validation and strategic immersion.',
    primaryLabel: 'Book a strategy call',
    primaryHref: '#contact',
    secondaryLabel: 'See services',
    secondaryHref: '#services',
    energyImage: './assets/images/hero_editorial_agency_daylight_woman_01.png',
    logoImage: './assets/images/logo_tagline.svg'
  },
  capabilities: {
    eyebrow: 'Services',
    title: 'Three services to launch your first steps in Southeast Asia',
    items: [
      {
        name: 'Early Market Validation',
        title: 'Test real demand before you build local operations',
        body: 'Validate your product with real consumers in Southeast Asia before committing to a full market launch. Generate early feedback, UGC and first buying signals.',
        image: './assets/images/service_validation_01.png',
        buttons: [
          {
            label: 'Consumer Testing & Insights',
            subtitle: 'Get direct product feedback from real consumers in Southeast Asia before committing to a full market launch.',
            description: 'We recruit consumers that match your target audience, get your product or service into their hands and collect structured feedback on experience, perception, friction points and relevance for the local market.',
            steps: [
              'We define the target audience profile and select the right consumers from our local network using demographic, behavioral and category-specific filters.',
              'Consumers test the product or service through the most realistic path available, either by accessing it online or by receiving it directly at home.',
              'We collect structured feedback, observations and honest reactions to help you understand what works, what needs adaptation and what creates interest.'
            ],
            outputs: [
              'Structured consumer feedback',
              'Local market perception insights',
              'Signals on product fit and friction points'
            ],
            idealFor: [
              'Teams preparing for first market entry in Asia',
              'Products already selling outside Asia',
              'Brands that need feedback before larger investment'
            ],
            ctaLabel: 'Discuss this solution',
            ctaHref: 'mailto:hello@pomenest.com'
          },
          {
            label: 'Product Seeding Campaign',
            subtitle: 'Put your product into the hands of local consumers and generate feedback, reviews and UGC.',
            description: 'We organize local product seeding with relevant consumers, helping you learn how the market reacts while also generating honest reviews, answers to your key questions and user-generated content.',
            steps: [
              'We select a focused group of local consumers that matches the core of your target audience.',
              'Your product reaches them through a compensated online purchase flow or direct home delivery, depending on what is more realistic for the product.',
              'Participants complete clear missions such as testing the product, answering questions, sharing honest feedback and creating photos, videos or written reviews.'
            ],
            outputs: [
              'UGC from real consumers',
              'Honest reviews and qualitative feedback',
              'Early signals of local product appeal'
            ],
            idealFor: [
              'Consumer products entering Asia',
              'Brands that need authentic local content',
              'Teams validating messaging and product experience'
            ],
            ctaLabel: 'Discuss this solution',
            ctaHref: 'mailto:hello@pomenest.com'
          },
          {
            label: 'First Local Purchases',
            subtitle: 'Test whether local consumers are ready to buy before you build full market infrastructure.',
            description: 'We run small-scale purchase tests that show whether real consumers on the market are willing to act. This can happen through a limited real sales flow or through a controlled purchase-intent test, without requiring a full local setup from your side.',
            steps: [
              'We prepare a test sales setup using the most realistic local path available, such as a marketplace, a landing page or a lightweight online storefront.',
              'We drive a small amount of local traffic through paid channels, influencer support or other relevant acquisition paths to test buying behavior.',
              'Consumers either complete a real first purchase with local fulfillment, or join a controlled preorder-style test that validates demand before a bigger launch.'
            ],
            outputs: [
              'First local purchase signals',
              'Early conversion and demand data',
              'Clearer view on launch readiness'
            ],
            idealFor: [
              'Brands testing demand before opening local operations',
              'Teams exploring first online sales in Asia',
              'Products that need proof before scale'
            ],
            ctaLabel: 'Discuss this solution',
            ctaHref: 'mailto:hello@pomenest.com'
          }
        ]
      },
      {
        name: 'Immersive Sessions',
        title: 'Create clarity, alignment and new perspective',
        body: 'Singapore-based strategic immersion sessions for founders and leadership teams to understand the Southeast Asian market landscape and unlock clearer strategic decisions.',
        image: './assets/images/service_immersion_01.png',
        buttons: [
          {
            label: 'Leadership Session',
            subtitle: 'A Singapore-based immersive session for founders and leadership teams to reset vision, align around strategy and unlock sharper decisions.',
            description: 'This is not a standard workshop in a meeting room. We design a cinematic real-world immersion that helps leadership teams step out of routine, confront new perspectives and move toward stronger clarity and alignment.',
            steps: [
              'We begin with a profiling phase, using interviews and preparation sessions to understand the team dynamic, business context and the core strategic question behind the session.',
              'We design a tailored immersive scenario around the desired outcome, such as strategic alignment, renewed vision, team cohesion or a major decision point.',
              'We design and run immersive strategic experiences across selected Singapore locations, combining guided movement, atmosphere and carefully staged interactions. Professional actors and realistic scenarios are woven into everyday environments, creating situations that feel indistinguishable from real life.'
            ],
            outputs: [
              'Sharper leadership alignment',
              'Clearer strategic direction',
              'A more memorable and high-impact team experience'
            ],
            idealFor: [
              'Founder teams planning a new regional chapter',
              'Leadership groups needing a strategic reset',
              'Companies that want more than a standard offsite'
            ],
            ctaLabel: 'Discuss this solution',
            ctaHref: 'mailto:hello@pomenest.com'
          },
          {
            label: 'Partner Immersion Event',
            subtitle: 'Use an immersive format to present your brand to local partners in a more memorable and trust-building way.',
            description: 'We create immersive brand events designed for local partners, stakeholders or priority business contacts. Instead of a standard presentation, the audience experiences the brand, the context and the opportunity through a more engaging real-world format.',
            steps: [
              'We define the business goal and identify the right local partner audience for the event.',
              'We design the immersive concept, narrative and participant journey around the brand, product and market-entry objective.',
              'We produce and host the event in Singapore, shaping a more memorable setting for trust, discussion and next-step conversations.'
            ],
            outputs: [
              'Stronger partner engagement',
              'A more differentiated brand presentation',
              'Better conversation quality after the event'
            ],
            idealFor: [
              'Brands entering Asia that need partner trust',
              'Teams presenting a product in a more experiential way',
              'Companies opening local business conversations'
            ],
            ctaLabel: 'Discuss this solution',
            ctaHref: 'mailto:hello@pomenest.com'
          }
        ]
      },
      {
        name: 'Key Partner Meetings',
        title: 'Move partner conversations forward with local founder-level representation',
        body: 'Identify the right partners, distributors and operators. We map the ecosystem and arrange key meetings locally with speed, context and trust.',
        image: './assets/images/service_partners_01.png',
        buttons: [
          {
            label: 'Partner Mapping',
            subtitle: 'Identify the right local partners before you spend time on outreach, travel or negotiation.',
            description: 'We help you define the partner landscape that matters in Southeast Asia and focus attention on the contacts most relevant to your market-entry goal. This creates a more realistic and actionable starting point for live conversations.',
            steps: [
              'We clarify your entry objective, partnership model and the type of local counterpart you need, such as distributor, retailer, platform partner or strategic buyer.',
              'We map relevant organizations and decision-maker profiles in the market, using local context to filter for fit and commercial relevance.',
              'We shape a focused shortlist with recommendations on priority targets, conversation order and the strongest approach angle.'
            ],
            outputs: [
              'A clearer partner target list',
              'Stronger prioritization for outreach',
              'Better focus before meetings begin'
            ],
            idealFor: [
              'Brands exploring first commercial routes in Asia',
              'Founders that need local market visibility fast',
              'Teams preparing for business development in-region'
            ],
            ctaLabel: 'Discuss this solution',
            ctaHref: 'mailto:hello@pomenest.com'
          },
          {
            label: 'Meeting Setup',
            subtitle: 'Set up and support critical local partner meetings with founder-level context and representation.',
            description: 'We organize and support important meetings with local partners in Southeast Asia, including cases where speed matters, travel is inefficient or a founder-level local presence can move the conversation forward more effectively.',
            steps: [
              'We run a strategy session with you to understand the opportunity, define the desired meeting outcome and align on how your business should be represented.',
              'We approach the right contacts, coordinate the meeting and prepare the context needed to make the conversation meaningful.',
              'We support or conduct the meeting locally and then debrief you with business, relational and human insights that are hard to capture remotely.'
            ],
            outputs: [
              'Qualified local partner meetings',
              'Founder-level representation on the ground',
              'A deeper debrief after the conversation'
            ],
            idealFor: [
              'Founders who cannot travel for every meeting',
              'Sales teams needing trusted local support',
              'Companies with time-sensitive partner opportunities'
            ],
            ctaLabel: 'Discuss this solution',
            ctaHref: 'mailto:hello@pomenest.com'
          }
        ]
      }
    ]
  },

  audience: {
    eyebrow: 'For whom',
    title: 'Built for three market-entry situations',
    items: [
      {
        name: 'You need real consumer traction, fast.',
        title: 'Test demand without opening a local entity or importing stock',
        body: 'For marketing and growth teams who want to test the Asian market. Skip the agency briefs and blind guessing—get direct UGC, local feedback, and early sales data to prove product-market fit.',
        image: './assets/images/for_whom_marketing_01.png'
      },
      {
        name: 'Your leadership needs a regional reset.',
        title: 'Align vision through a cinematic, real-world business immersion',
        body: 'For founders and top management who need to break out of the boardroom. Step into the reality of the Asian market to reset strategy, align the team, and unlock new business directions.',
        image: './assets/images/for_whom_leadership_03.png'
      },
      {
        name: 'You are ready to negotiate, not just network.',
        title: 'Peer-to-peer partner meetings without the wasted flights',
        body: 'For founders and sales teams who need to speak directly with qualified local decision-makers. We represent you on a founder-to-founder level, ensuring you only travel for warm, structured deals.',
        image: './assets/images/for_whom_partners_01.png'
      }
    ]
  },
  ventures: {
    eyebrow: 'Use Cases',
    title: 'How brands apply our services',
    body: 'See how companies rely on our Early Market Validation, Key Partner Meetings, and Immersive Strategic Sessions to confidently test new markets, adapt products, and close B2B deals.',
    items: [
      {
        name: 'AMMA',
        logo: './assets/images/amma.png',
        country: 'Hong Kong',
        link: 'https://amma.family',
        brandDescription: 'Pregnancy & parenting app',
        summary: 'A pregnancy and parenting app that helps women get pregnant, track pregnancy, follow baby development, and connect with other moms through expert-backed content and community support.',
        challenge: 'The company needed to process global tenders, understand which specific app features are demanded in Asia, and align the top management on annual regional planning.',
        whatWeDid: 'We arranged meetings with key regional clients to connect them with the sales team. We tested the product with the Asian target audience to collect insights on needed features. We also hosted inspiration and planning meetings for founders and investors.',
        outcome: 'Advanced global tender discussions, collected direct Asian market insights on product features, and achieved strategic alignment for the leadership team.',
        servicesUsed: ['Key Partner Meetings', 'Early Marketing Validation', 'Immersive Strategic Sessions']
      },
      {
        name: 'Kilometer Studios',
        logo: './assets/images/kilometer-studios.png',
        country: 'Sweden',
        link: 'https://kilometer.studio',
        brandDescription: 'Premium gear brand',
        summary: 'A premium gear brand creating backpacks, bags, and kits for run commuters and active urban athletes.',
        challenge: 'The brand needed to test physical products with the target audience in Asia, advance pending B2B deals, and build an online presence to increase brand trust in a new market.',
        whatWeDid: 'We organized a small-group immersive run in Singapore for B2B partners and distributors to physically test the gear. We facilitated negotiations with local B2B clients to push pending partnerships forward. We also launched a local product seeding campaign to generate user-generated content.',
        outcome: 'B2B partners experienced the product firsthand leading to stronger distribution intent, pending deals were advanced, and localized content was generated to build regional trust.',
        servicesUsed: ['Immersive Strategic Sessions', 'Key Partner Meetings', 'Early Marketing Validation']
      },
      {
        name: 'Buzzaar',
        logo: './assets/images/buzzaar.png',
        country: 'Netherlands',
        link: 'https://client.buzzaar.eu/',
        brandDescription: 'Word-of-mouth marketing agency',
        summary: 'A word-of-mouth marketing agency that helps brands drive authentic product trials, reviews, recommendations, and advocacy through everyday influencers and brand communities.',
        challenge: 'The agency wanted to expand into Asia, pitch case studies to potential regional clients, sell first pilot projects, and test its digital community-building tools in a new geography.',
        whatWeDid: 'We executed a full-cycle entry. We set up meetings with key potential clients, presented case studies, and closed the first pilot projects. We also built local consumer groups to test Buzzaar digital tools for the Asian market.',
        outcome: 'Successfully sold the first pilot projects in the region and validated the functionality of digital community tools with local Asian consumer bases.',
        servicesUsed: ['Key Partner Meetings', 'Early Marketing Validation']
      },
      {
        name: 'Teleport',
        logo: './assets/images/teleport.png',
        country: 'Netherlands',
        link: 'https://teleportme.nl',
        brandDescription: 'Luxury experience company',
        summary: 'A luxury experience company that creates bespoke immersive journeys where reality, storytelling, and live performance blend into unforgettable real-life adventures.',
        challenge: 'The company needed to adapt its luxury experience offering for the Asian corporate and B2B market, localize the proposition, and find the first regional clients.',
        whatWeDid: 'We adapted and localized their corporate offering specifically for the Asian business context and initiated a search and outreach process for relevant B2B clients.',
        outcome: 'A localized corporate proposition ready for the Asian market and a clear pipeline of initial potential B2B clients.',
        servicesUsed: ['Key Partner Meetings']
      },
      {
        name: 'Buzz',
        logo: './assets/images/buzz.png',
        country: 'Netherlands',
        link: 'https://buzzpowerbanks.nl',
        brandDescription: 'Power bank sharing service',
        summary: 'A power bank sharing service that lets people rent portable chargers and return them at any station across the city.',
        challenge: 'The startup needed to evaluate the Asian market landscape for power bank rentals and validate hypotheses for regional expansion and scaling.',
        whatWeDid: 'We conducted local market research and identified the first potential venues for equipment placement. We then held initial negotiations with these venues to test their readiness.',
        outcome: 'Validated market entry hypotheses and established first contacts with local venues, providing a clear understanding of the scaling potential in Asia.',
        servicesUsed: ['Key Partner Meetings']
      },
      {
        name: 'Canal Creatures',
        logo: './assets/images/canal-creatures.png',
        country: 'Netherlands',
        brandDescription: 'Story-driven brand & IP',
        summary: 'A story-driven plush toy brand acting as emotional partners to bring attention back to daily joys through rituals and spark arts.',
        challenge: 'The brand needed to secure reliable local partners for both production and distribution, while simultaneously testing consumer demand in Southeast Asia.',
        whatWeDid: 'We conducted negotiations with local partners covering both the manufacturing and distribution sides. We also recruited micro-influencers, nano-influencers, and regular consumers to test the product.',
        outcome: 'Initiated solid partnerships for production and regional distribution, and gathered real consumer feedback validating market demand in Asia.',
        servicesUsed: ['Key Partner Meetings', 'Early Marketing Validation']
      }
    ]
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Transparent starting prices for the first market-entry steps',
    body: 'Concrete tiers help qualify scope early. Final pricing depends on market, complexity and rollout setup.',
    services: [
      {
        name: 'Early Market Validation',
        description: 'Test market response, generate UGC and validate demand before launching fully.',
        meta: 'USD · productized tiers',
        baseMetrics: [
          'Consumer Testing & Insights — $20 per consumer',
          'Product Seeding Campaign — $40 per participant',
          'First Local Purchases — $50 per purchase · ad budget not included'
        ],
        tiers: [
          {
            name: 'Test',
            price: 'Starting at $2,400',
            target: 'For brands exploring the market, testing a first batch or deciding whether to go deeper.',
            features: [
              '100 Consumer Testing & Insights',
              '10 Product Seeding participants'
            ]
          },
          {
            name: 'Start',
            price: 'Starting at $9,950',
            target: 'For brands with a budget approved and a clear first step into the market.',
            features: [
              '200 Consumer Testing & Insights',
              '100 Product Seeding participants',
              '40 First Local Purchases'
            ]
          },
          {
            name: 'Grow',
            price: 'Starting at $29,950',
            target: 'For brands launching or already present that need more scale, feedback and visibility.',
            features: [
              '400 Consumer Testing & Insights',
              '500 Product Seeding participants',
              '40 First Local Purchases'
            ]
          }
        ],
        addOns: [
          'In-home consumer visits with photo and video documentation',
          'Qualitative research summary and strategic conclusions based on collected data',
          'E-commerce competitor analysis and Southeast Asia rollout recommendations'
        ]
      },
      {
        name: 'Immersive Sessions',
        description: 'Transformative Singapore-based immersions for founders, leadership teams and brand’s partners.',
        meta: 'USD · per person / per day',
        tiers: [
          {
            name: 'Small Dream',
            price: 'From $5,000 / person / day',
            target: 'Focused strategic reset with a smaller footprint and core immersive elements.',
            features: [
              'Smaller set of curated locations',
              'Foundational immersive production',
              'Standard actor and facilitator setup'
            ]
          },
          {
            name: 'The Game',
            price: 'From $10,000 / person / day',
            target: 'Bigger scale, more movement, stronger dramatic build and more premium execution.',
            features: [
              'More locations and more complex scenario design',
              'Transport, staging and higher production value',
              'More advanced immersive cast and business simulation'
            ]
          },
          {
            name: 'Movie Star',
            price: 'From $25,000 / person / day',
            target: 'Maximum spectacle, premium environments and parallel-life style immersion.',
            features: [
              'Premium locations and cinematic-grade production',
              'Highest level of detail, staging and atmosphere',
              'Possible parallel-life simulation and reality-shift mechanics'
            ]
          }
        ],
        addOns: [
          'Hotel, restaurant and entertainment booking support billed via service commission',
          'Celebrity-level actors available on request · pricing TBD'
        ]
      },
      {
        name: 'Key Partner Meetings',
        description: 'Founder-level representation in critical Southeast Asian partner negotiations.',
        meta: 'USD · per meeting / engagement',
        tiers: [
          {
            name: 'Representation',
            price: '$1,000 per meeting',
            target: 'When you already know who to meet and simply need trusted local representation in the room.',
            features: [
              'Meeting attendance as your local representative',
              'Basic preparation based on your brief',
              'Post-meeting summary'
            ]
          },
          {
            name: 'Alignment & Execution',
            price: '$2,000 per meeting',
            target: 'When you have the contact, but want prep, execution and a better debrief afterward.',
            features: [
              'Pre-meeting brainstorm, coaching or mentoring session',
              'Meeting execution with partner',
              'Feedback session and next-step roadmap after the meeting'
            ]
          },
          {
            name: 'Full Market Access',
            price: '$5,000 per engagement',
            target: 'When you need the full package including partner search, product understanding and execution.',
            features: [
              'Partner mapping and contact search',
              'Product learning and presentation preparation',
              'Strategy session, meeting execution and full debrief roadmap'
            ]
          }
        ]
      }
    ]
  },
  ventureStudio: {
    eyebrow: 'Venture Studio',
    title: 'More than execution. A different level of business interest',
    body: 'POME Nest operates with a venture studio logic. That means market-entry work is led not by hired coordinators, but by entrepreneurs and investors who think in terms of business value, market creation and long-term upside. While providing market-entry support, we actively evaluate companies to identify future investment targets and long-term regional partners.',
    ctaLabel: 'Send us your deck',
    ctaHref: 'mailto:hello@pomenest.com',
    image: './assets/images/for_whom_leadership_01.png'
  },
  cta: {
    eyebrow: 'Start the conversation',
    title: 'Discuss your Southeast Asia entry',
    body: 'If you are planning your first market-entry steps in Southeast Asia, POME Nest can help you structure your entry, validate demand, and move fast.',
    primaryLabel: 'Book a strategy call',
    primaryHref: 'mailto:hello@pomenest.com',
    secondaryLabel: 'Discuss your case',
    secondaryHref: 'mailto:hello@pomenest.com'
  },
  footer: {
    note: 'Point of Marketing Entry • Productized services for Southeast Asia market entry.',
    company: '© Pome Nest Pte.Ltd.',
    email: 'hello@pomenest.com',
    logoImage: './assets/images/logo.svg'
  }
};

const app = document.querySelector('#app');

function renderHome() {
  app.innerHTML = `
    <site-shell>
      <site-header
        brand="${content.brand}"
        links='${JSON.stringify(content.nav)}'
        cta-label="Book a strategy call"
        logo-image="${content.hero.logoImage}"
      ></site-header>

      <hero-section
        eyebrow="${content.hero.eyebrow}"
        title="${content.hero.title}"
        body="${content.hero.body}"
        primary-label="${content.hero.primaryLabel}"
        primary-href="${content.hero.primaryHref}"
        secondary-label="${content.hero.secondaryLabel}"
        secondary-href="${content.hero.secondaryHref}"
        energy-image="${content.hero.energyImage}"
        logo-image="${content.hero.logoImage}"
      ></hero-section>

      <capabilities-section
        eyebrow="${content.capabilities.eyebrow}"
        title="${content.capabilities.title}"
        items='${JSON.stringify(content.capabilities.items)}'
      ></capabilities-section>

      <capabilities-section
        section-id="for-whom"
        eyebrow="${content.audience.eyebrow}"
        title="${content.audience.title}"
        items='${JSON.stringify(content.audience.items)}'
        variant="audience"
      ></capabilities-section>

      <ventures-section
        eyebrow="${content.ventures.eyebrow}"
        title="${content.ventures.title}"
        body="${content.ventures.body}"
        items='${JSON.stringify(content.ventures.items)}'
      ></ventures-section>

      <split-section
        section-id="venture-studio"
        eyebrow="${content.ventureStudio.eyebrow}"
        title="${content.ventureStudio.title}"
        body="${content.ventureStudio.body}"
        cta-label="${content.ventureStudio.ctaLabel}"
        cta-href="${content.ventureStudio.ctaHref}"
        image="${content.ventureStudio.image}"
      ></split-section>

      <cta-section
        eyebrow="${content.cta.eyebrow}"
        title="${content.cta.title}"
        body="${content.cta.body}"
        primary-label="${content.cta.primaryLabel}"
        primary-href="${content.cta.primaryHref}"
        secondary-label="${content.cta.secondaryLabel}"
        secondary-href="${content.cta.secondaryHref}"
      ></cta-section>

      <site-footer
        brand="${content.brand}"
        note="${content.footer.note}"
        company="${content.footer.company}"
        email="${content.footer.email}"
        logo-image="${content.footer.logoImage}"
      ></site-footer>
    </site-shell>
  `;
}

function renderService(serviceId) {
  const idMap = {
    'early-market-validation': 0,
    'immersive-strategic-sessions': 1,
    'key-partner-meetings': 2
  };
  const index = idMap[serviceId];
  if (index === undefined) return renderHome();

  const serviceCap = content.capabilities.items[index];
  const servicePrice = content.pricing.services[index];

  app.innerHTML = `
    <site-shell>
      <site-header
        brand="${content.brand}"
        links='${JSON.stringify(content.nav)}'
        cta-label="Book a strategy call"
        logo-image="${content.hero.logoImage}"
      ></site-header>

      <div class="pt-16 md:pt-20 bg-brand-canvas"></div>
      <split-section
        section-id="service-intro"
        eyebrow="Service Details"
        title="${serviceCap.name}"
        body="${serviceCap.title}. ${serviceCap.body}"
        image="${serviceCap.image}"
        cta-label="Book a strategy call"
        cta-href="mailto:hello@pomenest.com"
        secondary-cta-label="See prices"
        secondary-cta-href="#/service/${serviceId}#pricing"
      ></split-section>

      <capabilities-section
        section-id="solutions"
        eyebrow="Solutions"
        title="What is included"
        items='${JSON.stringify([serviceCap])}'
        variant="detailed"
      ></capabilities-section>

      <pricing-section
        section-id="pricing"
        eyebrow="Pricing"
        title="Pricing for ${serviceCap.name}"
        body="Concrete tiers help qualify scope early. Final pricing depends on market and complexity."
        services='${JSON.stringify([servicePrice])}'
      ></pricing-section>

      <cta-section
        eyebrow="${content.cta.eyebrow}"
        title="${content.cta.title}"
        body="${content.cta.body}"
        primary-label="${content.cta.primaryLabel}"
        primary-href="${content.cta.primaryHref}"
        secondary-label="${content.cta.secondaryLabel}"
        secondary-href="${content.cta.secondaryHref}"
      ></cta-section>

      <site-footer
        brand="${content.brand}"
        note="${content.footer.note}"
        company="${content.footer.company}"
        email="${content.footer.email}"
        logo-image="${content.footer.logoImage}"
      ></site-footer>
    </site-shell>
  `;
}

function router() {
  const hash = window.location.hash;
  if (hash.startsWith('#/service/')) {
    const parts = hash.split('#');
    const path = parts[1]; // /service/...
    const serviceId = path.split('/')[2];
    
    renderService(serviceId);
    
    // Auto-scroll to pricing if requested
    if (parts.length > 2 && parts[2] === 'pricing') {
      setTimeout(() => {
        const el = document.getElementById('pricing');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  } else {
    renderHome();
    // Scroll to section if standard anchor
    if (hash && hash !== '#top') {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }
}

window.addEventListener('hashchange', router);
router();
