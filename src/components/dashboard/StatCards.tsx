import { TabType } from '@/types';

interface StatCardsProps {
  activeTab: TabType;
}

function formatAmount(value: number): string {
  return value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

// Trend badge component
function TrendBadge({ pct, up }: { pct: string; up: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-semibold leading-none ${
        up ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
      }`}
    >
      {up ? '↗' : '↙'} {pct}
    </span>
  );
}

// Icons
const BarChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="9" width="4" height="12" rx="1" />
    <rect x="10" y="5" width="4" height="16" rx="1" />
    <rect x="17" y="1" width="4" height="20" rx="1" />
  </svg>
);
const TrendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const WalletIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
  </svg>
);
const DollarIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const GridIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);
const ArrowUpIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);
const DocumentIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

// One neutral card shell for every stat, everywhere. The only thing that
// varies between cards is the icon chip's colour — a small, deliberate
// accent instead of the whole card competing for attention. This is the
// same restrained white-card-plus-accent language the chart panels in
// RiskUnitOverview already use; stat cards were the one place that hadn't
// caught up to it yet.
function StatCard({
  icon,
  iconBg,
  iconColor,
  value,
  label,
  date,
  trendPct,
  trendUp,
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  value: string;
  label: string;
  date?: string;
  trendPct?: string;
  trendUp?: boolean;
}) {
  return (
    <div className="flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col justify-between min-h-[90px] min-w-[150px]">
      <div className="flex items-start justify-between">
        <div className={`rounded-lg p-2 ${iconBg} ${iconColor}`}>{icon}</div>
        {trendPct && trendPct !== '—' && <TrendBadge pct={trendPct} up={!!trendUp} />}
      </div>
      <div>
        <div className="num text-xl font-bold leading-tight text-slate-900">{value}</div>
        <div className="mt-1 pt-1 border-t border-slate-100 text-[10px] leading-tight text-slate-500">
          {label}
          {date && <span className="text-slate-400"> · {date}</span>}
        </div>
      </div>
    </div>
  );
}

// Classified / Principal Recovery / Suspects — 2 card layout
function ClassifiedStatCards() {
  return (
    <div className="px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex gap-4">
        <StatCard
          icon={<BarChartIcon />}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
          value="$88,176.8"
          label="Current balance as of 21/01/2026"
          trendPct="4.7%"
          trendUp
        />
        <StatCard
          icon={<TrendIcon />}
          iconBg="bg-indigo-50"
          iconColor="text-indigo-600"
          value="$92,217.8"
          label="Projected balance as of 21/01/2026"
          trendPct="4.7%"
          trendUp
        />
      </div>
    </div>
  );
}

// Non-Accrual — 7 card layout
interface NonAccrualCard {
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  date: string;
  trendPct: string;
  trendUp: boolean;
}

function NonAccrualStatCards() {
  const cards: NonAccrualCard[] = [
    {
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      icon: <WalletIcon />,
      value: `$${formatAmount(88176.8)}`,
      label: 'Previous quarter end balance',
      date: 'as of 12/31/2025',
      trendPct: '—',
      trendUp: true,
    },
    {
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-700',
      icon: <DollarIcon />,
      value: `$${formatAmount(92217.8)}`,
      label: 'Current balance',
      date: 'as of 21/01/2026',
      trendPct: '4.6%',
      trendUp: true,
    },
    {
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      icon: <TrendIcon />,
      value: `$${formatAmount(98217.8)}`,
      label: 'Projected balance',
      date: 'as of 21/01/2026',
      trendPct: '6.5%',
      trendUp: true,
    },
    {
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      icon: <GridIcon />,
      value: `$${formatAmount(177651.6)}`,
      label: 'Previous qtr + Total Reserves',
      date: 'as of 12/31/2025',
      trendPct: '—',
      trendUp: true,
    },
    {
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-700',
      icon: <BriefcaseIcon />,
      value: `$${formatAmount(79651.6)}`,
      label: 'Projected Total Reserves',
      date: 'as of 21/01/2026',
      trendPct: '1.2%',
      trendUp: false,
    },
    {
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      icon: <ArrowUpIcon />,
      value: '$123.45',
      label: 'Total Gross Charge-Offs',
      date: 'as of 21/01/2026',
      trendPct: '0.3%',
      trendUp: true,
    },
    {
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-700',
      icon: <DocumentIcon />,
      value: '$123.45',
      label: 'Total Net Charge-Offs',
      date: 'as of 21/01/2026',
      trendPct: '0.3%',
      trendUp: true,
    },
  ];

  return (
    <div className="px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex gap-3 overflow-x-auto pb-1">
        {cards.map((card, i) => (
          <div key={i} className="flex-shrink-0" style={{ minWidth: '160px' }}>
            <StatCard
              icon={card.icon}
              iconBg={card.iconBg}
              iconColor={card.iconColor}
              value={card.value}
              label={card.label}
              date={card.date}
              trendPct={card.trendPct}
              trendUp={card.trendUp}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StatCards({ activeTab }: StatCardsProps) {
  if (activeTab === 'non-accrual') {
    return <NonAccrualStatCards />;
  }
  return <ClassifiedStatCards />;
}
