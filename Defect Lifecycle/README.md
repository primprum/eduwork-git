## Understand Defect Lifecycle

So in here, I'm trying to explain, as a QA, how's the flow when Defects found during development.

> Defect needs to be discussed with Business Person (Business Analyst or Product Owner), whether it's under the scope of the feature or not.
>
> Any one in the team could report defect, not only QA.

<br>

### Defect Identification and Reporting:

**1. Developer Provides Feature to QA:**<br>
The development team delivers a new feature to the QA team for testing.

**2. QA Identifies Defects:**<br>
QA identifies defects during testing by comparing the actual behavior of the software with the specified requirements.

**3. Defect Reporting:**<br>
QA records and reports each identified defect with detailed information, including steps to reproduce, the expected behavior, and the observed behavior.

**4. Discussion with Business Person (BP):**<br>
QA discusses identified defects with the business stakeholders (Product Owner, Business Analyst) to determine whether each defect is accepted, rejected, or requires further clarification.

<br>

### Defect Tracking and Management:

**1. Defect Ticket Recording:**<br>
Every identified defect is logged in a defect tracking system (such as a bug tracking tool). This system maintains a record of all reported defects, their status, and their resolution.

**2. Status Updates:**<br>
The status of each defect is updated as it progresses through the lifecycle (e.g., open, in progress, resolved, closed).

<br>

### Defect Resolution and Retesting:

**1. Developer Fixes the Defect:**<br>
The development team, including the original developer or another team member, addresses and fixes the reported defects.

**2. Revised Code Submission:**<br>
Once the defects are fixed, the revised code is submitted to the QA team for retesting.

**3. Regression Testing:**<br>
QA conducts regression testing to ensure that the defect fixes did not introduce new issues and that the overall functionality of the software remains stable.

<br>

### [In Summary]

> Involving collaboration with front-end developers for UI-related defects, highlights the importance of cross-functional teamwork in resolving issues efficiently.
>
> The key is effective communication, collaboration, and a shared commitment to delivering high-quality software.

<br>

### [Tips] Collaboration and Communication:

**Cross-Team Collaboration:**<br>
Depending on the nature of the defect, collaboration may involve not only developers but also other teams, such as front-end developers, to address issues in different layers of the application.

**Feedback Loop:**<br>
Continuous communication between developers, QA, and business stakeholders helps ensure a shared understanding of the defects and their resolution.

<br>

### [Tips] Continuous Improvement:

**Learning from Defects:**<br>
Record-keeping on defects provides valuable insights. If similar issues occur in production, the historical data can aid in understanding patterns and improving processes.
