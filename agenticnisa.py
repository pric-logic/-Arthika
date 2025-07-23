import os
from dotenv import load_dotenv
from groq import Groq
import yfinance as yf
import re

# Load environment variables
load_dotenv()
groq_api_key = os.getenv("GROQ_API_KEY")
if not groq_api_key:
    raise RuntimeError("GROQ_API_KEY not found in environment variables.")

groq_client = Groq(api_key=groq_api_key)
MODEL_NAME = "llama-3.3-70b-versatile"

# --- Agent Definitions ---

class TickerResolverAgent:
    TICKER_MAP = {
        "RELIANCE": "RELIANCE.NS",
        "TATA": "TATAMOTORS.NS",
        "TATAMOTORS": "TATAMOTORS.NS",
        "TCS": "TCS.NS",
        "INFOSYS": "INFY.NS",
        "WIPRO": "WIPRO.NS",
        "HDFC": "HDFCBANK.NS",
        "ICICI": "ICICIBANK.NS",
        "ADANI": "ADANIENT.NS"
    }

    def run(self, context):
        names = self.extract_names(context["query"])
        tickers = [self.TICKER_MAP.get(name) for name in names if self.TICKER_MAP.get(name)]
        valid = [t for t in tickers if self.is_valid_ticker(t)]
        context["tickers"] = valid if valid else ["RELIANCE.NS", "TATAMOTORS.NS"]

    def extract_names(self, text):
        return re.findall(r"\b[A-Z][A-Z]{1,9}\b", text.upper())

    def is_valid_ticker(self, ticker):
        try:
            return yf.Ticker(ticker).info["regularMarketPrice"] is not None
        except:
            return False

class SmartStockAnalystAgent:
    def run(self, context):
        insights = []
        for ticker in context.get("tickers", []):
            try:
                stock = yf.Ticker(ticker)
                hist = stock.history(period="1mo")
                if hist.empty:
                    continue
                pct_change = round((hist["Close"].iloc[-1] - hist["Close"].iloc[0]) / hist["Close"].iloc[0] * 100, 2)
                summary = stock.info.get("longBusinessSummary", "")
                insights.append(f"{ticker}: {pct_change}% change last month. {summary[:150]}...")
            except Exception as e:
                insights.append(f"{ticker}: Failed to retrieve data - {e}")
        context["stock_insight"] = "\n".join(insights)

class ExpenseAdvisorAgent:
    def run(self, context):
        expenses = {
            "daily": [40, 35, 50, 45, 60, 55, 38],
            "weekly": [300, 320, 310, 295],
            "monthly": [1200, 1250, 1180]
        }
        context["expenses"] = expenses

        prompt = f"""
You are a financial advisor.

User Query:
{context['query']}

If the query is about investment:
- The user is deciding between: {', '.join(context.get('tickers', []))}
- Stock performance:
{context.get('stock_insight', '')}
- Expenses:
  - Daily: {expenses['daily']}
  - Weekly: {expenses['weekly']}
  - Monthly: {expenses['monthly']}

If the query is about starting or planning a business:
- Help the user plan a small business from scratch.
- Include:
  - Idea validation
  - Investment planning
  - Real-time market data (based on sector/region)
  - Timeline to break even
  - ROI calculation
  - Key risks
  - Growth strategies

Also, if applicable, include a simple formula-based:
- ROI = (Net Profit / Investment) * 100
- Break-even point estimate (in months or sales units)

Output only relevant content based on the query.
Be concise. Use bullet points.
"""
        response = groq_client.chat.completions.create(
            model=MODEL_NAME,
            messages=[{"role": "user", "content": prompt}]
        )
        advice = response.choices[0].message.content.strip()
        context["advice"] = advice
        return advice

# --- Agentic Orchestration ---

class FinancialAgenticApp:
    def __init__(self):
        self.ticker_resolver = TickerResolverAgent()
        self.stock_analyst = SmartStockAnalystAgent()
        self.expense_advisor = ExpenseAdvisorAgent()

    def run(self, query):
        context = {"query": query}
        self.ticker_resolver.run(context)
        self.stock_analyst.run(context)
        self.expense_advisor.run(context)

        print("\n--- Smart Investment Recommendation or Business Plan ---")
        print(context["advice"])
        return context["advice"]

# --- Run the Application ---

if __name__ == "__main__":
    print("Welcome to the Smart Financial Agent!")
    user_query = input("Ask your financial or business question (e.g., Should I invest in Nvidia? or Help me plan a bakery business): ")
    app = FinancialAgenticApp()
    app.run(user_query)
