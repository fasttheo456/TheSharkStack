/* One-line explanations for each feature key, used to expand a tool's feature
   set into long-form prose on the tool page. Generic but informative, so the
   same key reads consistently across tools. */

export const featureBlurbs: Record<string, string> = {
  /* prospecting */
  emailFinder:
    "Finds verified professional email addresses so reps can reach prospects without guessing or bouncing.",
  mobileNumbers:
    "Surfaces direct dials and mobile numbers, which dramatically lift connect rates versus switchboard lines.",
  emailVerification:
    "Validates addresses before you send, protecting your domain reputation and keeping bounce rates low.",
  bulkEnrichment:
    "Enriches whole lists in one pass, filling in missing emails, phone numbers, and firmographics at scale.",
  chromeExtension:
    "A browser and LinkedIn extension lets reps capture and enrich contacts directly while they prospect.",
  intentData:
    "Layers buyer-intent signals on top of contacts so you can prioritize accounts that are actively researching.",
  crmExport:
    "Pushes enriched contacts to your CRM in one click, so data lands where reps already work.",

  /* sales engagement */
  multichannelSequences:
    "Runs coordinated sequences across email, phone, and LinkedIn so no follow-up slips through the cracks.",
  emailSequencing:
    "Automates multi-step email cadences with delays and conditions, keeping outreach consistent at volume.",
  linkedinAutomation:
    "Automates LinkedIn connection requests and messages inside the cadence (used carefully to protect accounts).",
  callTasks:
    "Builds calling and manual tasks into cadences so reps always know the next action to take.",
  abTesting:
    "A/B tests subject lines and copy to find the messaging that actually books meetings.",
  deliverability:
    "Includes warm-up and sending controls that keep your emails landing in the inbox rather than spam.",
  aiPersonalization:
    "Uses AI to tailor messaging at scale, so high-volume outreach still reads as one-to-one.",
  engagementAnalytics:
    "Tracks opens, replies, and meeting rates so you can see which steps and messages perform.",

  /* crm */
  pipelineManagement:
    "A visual pipeline makes it easy to see every deal's stage and move work forward.",
  contactCompanyRecords:
    "Keeps a single source of truth for every contact and account, with full activity history.",
  emailSyncTracking:
    "Syncs and tracks email so conversations log automatically against the right record.",
  workflowAutomation:
    "Automates repetitive steps, hand-offs, and reminders so reps spend less time on admin.",
  reportingDashboards:
    "Dashboards and reports give managers visibility into pipeline, activity, and performance.",
  builtInDialer:
    "A built-in dialer lets reps call straight from the record, with automatic logging.",
  forecasting:
    "Forecasting rolls deals up into a number managers can actually commit to.",
  mobileApp:
    "A mobile app keeps reps productive between meetings and on the road.",

  /* phone system */
  powerDialer:
    "A power dialer calls through lists automatically, removing the manual dialing between prospects.",
  parallelDialer:
    "Parallel dialing rings several numbers at once and only connects a rep when a human answers, multiplying live conversations.",
  localPresence:
    "Local presence shows a local area code, which measurably increases pickup rates.",
  callRecording:
    "Records calls automatically for coaching, compliance, and follow-up.",
  voicemailDrop:
    "One-click voicemail drop leaves a pre-recorded message so reps move straight to the next call.",
  ivrRouting:
    "IVR and call routing send inbound callers to the right person or team.",
  smsMessaging:
    "Two-way SMS lets reps text prospects from the same platform they call from.",
  crmIntegration:
    "Tight CRM integration logs every call and text against the contact automatically.",

  /* conversation intelligence */
  transcription:
    "Automatically transcribes every call, making conversations searchable after the fact.",
  aiSummaries:
    "AI generates concise summaries and next steps, so reps don't write notes by hand.",
  talkAnalytics:
    "Talk-time, topic, and keyword analytics reveal what's said on winning versus losing calls.",
  dealIntelligence:
    "Ties conversations to deals and flags risk, so managers see which opportunities need attention.",
  coachingScorecards:
    "Scorecards and call libraries make coaching repeatable and tied to real moments.",
  crmSync:
    "Syncs notes and call data to the CRM automatically, cutting rep admin time.",
  multiLanguage:
    "Handles multiple languages, which matters for international and multilingual teams.",

  /* scheduling */
  bookingPages:
    "Shareable booking pages let prospects pick a time without the email back-and-forth.",
  calendarSync:
    "Two-way calendar sync prevents double-booking and keeps availability accurate.",
  roundRobin:
    "Round-robin distribution shares inbound meetings fairly across a team.",
  leadRouting:
    "Form qualification and routing send each inbound lead to the right rep instantly.",
  reminders:
    "Automated reminders cut no-shows by nudging both sides before the meeting.",
  groupMeetings:
    "Group and collective event types handle panels, demos, and multi-host meetings.",
  payments:
    "Built-in payment collection lets you charge for paid sessions at the point of booking.",

  /* sales intelligence */
  accountResearch:
    "Compiles firmographics, org charts, and context so reps walk into accounts prepared.",
  dataEnrichment:
    "Waterfall enrichment chains multiple data sources to maximize email and phone find rates.",
  signalTracking:
    "Tracks job changes, hiring, funding, and other triggers that signal the right time to reach out.",
  icpScoring:
    "Scores and prioritizes accounts against your ideal-customer profile so reps work the best-fit ones first.",
  aiResearch:
    "AI research agents automate the manual digging that used to eat into selling time.",
  crmEnrichment:
    "Keeps CRM records fresh by enriching and de-duplicating data on an ongoing basis.",

  /* universal */
  freePlan:
    "A free plan lets you trial the core product before committing budget.",
  apiAccess:
    "An API and webhooks let teams automate workflows and pipe data into their own systems.",
  prioritySupport:
    "Priority or 24/7 support is available for teams that need fast help.",
};
