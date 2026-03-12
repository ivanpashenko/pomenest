import '/components/site-shell.js';
import '/components/site-header.js';
import '/components/hero-section.js';
import '/components/text-section.js';
import '/components/capabilities-section.js';
import '/components/markets-section.js';
import '/components/ventures-section.js';
import '/components/cta-section.js';
import '/components/site-footer.js';

const content = {
  brand: 'POME Nest',
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'For whom', href: '#for-whom' },
    { label: 'Cases', href: '#cases' },
    { label: 'Venture Studio', href: '#venture-studio' }
  ],
  hero: {
    eyebrow: 'Southeast Asia Market Entry',
    title: 'Enter Southeast Asia with structure and less guesswork.',
    body: 'POME Nest creates the first market-entry steps in Southeast Asia: key partner meetings, early validation and strategic immersion.',
    primaryLabel: 'Book a strategy call',
    primaryHref: '#contact',
    secondaryLabel: 'See services',
    secondaryHref: '#services',
    energyImage: '/assets/images/hero_element_aperture_01.png',
    logoImage: './assets/images/logo.png'
  },
  capabilities: {
    eyebrow: 'Services',
    title: 'Three productized services for the first market-entry steps.',
    items: [
      {
        name: 'Early Market Validation',
        title: 'Test real demand before you build local operations.',
        body: 'Test your product or service with real consumers in Southeast Asia. Get feedback, UGC and first buying signals before a full market launch.',
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
        name: 'Immersive Strategic Sessions',
        title: 'Create clarity, alignment and new perspective.',
        body: 'Singapore-based immersive sessions for founders and teams designed to unlock sharper decisions, stronger alignment and a new regional point of view.',
        buttons: [
          {
            label: 'Leadership Session',
            subtitle: 'A Singapore-based immersive session for founders and leadership teams to reset vision, align around strategy and unlock sharper decisions.',
            description: 'This is not a standard workshop in a meeting room. We design a cinematic real-world immersion that helps leadership teams step out of routine, confront new perspectives and move toward stronger clarity and alignment.',
            steps: [
              'We begin with a profiling phase, using interviews and preparation sessions to understand the team dynamic, business context and the core strategic question behind the session.',
              'We design a tailored immersive scenario around the desired outcome, such as strategic alignment, renewed vision, team cohesion or a major decision point.',
              'We prepare and run the live experience across selected Singapore locations, using guided movement, atmosphere and staged interactions to create a more transformative strategic session.'
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
        title: 'Move partner conversations forward with local founder-level representation.',
        body: 'Map the right partner landscape, set up critical meetings and conduct conversations locally with more speed, context and trust.',
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
    title: 'Built for three market-entry situations.',
    items: [
      {
        name: 'Need consumer feedback before launch',
        title: 'Learn from real consumers before you commit harder.',
        body: 'For teams with products already working outside Asia that need local testing, UGC and first buying signals without building local operations from scratch.'
      },
      {
        name: 'Need strategic reset and regional perspective',
        title: 'Step out of routine and rethink what comes next.',
        body: 'For founders and leadership teams that need a stronger environment for alignment, new vision and more ambitious strategic decisions in Asia.'
      },
      {
        name: 'Need real partner conversations fast',
        title: 'Get qualified meetings without wasting time on cold travel.',
        body: 'For founders and sales teams that need real local partner conversations, stronger trust and better follow-up potential in Southeast Asia.'
      }
    ]
  },
  ventures: {
    eyebrow: 'Cases',
    title: 'Real work across partner access, validation and immersion.',
    body: 'Each case shows which service lines were used, what was done and how POME supported the first market-entry steps in Southeast Asia.',
    items: [
      {
        name: 'AMMA',
        logo: '/assets/images/amma.png',
        brandDescription: 'Family-tech digital product',
        summary: 'Key meetings, product testing and strategic inspiration sessions for Southeast Asia planning.',
        servicesUsed: ['Key Partner Meetings', 'Early Market Validation', 'Immersive Strategic Sessions'],
        challenge: 'AMMA needed partner conversations, local product feedback and higher-level strategic planning around Asia.',
        whatWeDid: 'Arranged meetings with key and potential clients connected to global tenders, tested the product for Asian markets to identify relevant features and ran inspiration sessions with founders, investors and top management for annual planning.',
        outcome: 'Sharper product direction, better commercial conversations and stronger strategic alignment.'
      },
      {
        name: 'Kilometer',
        logo: '/assets/images/kilometer-studios.png',
        brandDescription: 'Running and commuter gear brand',
        summary: 'Immersive product testing, local B2B meetings and UGC testing for market trust.',
        servicesUsed: ['Immersive Strategic Sessions', 'Key Partner Meetings', 'Early Market Validation'],
        challenge: 'Kilometer needed local product testing, stronger B2B conversations and more online trust in a market where the brand was still new.',
        whatWeDid: 'Created small-group running immersions in Singapore for product testing, supported local B2B meetings to move partnerships forward and tested UGC on the local market to strengthen online presence and trust.',
        outcome: 'Better product feedback, stronger partner progress and more credible local market presence.'
      },
      {
        name: 'Buzzaar',
        logo: '/assets/images/buzzaar.png',
        brandDescription: 'Advocacy and recommendation platform',
        summary: 'A full-cycle market-entry case covering meetings, pilots and local consumer testing.',
        servicesUsed: ['Key Partner Meetings', 'Early Market Validation'],
        challenge: 'Buzzaar needed business development support and local validation for both its service model and digital tools in Asia.',
        whatWeDid: 'Set up meetings with key and potential clients already known from other markets, presented case studies, supported first pilot sales and created local consumer groups to test the platform and local digital tools.',
        outcome: 'Early commercial traction and validation of local market fit.'
      },
      {
        name: 'Teleport',
        logo: '/assets/images/teleport.png',
        brandDescription: 'Experience-led B2B offer',
        summary: 'Adapted the offer for corporate buyers and supported local client search.',
        servicesUsed: ['Key Partner Meetings'],
        challenge: 'Teleport needed a more locally relevant B2B offer and access to potential clients in the region.',
        whatWeDid: 'Adapted the proposition for the corporate market, localized the offer and supported client search in Southeast Asia.',
        outcome: 'A clearer local B2B angle and stronger starting point for client conversations.'
      },
      {
        name: 'Buzz',
        logo: '/assets/images/buzz.png',
        brandDescription: 'Mobile charging rental solution',
        summary: 'Market research and first partner negotiations for a location-based rollout model.',
        servicesUsed: ['Key Partner Meetings'],
        challenge: 'Buzz needed to understand the local market for rental charging devices and explore its first placement opportunities in Asia.',
        whatWeDid: 'Researched the local market, identified first potential venues and conducted early negotiations to shape entry and scaling hypotheses for the region.',
        outcome: 'Better entry assumptions and first live commercial conversations.'
      },
      {
        name: 'Canal Creatures',
        logo: '/assets/images/canal-creatures.png',
        brandDescription: 'Consumer brand with production and distribution needs',
        summary: 'Production and distribution talks paired with local consumer and influencer testing.',
        servicesUsed: ['Key Partner Meetings', 'Early Market Validation'],
        challenge: 'Canal Creatures needed both local partners and early signals of consumer demand in the market.',
        whatWeDid: 'Conducted negotiations with local partners across production and distribution, and found micro-influencers plus everyday consumers to test market demand.',
        outcome: 'Stronger partner pathways and clearer demand signals.'
      }
    ]
  },
  ventureStudio: {
    eyebrow: 'Venture Studio',
    title: 'More than execution. A different level of business interest.',
    body: 'POME Nest operates with a venture studio logic. That means market-entry work is led not by hired coordinators, but by entrepreneurs and investors who think in terms of business value, market creation and long-term upside. This changes the quality of judgment, representation and execution.'
  },
  cta: {
    eyebrow: 'Start the conversation',
    title: 'Discuss your Southeast Asia entry.',
    body: 'If you are planning your first market-entry steps in Southeast Asia, POME Nest can help you choose the right service and move fast.',
    primaryLabel: 'Book a strategy call',
    primaryHref: 'mailto:hello@pomenest.com',
    secondaryLabel: 'Discuss your case',
    secondaryHref: 'mailto:hello@pomenest.com'
  },
  footer: {
    note: 'Point of Marketing Entry • Productized services for Southeast Asia market entry.',
    logoImage: './assets/images/logo.png'
  }
};

const app = document.querySelector('#app');

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

    <text-section
      section-id="venture-studio"
      eyebrow="${content.ventureStudio.eyebrow}"
      title="${content.ventureStudio.title}"
      body="${content.ventureStudio.body}"
      light="true"
    ></text-section>


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
      logo-image="${content.footer.logoImage}"
    ></site-footer>
  </site-shell>
`;
