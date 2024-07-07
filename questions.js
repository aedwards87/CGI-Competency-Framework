// These are all the questions and answers for the assessment tool.
// This could be ut into a database and called, or my idea was to put the data into a csv file
// and call/read the file to output the data. This way the csv file could be imported into ModX
// by anyone who had access to ModX, whereas using a database would most likely require someone
// from IT helping.

export const valueQuestions = [
  {
    questionId: 1,
    question: "How do your behaviours support your organisation's culture?",
    answers: [
      {
        answerId: 1,
        answer:
          "I recognise the culture of the team and adapt my behaviours accordingly",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I seek to understand the reasons behind decisions and how they best serve the organisation",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I consistently and visibly act as the conscience of the organisation and embed its values and behaviours within the team",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I act as a role model, I am trusted by others and I am aware of the impact my actions have on my team and the organisation",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 2,
    question: "How transparent and ethical are you in your interactions? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I am honest with colleagues when errors are made, and I make sure that they do not happen again",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am aware of the impact errors have on the organisation and know when to ask for help. I work with the team to improve processes",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I accept responsibility for my errors and offer solutions to the issues that arise, and encourage others to do the same",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I proactively look for errors that could occur based on my actions or those of others and encourage others to do the same",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 3,
    question:
      "To what extent do you embody your organisation's corporate conscience and ethos?",
    answers: [
      {
        answerId: 1,
        answer:
          "I am proactive in learning the basics of my role as well as the technical elements",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I will commit to delivering projects that have genuine benefit but may have low profile",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am authentic and courageous in influencing others to do the right thing and focus on what is right for the organisation in any given context",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am a lone voice when necessary, representing the interests of the organisation and clarifying boundaries when necessary",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 4,
    question: "To what level do you act with discretion and humility?",
    answers: [
      {
        answerId: 1,
        answer:
          "I am able to recognise when  confidentiality and discretion are required and avoid sharing organisational information informally",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I exercise diplomacy in challenging situations and maintain confidentiality",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I can balance discretion and transparency effectively, and I am seen as a trusted keeper of secrets who exercises good judgement around confidential issues ",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I can confidently lead on confidential projects, clarifying and reinforcing the need for confidentiality to project members and stakeholders",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 5,
    question: "How independent are you in your role? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I balance technical learning and organisational deliverables, seeking clarification when required and welcome input from colleagues",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I can identify both conscious and unconscious bias and avoid being swayed by powerful and/or negative influences",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I draw upon a robust technical knowledge, and I am unafraid to challenge or defend legacy practices to improve process or compliance",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am prepared to make, justify and stand by unpopular decisions",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 6,
    question:
      "How do you maintain personal and organisational confidentiality?",
    answers: [
      {
        answerId: 1,
        answer:
          "I recognise the importance of and maintain confidentiality and discretion when undertaking my role",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I maintain confidentiality while undertaking my role, following established policies and procedures, and ensuring others recognise how important this is",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I ensure that reporting lines, processes and relationships support discretion, transparency and confidentiality",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I use discretion in challenging confidential matters and act as a â€˜wise counsellor' to the board, senior colleagues and external stakeholders",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 7,
    question: "How do you interact with your team?",
    answers: [
      {
        answerId: 1,
        answer:
          "I am proactive in seeking further opportunities to support colleagues whilst balancing personal deliverables",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am approachable, curious, ask questions and start conversations. I contribute with confidence and accept alternative views from other team members",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I treat everyone with respect and consider all points of view, and actively recognise and celebrate the successes of others",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am inclusive and respectful to all, whether on the board or not, and I actively avoid 'group think'",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 8,
    question: "How do you make decisions in your role?",
    answers: [
      {
        answerId: 1,
        answer: "I am receptive to advice and guidance from others",
        level: "Entry",
      },
      {
        answerId: 2,
        answer: "I am receptive to new ideas from a variety of sources ",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I maintain objectivity with all colleagues, regardless of seniority, and remain neutral in facilitating decision making",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I actively seek a wide range of opinions but maintain a professional distance to retain objectivity",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 9,
    question:
      "How do you balance the conflicting needs of all your stakeholders? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I respect the pressures, motivations and obligations of others when seeking their advice and input",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I respect the pressures and motivations of other people and offer support accordingly, and I ensure that people are engaged in effective dialogue ",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am straightforward and fair, and I am prepared to act on information and make decisions even when they are uncomfortable",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am able to listen to all views and facilitate ethical discussions with all stakeholders, and know when it is necessary to challenge thinking or find a middle ground. I am able to recognise when lines are crossed.",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 10,
    question:
      "How do you address issues in your role and consider organisaltional needs?",
    answers: [
      {
        answerId: 1,
        answer:
          "I ask for help and guidance from those in my team to understand the background and context when I am unsure",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I proactively use a wide range of sources from different areas of the business to ask for help and guidance, to understand the background and context and do not take things at face value",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I can equally lead a team and be a part of a team while proactively seeking and providing support to team members",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I can confidently support others when they are unclear and proactively use internal and external networks for support on sensitive or complex matters to avoid professional isolation",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 11,
    question:
      "Do you understand the biases, strengths and weaknesses of yourself and others?",
    answers: [
      {
        answerId: 1,
        answer:
          "I have the awareness to know when I need help and the confidence to ask for it",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am aware that I am stronger in some areas than others. I am open about my mistakes and am confident in asking for help when I need it. I am aware of the areas I am stronger than others.",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am aware of conscious and unconscious bias in myself and others and maintain objectivity with colleagues, regardless of seniority. I understand my strengths and weaknesses and act accordingly     ",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am highly self-aware and actively work to mitigate personal biases and the biases of others to achieve good boardroom dynamics. Through my leadership role, I enable others to become self-aware and create opportunities for their self-development",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 12,
    question: "How do you handle competing workloads?",
    answers: [
      {
        answerId: 1,
        answer:
          "I recognise when others are under pressure and seek to mitigate this through helping or delaying non-urgent requests",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I remain calm and composed under pressure and effectively balance my commitments, asking for help when required",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am confident but not overbearing and remain calm, consistent and authoritative while balancing my workload and supporting others, ensuring professional standards are met",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am able to manage my workload and proactively support others in managing their workloads. I work hard to manage expectations at the board level ",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 13,
    question: "How do you ensure continuous professional development? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I can balance personal learning, internally and externally, with the deliverables of my role",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I demonstrate a commitment to learning by experience and ask for opportunities to stretch and develop my skills",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am constantly learning and encouraging team members to do the same",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I instil a strong learning culture across the organisation and lead by example",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 14,
    question: "How receptive are you to challenge and innovation?",
    answers: [
      {
        answerId: 1,
        answer:
          "I recognise the personal need to learn and accept input from others",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I embrace change and step up when confronted with personal challenges",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I show resilience when dealing with new situations, powerful personalities and emotions and demonstrate perseverance in the face of personal and organisational challenges",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I embrace change when required and support others. I encourage, support and make decisions without reference to a personal situation   ",
        level: "Expert",
      },
    ],
  },
];

export const knowledgeQuestions = [
  {
    questionId: 1,
    question:
      "How well do you understand your organisation's structure, roles and responsibilities ",
    answers: [
      {
        answerId: 1,
        answer:
          "I have started to understand the organisation, the various sections and departments, and how they are linked, and where authority lies. I am able to seek clarity as and when it is required",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I understand the roles and responsibilities of each individual and forum within the organisation, starting with the board and any committees appointed by the board. I know where to look for more information",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am well versed in the structure and contribute to discussions on organisational effectiveness and governance in practice",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am accountable for the governance function within the organisation and exercise authority over structural and functional changes within the team, taking integration into consideration ",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 2,
    question:
      "What sources of information do you use to gain technical knowledge?",
    answers: [
      {
        answerId: 1,
        answer:
          "I am aware of the sources of specific knowledge within the organisation and am able to ask for advice with clarity and respect",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am able to explain specialist topics to colleagues and help them understand the relationship to their roles. I am confident in asking my internal network when I need more information",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am a source of guidance on specialist topics and convey their importance to the board and other external stakeholders",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am an authoritative voice on specialist issues and am able to draft and commission internal and external communications and present them to the board",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 3,
    question:
      "How familiar are you with the processes and practices critical to your organisation's smooth operation? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I am learning the processes and practices within the organisation but can use transferable knowledge from other roles or education to make intelligent working choices",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am able to understand and convey the importance and relevance of our process and practices to varying stakeholders",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am comfortable with our processes and practices and can identify and resolve potential issues, challenging colleagues and third parties where appropriate. I can escalate if necessary",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am a trusted source of knowledge and contribute to internal and external forums on matters related to organisational effectiveness, purpose and governance in general",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 4,
    question:
      "To what extent are you aware of your organisation's culture and the types of behaviours that are exhibited? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I have taken the time to understand the values and cultures of the organisation",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am aware of the organisation's culture and can share this with colleagues. When I am unclear, or something changes, I know where to go to find out more information",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am well aware of the organisation's culture and am a source of guidance for others. I am able to bring and explain concerns to the board and can explain these concepts to the board",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I recognise the culture of the organisation, and support the board and other leaders in maintaining its appropriateness in changing circumstances",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 5,
    question:
      "How aware are you of your organisations strategy, how it has been developed and how it works? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I understand what is meant by strategy in general terms and have become familiar with my organisation's strategy and how it is delivered",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I understand the organisation's strategy, and why it is important within my role. I can communicate this to colleagues",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I support the leaders of the organisation in the development and deployment of our strategy through personal actions, as well as written and verbal communications",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I support and work with the chair of the board to develop our strategy and am integral in addressing leadership, cultural and organisational behavioural issues ",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 6,
    question: "How involved are you in strategic change?",
    answers: [
      {
        answerId: 1,
        answer:
          "I get involved professionally and effectively when I am asked to apply organisational actions within my role",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am supportive of strategic changes and am confident in escalating organisational concerns in a professional manner",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am a regular contributor to discussions on strategy and culture, and how to implement change internally and amongst professional peers",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am a respected leader within the organisation and can confidently communicate, contribute to strategic discussions and lead on implementation of projects",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 7,
    question:
      "How well do you understand individual and organisational motivations and how they affect decision making? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I have started to recognise the dynamics between those who attend meetings and how this can affect the decision-making process ",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I understand the dynamics between individuals and between different forums within the organisation. I can reflect on how my actions affect others and adapt my actions in future situations ",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am aware of how my actions and others' affect decision-making within teams and across the organisation. I  am able to identify, escalate and problem solve issues when they arise",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I acknowledge, support, confront and challenge motivations across the business and address leadership issues in a professional, confident and results-focused manner that enables respect and support from board members",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 8,
    question:
      "How well do you understand the environment within which your organisation works and the impact you have? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I can identify the sector in which the organisation operates and open to learning more about these concepts from colleagues and through study",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am aware of the varying environments within which our organisation operates. I am able to report negative effects and measure positive impact.",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I maintain up-to-date personal knowledge of external influences on the organisation, sharing this readily with board members in a professional and supportive manner",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I pro-actively share knowledge with the chair and board members about the external environment ",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 9,
    question:
      "How well do you understand the impact of external stakeholders on your organisation?",
    answers: [
      {
        answerId: 1,
        answer:
          "I can identify our external stakeholders and understand what they offer our organisation",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I recognise the various external stakeholders of the organisation, taking time to understand the impact these may have on internal dynamics and actions",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am confident in my understanding of the impacts of external stakeholders and am relied upon to share knowledge and expertise",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I take the lead in communicating to external stakeholders, such as shareholders, regulators or other bodies, to engage externally on matters related to the organisation, and influence how their actions affect our practices. I provide input on external initiatives in areas where our organisation has influence",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 10,
    question:
      "What level of understanding do you have around global ESG priorities, impacts and requirements? ",
    answers: [
      {
        answerId: 1,
        answer: "I am aware of ESG and how it relates to my role",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am aware of ESG priorities, impacts and requirements and know where to obtain further guidance if necessary and explain these concepts to colleagues",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am a source of guidance for others on ESG related matters and am able to explain these concepts to the board",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am an authoritative voice on these issues and can draft and commission internal and external communications and present them to the board",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 11,
    question:
      "To what level do you understand the governance principles, sources of law, and regulations as relevant to your organisation? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I understand the basics and am open to understanding more. I gain knowledge from colleagues on the operational principles applied to my role, team and organisation      ",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I understand the governance principles, laws and regulations and know where to obtain further guidance if necessary. I am increasingly able to explain these concepts to colleagues",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am a source of guidance for others on these topics and am able to explain these concepts to the board",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I have an overarching understanding of all these areas across the organisation and can confidently advise on the various activities in relation to board oversight, involvement or activity",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 12,
    question:
      "How well do you understand financial concepts and controls and how they inform decision making? ",
    answers: [
      {
        answerId: 1,
        answer: "I have a general understanding of financial concepts ",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I can contribute to conversations regarding financial concepts and controls across the organisation",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am able to identify and communicate priorities for board discussion, working with the chair to ensure priorities are clearly identified, monitored and actioned appropriately",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I have a strong grasp of financial concepts and how they apply to decision-making and activities across the organisation, and can explain them to and on behalf of the board",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 13,
    question: "How involved in risk management are you?",
    answers: [
      {
        answerId: 1,
        answer:
          "I am aware of identified risks within my role and how it relates to the organisation",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am able to monitor known risks and identify new risks within my role",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I can contribute to discussions on risk management internally and work to improve our risk management practices across the organisation",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I contribute to organisational strategy around risk and engage in technical discussions on these issues internally and externally",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 14,
    question: "Do you understand the purpose and requirements of reporting?",
    answers: [
      {
        answerId: 1,
        answer: "I have an understanding of reporting and why it is necessary",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I understand the need and importance of reporting and can discuss its importance with colleagues and find ways to improve my contributions",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I am an integral part of determining the reporting requirements for our organisation and communicating its significance across the organisation",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am responsible for effective compliance with legislative and regulatory matters related to governance and the related reporting requirements. I am regularly involved in internal reviews ",
        level: "Expert",
      },
    ],
  },
];

export const practiceQuestions = [
  {
    questionId: 1,
    question: "How do you support the board and prepare for meetings?",
    answers: [
      {
        answerId: 1,
        answer:
          "I support others in administrative tasks related to governance matters, such as collating board packs for meetings and maintaining records. I recognise the importance of scheduling meetings in advance and ensuring my actions deliver",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I plan the board schedule for the next period and work with others to ensure board packs are collated and circulated in advance of meetings, leading on administrative aspects of this task",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I plan the annual work cycle and board schedules, liaising with board members where appropriate and ensuring this is achievable and communicated. I take internal and external factors into consideration",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I set the long term planning and strategy for governance and oversight, and support others in their planning and prioritising to ensure a flexible and responsive governance function. I support the chair in reviewing board packs and their effective use in board meetings",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 2,
    question:
      "How involved are you in planning and implementing projects in your organisation?",
    answers: [
      {
        answerId: 1,
        answer:
          "I deliver tasks based on documented calendars without reminders",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I undertake logistical and functional activity against a prescribed plan and responsible for my routine planning, anticipating issues and proposing solutions. I take opportunities to manage specific projects",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I oversee programmes with responsibility for the implementation of multiple projects and quality assurance of outputs",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I act as a sponsor/lead for projects across the organisation and with third parties",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 3,
    question: "How autonomous are you in your role? ",
    answers: [
      {
        answerId: 1,
        answer: "I deliver confidently based on instructions from colleagues",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I work with supervision in some areas and prioritise my own workload",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I work autonomously in my role, supporting others where necessary",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I work autonomously on my tasks and support teams and individuals across the organisation and board ",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 4,
    question: "To what level do you produce minutes? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I can produce basic minutes and maintain company records under instruction, seeking clarity when necessary",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I produce clear, accurate minutes, maintain company records, registrations and calendars, and ensure actions agreed in minutes are documented and tracked clearly",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I provide a clear organisational memory through accurate minutes and record keeping that are balanced and fair, ensuring agreed actions are recorded, tracked, delivered and monitored",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I record minutes diplomatically but clearly, giving an accurate, true and fair understanding to internal and external readers and ensuring they can hold up to increased scrutiny",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 5,
    question:
      "How do you approach organisational processes related to your role?",
    answers: [
      {
        answerId: 1,
        answer:
          "I know where to source processes and procedures applicable to my role and proactively seek clarification when needed",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I follow processes to prevent problems and effectively prioritise tasks. I suggest improvements to processes when I notice something that doesn't work",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I anticipate pitfalls in processes and work to avoid surprises by solving problems before they occur",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I anticipate strategic problems with our processes and engage with the right people, mobilising the right resources to solve them",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 6,
    question: "How do you solve problems when they occur?",
    answers: [
      {
        answerId: 1,
        answer:
          "I complete all training related to my role and raise issues or shortfalls in my training or tasks",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I am observant and curious and have developed an understanding of the organisation's problems. I seek solutions to practical problems and discuss and/or escalate those of a more complex or sensitive nature to the right stakeholders",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I offer various solutions, understand the commercial implications of alternative choices and empower others to own their decisions. I act as a protective shield for the board and draw upon experiences to identify real problems and find constructive, ethical and commercially astute solutions. ",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I use organisational memory and broader sector insight to balance creative problem solving and crisis management, recognise the significance of issues, and choose which to address. I can push back without being seen as obstructive",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 7,
    question: "How do you develop your support network?",
    answers: [
      {
        answerId: 1,
        answer:
          "I seek to build relationships with colleagues so that I can communicate effectively and engage in discussions",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I build relationships to form a support network to draw upon when I need to find solutions",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I seek to share best practice with internal and external networks, looking for opportunities to offer fresh perspectives, and when to challenge constructively to create more robust networks",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I look internally and externally to develop my network, drawing on industry experts to support my team and organisation when needed",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 8,
    question: "What is your role with the Board?",
    answers: [
      {
        answerId: 1,
        answer:
          "I can contribute appropriately and support others to enable effective discussions and decision making",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I offer basic but useful advice which anticipates the board's questions and source my information internally and externally",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I can advise on governance-related issues and help set and maintain governance standards while understanding the subtleties in personal relationships to enable good discussions and decisions",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I ensure that the attendees, including board members, address the right questions and effectively balance commercial and regulatory priorities",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 9,
    question: "I am seen by the Board as...",
    answers: [
      {
        answerId: 1,
        answer: "consistent and accurate in everything I do",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "a safe pair of hands and a dependable person who shows an impartial understanding of situations and supports shared action",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "someone who remains calm and reassuring in all situations and seeks to understand the motivations of people as a means of building engagement",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "someone who is respected as a trusted enabler of the board with strong strategic, commercial and regulatory understanding",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 10,
    question:
      "How do you address the need for information across the organisation? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I seek answers from previous queries and then seek further advice and input from others",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I research to gather, assimilate, and refine relevant information to enable effective decisions. I use feedback to influence improvement, including informal knowledge from incoming and/or outgoing directors or work colleagues",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I commission and quality assure research and information for the board to ensure that it adds value to decision making",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I act as an advisor internally and externally on governance matters and contribute to sector initiatives",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 11,
    question: "How are you involved with the board? ",
    answers: [
      {
        answerId: 1,
        answer: "I answer questions and prepare documentation when requested",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I proactively provide information and proposals to be presented to the board",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I alert the board to relevant projects and issues . Feedback to directors and peers on board dynamics, enabling board development and effectiveness",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I am proactive in identifying approaching themes and mobilising the board to address upcoming issues",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 12,
    question: "How do you use and facilitate coaching within your role? ",
    answers: [
      {
        answerId: 1,
        answer:
          "I am open to receiving advice, mentoring and coaching from others",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I seek out and utilise opportunities for receiving coaching and mentoring from colleagues and mentors",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I seek out opportunities to receive personal coaching and mentoring, and use these practices to develop the team and others across the organisation",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I act as a mentor and coach to board members and the senior leadership team and encourage others to seek coaching opportunities for themselves and others",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 13,
    question: "What level of influence do you have in your role?",
    answers: [
      {
        answerId: 1,
        answer: "I use my knowledge to engage in team discussions",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I influence internally, upwards and sideways, often through writing or in person, and represent the team in wider conversations",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I use an understanding of individual motivations to manage relationships and influence",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I exert subtle influence, often behind the scenes, drawing on accrued respect of peers to get issues addressed fully and fairly",
        level: "Expert",
      },
    ],
  },
  {
    questionId: 14,
    question:
      "How do you use your network to influence your organisation and personal development?",
    answers: [
      {
        answerId: 1,
        answer:
          "I actively seek feedback from those with a different perspective or outlook and build relationships within my team to support skill development and understanding",
        level: "Entry",
      },
      {
        answerId: 2,
        answer:
          "I actively engage in conversations with my colleagues and use every opportunity to learn something new. I use a variety of forms of communication to establish a professional network internally and externally, building trust and confidence through reliable execution of tasks and collaboration",
        level: "Emerging",
      },
      {
        answerId: 3,
        answer:
          "I continuously add to my extensive professional network, and connect with others to enhance the organisational reputation. I am integral to managing stakeholder relationships with the board within and beyond the organisation and seek out opportunities to learn from these connections",
        level: "Established",
      },
      {
        answerId: 4,
        answer:
          "I use internal and external networks effectively, leveraging relationships and exchanging knowledge. My reputation for getting things done and influencing governance practice beyond the organisation helps me to make new connections and explore new topics",
        level: "Expert",
      },
    ],
  },
];
