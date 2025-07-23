# Arthika: Agentic AI Financial Companion for Women

**Arthika** is an agentic AI-based financial companion built to advance financial inclusion for underserved women in India. It offers accessible investment guidance, business planning, and community support via secure, personalized experiences powered by modular AI agents.

---

## 🌟 Key Features

- **Agentic AI Core:** Multi-step reasoning with LLMs to answer complex financial queries, assist with investments, or generate personalized business plans.
- **Smart Stock Analyst:** Retrieves historical stock data, business summaries, and monthly returns using Yahoo Finance APIs.
- **Expense & Savings Advisor:** Provides daily, weekly, and monthly expense summaries with contextual investment advice.
- **Business Planner:** Generates end-to-end startup plans, including:
  - Idea validation
  - Investment & break-even
  - ROI calculations
  - Market analysis based on sector and region
- **Community Hub:** A safe, moderated space for peer learning and shared financial experiences.
- **Security Layer:** Fraud detection & document verification tools to build user trust.
- **Voice & Language Support:** Accessible via WhatsApp or mobile in major Indian languages.

---

## 🧠 Architecture

| Layer                   | Description                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| **User Interface**      | WhatsApp Bot, Mobile App, Voice UI, Web Dashboard                                               |
| **Agentic AI Core**     | Modular agents for stocks, expenses, planning, search                                           |
| **Community Engine**    | Safe, user-generated financial advice and mentoring                                             |
| **Security Layer**      | On-device fraud detection and document verification                                             |
| **Privacy & Analytics** | Federated learning, differential privacy, impact tracking                                       |
| **Data Layer**          | Real-time APIs from banking, financial data, Gov schemes                                        |

---

## ⚙️ Tech Stack

- **Backend:** Python 3.x, FastAPI, Uvicorn
- **LLM Providers:** Groq (LLaMA 3.3-70B Versatile)
- **Finance Data Sources:** Yahoo Finance, DuckDuckGo search
- **AI Frameworks:** Phi SDK (Multi-Agent orchestrator)
- **Infra & Tools:** python-dotenv, yfinance, duckduckgo-search
- **Voice/Chat Layer:** WhatsApp API, Voice Recognition (planned)
- **DevOps/Infra (planned):** Docker, MongoDB, Redis, TensorFlow Lite

---

## 🚀 Run It Locally

### 1. Install dependencies

pip install -r requirements.txt

text

### 2. Configure Keys

Create a `.env` file:

GROQ_API_KEY=your_groq_key_here

text

### 3. Run CLI Version

python agenticnisa.py

text

### 4. Start FastAPI API

uvicorn main:app --reload

text

Then send a POST request:

POST /chat
Content-Type: application/json

{
"message": "Should I invest in TATA or RELIANCE?"
}

text

---

## 💡 Sample Queries

- "Help me plan a bakery in Pune."
- "Compare investment options between TATA and RELIANCE."
- "What’s the ROI for a tailoring business in rural Bihar?"

---

## 🛡️ Trust & Security

- **Fraud Detection:** Early detection of scams using verification logic
- **Federated Learning:** Keeps sensitive data on-device wherever possible
- **Differential Privacy:** Analytics layer avoids exposing individual data

---

## 📊 Business Impact

- **Market:** 400M women in India underserved by formal finance
- **Revenue Model:** Freemium (core features free, premium with partners)
- **Government Scheme Integration:**
  - MUDRA Yojana (micro-loans)
  - Stand-Up India Scheme
  - Mahila Samman Bachat Yojana

---

## 📚 References & Links

- **Research & Sources:**
  - RBI Financial Inclusion Report 2023
  - McKinsey: $770B GDP boost with gender financial equity
  - IEEE 2024: Federated Learning for Financial Apps
- **Gov Schemes:**
  - [mudra.org.in](https://www.mudra.org.in)
  - [Stand-Up India](https://www.standupmitra.in/)
- **[UI & Demo Folder (Google Drive)](https://drive.google.com/drive/folders/1NMd0AX4iM-kixAR49x-YaNtg699zV748?usp=sharing)**

---

## 👩‍💻 Contribution by me

| File | Purpose |
|------|---------|
| `agenticnisa.py` | CLI app with TickerResolverAgent, SmartStockAnalystAgent, ExpenseAdvisorAgent |
| `main.py`        | FastAPI server entrypoint with `/chat` endpoint |
| `financial_agent.py` | Multi-agent framework using Groq + Phi SDK for combining web + analyst tools |
| `financial_agent_api.py` | FastAPI API using combined agents with DuckDuckGo + yFinance |
| `requirements.txt` | Dependencies for the entire project |

---

## 🤝 Acknowledgements

Created for [WWT Hackathon 2024](https://wwt.com/). 
---

> ✨ *Arthika is more than a bot—it’s a movement empowering women to own their financial future.* 🇮🇳
