Interactive Lead Qualification Website

An interactive lead qualification website that asks users a series of questions and recommends the most suitable service based on their answers.

The goal of this project is to demonstrate user interaction, multi-step form handling, conditional questions, validation, lead information collection, and recommendation logic instead of building a static website.

Main Flow
Landing Page
     ↓
Start Qualification
     ↓
Step 1 - Select Service
     ↓
Step 2 - Conditional Question
     ↓
Step 3 - Select Budget
     ↓
Step 4 - Select Timeline
     ↓
Step 5 - Lead Information
     ↓
Validation
     ↓
Recommendation Result
     ↓
CTA

# User Flow

## Interactive Lead Qualification Website

The following flow describes how a user interacts with the Lead Qualification Website from the landing page to the final recommendation.

---

## 1. Landing Page

The user first arrives at the landing page.

The page contains:

* Hero section
* Short description
* Main CTA
* "Get Started" button

### User Action

```text
User clicks "Get Started"
        ↓
Qualification Form opens
```

---

# 2. Qualification Step 1 — Service Selection

The user is asked:

> What type of service do you need?

Available options may include:

* Website Development
* Mobile App Development
* E-commerce Development
* Digital Marketing

### User Action

The user selects one service.

### Example

```text
Website Development
```

### Application Logic

The selected value is stored in React state:

```js
answers.service = "website";
```

Then the user clicks:

```text
Next →
```

---

# 3. Qualification Step 2 — Conditional Question

The second question depends on the service selected in Step 1.

This is the main conditional logic of the application.

---

## Example A — Website

If the user selects:

```text
Website Development
```

The application asks:

> What type of website do you need?

Options:

```text
Business Website
Portfolio Website
Landing Page
Web Application
```

---

## Example B — Mobile App

If the user selects:

```text
Mobile App Development
```

The application asks:

> Which platform do you need?

Options:

```text
Android
iOS
Android & iOS
```

---

## Example C — E-commerce

If the user selects:

```text
E-commerce Development
```

The application asks:

> How many products do you have?

Options:

```text
1 - 50
51 - 200
201 - 1000
1000+
```

---

## Example D — Digital Marketing

If the user selects:

```text
Digital Marketing
```

The application asks:

> What is your main marketing goal?

Options:

```text
Brand Awareness
Generate More Leads
Increase Sales
Social Media Growth
```

---

# 4. Qualification Step 3 — Budget

The user is asked:

> What is your budget?

Example options:

```text
$500 - $1,000

$1,000 - $3,000

$3,000+
```

The selected budget is stored in the application state.

Example:

```js
answers.budget = "1000-3000";
```

---

# 5. Qualification Step 4 — Timeline

The user is asked:

> When do you need it?

Example options:

```text
ASAP - Less than 1 month

1 - 2 months

3+ months
```

The selected timeline is stored:

```js
answers.timeline = "asap";
```

---

# 6. Qualification Step 5 — Lead Information

After answering the qualification questions, the user is asked to provide contact information.

Required fields:

```text
Full Name
Email
Phone Number
```

Optional field:

```text
Company Name
```

Example:

```text
Name:
John Doe

Email:
john@example.com

Phone:
01700000000

Company:
ABC Company
```

---

# 7. Input Validation

Before submitting, the application validates the information.

### Example

If the user does not provide a name:

```text
Name is required.
```

If the email format is invalid:

```text
Please enter a valid email.
```

If a question is unanswered:

```text
Please select an option.
```

The user cannot continue until the required information is valid.

---

# 8. Create Lead Data

After successful validation, the application combines the qualification answers and lead information.

Example:

```js
const leadData = {
    answers: {
        service: "ecommerce",
        conditionalAnswer: "51-200",
        budget: "1000-3000",
        timeline: "asap",
    },

    leadInfo: {
        name: "John Doe",
        email: "john@example.com",
        phone: "01700000000",
        company: "ABC Company",
    },
};
```

---

# 9. Recommendation Logic

The application sends the user's answers to the recommendation logic.

```text
User Answers
     ↓
Recommendation Function
     ↓
Analyze Answers
     ↓
Find Suitable Service
```

Example:

```text
Service:
E-commerce

Products:
51 - 200

Budget:
$1,000 - $3,000

Timeline:
ASAP
```

Result:

```text
Recommended Service:
E-commerce Development
```

---

# 10. Recommendation Result

The user is taken to the result page.

The page displays:

```text
✨ Your Recommended Service

E-commerce Development

A scalable e-commerce solution designed
around your business requirements.
```

It also displays:

```text
✓ Custom e-commerce website
✓ Secure payment integration
✓ Mobile responsive design
✓ Product management
```

---

# 11. Personalized Message

The application can use the lead's name in the result.

Example:

```text
Thanks John Doe!

Based on the information you provided,
we believe this service is a strong match
for your requirements.
```

---

# 12. Final CTA

After seeing the recommendation, the user gets a clear next action.

Example:

```text
[ Talk to an Expert → ]

[ Back to Home ]
```

The main CTA encourages the qualified lead to contact the business.

---

# 🔄 Complete User Flow

```text
┌──────────────────────┐
│     Landing Page     │
└──────────┬───────────┘
           │
           │ Get Started
           ▼
┌──────────────────────┐
│       Step 1         │
│   Select Service     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Step 2         │
│ Conditional Question │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Step 3         │
│        Budget        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Step 4         │
│       Timeline       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Step 5         │
│   Lead Information   │
└──────────┬───────────┘
           │
           │ Validation
           ▼
┌──────────────────────┐
│    Create Lead Data  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Recommendation Logic │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Recommendation      │
│       Result         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│        CTA           │
│   Talk to an Expert  │
└──────────────────────┘
```

---

# 🧠 Logic Summary

```text
IF service = website
    ↓
Ask website-specific question

IF service = mobile-app
    ↓
Ask mobile-specific question

IF service = ecommerce
    ↓
Ask product-related question

IF service = marketing
    ↓
Ask marketing-related question

Then
    ↓
Collect Budget
    ↓
Collect Timeline
    ↓
Collect Lead Information
    ↓
Validate
    ↓
Generate Recommendation
    ↓
Show Result
    ↓
CTA
```