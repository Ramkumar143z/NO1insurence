"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ShieldCheck, TrendingUp, Home, PiggyBank, Target } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

function SIPCalculator() {
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const invested = amount * months;
  const returns = futureValue - invested;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-text">Monthly Investment (₹)</label>
        <input type="range" min="500" max="100000" step="500" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">₹{amount.toLocaleString("en-IN")}</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Expected Return (% p.a.)</label>
        <input type="range" min="1" max="30" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{rate}%</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Time Period (Years)</label>
        <input type="range" min="1" max="40" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{years} yrs</p>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
        <div className="text-center">
          <p className="text-xs text-muted">Invested</p>
          <p className="text-sm font-bold text-dark-navy">{formatCurrency(invested)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted">Returns</p>
          <p className="text-sm font-bold text-green">{formatCurrency(returns)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted">Total Value</p>
          <p className="text-sm font-bold text-primary">{formatCurrency(futureValue)}</p>
        </div>
      </div>
    </div>
  );
}

function EMICalculator() {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi = amount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayable = emi * months;
  const totalInterest = totalPayable - amount;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-text">Loan Amount (₹)</label>
        <input type="range" min="100000" max="10000000" step="100000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{formatCurrency(amount)}</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Interest Rate (% p.a.)</label>
        <input type="range" min="1" max="20" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{rate}%</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Tenure (Years)</label>
        <input type="range" min="1" max="30" step="1" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{tenure} yrs</p>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
        <div className="text-center">
          <p className="text-xs text-muted">Monthly EMI</p>
          <p className="text-sm font-bold text-primary">{formatCurrency(emi)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted">Total Interest</p>
          <p className="text-sm font-bold text-amber-600">{formatCurrency(totalInterest)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted">Total Payable</p>
          <p className="text-sm font-bold text-dark-navy">{formatCurrency(totalPayable)}</p>
        </div>
      </div>
    </div>
  );
}

function LifeInsuranceCalculator() {
  const [income, setIncome] = useState(600000);
  const [age, setAge] = useState(30);
  const [existingCover, setExistingCover] = useState(0);

  const workingYears = 60 - age;
  const hlv = income * workingYears * 0.7;
  const recommended = Math.max(hlv - existingCover, 500000);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-text">Annual Income (₹)</label>
        <input type="range" min="180000" max="50000000" step="100000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{formatCurrency(income)}</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Current Age</label>
        <input type="range" min="18" max="65" step="1" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{age} yrs</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Existing Cover (₹)</label>
        <input type="range" min="0" max="50000000" step="500000" value={existingCover} onChange={(e) => setExistingCover(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{formatCurrency(existingCover)}</p>
      </div>
      <div className="pt-3 border-t border-border text-center">
        <p className="text-xs text-muted mb-1">Recommended Life Cover</p>
        <p className="text-2xl font-heading font-bold text-primary">{formatCurrency(recommended)}</p>
      </div>
    </div>
  );
}

function TaxCalculator() {
  const [income, setIncome] = useState(900000);
  const [investment80C, setInvestment80C] = useState(150000);
  const [healthPremium, setHealthPremium] = useState(25000);

  const taxableIncome = Math.max(0, income - investment80C - healthPremium);
  let tax = 0;
  if (taxableIncome > 1200000) tax = (taxableIncome - 1200000) * 0.3 + 150000;
  else if (taxableIncome > 900000) tax = (taxableIncome - 900000) * 0.2 + 60000;
  else if (taxableIncome > 600000) tax = (taxableIncome - 600000) * 0.1 + 15000;
  else if (taxableIncome > 300000) tax = (taxableIncome - 300000) * 0.05;
  const taxSaved = (income - taxableIncome) * 0.3;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-text">Annual Income (₹)</label>
        <input type="range" min="300000" max="50000000" step="100000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{formatCurrency(income)}</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">80C Investments (₹)</label>
        <input type="range" min="0" max="150000" step="5000" value={investment80C} onChange={(e) => setInvestment80C(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{formatCurrency(investment80C)}</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Health Insurance Premium (₹)</label>
        <input type="range" min="0" max="50000" step="1000" value={healthPremium} onChange={(e) => setHealthPremium(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{formatCurrency(healthPremium)}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
        <div className="text-center">
          <p className="text-xs text-muted">Tax Payable</p>
          <p className="text-sm font-bold text-amber-600">{formatCurrency(tax)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted">Estimated Tax Saved</p>
          <p className="text-sm font-bold text-green">{formatCurrency(taxSaved)}</p>
        </div>
      </div>
    </div>
  );
}

function RetirementCalculator() {
  const [age, setAge] = useState(30);
  const [monthlySave, setMonthlySave] = useState(10000);
  const [currentCorpus, setCurrentCorpus] = useState(500000);
  const [returnRate, setReturnRate] = useState(12);

  const retirementAge = 60;
  const monthsLeft = (retirementAge - age) * 12;
  const monthlyRate = returnRate / 12 / 100;
  const sipValue = monthlySave * ((Math.pow(1 + monthlyRate, monthsLeft) - 1) / monthlyRate) * (1 + monthlyRate);
  const corpusGrowth = currentCorpus * Math.pow(1 + returnRate / 100, retirementAge - age);
  const totalCorpus = sipValue + corpusGrowth;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-text">Current Age</label>
        <input type="range" min="18" max="55" step="1" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{age} yrs</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Monthly Savings (₹)</label>
        <input type="range" min="1000" max="200000" step="1000" value={monthlySave} onChange={(e) => setMonthlySave(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{formatCurrency(monthlySave)}</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Current Retirement Corpus (₹)</label>
        <input type="range" min="0" max="50000000" step="500000" value={currentCorpus} onChange={(e) => setCurrentCorpus(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{formatCurrency(currentCorpus)}</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Expected Return (% p.a.)</label>
        <input type="range" min="1" max="20" step="0.5" value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{returnRate}%</p>
      </div>
      <div className="pt-3 border-t border-border text-center">
        <p className="text-xs text-muted mb-1">Estimated Retirement Corpus at Age 60</p>
        <p className="text-2xl font-heading font-bold text-primary">{formatCurrency(totalCorpus)}</p>
      </div>
    </div>
  );
}

function GoalPlanner() {
  const [target, setTarget] = useState(10000000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const monthlyInvestment = target * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1) / (1 + monthlyRate);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-text">Target Amount (₹)</label>
        <input type="range" min="100000" max="50000000" step="100000" value={target} onChange={(e) => setTarget(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{formatCurrency(target)}</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Time Horizon (Years)</label>
        <input type="range" min="1" max="30" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{years} yrs</p>
      </div>
      <div>
        <label className="text-sm font-medium text-text">Expected Return (% p.a.)</label>
        <input type="range" min="1" max="25" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-right text-sm font-bold text-primary">{rate}%</p>
      </div>
      <div className="pt-3 border-t border-border text-center">
        <p className="text-xs text-muted mb-1">Monthly Investment Needed</p>
        <p className="text-2xl font-heading font-bold text-primary">{formatCurrency(monthlyInvestment)}</p>
      </div>
    </div>
  );
}

const calculatorTabs = [
  { id: "sip", label: "SIP", icon: TrendingUp, component: SIPCalculator },
  { id: "emi", label: "EMI", icon: Home, component: EMICalculator },
  { id: "life", label: "Life Insurance", icon: ShieldCheck, component: LifeInsuranceCalculator },
  { id: "tax", label: "Tax Saving", icon: PiggyBank, component: TaxCalculator },
  { id: "retirement", label: "Retirement", icon: Calculator, component: RetirementCalculator },
  { id: "goal", label: "Goal Planner", icon: Target, component: GoalPlanner },
];

export default function CalculatorsHub() {
  const [active, setActive] = useState("sip");
  const ActiveComponent = calculatorTabs.find((t) => t.id === active)?.component || SIPCalculator;

  return (
    <section id="calculators" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-4">
            Financial Calculators
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Plan your finances with our interactive calculators
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {calculatorTabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActive(tab.id);
                  }
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  active === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white border border-border text-text hover:border-primary/30"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </div>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-border p-6 lg:p-8 shadow-sm"
          >
            <ActiveComponent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
