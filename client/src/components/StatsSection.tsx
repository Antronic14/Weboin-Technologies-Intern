import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const stats = [
  { number: 20, label: "Happy Clients", suffix: "+" },
  { number: 50, label: "Projects Completed", suffix: "+" },
  { number: 5, label: "Years Experience", suffix: "+" },
  { number: 10, label: "Team Members", suffix: "+" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-heading font-bold text-5xl sm:text-6xl text-primary">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover-elevate transition-all"
              data-testid={`card-stat-${index}`}
            >
              <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
