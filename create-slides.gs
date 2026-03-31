/**
 * SE AI Toolkit — Google Slides Generator v2
 *
 * How to run:
 * 1. Go to script.google.com → New project
 * 2. Delete all default code and paste this entire file
 * 3. Save (Cmd+S)
 * 4. Select "createSEAIToolkitDeck" in the function dropdown
 * 5. Click Run — grant permissions when prompted (Slides access only)
 * 6. Your deck URL appears in the Execution Log — open it
 *
 * TRANSITIONS: Apps Script cannot set transitions via API.
 * After opening the deck: Edit → Select All → Slide → Transition → Fade → Apply to All
 * Takes about 10 seconds and makes a big difference.
 */

// ─── Theme ────────────────────────────────────────────────────────────────────

var T = {
  navy:     '#032D60',
  blue:     '#0176D3',
  bg:       '#FAFAF8',
  white:    '#FFFFFF',
  prose:    '#3E3E3C',
  muted:    '#706E6B',
  border:   '#E5E5E5',
  takeaway: '#EEF4FD',
  labelBg:  '#E4EEF8',  // section label strip — slightly darker than takeaway
  font:     'Inter',
  W:  720,  // slide width in points
  H:  405,  // slide height in points
  M:  32,   // margin
  LH: 30,   // label strip height
};

// ─── Entry Point ──────────────────────────────────────────────────────────────

function createSEAIToolkitDeck() {
  var pres = SlidesApp.create('How I AI \u2014 SE AI Toolkit');

  var defaults = pres.getSlides();
  for (var i = 0; i < defaults.length; i++) {
    defaults[i].remove();
  }

  // ── Title ──
  addTitleSlide(pres);

  // ── The Big Picture: What ──
  addSectionDivider(pres, 'The Big Picture', 'What');
  addQuoteSlide(pres, {
    label:       'The Big Picture',
    quote:       'Customers expect tailored demos, fast POCs, and solutions that fit their business. AI tools let any SE deliver that.',
    attribution: 'You don\'t need to be a developer. You need to know what your customer needs.',
    notes:       'A real customer expectation — not aspirational. This is already the bar. The good news is we now have the tools to clear it.',
  });
  addComparisonSlide(pres, {
    label: 'The Big Picture',
    left:  { label: 'Manual Everything', description: 'Every demo, every tweak, every build — done by hand, one at a time.' },
    right: { label: 'Directing Outcomes', description: 'You describe what the customer needs. The tool builds it.' },
    notes: 'Think about where your time actually goes this week. Most of it is in the left column. These tools flip that. You become the director, not the builder.',
  });
  addIconBulletsSlide(pres, {
    label:  'The Big Picture',
    title:  'What this unlocks for SEs',
    bullets: [
      { title: 'Speed',        description: 'Deliver a tailored POC before the next call — not next quarter.' },
      { title: 'Credibility',  description: 'Walk into a prospect\'s world with a demo built for their business.' },
      { title: 'Independence', description: 'If you can describe what the customer needs, you can make it real.' },
    ],
    notes: 'Three things change immediately when you start using these tools. Speed, credibility, and the ability to build without waiting on anyone else. All three matter in front of a customer.',
  });
  addStatementSlide(pres, {
    label:      'The Big Picture',
    statement:  'Agentforce is the biggest bet we have. SEs who build and demo agents drive customer activation.',
    supporting: 'These tools turn every SE into someone who can stand up a working agent — not in weeks, but in a single session.',
    notes:      'Only 4% of paid Agentforce customers are actively consuming. SEs are the lever that moves that number. This is where it matters — and this is how we move it.',
  });
  addTakeawaySlide(pres, {
    label: 'The Big Picture',
    text:  'You don\'t need to write code. You need to describe what your customer needs clearly enough that the tool can build it.',
    notes: 'You already have what it takes. The tools need direction, not code. That\'s an SE skill, not a developer skill.',
  });

  // ── The Big Picture: How ──
  addSectionDivider(pres, 'The Big Picture', 'How');
  addStatementSlide(pres, {
    label:      'The Big Picture',
    statement:  'Three rockets. One running shoe.',
    supporting: 'Some tools give you 10\u2013100x productivity. One gives you 20\u201330%. All are worth knowing.',
    notes:      'Saleo is the running shoe \u2014 solid, reliable, a meaningful boost. The other three are rockets. They\'re in a different category of impact.',
  });
  addToolCardsSlide(pres);
  addStatementSlide(pres, {
    label:      'The Big Picture',
    statement:  'The engines are here. The gap is knowing how to drive them.',
    supporting: 'You have the tools. This session is about building the muscle to use them.',
    notes:      'The tools aren\'t the obstacle. Confidence and habit are. That\'s exactly what today is about.',
  });
  addIconBulletsSlide(pres, {
    label:  'The Big Picture',
    title:  'What makes these tools click',
    bullets: [
      { title: 'Describe, Don\'t Build',        description: 'Tell the tool what you want. It figures out the steps, does the work, and checks itself.' },
      { title: 'Context is Everything',         description: 'The more the tool knows about your project, the better the output.' },
      { title: 'Your SE Expertise Is the Edge', description: 'These tools are fast, but they don\'t know your customer. That knowledge is yours.' },
      { title: 'Customer Impact',               description: 'Faster builds mean faster activation. That\'s the metric that matters most.' },
    ],
    notes: 'These are multipliers, not magic. They\'re only as good as the direction you give them. Your customer knowledge is what turns generic AI output into something that actually lands.',
  });
  addTakeawaySlide(pres, {
    label: 'The Big Picture',
    text:  'All four tools are worth exploring. This session gives you the playbook to start using them today.',
    notes: 'Pick one tool. One use case. This week. That\'s the whole ask. The habit starts with one win.',
  });

  // ── Tool Overviews ──
  addSectionDivider(pres, 'The Tools', 'Deep Dives');

  addToolOverviewSlide(pres, {
    name:     'Claude Code',
    role:     'Autonomous Builder',
    subtitle: 'Describe the goal. It handles the steps.',
    bullets:  [
      'Build from scratch: Agentforce agents, batch demo data, RFP responses mapped to Salesforce capabilities. You describe the outcome, Claude handles execution from start to finish.',
      'SEs are using it to build working Agentforce agents in under an hour, generate realistic vertical-specific data, and prototype integrations during discovery calls.',
      'The POC starts during the call, not after it.',
    ],
    quote: 'I spent a couple hours building a fully functional Agentforce patient support agent, basically just using my voice. Instead of spending days wrestling with prompt engineering, I just described what I wanted.',
    notes: 'One SE. One voice prompt. One hour. A fully functional Agentforce agent. That\'s not a stretch \u2014 that\'s a real story from this team. This is what "autonomous builder" means in practice.',
  });

  addToolOverviewSlide(pres, {
    name:     'MeshMesh',
    role:     'Agent Builder',
    subtitle: 'The Salesforce-native builder. Knows the platform before you say a word.',
    bullets:  [
      'MeshMesh already understands Salesforce: objects, rules, Agentforce patterns. You skip the explaining and go straight to building.',
      'One SE cut demo guide prep from 2 full days to 30 minutes. Another built a six-week POC in 90 minutes.',
      'When the build is Salesforce-native and you need it done in one sitting, this is the tool.',
    ],
    quote: 'What took back and forth with Cursor took 3 prompts\u2026 it built multiple components and inserted seed data correctly. It even tested the seed data itself.',
    notes: 'MeshMesh already speaks Salesforce. You don\'t need to explain objects or agent patterns. You describe the customer\'s use case and it builds. Start the access request now \u2014 approval is the only wait.',
  });

  addToolOverviewSlide(pres, {
    name:     'Cursor',
    role:     'Smart Editor',
    subtitle: 'Your regular editor. With an AI copilot at every step.',
    bullets:  [
      'The tool for editing, tweaking, and understanding code that already exists. Work inside your files like normal \u2014 AI is there to help at every step.',
      'SEs are using it to customize demo components live during calls, understand inherited code in minutes, and handle customer requests in real time.',
      'Four shortcuts cover almost everything: Tab, Cmd+K, Cmd+L, Cmd+Shift+I.',
    ],
    quote: 'This approach slashes custom demo preparation time by hours each month \u2014 freeing up time that translates into days saved over the year.',
    notes: 'Think of Cursor as a copilot for any project that already exists. It reads the code, knows the context, and helps you move faster than you could alone. The four shortcuts are worth memorizing today.',
  });

  addToolOverviewSlide(pres, {
    name:     'Saleo',
    role:     'Demo Layer',
    subtitle: 'Their data. Your org. No risk.',
    bullets:  [
      'Your demo looks like the prospect\'s business: their company name, their industry metrics, their pipeline stages. No coding, no changes to real records.',
      'A Chrome extension that overlays custom data on any Salesforce screen. The real org stays clean.',
      'Demos land harder when the prospect sees their own world on screen.',
    ],
    quote: 'The customer had last-minute requests and Saleo let me quickly build exactly what they wanted. From customized stage names to new buttons, the demo was highly personalized and very well received.',
    notes: 'Your org stays clean. The prospect sees their world. The demo lands. Build one template per industry and the second prospect in that vertical costs almost nothing to prep for.',
  });

  addClosingSlide(pres);

  var url = pres.getUrl();
  Logger.log('Deck created.');
  Logger.log('Open here: ' + url);
}

// ─── Slide Builders ───────────────────────────────────────────────────────────

function addTitleSlide(pres) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.navy);

  addRect(slide, 0, 0, T.W, 5, T.blue);

  var title = addTB(slide, 'How I AI', T.M, 108, T.W - T.M * 2, 96);
  styleText(title, { size: 64, bold: true, color: T.white, align: 'CENTER' });

  var sub = addTB(slide, 'An SE\'s guide to AI tools that change how we work', T.M, 222, T.W - T.M * 2, 52);
  styleText(sub, { size: 20, color: T.white, align: 'CENTER' });

  var label = addTB(slide, 'Salesforce Solution Engineering', T.M, T.H - 46, T.W - T.M * 2, 24);
  styleText(label, { size: 12, color: T.blue, align: 'CENTER' });

  addRect(slide, 0, T.H - 4, T.W, 4, T.blue);

  setNotes(slide, 'Welcome. This session is about one thing: giving you an unfair advantage in every customer conversation. Let\'s go.');
}

function addSectionDivider(pres, tier, title) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.bg);

  addRect(slide, 0, 0, 5, T.H, T.blue);

  var tierLabel = addTB(slide, tier.toUpperCase(), 28, 142, 500, 26);
  styleText(tierLabel, { size: 12, bold: true, color: T.blue, align: 'LEFT' });

  var sectionTitle = addTB(slide, title, 28, 172, 640, 100);
  styleText(sectionTitle, { size: 64, bold: true, color: T.navy, align: 'LEFT' });

  setNotes(slide, 'Let\'s talk about ' + title.toLowerCase() + '.');
}

function addQuoteSlide(pres, data) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.bg);
  addSectionLabel(slide, data.label);

  // Left accent bar — spans the quote area
  addRect(slide, T.M, T.LH + 10, 4, 215, T.blue);

  // Quote — big and bold, no italics
  var quote = addTB(slide, data.quote, T.M + 20, T.LH + 8, T.W - T.M * 2 - 20, 215);
  styleText(quote, { size: 26, bold: true, color: T.navy, align: 'LEFT' });

  // Bottom attribution strip
  addRect(slide, 0, 285, T.W, T.H - 285, T.navy);
  var attr = addTB(slide, data.attribution, T.M, 300, T.W - T.M * 2, 80);
  styleText(attr, { size: 16, bold: true, color: '#A8C5E8', align: 'LEFT' });

  setNotes(slide, data.notes);
}

function addComparisonSlide(pres, data) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.bg);
  addSectionLabel(slide, data.label);

  var cardTop = T.LH + 10;
  var cardH   = T.H - cardTop - 12;
  var cardW   = 284;
  var leftX   = T.M;
  var rightX  = T.W - T.M - cardW;
  var arrowX  = leftX + cardW + 6;
  var arrowW  = rightX - arrowX - 6;

  // Left card
  addRect(slide, leftX, cardTop, cardW, cardH, '#F0F0EE', T.border);
  var lHead = addTB(slide, data.left.label, leftX + 18, cardTop + 20, cardW - 36, 36);
  styleText(lHead, { size: 18, bold: true, color: T.navy, align: 'LEFT' });
  var lDesc = addTB(slide, data.left.description, leftX + 18, cardTop + 64, cardW - 36, 200);
  styleText(lDesc, { size: 15, color: T.prose, align: 'LEFT' });

  // Arrow
  var arrow = addTB(slide, '\u2192', arrowX, cardTop + cardH / 2 - 28, arrowW, 56);
  styleText(arrow, { size: 42, bold: true, color: T.blue, align: 'CENTER' });

  // Right card
  addRect(slide, rightX, cardTop, cardW, cardH, T.takeaway, T.blue);
  var rHead = addTB(slide, data.right.label, rightX + 18, cardTop + 20, cardW - 36, 36);
  styleText(rHead, { size: 18, bold: true, color: T.navy, align: 'LEFT' });
  var rDesc = addTB(slide, data.right.description, rightX + 18, cardTop + 64, cardW - 36, 200);
  styleText(rDesc, { size: 15, color: T.prose, align: 'LEFT' });

  setNotes(slide, data.notes);
}

function addIconBulletsSlide(pres, data) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.bg);
  addSectionLabel(slide, data.label);

  var slideTitle = addTB(slide, data.title, T.M, T.LH + 6, T.W - T.M * 2, 44);
  styleText(slideTitle, { size: 28, bold: true, color: T.navy, align: 'LEFT' });

  var bullets = data.bullets;
  var count   = bullets.length;
  var gap     = 12;
  var cardW   = Math.floor((T.W - T.M * 2 - gap * (count - 1)) / count);
  var cardTop = T.LH + 56;
  var cardH   = T.H - cardTop - 12;

  for (var i = 0; i < count; i++) {
    var x = T.M + i * (cardW + gap);
    addRect(slide, x, cardTop, cardW, cardH, T.white, T.border);

    // Blue accent bar at top of card
    addRect(slide, x, cardTop, cardW, 4, T.blue);

    // Title — tall enough for 3-line titles
    var bTitle = addTB(slide, bullets[i].title, x + 14, cardTop + 16, cardW - 28, 80);
    styleText(bTitle, { size: 17, bold: true, color: T.navy, align: 'LEFT' });

    // Description starts below the title box
    var bDesc = addTB(slide, bullets[i].description, x + 14, cardTop + 102, cardW - 28, cardH - 114);
    styleText(bDesc, { size: 14, color: T.prose, align: 'LEFT' });
  }

  setNotes(slide, data.notes);
}

function addStatementSlide(pres, data) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.bg);
  addSectionLabel(slide, data.label);

  // Vertically center the content in the available area
  var contentH = data.supporting ? 260 : 140;
  var startY   = T.LH + Math.floor((T.H - T.LH - contentH) / 2);

  var statement = addTB(slide, data.statement, T.M + 20, startY, T.W - T.M * 2 - 40, 150);
  styleText(statement, { size: 30, bold: true, color: T.navy, align: 'CENTER' });

  if (data.supporting) {
    var sup = addTB(slide, data.supporting, T.M + 40, startY + 162, T.W - T.M * 2 - 80, 100);
    styleText(sup, { size: 17, color: T.muted, align: 'CENTER' });
  }

  setNotes(slide, data.notes);
}

function addToolCardsSlide(pres) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.bg);
  addSectionLabel(slide, 'The Big Picture');

  var slideTitle = addTB(slide, 'The Toolkit', T.M, T.LH + 4, T.W - T.M * 2, 36);
  styleText(slideTitle, { size: 20, bold: true, color: T.navy, align: 'CENTER' });

  var tools = [
    { name: 'Saleo',       role: 'Demo Layer',        tagline: 'Their data. Your demo. No code.',    bestFor: 'Personalize any demo to any prospect\'s industry in minutes. Your org stays clean.',                              setup: 'Easy',     sc: '#166534', sb: '#DCFCE7' },
    { name: 'MeshMesh',    role: 'Agent Builder',      tagline: 'Built for Salesforce. Agent-first.', bestFor: 'Built a six-week POC in 1.5 hours. Cut demo prep from 2 days to 30 minutes.',                                   setup: 'Moderate', sc: '#92400E', sb: '#FEF3C7' },
    { name: 'Cursor',      role: 'Smart Editor',       tagline: 'A smart editor with a co-pilot.',    bestFor: 'Cut custom demo prep from hours to minutes. Iterate on a customer\'s ask live during a call.',                   setup: 'Moderate', sc: '#92400E', sb: '#FEF3C7' },
    { name: 'Claude Code', role: 'Autonomous Builder', tagline: 'You describe. It builds.',           bestFor: 'One SE built a full Agentforce agent \u2014 4 topics, 500+ tests \u2014 in about an hour.',                    setup: 'Advanced', sc: '#1E3A5F', sb: '#DBEAFE' },
  ];

  var gap     = 10;
  var cardW   = Math.floor((T.W - T.M * 2 - gap * (tools.length - 1)) / tools.length);
  var cardTop = T.LH + 44;
  var cardH   = T.H - cardTop - 10;

  for (var i = 0; i < tools.length; i++) {
    var tool = tools[i];
    var x    = T.M + i * (cardW + gap);

    // Card
    addRect(slide, x, cardTop, cardW, cardH, T.white, T.border);

    // Blue top bar on card
    addRect(slide, x, cardTop, cardW, 4, T.blue);

    // Role badge
    addRect(slide, x + 8, cardTop + 14, cardW - 16, 20, T.takeaway);
    var badge = addTB(slide, tool.role.toUpperCase(), x + 8, cardTop + 15, cardW - 16, 18);
    styleText(badge, { size: 8, bold: true, color: T.blue, align: 'CENTER' });

    // Tool name
    var tName = addTB(slide, tool.name, x + 10, cardTop + 42, cardW - 20, 30);
    styleText(tName, { size: 16, bold: true, color: T.navy, align: 'LEFT' });

    // Tagline (no italics — use muted prose)
    var tagline = addTB(slide, tool.tagline, x + 10, cardTop + 74, cardW - 20, 36);
    styleText(tagline, { size: 11, color: T.muted, align: 'LEFT' });

    // Divider
    addRect(slide, x + 10, cardTop + 114, cardW - 20, 1, T.border);

    // Best for label
    var bfL = addTB(slide, 'BEST FOR', x + 10, cardTop + 120, cardW - 20, 16);
    styleText(bfL, { size: 8, bold: true, color: T.muted, align: 'LEFT' });

    // Best for text
    var bf = addTB(slide, tool.bestFor, x + 10, cardTop + 134, cardW - 20, cardH - 162);
    styleText(bf, { size: 11, color: T.prose, align: 'LEFT' });

    // Setup pill
    addRect(slide, x + 10, cardTop + cardH - 26, cardW - 20, 20, tool.sb);
    var setupTxt = addTB(slide, tool.setup, x + 10, cardTop + cardH - 25, cardW - 20, 18);
    styleText(setupTxt, { size: 9, bold: true, color: tool.sc, align: 'CENTER' });
  }

  setNotes(slide, 'Four tools. You don\'t need all of them today. Start with one. The goal is to leave this session knowing which one to try first.');
}

function addTakeawaySlide(pres, data) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.takeaway);
  addSectionLabel(slide, data.label, '#D6E4F7');

  // Blue accent bar
  addRect(slide, T.M, T.LH + 14, 52, 4, T.blue);

  // Text — vertically centered in available space
  var textH  = 200;
  var startY = T.LH + Math.floor((T.H - T.LH - textH) / 2);
  var text   = addTB(slide, data.text, T.M, startY, T.W - T.M * 2, textH);
  styleText(text, { size: 30, bold: true, color: T.navy, align: 'LEFT' });

  setNotes(slide, data.notes);
}

function addToolOverviewSlide(pres, data) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.bg);

  // Navy header bar
  addRect(slide, 0, 0, T.W, 72, T.navy);

  // Tool name
  var tName = addTB(slide, data.name, T.M, 10, 360, 38);
  styleText(tName, { size: 26, bold: true, color: T.white, align: 'LEFT' });

  // Role
  var role = addTB(slide, data.role.toUpperCase(), T.M, 50, 220, 18);
  styleText(role, { size: 10, bold: true, color: T.blue, align: 'LEFT' });

  // Subtitle — bold, no italics
  var sub = addTB(slide, data.subtitle, T.W / 2 + 10, 18, T.W / 2 - T.M - 10, 44);
  styleText(sub, { size: 13, bold: true, color: '#A8C5E8', align: 'RIGHT' });

  // Bullet points
  var bulletTop = 88;
  var bulletH   = 62;
  var bulletGap = 4;
  for (var i = 0; i < data.bullets.length; i++) {
    var y = bulletTop + i * (bulletH + bulletGap);
    // Blue dot
    addRect(slide, T.M, y + 9, 5, 5, T.blue);
    var b = addTB(slide, data.bullets[i], T.M + 18, y, T.W - T.M * 2 - 18, bulletH);
    styleText(b, { size: 14, color: T.prose, align: 'LEFT' });
  }

  // Quote callout strip at bottom
  var qTop = 306;
  addRect(slide, 0, qTop, T.W, T.H - qTop, T.takeaway);
  var qMark = addTB(slide, '\u201c', T.M, qTop + 4, 26, 32);
  styleText(qMark, { size: 28, bold: true, color: T.blue, align: 'LEFT' });
  var qText = addTB(slide, data.quote, T.M + 28, qTop + 8, T.W - T.M * 2 - 28, T.H - qTop - 14);
  styleText(qText, { size: 12, color: T.navy, align: 'LEFT' });

  setNotes(slide, data.notes);
}

function addClosingSlide(pres) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  slide.getBackground().setSolidFill(T.navy);

  addRect(slide, 0, 0, T.W, 5, T.blue);

  var main = addTB(slide, 'The playbook is here.', T.M, 96, T.W - T.M * 2, 82);
  styleText(main, { size: 46, bold: true, color: T.white, align: 'CENTER' });

  var sub = addTB(slide, 'Start with the tool that fits your next demo.', T.M, 192, T.W - T.M * 2, 54);
  styleText(sub, { size: 21, color: T.white, align: 'CENTER' });

  var hint = addTB(slide, 'Full reference guide and cheat sheet available for teammates after the session.', T.M, 300, T.W - T.M * 2, 34);
  styleText(hint, { size: 13, color: T.blue, align: 'CENTER' });

  addRect(slide, 0, T.H - 4, T.W, 4, T.blue);

  setNotes(slide, 'One tool. One demo. One win. That\'s how this starts. What are you building first?');
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Full-width label strip at the top of a slide.
 * Setting the text box fill to match the strip means any text box border
 * is invisible (same color as background).
 */
function addSectionLabel(slide, text, stripBg) {
  stripBg = stripBg || T.labelBg;
  addRect(slide, 0, 0, T.W, T.LH, stripBg);
  var lbl = slide.insertTextBox(text.toUpperCase(), T.M, 7, 400, T.LH - 8);
  lbl.getFill().setSolidFill(stripBg);
  lbl.getBorder().setTransparent();
  var ts = lbl.getText().getTextStyle();
  ts.setFontFamily(T.font);
  ts.setFontSize(9);
  ts.setForegroundColor(T.blue);
  ts.setBold(true);
  lbl.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.START);
}

/** Set speaker notes on a slide. */
function setNotes(slide, text) {
  slide.getNotesPage().getSpeakerNotesShape().getText().setText(text);
}

/** Insert a text box with transparent fill and border. */
function addTB(slide, text, left, top, width, height) {
  var box = slide.insertTextBox(text, left, top, width, height);
  box.getFill().setTransparent();
  box.getBorder().setTransparent();
  return box;
}

/** Insert a filled rectangle. borderColor is optional. */
function addRect(slide, left, top, width, height, fillColor, borderColor) {
  var shape = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, left, top, width, height);
  if (fillColor) {
    shape.getFill().setSolidFill(fillColor);
  } else {
    shape.getFill().setTransparent();
  }
  if (borderColor) {
    shape.getBorder().getLineFill().setSolidFill(borderColor);
    shape.getBorder().setWeight(1);
  } else {
    shape.getBorder().setTransparent();
  }
  return shape;
}

/**
 * Apply text styling to a text box Shape.
 * opts: { size, bold, color, align ('LEFT'|'CENTER'|'RIGHT'), font }
 */
function styleText(box, opts) {
  var range = box.getText();
  var ts    = range.getTextStyle();

  ts.setFontFamily(opts.font || T.font);
  if (opts.size  !== undefined) ts.setFontSize(opts.size);
  if (opts.color !== undefined) ts.setForegroundColor(opts.color);
  if (opts.bold  !== undefined) ts.setBold(opts.bold);

  var align = SlidesApp.ParagraphAlignment.START;
  if (opts.align === 'CENTER') align = SlidesApp.ParagraphAlignment.CENTER;
  if (opts.align === 'RIGHT')  align = SlidesApp.ParagraphAlignment.END;
  range.getParagraphStyle().setParagraphAlignment(align);

  return box;
}
