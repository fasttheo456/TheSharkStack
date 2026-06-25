/* Two-to-three-sentence explanations for each feature key, used to expand a
   tool's feature set into a long-form "deep dive" on the tool page. Generic but
   substantive, so the same key reads consistently across tools. */

export const featureBlurbs: Record<string, string> = {
  /* prospecting */
  emailFinder:
    "Finds verified professional email addresses from a name and company, so reps can reach prospects without guessing or bouncing. The best implementations check each address against live mail servers before returning it, which keeps your sender reputation intact.",
  mobileNumbers:
    "Surfaces direct dials and mobile numbers rather than switchboard lines, which is the single biggest lever on connect rates. Reaching a prospect on their cell instead of a front desk can multiply the number of live conversations a rep has in a day.",
  emailVerification:
    "Validates every address before you send, flagging catch-alls, risky domains, and dead inboxes. That protects your domain reputation, keeps bounce rates low, and stops campaigns from quietly landing in spam.",
  bulkEnrichment:
    "Enriches an entire list in one pass, filling in missing emails, phone numbers, job titles, and firmographics. Instead of researching contacts one by one, a rep uploads a list and gets a clean, outreach-ready file back in minutes.",
  chromeExtension:
    "A browser and LinkedIn extension lets reps capture and enrich contacts directly while they prospect, without switching tabs. Because so much B2B research happens on LinkedIn, this is where many teams spend most of their prospecting time.",
  intentData:
    "Layers buyer-intent signals on top of contacts so you can prioritize accounts that are already researching your category. Reaching out while a company is actively in-market is far more productive than cold-calling a static list.",
  crmExport:
    "Pushes enriched contacts straight into your CRM in one click, mapped to the right fields. Keeping data where reps already work avoids the copy-paste errors and stale records that quietly erode a pipeline.",

  /* sales engagement */
  multichannelSequences:
    "Runs coordinated sequences across email, phone, and LinkedIn so a single prospect is touched consistently across channels. Multichannel cadences reliably outperform email-only outreach, because few buyers respond to the first message on the first channel.",
  emailSequencing:
    "Automates multi-step email cadences with delays, conditions, and automatic stops on reply. It keeps follow-up consistent at volume, which is where most outbound actually falls down, reps simply forget to send touch three or four.",
  linkedinAutomation:
    "Automates LinkedIn connection requests, profile visits, and messages as part of the cadence. It is powerful for social selling, but should be used with sensible daily limits to keep accounts safe from LinkedIn's automation detection.",
  callTasks:
    "Builds calling and manual tasks directly into cadences, so reps always have a clear next action and a prioritized call list. Mixing automated email with human calls is what turns a sequence into a real conversation rather than spam.",
  abTesting:
    "A/B tests subject lines, copy, and send times to find the messaging that actually books meetings. Over hundreds of sends, small lifts in reply rate compound into a meaningfully fuller pipeline.",
  deliverability:
    "Includes inbox warm-up, sending limits, and domain health tools that keep emails landing in the primary inbox. Deliverability is the silent killer of cold email, the best-written sequence is worthless if it never reaches the prospect.",
  aiPersonalization:
    "Uses AI to tailor opening lines and messaging at scale, pulling from a prospect's role, company, or recent activity. It lets a small team send high volumes of outreach that still reads as written one-to-one.",
  engagementAnalytics:
    "Tracks opens, clicks, replies, and meetings booked at the step and template level. That visibility tells you exactly which messages and which steps in a sequence are doing the work, so you can cut what isn't.",

  /* crm */
  pipelineManagement:
    "A visual, drag-and-drop pipeline shows every deal's stage at a glance and makes it easy to move work forward. Reps get clarity on what to do next, and managers get an instant read on where the quarter stands.",
  contactCompanyRecords:
    "Keeps a single source of truth for every contact and account, complete with full activity history. When anyone on the team opens a record, they see every email, call, and note, so nothing falls through the cracks on a hand-off.",
  emailSyncTracking:
    "Syncs inbox and calendar so conversations log automatically against the right record, and tracks when emails are opened. Reps stop doing manual data entry, and the CRM finally reflects what is actually happening.",
  workflowAutomation:
    "Automates repetitive steps, hand-offs, reminders, and field updates with simple rules or visual builders. Every task the system handles is one less thing a rep forgets and one less reason to avoid the CRM.",
  reportingDashboards:
    "Dashboards and reports give managers real-time visibility into pipeline, activity, conversion, and rep performance. Good reporting turns a CRM from a filing cabinet into a tool that actually drives forecasting and coaching decisions.",
  builtInDialer:
    "A built-in dialer lets reps call straight from the record, with calls and outcomes logged automatically. Keeping calling inside the CRM removes the friction of a separate phone tool and keeps activity data clean.",
  forecasting:
    "Forecasting tools roll weighted deals up into a number managers can commit to, with history to judge accuracy. It moves the forecast off a spreadsheet and onto the same data reps update every day.",
  mobileApp:
    "A full-featured mobile app keeps reps productive between meetings, on the road, or at events. Logging a call or updating a deal from a phone right after it happens is the difference between accurate data and end-of-week guesswork.",

  /* phone system */
  powerDialer:
    "A power dialer calls through a list automatically, dialing the next prospect the moment a rep finishes. Removing the seconds spent manually dialing between calls adds up to dozens of extra conversations over a day.",
  parallelDialer:
    "Parallel dialing rings several numbers at once and only connects a rep when a human actually answers, skipping voicemails and dead lines. For high-volume SDR teams this can multiply live conversations per hour several times over.",
  localPresence:
    "Local presence displays a local area code to the person being called, which measurably increases pickup rates. People are simply more likely to answer a number that looks local than an unfamiliar long-distance one.",
  callRecording:
    "Records and stores calls automatically for coaching, compliance, and follow-up. Recordings become a searchable library managers use to onboard new reps and to settle exactly what was promised on a deal.",
  voicemailDrop:
    "One-click voicemail drop leaves a pre-recorded message and immediately moves the rep to the next call. It reclaims the time reps would otherwise spend repeating the same voicemail dozens of times a day.",
  ivrRouting:
    "IVR menus and call routing send inbound callers to the right person or team automatically. It keeps prospects from bouncing around and ensures hot inbound calls reach a rep fast.",
  smsMessaging:
    "Two-way SMS lets reps text prospects from the same platform they call from, with messages logged to the CRM. Texting often gets a faster reply than email for confirmations, reminders, and quick follow-ups.",
  crmIntegration:
    "Tight CRM integration logs every call, text, and outcome against the contact automatically. Reps never have to remember to record activity, and the data stays clean enough to actually report on.",

  /* conversation intelligence */
  transcription:
    "Automatically transcribes every call and meeting, turning hours of audio into searchable text. Managers can find every time a competitor or objection came up across the whole team without re-listening to anything.",
  aiSummaries:
    "AI generates concise summaries, action items, and next steps right after a call. Reps stop scribbling notes during conversations and the CRM gets filled in for them, which both saves time and improves data quality.",
  talkAnalytics:
    "Analyzes talk-to-listen ratio, topics, questions, and keywords across calls. Comparing the patterns of winning versus losing calls turns coaching from opinion into something grounded in data.",
  dealIntelligence:
    "Ties conversations and emails to specific deals and flags risk, like a deal going quiet or a single-threaded champion. Managers see which opportunities actually need attention instead of relying on optimistic rep updates.",
  coachingScorecards:
    "Scorecards, trackers, and call libraries make coaching repeatable and anchored to real moments in real calls. New reps ramp faster when they can study a library of great discovery and demo calls.",
  crmSync:
    "Syncs call notes, summaries, and activity to the CRM automatically. It removes the after-call admin that reps hate and that, left to chance, rarely gets done consistently.",
  multiLanguage:
    "Transcribes and analyzes calls across multiple languages with comparable accuracy. For international and multilingual teams, that is the difference between coaching the whole org and only the English-speaking part of it.",

  /* scheduling */
  bookingPages:
    "Shareable booking pages let prospects pick a time from your live availability with no email back-and-forth. Removing that friction measurably increases the share of interested leads who actually get on the calendar.",
  calendarSync:
    "Two-way calendar sync reflects your real availability and writes new meetings back instantly, preventing double-bookings. It keeps every booking link accurate even when your schedule changes minute to minute.",
  roundRobin:
    "Round-robin distribution shares inbound meetings fairly across a team based on rules you set. It ensures leads are spread evenly and that no prospect waits on a single overloaded rep.",
  leadRouting:
    "Qualifies inbound form fills and routes each lead to the right rep by territory, size, or account ownership in real time. Speed-to-lead is decisive on inbound, and instant routing is what makes booking-on-the-form possible.",
  reminders:
    "Automated email and SMS reminders nudge both sides before a meeting. Cutting no-shows is one of the highest-ROI things a scheduling tool does, since every missed meeting is a wasted slot and a lost opportunity.",
  groupMeetings:
    "Group and collective event types handle panels, multi-host demos, and meetings that need several people in the room. It removes the manual coordination that usually surrounds anything beyond a one-to-one.",
  payments:
    "Built-in payment collection lets you charge for a session at the point of booking. For consultants and paid services, capturing payment up front also dramatically reduces no-shows.",

  /* sales intelligence */
  accountResearch:
    "Compiles firmographics, org charts, tech stack, and recent news so reps walk into an account already prepared. A few minutes of automated research is the difference between a generic pitch and one that lands.",
  dataEnrichment:
    "Waterfall enrichment queries multiple data sources in sequence to maximize email and phone find rates, paying only for what it returns. Chaining providers reliably beats any single vendor on coverage.",
  signalTracking:
    "Tracks job changes, new hires, funding rounds, and other triggers that signal the right moment to reach out. Timing outreach to a real event consistently outperforms cold contact against a static list.",
  icpScoring:
    "Scores and ranks accounts against your ideal-customer profile so reps work the best-fit opportunities first. Pointing limited rep time at the highest-probability accounts is one of the simplest ways to lift win rates.",
  aiResearch:
    "AI research agents read websites, profiles, and news to answer custom questions about each account at scale. They automate the manual digging that used to eat hours of selling time every week.",
  crmEnrichment:
    "Continuously enriches, de-duplicates, and refreshes CRM records so data does not rot. Clean data is the foundation everything else, routing, scoring, reporting, quietly depends on.",

  /* universal */
  freePlan:
    "A genuine free plan lets you trial the core product on your own data before committing budget. It lowers the risk of adoption and is a good sign a vendor is confident in the product.",
  apiAccess:
    "An API and webhooks let teams automate workflows and pipe data into their own systems and dashboards. For RevOps teams, this is what makes the tool a building block rather than a silo.",
  prioritySupport:
    "Priority or 24/7 support, often with a dedicated contact, is available for teams that cannot afford to wait on a ticket. It matters most once the tool is mission-critical to daily selling.",
};
