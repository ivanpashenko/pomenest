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
import './components/proof-section.js';
import './components/ui-tag.js';

const content = {
  brand: 'POME Nest',
  nav: [
    { 
      label: 'Services', 
      items: [
        { label: 'Market Validation Sprint', href: '#/service/early-market-validation' },
        { label: 'Strategic Immersion', href: '#/service/immersive-strategic-sessions' },
        { label: 'Partner Access', href: '#/service/key-partner-meetings' }
      ]
    },
    { label: 'For whom', href: '#for-whom' },
    { label: 'Cases', href: '#ventures' },
    { 
      label: 'Pricing', 
      items: [
        { label: 'Market Validation Sprint', href: '#/service/early-market-validation#pricing' },
        { label: 'Strategic Immersion', href: '#/service/immersive-strategic-sessions#pricing' },
        { label: 'Partner Access', href: '#/service/key-partner-meetings#pricing' }
      ]
    },
    { label: 'Venture Studio', href: '#venture-studio' },
    { label: 'FAQ', href: '#/faq' }
  ],
  hero: {
    eyebrow: 'Southeast Asia Market Entry',
    title: 'Your first customers, partners and strategy in Asia — built through real market experience',
    body: 'POME Nest helps companies enter new markets through customer validation, strategic immersion and direct partner access.',
    primaryLabel: 'Book a strategy call',
    primaryHref: '#contact',
    secondaryLabel: 'See services',
    secondaryHref: '#services',
    energyImage: './assets/images/hero-img2.png',
    logoImage: './assets/images/logo_tagline.svg'
  },
  proof: {
    eyebrow: 'Impact',
    title: 'What early market entry looks like with POME Nest',
    items: [
      {
        type: 'stat',
        eyebrow: 'Brands and ventures',
        value: '9+',
        title: 'Projects supported across market entry and validation',
        body: '',
        tone: 'blue'
      },
      {
        type: 'featured-story',
        eyebrow: 'Founder-level support',
        image: './assets/images/for_whom_partners_01.png',
        title: 'Move partner conversations forward with local context in the room',
        body: 'POME supports early market-entry discussions with founder-level representation, sharper preparation and better follow-through after key meetings.',
        meta: 'Key Partner Meetings',
        ctaLabel: 'See use cases',
        ctaHref: '#ventures'
      },
      {
        type: 'region',
        eyebrow: 'Operating region',
        title: 'Built for Southeast Asia, starting from Singapore',
        body: 'Singapore is our active base today, with Indonesia, Thailand, Malaysia, Vietnam and the Philippines in focus.',
        image: './assets/images/singapore_iconic_01.png'
      },
      {
        type: 'testimonial',
        eyebrow: 'Client reviews',
        reviews: [
          {
            quote: 'POME helped us move from abstract market interest to concrete partner conversations much faster than we expected.',
            author: 'Founder & CEO Kilometer',
            role: ''
          },
          {
            quote: 'They allowed us to travel into the future. To see all that we can be, made us fearless. I think we’re all changed by it.',
            author: 'Jonas Antonsson',
            role: ''
          },
          {
            quote: 'The process gave us clarity early. We could see where traction was real and where assumptions needed work.',
            author: 'Marketing team Amma Family',
            role: ''
          }
        ]
      },
      {
        type: 'faq-teaser',
        eyebrow: 'FAQ',
        question: 'Do I need a local company or team before working with you?',
        answer: 'No. The point is often to create first signals and conversations before you commit to a full setup in Southeast Asia.',
        href: '#/faq',
        linkLabel: 'See all FAQ'
      }
    ]
  },
  capabilities: {
    eyebrow: 'Services',
    title: 'How we help you enter a new market',
    items: [
      {
        id: 'early-market-validation',
        name: 'Market Validation Sprint',
        title: 'Test real demand before committing to a full launch',
        body: 'Test real demand before committing to a full launch.',
        bullets: [
          '20–500 consumer tests',
          'UGC content and insights',
          'Early traction signals with real purchase attempts'
        ],
        ctaLabel: 'Explore validation',
        image: './assets/images/service_validation_01.png',
        proof: {
          logos: [
            { image: './assets/images/logo-pg.png', alt: 'P&G' },
            { image: './assets/images/logo-nestle.png', alt: 'Nestlé' },
            { image: './assets/images/logo-alcon.png', alt: 'Alcon' }
          ],
          caption: 'Tested in projects with Procter & Gamble, Nestlé and Alcon.'
        },
        narrative: {
          intro: 'Entering a new market is expensive when decisions are based on assumptions. This service is designed to give you early evidence: how people respond, what attracts them, what confuses them, and whether there is enough traction to move forward.',
          sections: [
            {
              eyebrow: 'What we do',
              title: 'We design a focused validation sprint around your product, offer or concept',
              list: [
                '20–500 consumer interactions',
                'Product or concept testing',
                'Real purchase attempts or intent signals',
                'Positioning and message testing',
                'UGC-style feedback and reactions',
                'Structured field insights'
              ]
            },
            {
              eyebrow: 'What you get',
              title: 'At the end of the sprint, you receive:',
              list: [
                'A clearer yes / no / not yet signal',
                'Customer reactions grounded in reality',
                'Early pricing and positioning insights',
                'Evidence of what resonates most',
                'A practical recommendation on next steps'
              ]
            },
            {
              eyebrow: 'How it works',
              title: 'A simple four-step process to move from assumption to signal',
              steps: [
                {
                  title: '1. Alignment',
                  body: 'We define what exactly needs to be validated: product, offer, message, audience or format.'
                },
                {
                  title: '2. Market testing',
                  body: 'We run live validation with relevant people in-market.'
                },
                {
                  title: '3. Signal analysis',
                  body: 'We review patterns, reactions and decision points.'
                },
                {
                  title: '4. Strategic recommendation',
                  body: 'You get a clear read on whether to refine, delay or move forward.'
                }
              ]
            },
            {
              eyebrow: 'Deliverables',
              title: 'A clear output package you can use for the next decision',
              list: [
                'Validation summary',
                'Key customer insights',
                'Traction indicators',
                'Positioning observations',
                'Recommended next move'
              ]
            }
          ],
          closingTitle: 'Real signals are more useful than early optimism',
          closingBody: 'Use validation to reduce risk, sharpen your positioning and decide your next move with more confidence.',
          ctaLabel: 'Explore market validation'
        }
      },
      {
        id: 'immersive-strategic-sessions',
        name: 'Strategic Immersion',
        title: 'Shape your strategy through real-world experience',
        body: 'Shape your strategy through real-world experience.',
        bullets: [
          '1-day immersive experience with staged real-life scenarios in Singapore',
          'Founder-level discussion and reframing',
          'Clear market entry direction'
        ],
        ctaLabel: 'Explore immersion',
        image: './assets/images/service_immersion_03.png',
        proof: {
          logos: [
            { image: './assets/images/logo-raw-fury.png', alt: 'Raw Fury' }
          ],
          caption: 'Immersive work delivered for brands like Raw Fury.'
        },
        narrative: {
          intro: 'Some insights don’t come from analysis. They emerge when you experience a place, its rhythm, its people and its dynamics directly. This is not a workshop and not consulting. It’s a curated experience that puts you into new situations, new roles and new ways of seeing.',
          sections: [
            {
              eyebrow: 'What happens',
              title: 'We design a one-day immersive experience around the city and its environment',
              list: [
                'Guided movement through different locations',
                'Staged or semi-scripted interactions',
                'Situations that feel real, not performed',
                'Moments that challenge your usual roles and reactions',
                'Space for informal reflection and conversation'
              ]
            },
            {
              eyebrow: 'What you take from it',
              title: 'What stays with you after the session',
              list: [
                'A different way of seeing your business or idea',
                'Unexpected insights that don’t come from analysis',
                'New angles on positioning, product or direction',
                'Shared understanding within your team',
                'A shift in how you think about the market'
              ]
            }
          ],
          closingTitle: 'Some clarity only appears when you step into a different context',
          closingBody: 'This experience is designed to create that shift.',
          ctaLabel: 'Explore immersive experience'
        }
      },
      {
        id: 'key-partner-meetings',
        name: 'Partner Access',
        title: 'Connect with the people who actually move markets',
        body: 'Connect with the people who actually move markets.',
        bullets: [
          'Curated partner introductions',
          'Distributor and operator meetings',
          'Ecosystem access and real business conversations'
        ],
        ctaLabel: 'Explore partners',
        image: './assets/images/service_partners_02.png',
        proof: {
          logos: [
            { image: './assets/images/kilometer-studios.png', alt: 'Kilometer Studios' },
            { image: './assets/images/amma.png', alt: 'Amma' }
          ],
          caption: 'Founder-led support for brands like Kilometer and Amma.'
        },
        narrative: {
          intro: 'Entering a new market often starts with conversations. Not all of them lead somewhere — but the right ones can change how you see the space. We don’t build your distribution strategy. We simply open doors where it makes sense.',
          sections: [
            {
              eyebrow: 'What we do',
              title: 'We help arrange meetings when there is a relevant fit',
              list: [
                'Introductions to people we know',
                'Connecting you with operators or ecosystem players',
                'Joining meetings when useful',
                'Informal guidance before or after conversations'
              ]
            },
            {
              eyebrow: 'What you get',
              title: 'Relevance over volume',
              list: [
                'Access to real people in the market',
                'Unfiltered conversations',
                'First-hand perspective on how things work',
                'Early signals about opportunities or challenges',
                'A more grounded understanding of the ecosystem'
              ]
            },
            {
              eyebrow: 'How it works',
              title: 'A simple four-step flow from interest to real conversation',
              steps: [
                {
                  title: '1. Brief',
                  body: 'You share who you want to meet, what kind of partner you are looking for, or what market angle you want to explore.'
                },
                {
                  title: '2. Fit check',
                  body: 'We assess where relevant introductions are possible based on our network, context and the real fit on both sides.'
                },
                {
                  title: '3. Meeting setup',
                  body: 'We coordinate the conversation, align expectations and join when useful to help the discussion move forward.'
                },
                {
                  title: '4. Next move',
                  body: 'After the meeting, you leave with clearer signals, practical context and a better sense of what to do next.'
                }
              ]
            }
          ],
          closingTitle: 'Markets are understood through people, not slides',
          closingBody: 'We help you access those conversations.',
          ctaLabel: 'Explore partner meetings'
        }
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
        body: 'For marketing and growth teams who want to test the market. Skip the agency briefs and blind guessing—get direct UGC, local feedback, and early sales data to prove product-market fit.',
        image: './assets/images/for_whom_marketing_01.png'
      },
      {
        name: 'Your leadership needs a regional reset.',
        title: 'Align vision through a cinematic, real-world business immersion',
        body: 'For founders and top management who need to break out of the boardroom. Step into the reality of the market to reset strategy, align the team, and unlock new business directions.',
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
    body: '',
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
  regions: {
    eyebrow: 'Operating Region',
    title: 'Built for Southeast Asia, starting from Singapore',
    body: 'POME Nest helps companies open their first market-entry steps across Southeast Asia. Singapore is our active operating base today, while other key regional markets are in focus for future expansion.',
    tags: [
      { label: 'Singapore', active: true },
      { label: 'Indonesia', active: false },
      { label: 'Thailand', active: false },
      { label: 'Malaysia', active: false },
      { label: 'Vietnam', active: false },
      { label: 'Philippines', active: false }
    ],
    image: './assets/images/region_map_01.png'
  },
  cta: {
    eyebrow: 'Start the conversation',
    title: 'Reduce guesswork before entering a new market',
    body: 'We help you validate demand, access the right partners and make the first market moves with more clarity, speed and local context.',
    primaryLabel: 'Book a strategy call',
    primaryHref: 'mailto:hello@pomenest.com',
    secondaryLabel: 'Discuss your case',
    secondaryHref: 'mailto:hello@pomenest.com'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions before entering a new market',
    intro: 'A short guide to how POME Nest works, what to expect, and when our model is the right fit.',
    items: [
      {
        question: 'What exactly is POME Nest?',
        answer: 'POME Nest is a venture marketing studio that helps companies take their first market-entry steps in Southeast Asia through three focused services: early market validation, immersive strategic sessions and key partner meetings.'
      },
      {
        question: 'Do you work like an agency or a consultancy?',
        answer: 'Not exactly. We work through productized services with a founder-level, investor-minded approach. The goal is not endless advisory scope, but real movement: better conversations, better signals and better decisions before full expansion.'
      },
      {
        question: 'Who is this for?',
        answer: 'Usually for founders, leadership teams, consumer brands and product companies that want to test demand, access partners or sharpen strategy before committing to a larger Southeast Asia rollout.'
      },
      {
        question: 'What markets do you cover?',
        answer: 'POME Nest is based in Singapore and focused on Southeast Asia, especially Singapore, Indonesia, Thailand, Malaysia, Vietnam and the Philippines.'
      },
      {
        question: 'What is Early Market Validation?',
        answer: 'It is a focused sprint that helps you test how people respond to your product, offer or concept before a full launch. Depending on the case, it can include consumer testing, message testing, UGC-style feedback and first purchase or intent signals.'
      },
      {
        question: 'What is an Immersive Strategic Session?',
        answer: 'It is a one-day curated experience in Singapore designed to create strategic clarity through real-world situations, movement, atmosphere and reflection. It is not a workshop and not consulting in the usual sense.'
      },
      {
        question: 'What are Key Partner Meetings?',
        answer: 'This service helps create relevant conversations with operators, distributors and ecosystem players when there is a real fit. We focus on opening the right doors, not generating meeting volume for its own sake.'
      },
      {
        question: 'Do I need a local company or team before working with you?',
        answer: 'No. In many cases the point is to learn before you build local infrastructure. We help companies create their first signals and conversations before they commit to a full setup.'
      },
      {
        question: 'Can we start with one service only?',
        answer: 'Yes. The model is designed so you can start with a single service based on your immediate need: validation, strategic immersion or partner access.'
      },
      {
        question: 'How do you price engagements?',
        answer: 'Each service has starting packages and pricing logic on the site. Final scope depends on market, complexity and how tailored the engagement needs to be.'
      },
      {
        question: 'Do you only work with large brands?',
        answer: 'No. The same approach can work for ventures, scale-ups and established companies. The main requirement is that there is a real market-entry question to answer.'
      },
      {
        question: 'What happens after the first step?',
        answer: 'Depending on the case, the relationship can end with clear recommendations, continue into another productized service, or grow into a deeper strategic partnership.'
      }
    ]
  },
  footer: {
    note: 'Point of Market Entry',
    company: '© Pome Nest Pte.Ltd.',
    email: 'hello@pomenest.com',
    logoImage: './assets/images/logo.svg'
  }
};

const app = document.querySelector('#app');

function renderFaq() {
  app.innerHTML = `
    <site-shell>
      <site-header
        brand="${content.brand}"
        links='${JSON.stringify(content.nav)}'
        cta-label="Book a strategy call"
        logo-image="${content.hero.logoImage}"
        bg="white"
      ></site-header>

      <split-section
        bg="white"
        section-id="faq-intro"
        eyebrow="${content.faq.eyebrow}"
        title="${content.faq.title}"
        body="${content.faq.intro}"
        image="./assets/images/for_whom_leadership_03.png"
      ></split-section>

      <pricing-section
        section-id="faq-list"
        eyebrow=""
        title="Frequently Asked Questions"
        body="A practical overview of how POME Nest works, what each service is designed to do, and what to expect before starting a conversation with us."
        layout="stack"
        services='${JSON.stringify([
          {
            name: '',
            meta: '',
            description: '',
            tiers: content.faq.items.map((item) => ({
              name: item.question,
              price: '',
              target: item.answer,
              features: []
            }))
          }
        ])}'
      ></pricing-section>

      <cta-section
        eyebrow="Start the conversation"
        title="Still have questions?"
        body="Tell us what you are exploring and we will suggest the right first step into Southeast Asia."
        primary-label="Book a strategy call"
        primary-href="mailto:hello@pomenest.com"
        secondary-label="Email us"
        secondary-href="mailto:hello@pomenest.com"
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

      <proof-section
        eyebrow="${content.proof.eyebrow}"
        title="${content.proof.title}"
        items='${JSON.stringify(content.proof.items)}'
      ></proof-section>

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
        bg="white"
      ></site-header>

      <split-section
        bg="white"
        section-id="service-intro"
        eyebrow="Service"
        title="${serviceCap.name}"
        body="${serviceCap.narrative?.intro || serviceCap.title}"
        image="${serviceCap.image}"
      ></split-section>

      <capabilities-section
        section-id="solutions"
        eyebrow=""
        title=""
        items='${JSON.stringify([serviceCap])}'
        variant="narrative"
      ></capabilities-section>

      <pricing-section
        section-id="pricing"
        eyebrow=""
        title=""
        body=""
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
  if (hash === '#/faq') {
    renderFaq();
    window.scrollTo(0, 0);
  } else if (hash.startsWith('#/service/')) {
    const parts = hash.split('#');
    const path = parts[1]; // /service/...
    const serviceId = path.split('/')[2];
    
    renderService(serviceId);
    
    const scrollToTarget = (el) => {
      if (!el) return;
      const header = document.getElementById('main-header');
      const headerHeight = header ? header.offsetHeight : 0;
      const extraOffset = 24;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    };

    // Auto-scroll to anchor if requested
    if (parts.length > 2 && parts[2]) {
      setTimeout(() => {
        const el = document.getElementById(parts[2]);
        scrollToTarget(el);
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
