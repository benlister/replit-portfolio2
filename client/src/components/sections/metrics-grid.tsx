interface Metric {
  value: string;
  label: string;
}

interface MetricsGridProps {
  metrics: Metric[];
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className="text-center p-6 bg-white rounded-lg shadow-sm border"
        >
          <div className="text-4xl md:text-5xl font-bold mb-3 text-primary">
            {metric.value}
          </div>
          <div className="text-muted-foreground">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
